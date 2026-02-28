import { env } from "~/env";
import type { Prisma, PrismaClient } from "../../../../generated/prisma";
import {
  DEFAULT_FIELD_TAXONOMY,
  normalizeField,
} from "~/server/services/idea/fields";
import {
  embedManyTextsWithGemini,
  generateIdeasWithGemini,
} from "~/server/services/idea/gemini";
import {
  asVector,
  averageVectors,
  chunkText,
  cosineSimilarity,
  updatePreferenceVector,
} from "~/server/services/idea/vector";

const toJsonVector = (vector: number[]): Prisma.InputJsonValue =>
  vector as unknown as Prisma.InputJsonValue;

const stackRefreshSeconds =
  env.NODE_ENV === "production"
    ? env.STACK_REFRESH_PROD_SECONDS
    : env.STACK_REFRESH_TEST_SECONDS;

const randomStackSize = () => {
  const min = Math.min(env.STACK_SIZE_MIN, env.STACK_SIZE_MAX);
  const max = Math.max(env.STACK_SIZE_MIN, env.STACK_SIZE_MAX);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getUserFieldLabels = async (db: PrismaClient, userId: string) => {
  const selections = await db.userFieldSelection.findMany({
    where: { userId },
    include: { field: true },
  });

  return selections.map((selection) => selection.field.label);
};

const computeUserPreferenceVector = async (fieldLabels: string[]) => {
  const embeddings = await embedManyTextsWithGemini(fieldLabels);
  return averageVectors(embeddings);
};

const defaultTaxonomyLower = new Set(
  DEFAULT_FIELD_TAXONOMY.map((item) => item.toLowerCase()),
);

const ensureFieldCatalog = async (db: PrismaClient, labels: string[]) => {
  const normalized = Array.from(
    new Set(labels.map((label) => normalizeField(label)).filter(Boolean)),
  );

  if (normalized.length === 0) {
    return;
  }

  const existing = await db.fieldCatalog.findMany({
    where: { slug: { in: normalized } },
    select: { slug: true },
  });

  const existingSlugs = new Set(existing.map((row) => row.slug));
  const missing = normalized.filter((label) => !existingSlugs.has(label));

  if (missing.length > 0) {
    await db.fieldCatalog.createMany({
      data: missing.map((label) => ({
        slug: label,
        label,
        isCustom: !defaultTaxonomyLower.has(label),
      })),
    });
  }
};

export const ensureDefaultFields = async (db: PrismaClient) => {
  await ensureFieldCatalog(db, [...DEFAULT_FIELD_TAXONOMY]);
};

export const saveUserInterestsAndRecompute = async (params: {
  db: PrismaClient;
  userId: string;
  fields: string[];
}) => {
  const { db, userId, fields } = params;

  await ensureFieldCatalog(db, fields);

  const normalized = Array.from(
    new Set(fields.map((value) => normalizeField(value)).filter(Boolean)),
  );

  const fieldRows = await db.fieldCatalog.findMany({
    where: { slug: { in: normalized } },
  });

  await db.$transaction([
    db.userFieldSelection.deleteMany({ where: { userId } }),
    db.userFieldSelection.createMany({
      data: fieldRows.map((field) => ({ userId, fieldId: field.id })),
    }),
  ]);

  const vector = await computeUserPreferenceVector(
    fieldRows.map((field) => field.label),
  );

  await db.user.update({
    where: { id: userId },
    data: {
      onboardingCompleted: true,
      preferenceVector: toJsonVector(vector),
    },
  });

  await db.preferenceUpdateLog.create({
    data: {
      userId,
      reason: "onboarding",
      updatedVector: toJsonVector(vector),
    },
  });

  return vector;
};

const createIdeaWithEmbeddings = async (params: {
  db: PrismaClient;
  title: string;
  description: string;
  fieldLabel: string;
}) => {
  const { db, title, description, fieldLabel } = params;
  const slug = normalizeField(fieldLabel);

  const field = await db.fieldCatalog.findUnique({ where: { slug } });
  const chunks = chunkText(description, env.EMBED_CHUNK_SIZE);
  const textsForEmbeddings = [
    title,
    ...chunks.map((chunk) => `${title}\n${chunk}`),
  ];
  const vectors = await embedManyTextsWithGemini(textsForEmbeddings);
  const ideaVector = averageVectors(vectors);

  const idea = await db.idea.create({
    data: {
      title,
      description,
      fieldId: field?.id,
      vector: toJsonVector(ideaVector),
      chunks: {
        create: chunks.map((chunk, index) => ({
          chunkIndex: index,
          content: chunk,
          vector: toJsonVector(vectors[index + 1] ?? []),
        })),
      },
    },
  });

  return {
    idea,
    vector: ideaVector,
  };
};

const getUserPreferenceVector = async (db: PrismaClient, userId: string) => {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { preferenceVector: true },
  });

  return asVector(user?.preferenceVector);
};

export const getOrCreateActiveStack = async (params: {
  db: PrismaClient;
  userId: string;
  forceRefresh?: boolean;
}) => {
  const { db, userId, forceRefresh = false } = params;

  const active = await db.ideaStack.findFirst({
    where: {
      userId,
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: "desc" },
    include: {
      items: {
        orderBy: { position: "asc" },
        include: { idea: true },
      },
    },
  });

  if (active && !forceRefresh) {
    return active;
  }

  const fields = await getUserFieldLabels(db, userId);
  if (fields.length === 0) {
    throw new Error(
      "Please select at least one field before generating ideas.",
    );
  }

  const preferenceVector = await getUserPreferenceVector(db, userId);
  const preferenceSummary =
    fields.length > 0
      ? `Preferred fields: ${fields.join(", ")}. Current vector dimensions: ${
          preferenceVector.length
        }.`
      : "No explicit preferences yet.";

  const count = randomStackSize();
  const generatedIdeas = await generateIdeasWithGemini({
    fields,
    count,
    userPreferenceSummary: preferenceSummary,
  });

  if (generatedIdeas.length === 0) {
    throw new Error("Idea generation returned no candidates.");
  }

  const createdIdeas = [] as Array<{ ideaId: string; score: number }>;

  for (const generatedIdea of generatedIdeas) {
    const { idea, vector } = await createIdeaWithEmbeddings({
      db,
      title: generatedIdea.title,
      description: generatedIdea.description,
      fieldLabel: generatedIdea.field,
    });

    const score = cosineSimilarity(preferenceVector, vector);
    createdIdeas.push({
      ideaId: idea.id,
      score,
    });
  }

  const rankedIdeaIds = createdIdeas
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.ideaId)
    .slice(0, count);

  const expiresAt = new Date(Date.now() + stackRefreshSeconds * 1000);

  const stack = await db.ideaStack.create({
    data: {
      userId,
      expiresAt,
      items: {
        create: rankedIdeaIds.map((ideaId, index) => ({
          ideaId,
          position: index,
        })),
      },
    },
    include: {
      items: {
        orderBy: { position: "asc" },
        include: { idea: true },
      },
    },
  });

  return stack;
};

export const registerSwipe = async (params: {
  db: PrismaClient;
  userId: string;
  stackId: string;
  ideaId: string;
  direction: "left" | "right" | "top";
}) => {
  const { db, userId, stackId, ideaId, direction } = params;

  const actionMap = {
    left: {
      action: "DISLIKE",
      delta: env.SWIPE_WEIGHT_LEFT,
      favorite: false,
    },
    right: {
      action: "LIKE_AND_FAVE",
      delta: env.SWIPE_WEIGHT_RIGHT,
      favorite: true,
    },
    top: {
      action: "FAVE_ONLY",
      delta: env.SWIPE_WEIGHT_TOP,
      favorite: true,
    },
  } as const;

  const actionConfig = actionMap[direction];

  const [idea, user] = await Promise.all([
    db.idea.findUnique({ where: { id: ideaId }, select: { vector: true } }),
    db.user.findUnique({
      where: { id: userId },
      select: { preferenceVector: true },
    }),
  ]);

  if (!idea) {
    throw new Error("Idea not found");
  }

  const previousVector = asVector(user?.preferenceVector);
  const ideaVector = asVector(idea.vector);
  const updatedVector = updatePreferenceVector(
    previousVector,
    ideaVector,
    actionConfig.delta,
    env.PREF_LEARNING_RATE,
  );

  await db.$transaction(async (tx) => {
    await tx.swipeEvent.create({
      data: {
        userId,
        ideaId,
        stackId,
        action: actionConfig.action,
        scoreDelta: actionConfig.delta,
      },
    });

    if (actionConfig.favorite) {
      await tx.favorite.upsert({
        where: {
          userId_ideaId: {
            userId,
            ideaId,
          },
        },
        update: {},
        create: {
          userId,
          ideaId,
        },
      });
    }

    await tx.user.update({
      where: { id: userId },
      data: {
        preferenceVector: toJsonVector(updatedVector),
      },
    });

    await tx.preferenceUpdateLog.create({
      data: {
        userId,
        reason: `swipe:${direction}`,
        previousVector: toJsonVector(previousVector),
        updatedVector: toJsonVector(updatedVector),
      },
    });
  });

  return {
    updatedVector,
  };
};

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
  blendVectors,
  chunkText,
  normalizeVector,
  vectorMagnitude,
} from "~/server/services/idea/vector";
import {
  applyLazyDecayToUserTags,
  getUserTagProfileSummary,
  initializeOrRefreshUserInterestProfile,
  reinforceUserTagsFromIdea,
  seedUserTagPreferences,
  updateLatentProfileFromInteraction,
} from "~/server/services/idea/profile";
import {
  buildCandidateTagsFromIdea,
  ensureTagsForLabels,
  mapTagWeights,
} from "~/server/services/idea/tags";
import { rankHybridIdeas } from "~/server/services/idea/ranking";
import {
  rewardFromSwipeDirection,
  type SwipeDirection,
} from "~/server/services/idea/interactions";

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
  await ensureTagsForLabels({
    db,
    labels: [...DEFAULT_FIELD_TAXONOMY],
    source: "SYSTEM",
  });
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

  const mappedTags = await ensureTagsForLabels({
    db,
    labels: fieldRows.map((field) => field.label),
    source: "SYSTEM",
  });

  await seedUserTagPreferences({
    db,
    userId,
    tags: mappedTags,
    rootSeedWeight: 0.8,
  });

  await initializeOrRefreshUserInterestProfile({
    db,
    userId,
    latentVector: vector,
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

  const candidateTags = buildCandidateTagsFromIdea({
    title,
    description,
    fieldLabel,
    maxTags: 5,
  });

  const canonicalTags = await ensureTagsForLabels({
    db,
    labels: candidateTags,
    source: "MODEL",
  });

  const weightedTags = mapTagWeights(canonicalTags);

  for (const weightedTag of weightedTags) {
    const tag = canonicalTags.find((item) => item.slug === weightedTag.slug);
    if (!tag) {
      continue;
    }

    await db.ideaTag.upsert({
      where: {
        ideaId_tagId: {
          ideaId: idea.id,
          tagId: tag.id,
        },
      },
      update: {
        weight: weightedTag.weight,
        sourceConfidence: 0.8,
      },
      create: {
        ideaId: idea.id,
        tagId: tag.id,
        weight: weightedTag.weight,
        sourceConfidence: 0.8,
      },
    });
  }

  return {
    idea,
    vector: ideaVector,
    tags: canonicalTags,
  };
};

const getUserPreferenceVector = async (db: PrismaClient, userId: string) => {
  const profile = await db.userInterestProfile.findUnique({
    where: { userId },
    select: { latentVector: true },
  });

  if (profile?.latentVector) {
    return asVector(profile.latentVector);
  }

  const user = await db.user.findUnique({
    where: { id: userId },
    select: { preferenceVector: true },
  });

  return asVector(user?.preferenceVector);
};

export type StackIdeaProgress = {
  stackId: string;
  stackItemId: string;
  position: number;
  total: number;
  idea: {
    id: string;
    title: string;
    description: string;
    fieldId: string | null;
    createdAt: Date;
  };
};

export const generateFreshStack = async (params: {
  db: PrismaClient;
  userId: string;
  onIdeaPersisted?: (progress: StackIdeaProgress) => Promise<void> | void;
}) => {
  const { db, userId, onIdeaPersisted } = params;

  const fields = await getUserFieldLabels(db, userId);
  if (fields.length === 0) {
    throw new Error(
      "Please select at least one field before generating ideas.",
    );
  }

  const preferenceVector = await getUserPreferenceVector(db, userId);
  const magnitude = vectorMagnitude(preferenceVector);
  const vectorPreview = preferenceVector
    .slice(0, 8)
    .map((value) => value.toFixed(3))
    .join(", ");

  const preferenceSummary =
    fields.length > 0
      ? `Preferred fields: ${fields.join(", ")}. Current vector dimensions: ${
          preferenceVector.length
        }. Vector magnitude: ${magnitude.toFixed(3)}.${
          vectorPreview.length > 0 ? ` Vector preview: [${vectorPreview}].` : ""
        }`
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

  const expiresAt = new Date(Date.now() + stackRefreshSeconds * 1000);

  const stack = await db.ideaStack.create({
    data: {
      userId,
      expiresAt,
    },
    select: {
      id: true,
    },
  });

  const createdCandidates = [] as Array<{
    idea: {
      id: string;
      title: string;
      description: string;
      fieldId: string | null;
      createdAt: Date;
      vector: number[];
    };
    tags: Array<{ tagId: string; weight: number }>;
  }>;

  for (const generatedIdea of generatedIdeas) {
    const { idea, vector: ideaVector } = await createIdeaWithEmbeddings({
      db,
      title: generatedIdea.title,
      description: generatedIdea.description,
      fieldLabel: generatedIdea.field,
    });

    const ideaTags = await db.ideaTag.findMany({
      where: { ideaId: idea.id },
      select: { tagId: true, weight: true },
    });

    createdCandidates.push({
      idea: {
        ...idea,
        vector: ideaVector,
      },
      tags: ideaTags,
    });
  }

  const historicalIdeas = await db.idea.findMany({
    where: {
      swipeEvents: {
        none: {
          userId,
        },
      },
    },
    orderBy: { createdAt: "desc" },
    take: Math.max(count, 12),
    include: {
      tags: {
        select: {
          tagId: true,
          weight: true,
        },
      },
    },
  });

  const allCandidatesMap = new Map<
    string,
    {
      idea: {
        id: string;
        title: string;
        description: string;
        fieldId: string | null;
        createdAt: Date;
        vector: number[];
      };
      tags: Array<{ tagId: string; weight: number }>;
    }
  >();

  for (const candidate of createdCandidates) {
    allCandidatesMap.set(candidate.idea.id, candidate);
  }

  for (const idea of historicalIdeas) {
    if (allCandidatesMap.has(idea.id)) {
      continue;
    }

    allCandidatesMap.set(idea.id, {
      idea: {
        id: idea.id,
        title: idea.title,
        description: idea.description,
        fieldId: idea.fieldId,
        createdAt: idea.createdAt,
        vector: asVector(idea.vector),
      },
      tags: idea.tags,
    });
  }

  await applyLazyDecayToUserTags({ db, userId });
  const userTagProfile = await getUserTagProfileSummary({ db, userId });
  const userTagWeightMap = new Map(
    userTagProfile.topInterests.map((entry) => [entry.tagId, entry.weight]),
  );
  const userSeenTagIds = new Set(
    userTagProfile.topInterests.map((entry) => entry.tagId),
  );

  const rankedIdeas = rankHybridIdeas({
    userLatentVector: normalizeVector(preferenceVector),
    userTagWeights: userTagWeightMap,
    userSeenTagIds,
    candidates: Array.from(allCandidatesMap.values()),
  }).slice(0, count);

  for (let index = 0; index < rankedIdeas.length; index += 1) {
    const ranked = rankedIdeas[index]!;
    const idea = ranked.idea;

    const stackItem = await db.ideaStackItem.create({
      data: {
        stackId: stack.id,
        ideaId: idea.id,
        position: index,
      },
      select: {
        id: true,
      },
    });

    await db.recommendationImpression.create({
      data: {
        userId,
        ideaId: idea.id,
        rank: index,
        explicitScore: ranked.explicitScore,
        latentScore: ranked.latentScore,
        explorationScore: ranked.explorationScore,
        finalScore: ranked.finalScore,
      },
    });

    await onIdeaPersisted?.({
      stackId: stack.id,
      stackItemId: stackItem.id,
      position: index,
      total: rankedIdeas.length,
      idea: {
        id: idea.id,
        title: idea.title,
        description: idea.description,
        fieldId: idea.fieldId,
        createdAt: idea.createdAt,
      },
    });
  }

  return db.ideaStack.findUniqueOrThrow({
    where: { id: stack.id },
    include: {
      items: {
        orderBy: { position: "asc" },
        include: { idea: true },
      },
    },
  });
};

export const getOrCreateActiveStack = async (params: {
  db: PrismaClient;
  userId: string;
  forceRefresh?: boolean;
}) => {
  const { db, userId, forceRefresh = false } = params;

  if (forceRefresh) {
    return generateFreshStack({ db, userId });
  }

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

  if (active) {
    return active;
  }

  return generateFreshStack({ db, userId });
};

export const registerSwipe = async (params: {
  db: PrismaClient;
  userId: string;
  stackId: string;
  ideaId: string;
  direction: SwipeDirection;
  dwellTimeMs?: number;
}) => {
  const { db, userId, stackId, ideaId, direction, dwellTimeMs } = params;

  const interaction = rewardFromSwipeDirection(direction, dwellTimeMs);

  const [idea, user] = await Promise.all([
    db.idea.findUnique({
      where: { id: ideaId },
      select: {
        vector: true,
        tags: {
          select: {
            tagId: true,
            weight: true,
          },
        },
      },
    }),
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
  let updatedVector = blendVectors(
    previousVector,
    ideaVector,
    interaction.reward,
    env.PREF_LEARNING_RATE,
  );

  await db.$transaction(async (tx) => {
    await tx.swipeEvent.create({
      data: {
        userId,
        ideaId,
        stackId,
        action: interaction.swipeAction,
        scoreDelta: interaction.reward,
      },
    });

    if (interaction.shouldFavorite) {
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

    await tx.ideaInteraction.create({
      data: {
        userId,
        ideaId,
        interactionType: interaction.interactionType,
        reward: interaction.reward,
        dwellTimeMs,
        context: {
          source: "swipe",
          stackId,
          direction,
        } as Prisma.InputJsonValue,
      },
    });

    await applyLazyDecayToUserTags({ db: tx, userId });
    await reinforceUserTagsFromIdea({
      db: tx,
      userId,
      reward: interaction.reward,
      ideaTags: idea.tags,
    });

    const nextLatent = await updateLatentProfileFromInteraction({
      db: tx,
      userId,
      reward: interaction.reward,
      ideaVector,
    });
    updatedVector = nextLatent;

    await tx.user.update({
      where: { id: userId },
      data: {
        preferenceVector: toJsonVector(nextLatent),
      },
    });

    await tx.preferenceUpdateLog.create({
      data: {
        userId,
        reason: `interaction:${interaction.interactionType}`,
        previousVector: toJsonVector(previousVector),
        updatedVector: toJsonVector(nextLatent),
      },
    });
  });

  return {
    updatedVector,
  };
};

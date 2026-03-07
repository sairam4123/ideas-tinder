import { Prisma, type PrismaClient } from "../../../../generated/prisma";
import {
  applyDailyDecay,
  asVector,
  blendVectors,
  boundedWeight,
  normalizeVector,
} from "~/server/services/idea/vector";

type DbClient = Omit<
  PrismaClient,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$extends"
>;

export const hybridConfig = {
  rankingWeights: {
    explicit: 0.45,
    latent: 0.45,
    exploration: 0.1,
  },
  reinforcement: {
    learningRate: 0.08,
    neighborPropagation: 0.2,
    parentPropagation: 0.2,
    dailyDecay: 0.995,
    onboardingSeedDailyDecay: 0.985,
    latentAlpha: 0.1,
  },
  tagControl: {
    maxTagsPerIdea: 5,
    maxActiveTagsPerUser: 200,
  },
  exploration: {
    exploitPercent: 0.85,
    explorePercent: 0.15,
  },
} as const;

const daysBetween = (from: Date, to: Date) =>
  Math.max(0, (to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));

const mergeWeights = (explicitWeight: number, implicitWeight: number) =>
  boundedWeight(explicitWeight + implicitWeight);

export const initializeOrRefreshUserInterestProfile = async (params: {
  db: DbClient;
  userId: string;
  latentVector: number[];
}) => {
  const { db, userId, latentVector } = params;
  const normalized = normalizeVector(latentVector);

  await db.userInterestProfile.upsert({
    where: { userId },
    update: { latentVector: normalized as Prisma.InputJsonValue },
    create: {
      userId,
      latentVector: normalized as Prisma.InputJsonValue,
    },
  });
};

export const seedUserTagPreferences = async (params: {
  db: DbClient;
  userId: string;
  tags: Array<{ id: string }>;
  rootSeedWeight?: number;
}) => {
  const { db, userId, tags, rootSeedWeight = 0.8 } = params;

  if (tags.length === 0) {
    return;
  }

  const now = new Date();

  for (const tag of tags) {
    const explicitWeight = rootSeedWeight;
    await db.userTagPreference.upsert({
      where: {
        userId_tagId: {
          userId,
          tagId: tag.id,
        },
      },
      update: {
        explicitWeight,
        weight: mergeWeights(explicitWeight, 0),
        lastReinforcedAt: now,
      },
      create: {
        userId,
        tagId: tag.id,
        explicitWeight,
        implicitWeight: 0,
        weight: mergeWeights(explicitWeight, 0),
        lastReinforcedAt: now,
      },
    });
  }
};

export const applyLazyDecayToUserTags = async (params: {
  db: DbClient;
  userId: string;
  now?: Date;
}) => {
  const { db, userId, now = new Date() } = params;

  const rows = await db.userTagPreference.findMany({
    where: { userId },
  });

  for (const row of rows) {
    const elapsedDays = daysBetween(row.lastReinforcedAt, now);
    if (elapsedDays <= 0) {
      continue;
    }

    const nextExplicit = applyDailyDecay(
      row.explicitWeight,
      elapsedDays,
      hybridConfig.reinforcement.onboardingSeedDailyDecay,
    );
    const nextImplicit = applyDailyDecay(
      row.implicitWeight,
      elapsedDays,
      hybridConfig.reinforcement.dailyDecay,
    );

    await db.userTagPreference.update({
      where: { id: row.id },
      data: {
        explicitWeight: nextExplicit,
        implicitWeight: nextImplicit,
        weight: mergeWeights(nextExplicit, nextImplicit),
        lastReinforcedAt: now,
      },
    });
  }
};

export const reinforceUserTagsFromIdea = async (params: {
  db: DbClient;
  userId: string;
  reward: number;
  ideaTags: Array<{ tagId: string; weight: number }>;
  now?: Date;
}) => {
  const { db, userId, reward, ideaTags, now = new Date() } = params;

  const eta = hybridConfig.reinforcement.learningRate;

  for (const ideaTag of ideaTags) {
    const existing = await db.userTagPreference.findUnique({
      where: {
        userId_tagId: {
          userId,
          tagId: ideaTag.tagId,
        },
      },
    });

    const implicitDelta = eta * reward * ideaTag.weight;
    const nextImplicit = boundedWeight(
      (existing?.implicitWeight ?? 0) + implicitDelta,
    );
    const explicitWeight = existing?.explicitWeight ?? 0;

    await db.userTagPreference.upsert({
      where: {
        userId_tagId: {
          userId,
          tagId: ideaTag.tagId,
        },
      },
      update: {
        implicitWeight: nextImplicit,
        weight: mergeWeights(explicitWeight, nextImplicit),
        lastReinforcedAt: now,
      },
      create: {
        userId,
        tagId: ideaTag.tagId,
        explicitWeight,
        implicitWeight: nextImplicit,
        weight: mergeWeights(explicitWeight, nextImplicit),
        lastReinforcedAt: now,
      },
    });
  }
};

export const updateLatentProfileFromInteraction = async (params: {
  db: DbClient;
  userId: string;
  reward: number;
  ideaVector: number[];
}) => {
  const { db, userId, reward, ideaVector } = params;

  const profile = await db.userInterestProfile.findUnique({
    where: { userId },
  });

  const currentLatent = asVector(profile?.latentVector);
  const nextLatent = blendVectors(
    currentLatent,
    ideaVector,
    reward,
    hybridConfig.reinforcement.latentAlpha,
  );

  const positiveCentroid =
    reward > 0
      ? blendVectors(asVector(profile?.positiveCentroid), ideaVector, 1, 0.2)
      : asVector(profile?.positiveCentroid);

  const negativeCentroid =
    reward < 0
      ? blendVectors(asVector(profile?.negativeCentroid), ideaVector, 1, 0.2)
      : asVector(profile?.negativeCentroid);

  await db.userInterestProfile.upsert({
    where: { userId },
    update: {
      latentVector: nextLatent as Prisma.InputJsonValue,
      positiveCentroid: positiveCentroid.length
        ? (positiveCentroid as Prisma.InputJsonValue)
        : Prisma.JsonNull,
      negativeCentroid: negativeCentroid.length
        ? (negativeCentroid as Prisma.InputJsonValue)
        : Prisma.JsonNull,
    },
    create: {
      userId,
      latentVector: nextLatent as Prisma.InputJsonValue,
      positiveCentroid: positiveCentroid.length
        ? (positiveCentroid as Prisma.InputJsonValue)
        : Prisma.JsonNull,
      negativeCentroid: negativeCentroid.length
        ? (negativeCentroid as Prisma.InputJsonValue)
        : Prisma.JsonNull,
    },
  });

  await db.user.update({
    where: { id: userId },
    data: {
      preferenceVector: nextLatent as Prisma.InputJsonValue,
    },
  });

  return nextLatent;
};

export const getUserTagProfileSummary = async (params: {
  db: DbClient;
  userId: string;
}) => {
  const { db, userId } = params;

  const tags = await db.userTagPreference.findMany({
    where: { userId },
    include: { tag: true },
    orderBy: [{ weight: "desc" }, { updatedAt: "desc" }],
    take: hybridConfig.tagControl.maxActiveTagsPerUser,
  });

  const topInterests = tags
    .filter((item) => item.weight > 0)
    .slice(0, 10)
    .map((item) => ({
      tagId: item.tagId,
      label: item.tag.label,
      slug: item.tag.slug,
      weight: item.weight,
      explicitWeight: item.explicitWeight,
      implicitWeight: item.implicitWeight,
    }));

  const emergingInterests = [...tags]
    .filter((item) => item.implicitWeight > 0)
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
    .slice(0, 8)
    .map((item) => ({
      tagId: item.tagId,
      label: item.tag.label,
      slug: item.tag.slug,
      weight: item.weight,
    }));

  const lessInterested = tags
    .filter((item) => item.weight < 0)
    .slice(0, 8)
    .map((item) => ({
      tagId: item.tagId,
      label: item.tag.label,
      slug: item.tag.slug,
      weight: item.weight,
    }));

  return {
    topInterests,
    emergingInterests,
    lessInterested,
  };
};

export const boostTagPreference = async (params: {
  db: DbClient;
  userId: string;
  tagId: string;
}) => {
  const { db, userId, tagId } = params;
  const row = await db.userTagPreference.findUnique({
    where: { userId_tagId: { userId, tagId } },
  });

  const explicitWeight = row?.explicitWeight ?? 0;
  const implicitWeight = boundedWeight((row?.implicitWeight ?? 0) + 0.35);

  return db.userTagPreference.upsert({
    where: { userId_tagId: { userId, tagId } },
    update: {
      implicitWeight,
      weight: mergeWeights(explicitWeight, implicitWeight),
      lastReinforcedAt: new Date(),
    },
    create: {
      userId,
      tagId,
      explicitWeight,
      implicitWeight,
      weight: mergeWeights(explicitWeight, implicitWeight),
      lastReinforcedAt: new Date(),
    },
  });
};

export const muteTagPreference = async (params: {
  db: DbClient;
  userId: string;
  tagId: string;
}) => {
  const { db, userId, tagId } = params;
  const row = await db.userTagPreference.findUnique({
    where: { userId_tagId: { userId, tagId } },
  });

  const explicitWeight = row?.explicitWeight ?? 0;
  const implicitWeight = -1;

  return db.userTagPreference.upsert({
    where: { userId_tagId: { userId, tagId } },
    update: {
      implicitWeight,
      weight: mergeWeights(explicitWeight, implicitWeight),
      lastReinforcedAt: new Date(),
    },
    create: {
      userId,
      tagId,
      explicitWeight,
      implicitWeight,
      weight: mergeWeights(explicitWeight, implicitWeight),
      lastReinforcedAt: new Date(),
    },
  });
};

export const removeOnboardingTagSeed = async (params: {
  db: DbClient;
  userId: string;
  tagId: string;
}) => {
  const { db, userId, tagId } = params;
  const row = await db.userTagPreference.findUnique({
    where: { userId_tagId: { userId, tagId } },
  });

  if (!row) {
    return null;
  }

  const explicitWeight = 0;
  const implicitWeight = row.implicitWeight;

  return db.userTagPreference.update({
    where: { id: row.id },
    data: {
      explicitWeight,
      weight: mergeWeights(explicitWeight, implicitWeight),
      lastReinforcedAt: new Date(),
    },
  });
};

export const resetRecentImplicitLearning = async (params: {
  db: DbClient;
  userId: string;
}) => {
  const { db, userId } = params;
  const rows = await db.userTagPreference.findMany({ where: { userId } });

  for (const row of rows) {
    await db.userTagPreference.update({
      where: { id: row.id },
      data: {
        implicitWeight: 0,
        weight: mergeWeights(row.explicitWeight, 0),
        lastReinforcedAt: new Date(),
      },
    });
  }
};

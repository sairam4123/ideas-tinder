import { z } from "zod";
import type { Prisma } from "../../../../generated/prisma";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import {
  DEFAULT_FIELD_TAXONOMY,
  normalizeField,
} from "~/server/services/idea/fields";
import {
  ensureDefaultFields,
  getOrCreateActiveStack,
  registerSwipe,
  saveUserInterestsAndRecompute,
} from "~/server/services/idea/engine";
import {
  summarizePreferenceVectorFromCorpusWithGemini,
  type CorpusItem,
} from "~/server/services/idea/gemini";
import { asVector, cosineSimilarity } from "~/server/services/idea/vector";

const hashString = (value: string) => {
  let hash = 5381;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 33) ^ value.charCodeAt(index);
  }
  return (hash >>> 0).toString(16);
};

const buildSummaryFingerprint = (params: {
  vector: number[];
  corpus: Array<{ id: string; text: string }>;
  topK: number;
  strategyVersion: string;
}) => {
  const vectorPart = params.vector.map((value) => value.toFixed(4)).join(",");
  const corpusPart = params.corpus
    .map((item) => `${item.id}:${item.text}`)
    .sort()
    .join("|");
  return hashString(
    `${params.strategyVersion}::${vectorPart}::${corpusPart}::k=${params.topK}`,
  );
};

const readCachedSummary = (value: unknown): string | null => {
  if (typeof value === "string") {
    return value.trim() || null;
  }

  if (typeof value !== "object" || value === null) {
    return null;
  }

  const candidate = value as { summary?: unknown };
  return typeof candidate.summary === "string" && candidate.summary.trim()
    ? candidate.summary.trim()
    : null;
};

const isWeakCachedSummary = (summary: string) => {
  const trimmed = summary.trim();
  if (!trimmed) {
    return true;
  }

  if (!/^user\s+prefers\b/i.test(trimmed)) {
    return false;
  }

  const remainder = trimmed.replace(/^user\s+prefers\s*/i, "").trim();
  return remainder.split(/\s+/).filter(Boolean).length < 3;
};

const buildFallbackPreferenceSummary = (params: {
  fields: string[];
  dimensions: number;
  magnitude: number;
  averageSignal: number;
}) => {
  const { fields, dimensions, magnitude, averageSignal } = params;

  if (dimensions === 0) {
    return "No preference signal yet. Start swiping ideas to build your profile.";
  }

  const topFields = fields.slice(0, 3).join(", ");
  const signalBand =
    averageSignal >= 0.45
      ? "strong"
      : averageSignal >= 0.2
        ? "moderate"
        : "light";

  return `Your profile shows ${signalBand} preference signal across ${dimensions} dimensions (magnitude ${magnitude.toFixed(
    2,
  )}). Focus areas: ${topFields || "not set"}.`;
};

export const ideaRouter = createTRPCRouter({
  getAvailableFields: protectedProcedure.query(async ({ ctx }) => {
    await ensureDefaultFields(ctx.db);

    return ctx.db.fieldCatalog.findMany({
      orderBy: [{ isCustom: "asc" }, { label: "asc" }],
    });
  }),

  saveInterests: protectedProcedure
    .input(
      z.object({
        fields: z.array(z.string().min(1)).min(1),
        customFields: z.array(z.string().min(1)).default([]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const allFields = [...input.fields, ...input.customFields].map(
        normalizeField,
      );

      const vector = await saveUserInterestsAndRecompute({
        db: ctx.db,
        userId: ctx.session.user.id,
        fields: allFields,
      });

      return {
        onboardingCompleted: true,
        vector,
      };
    }),

  getPreferences: protectedProcedure.query(async ({ ctx }) => {
    const [user, fields, favorites, positiveSwipes, negativeSwipes] =
      await Promise.all([
        ctx.db.user.findUnique({
          where: { id: ctx.session.user.id },
          select: {
            onboardingCompleted: true,
            preferenceVector: true,
          },
        }),
        ctx.db.userFieldSelection.findMany({
          where: { userId: ctx.session.user.id },
          include: { field: true },
          orderBy: { createdAt: "asc" },
        }),
        ctx.db.favorite.findMany({
          where: { userId: ctx.session.user.id },
          include: {
            idea: {
              select: {
                id: true,
                title: true,
                description: true,
                vector: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
          take: 30,
        }),
        ctx.db.swipeEvent.findMany({
          where: {
            userId: ctx.session.user.id,
            action: { in: ["LIKE_AND_FAVE", "FAVE_ONLY"] },
          },
          include: {
            idea: {
              select: {
                id: true,
                title: true,
                description: true,
                vector: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
          take: 40,
        }),
        ctx.db.swipeEvent.findMany({
          where: {
            userId: ctx.session.user.id,
            action: "DISLIKE",
          },
          include: {
            idea: {
              select: {
                id: true,
                title: true,
                description: true,
                vector: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
          take: 12,
        }),
      ]);

    const vector = asVector(user?.preferenceVector);
    const fieldLabels = fields.map((selection) => selection.field.label);
    const magnitude = Math.sqrt(
      vector.reduce((sum, value) => sum + value * value, 0),
    );
    const averageSignal =
      vector.length > 0
        ? vector.reduce((sum, value) => sum + Math.abs(value), 0) /
          vector.length
        : 0;

    let summary = buildFallbackPreferenceSummary({
      fields: fieldLabels,
      dimensions: vector.length,
      magnitude,
      averageSignal,
    });

    if (vector.length > 0) {
      const corpus: CorpusItem[] = [
        ...favorites.map((favorite) => ({
          id: `fav:${favorite.idea.id}`,
          text: `${favorite.idea.title}. ${favorite.idea.description}`,
          vector: asVector(favorite.idea.vector),
        })),
        ...positiveSwipes.map((swipe) => ({
          id: `swipe:${swipe.id}:idea:${swipe.idea.id}`,
          text: `${swipe.idea.title}. ${swipe.idea.description}`,
          vector: asVector(swipe.idea.vector),
        })),
        ...negativeSwipes.map((swipe) => ({
          id: `dislike:${swipe.id}:idea:${swipe.idea.id}`,
          text: `Avoidance signal: ${swipe.idea.title}. ${swipe.idea.description}`,
          vector: asVector(swipe.idea.vector),
        })),
      ];

      const uniqueCorpusMap = new Map<
        string,
        { id: string; text: string; vector?: number[] }
      >();
      for (const entry of corpus) {
        const normalizedText = entry.text.replace(/\s+/g, " ").trim();
        if (!normalizedText) {
          continue;
        }

        const key = normalizedText.toLowerCase();
        if (!uniqueCorpusMap.has(key)) {
          uniqueCorpusMap.set(key, {
            id: entry.id,
            text: normalizedText,
            vector: entry.vector,
          });
        }
      }

      const fieldFallbackPool =
        fieldLabels.length > 0 ? fieldLabels : DEFAULT_FIELD_TAXONOMY;

      for (const fallbackField of fieldFallbackPool) {
        const fallbackText = `Interest area: ${fallbackField}`;
        const key = fallbackText.toLowerCase();
        if (!uniqueCorpusMap.has(key)) {
          uniqueCorpusMap.set(key, {
            id: `fallback-field:${normalizeField(fallbackField)}`,
            text: fallbackText,
          });
        }

        if (uniqueCorpusMap.size >= 16) {
          break;
        }
      }

      try {
        const summaryStrategyVersion = "behavior-v1";
        const topK = 6;
        const dedupedCorpus = Array.from(uniqueCorpusMap.values());
        const summaryFingerprint = buildSummaryFingerprint({
          vector,
          corpus: dedupedCorpus,
          topK,
          strategyVersion: summaryStrategyVersion,
        });
        const summaryCacheReason = `summary-cache:v4:${summaryFingerprint}`;

        const cachedSummaryLog = await ctx.db.preferenceUpdateLog.findFirst({
          where: {
            userId: ctx.session.user.id,
            reason: summaryCacheReason,
          },
          orderBy: { createdAt: "desc" },
          select: { updatedVector: true },
        });

        const cachedSummary = readCachedSummary(
          cachedSummaryLog?.updatedVector,
        );
        if (cachedSummary && !isWeakCachedSummary(cachedSummary)) {
          summary = cachedSummary;
        } else {
          summary = await summarizePreferenceVectorFromCorpusWithGemini({
            fields: fieldLabels,
            vector,
            corpus: dedupedCorpus,
            topK,
          });

          await ctx.db.preferenceUpdateLog.create({
            data: {
              userId: ctx.session.user.id,
              reason: summaryCacheReason,
              updatedVector: {
                summary,
                fingerprint: summaryFingerprint,
                topK,
                strategyVersion: summaryStrategyVersion,
              } as Prisma.InputJsonValue,
            },
          });
        }
      } catch {
        summary = buildFallbackPreferenceSummary({
          fields: fieldLabels,
          dimensions: vector.length,
          magnitude,
          averageSignal,
        });
      }
    }

    return {
      onboardingCompleted: user?.onboardingCompleted ?? false,
      vector,
      fields: fieldLabels,
      suggestedFields: [...DEFAULT_FIELD_TAXONOMY],
      vectorInsights: {
        magnitude,
        averageSignal,
        dimensions: vector.length,
        summary,
      },
    };
  }),

  updatePreferences: protectedProcedure
    .input(
      z.object({
        fields: z.array(z.string().min(1)).min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const vector = await saveUserInterestsAndRecompute({
        db: ctx.db,
        userId: ctx.session.user.id,
        fields: input.fields,
      });

      return {
        updated: true,
        vector,
      };
    }),

  getStack: protectedProcedure
    .input(
      z
        .object({
          forceRefresh: z.boolean().default(false),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const stack = await getOrCreateActiveStack({
        db: ctx.db,
        userId: ctx.session.user.id,
        forceRefresh: input?.forceRefresh ?? false,
      });

      return {
        id: stack.id,
        expiresAt: stack.expiresAt,
        ideaCount: stack.items.length,
        ideas: stack.items.map((item) => ({
          stackItemId: item.id,
          position: item.position,
          idea: {
            id: item.idea.id,
            title: item.idea.title,
            description: item.idea.description,
            fieldId: item.idea.fieldId,
            createdAt: item.idea.createdAt,
          },
        })),
      };
    }),

  swipeIdea: protectedProcedure
    .input(
      z.object({
        stackId: z.string().min(1),
        ideaId: z.string().min(1),
        direction: z.enum(["left", "right", "top"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const update = await registerSwipe({
        db: ctx.db,
        userId: ctx.session.user.id,
        stackId: input.stackId,
        ideaId: input.ideaId,
        direction: input.direction,
      });

      return {
        ok: true,
        vector: update.updatedVector,
      };
    }),

  getFavorites: protectedProcedure.query(async ({ ctx }) => {
    const favorites = await ctx.db.favorite.findMany({
      where: { userId: ctx.session.user.id },
      include: { idea: true },
      orderBy: { createdAt: "desc" },
    });

    return favorites.map((favorite) => ({
      id: favorite.id,
      createdAt: favorite.createdAt,
      idea: {
        id: favorite.idea.id,
        title: favorite.idea.title,
        description: favorite.idea.description,
      },
    }));
  }),

  getIdeaDetails: protectedProcedure
    .input(
      z.object({
        ideaId: z.string().min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      const [user, idea, lastStack] = await Promise.all([
        ctx.db.user.findUnique({
          where: { id: ctx.session.user.id },
          select: {
            preferenceVector: true,
          },
        }),
        ctx.db.idea.findUnique({
          where: { id: input.ideaId },
          include: {
            field: true,
          },
        }),
        ctx.db.ideaStack.findFirst({
          where: { userId: ctx.session.user.id },
          orderBy: { createdAt: "desc" },
          select: { id: true },
        }),
      ]);

      if (!idea) {
        return null;
      }

      const relatedIdeas = await ctx.db.idea.findMany({
        where: {
          id: { not: idea.id },
          ...(idea.fieldId ? { fieldId: idea.fieldId } : {}),
        },
        orderBy: { createdAt: "desc" },
        take: 5,
        select: {
          id: true,
          title: true,
          description: true,
        },
      });

      const userVector = asVector(user?.preferenceVector);
      const ideaVector = asVector(idea.vector);
      const similarity = cosineSimilarity(userVector, ideaVector);

      const summary =
        similarity >= 0.75
          ? "Strong match with your current preference profile."
          : similarity >= 0.45
            ? "Moderate alignment with your profile."
            : "Lower alignment, useful for exploration and discovery.";

      return {
        idea: {
          id: idea.id,
          title: idea.title,
          description: idea.description,
          field: idea.field?.label ?? null,
          createdAt: idea.createdAt,
        },
        preferenceImpact: {
          similarity,
          summary,
        },
        relatedIdeas,
        lastStackId: lastStack?.id ?? "",
      };
    }),
});

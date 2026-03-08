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
import {
  boostTagPreference,
  getUserTagProfileSummary,
  muteTagPreference,
  removeOnboardingTagSeed,
  resetRecentImplicitLearning,
} from "~/server/services/idea/profile";

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
            interestProfile: {
              select: {
                latentVector: true,
                positiveCentroid: true,
                negativeCentroid: true,
              },
            },
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

    const vector = asVector(
      user?.interestProfile?.latentVector ?? user?.preferenceVector,
    );
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

    const hybridTags = await getUserTagProfileSummary({
      db: ctx.db,
      userId: ctx.session.user.id,
    });

    return {
      onboardingCompleted: user?.onboardingCompleted ?? false,
      vector,
      fields: fieldLabels,
      suggestedFields: [...DEFAULT_FIELD_TAXONOMY],
      tagProfile: {
        topInterests: hybridTags.topInterests,
        emergingInterests: hybridTags.emergingInterests,
        lessInterestedRecently: hybridTags.lessInterested,
      },
      vectorInsights: {
        magnitude,
        averageSignal,
        dimensions: vector.length,
        summary,
        positiveCentroidDimensions: asVector(
          user?.interestProfile?.positiveCentroid,
        ).length,
        negativeCentroidDimensions: asVector(
          user?.interestProfile?.negativeCentroid,
        ).length,
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

      if (!stack) {
        return null;
      }

      const swipeEvents = await ctx.db.swipeEvent.findMany({
        where: {
          userId: ctx.session.user.id,
          stackId: stack.id,
        },
        select: {
          ideaId: true,
          action: true,
          createdAt: true,
        },
        orderBy: { createdAt: "asc" },
      });

      const swipeActionByIdeaId = new Map<string, string>();
      for (const event of swipeEvents) {
        swipeActionByIdeaId.set(event.ideaId, event.action);
      }

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
            field: item.idea.field
              ? {
                id: item.idea.field.id,
                label: item.idea.field.label,
              }
              : null,
            tags: item.idea.tags.map((t) => ({
              tagId: t.tag.id,
              label: t.tag.label,
            })),
            createdAt: item.idea.createdAt,
          },
          swipeAction: swipeActionByIdeaId.get(item.idea.id) ?? null,
        })),
      };
    }),

  swipeIdea: protectedProcedure
    .input(
      z.object({
        stackId: z.string().min(1),
        ideaId: z.string().min(1),
        direction: z.enum(["left", "right", "top"]),
        dwellTimeMs: z.number().int().min(0).max(120000).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const update = await registerSwipe({
        db: ctx.db,
        userId: ctx.session.user.id,
        stackId: input.stackId,
        ideaId: input.ideaId,
        direction: input.direction,
        dwellTimeMs: input.dwellTimeMs,
      });

      return {
        ok: true,
        vector: update.updatedVector,
      };
    }),

  boostTag: protectedProcedure
    .input(
      z.object({
        tagId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await boostTagPreference({
        db: ctx.db,
        userId: ctx.session.user.id,
        tagId: input.tagId,
      });

      return { ok: true };
    }),

  muteTag: protectedProcedure
    .input(
      z.object({
        tagId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await muteTagPreference({
        db: ctx.db,
        userId: ctx.session.user.id,
        tagId: input.tagId,
      });

      return { ok: true };
    }),

  removeOnboardingTag: protectedProcedure
    .input(
      z.object({
        tagId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await removeOnboardingTagSeed({
        db: ctx.db,
        userId: ctx.session.user.id,
        tagId: input.tagId,
      });

      return { ok: true };
    }),

  resetRecentLearning: protectedProcedure.mutation(async ({ ctx }) => {
    await resetRecentImplicitLearning({
      db: ctx.db,
      userId: ctx.session.user.id,
    });

    return { ok: true };
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

  getFavoritesByTag: protectedProcedure.query(async ({ ctx }) => {
    const [favorites, userTagPreferences] = await Promise.all([
      ctx.db.favorite.findMany({
        where: { userId: ctx.session.user.id },
        include: {
          idea: {
            select: {
              id: true,
              title: true,
              description: true,
              tags: {
                include: {
                  tag: {
                    select: {
                      id: true,
                      label: true,
                    },
                  },
                },
              },
            },
          },
        },
        orderBy: { createdAt: "desc" },
      }),
      ctx.db.userTagPreference.findMany({
        where: { userId: ctx.session.user.id },
        select: {
          tagId: true,
          weight: true,
        },
      }),
    ]);

    const userTagWeightById = new Map(
      userTagPreferences.map((preference) => [
        preference.tagId,
        preference.weight,
      ]),
    );

    const favoriteIdeas = favorites.map((favorite) => {
      const tagContributions = favorite.idea.tags
        .map((ideaTag) => {
          const userWeight = userTagWeightById.get(ideaTag.tagId) ?? 0;
          const contribution = userWeight * ideaTag.weight;

          return {
            tagId: ideaTag.tag.id,
            tagLabel: ideaTag.tag.label,
            ideaTagWeight: ideaTag.weight,
            userTagWeight: userWeight,
            contribution,
          };
        })
        .sort((a, b) => b.contribution - a.contribution);

      const totalContribution = tagContributions.reduce(
        (sum, item) => sum + item.contribution,
        0,
      );

      return {
        favoriteId: favorite.id,
        savedAt: favorite.createdAt,
        idea: {
          id: favorite.idea.id,
          title: favorite.idea.title,
          description: favorite.idea.description,
        },
        totalContribution,
        tagContributions,
      };
    });

    const groups = new Map<
      string,
      {
        tagId: string;
        tagLabel: string;
        totalContribution: number;
        ideas: Array<{
          favoriteId: string;
          savedAt: Date;
          idea: {
            id: string;
            title: string;
            description: string;
          };
          contribution: number;
          ideaTagWeight: number;
          userTagWeight: number;
        }>;
      }
    >();

    for (const entry of favoriteIdeas) {
      for (const tagContribution of entry.tagContributions) {
        const existing = groups.get(tagContribution.tagId);
        const ideaItem = {
          favoriteId: entry.favoriteId,
          savedAt: entry.savedAt,
          idea: entry.idea,
          contribution: tagContribution.contribution,
          ideaTagWeight: tagContribution.ideaTagWeight,
          userTagWeight: tagContribution.userTagWeight,
        };

        if (!existing) {
          groups.set(tagContribution.tagId, {
            tagId: tagContribution.tagId,
            tagLabel: tagContribution.tagLabel,
            totalContribution: tagContribution.contribution,
            ideas: [ideaItem],
          });
          continue;
        }

        existing.totalContribution += tagContribution.contribution;
        existing.ideas.push(ideaItem);
      }
    }

    const groupedByTags = Array.from(groups.values())
      .map((group) => ({
        ...group,
        ideas: group.ideas.sort((a, b) => b.contribution - a.contribution),
      }))
      .sort((a, b) => b.totalContribution - a.totalContribution);

    const topIdeas = [...favoriteIdeas].sort(
      (a, b) => b.totalContribution - a.totalContribution,
    );

    return {
      topIdeas,
      groupedByTags,
      favoriteCount: favorites.length,
    };
  }),

  getIdeaDetails: protectedProcedure
    .input(
      z.object({
        ideaId: z.string().min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      const [user, idea, lastStack, latestSwipe, favorite] = await Promise.all([
        ctx.db.user.findUnique({
          where: { id: ctx.session.user.id },
          select: {
            preferenceVector: true,
            interestProfile: {
              select: {
                latentVector: true,
              },
            },
          },
        }),
        ctx.db.idea.findUnique({
          where: { id: input.ideaId },
          include: {
            field: true,
            tags: {
              include: {
                tag: {
                  select: {
                    id: true,
                    label: true,
                  },
                },
              },
            },
          },
        }),
        ctx.db.ideaStack.findFirst({
          where: { userId: ctx.session.user.id },
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            items: {
              orderBy: { position: "asc" },
              select: {
                ideaId: true,
                position: true,
              },
            },
          },
        }),
        ctx.db.swipeEvent.findFirst({
          where: {
            userId: ctx.session.user.id,
            ideaId: input.ideaId,
          },
          orderBy: { createdAt: "desc" },
          select: {
            action: true,
            createdAt: true,
          },
        }),
        ctx.db.favorite.findUnique({
          where: {
            userId_ideaId: {
              userId: ctx.session.user.id,
              ideaId: input.ideaId,
            },
          },
          select: {
            id: true,
            createdAt: true,
          },
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

      const userVector = asVector(
        user?.interestProfile?.latentVector ?? user?.preferenceVector,
      );
      const ideaVector = asVector(idea.vector);
      const similarity = cosineSimilarity(userVector, ideaVector);

      const userTagPreferences = await ctx.db.userTagPreference.findMany({
        where: { userId: ctx.session.user.id },
        select: {
          tagId: true,
          weight: true,
        },
      });

      const userTagMap = new Map(
        userTagPreferences.map((preference) => [
          preference.tagId,
          preference.weight,
        ]),
      );

      const matchingTags = idea.tags
        .filter((item) => (userTagMap.get(item.tagId) ?? 0) > 0)
        .slice(0, 3)
        .map((item) => item.tag.label);

      const summary =
        similarity >= 0.75
          ? "Strong match with your current preference profile."
          : similarity >= 0.45
            ? "Moderate alignment with your profile."
            : "Lower alignment, useful for exploration and discovery.";

      const profileTagContributions = idea.tags
        .map((item) => {
          const userTagWeight = userTagMap.get(item.tagId) ?? 0;
          const ideaTagWeight = item.weight;
          const contribution = userTagWeight * ideaTagWeight;

          return {
            tagId: item.tagId,
            tagLabel: item.tag.label,
            contribution,
            userTagWeight,
            ideaTagWeight,
          };
        })
        .sort((a, b) => b.contribution - a.contribution);

      const stackItems = lastStack?.items ?? [];
      const currentStackIndex = stackItems.findIndex(
        (item) => item.ideaId === idea.id,
      );
      const navigation =
        currentStackIndex >= 0
          ? {
            stackId: lastStack!.id,
            currentPosition: currentStackIndex + 1,
            totalIdeas: stackItems.length,
            previousIdeaId:
              currentStackIndex > 0
                ? (stackItems[currentStackIndex - 1]?.ideaId ?? null)
                : null,
            nextIdeaId:
              currentStackIndex < stackItems.length - 1
                ? (stackItems[currentStackIndex + 1]?.ideaId ?? null)
                : null,
          }
          : null;

      const lastAction = latestSwipe?.action ?? null;
      const isDisliked = lastAction === "DISLIKE";
      const isLiked =
        lastAction === "FAVE_ONLY" || lastAction === "LIKE_AND_FAVE";
      const isFavorited = Boolean(favorite) || lastAction === "LIKE_AND_FAVE";

      return {
        idea: {
          id: idea.id,
          title: idea.title,
          description: idea.description,
          field: idea.field?.label ?? null,
          tags: idea.tags.map((item) => item.tag.label),
          createdAt: idea.createdAt,
        },
        preferenceImpact: {
          similarity,
          summary,
          whyChips: [
            ...matchingTags.map((tag) => `Tag match: ${tag}`),
            similarity >= 0.7
              ? "Semantic similarity: strong"
              : similarity >= 0.45
                ? "Semantic similarity: moderate"
                : "Exploration candidate",
            idea.createdAt.getTime() > Date.now() - 1000 * 60 * 60 * 24
              ? "Fresh idea"
              : "Diverse retrieval",
          ],
        },
        profileTagContributions,
        interactionStatus: {
          isLiked,
          isFavorited,
          isDisliked,
          lastAction,
          lastActionAt: latestSwipe?.createdAt ?? null,
          favoritedAt: favorite?.createdAt ?? null,
        },
        navigation,
        relatedIdeas,
        lastStackId: lastStack?.id ?? "",
      };
    }),
});

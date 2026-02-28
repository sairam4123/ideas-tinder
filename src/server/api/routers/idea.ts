import { z } from "zod";

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
import { asVector, cosineSimilarity } from "~/server/services/idea/vector";

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
    const [user, fields] = await Promise.all([
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
    ]);

    return {
      onboardingCompleted: user?.onboardingCompleted ?? false,
      vector: asVector(user?.preferenceVector),
      fields: fields.map((selection) => selection.field.label),
      suggestedFields: [...DEFAULT_FIELD_TAXONOMY],
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

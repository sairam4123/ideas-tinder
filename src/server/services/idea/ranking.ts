import { hybridConfig } from "~/server/services/idea/profile";
import { cosineSimilarity } from "~/server/services/idea/vector";

export type RankedCandidate = {
  idea: {
    id: string;
    title: string;
    description: string;
    fieldId: string | null;
    createdAt: Date;
  };
  explicitScore: number;
  latentScore: number;
  explorationScore: number;
  finalScore: number;
};

const explicitAffinityScore = (
  userTagWeights: Map<string, number>,
  ideaTags: Array<{ tagId: string; weight: number }>,
) => {
  if (ideaTags.length === 0) {
    return 0;
  }

  const numerator = ideaTags.reduce((sum, item) => {
    const userWeight = userTagWeights.get(item.tagId) ?? 0;
    return sum + userWeight * item.weight;
  }, 0);

  const denominator =
    ideaTags.reduce((sum, item) => sum + item.weight, 0) + 1e-6;
  return numerator / denominator;
};

const explorationBonus = (params: {
  userSeenTagIds: Set<string>;
  ideaTags: Array<{ tagId: string; weight: number }>;
  ideaCreatedAt: Date;
}) => {
  const { userSeenTagIds, ideaTags, ideaCreatedAt } = params;

  const unseenTagCount = ideaTags.filter(
    (item) => !userSeenTagIds.has(item.tagId),
  ).length;
  const novelty = ideaTags.length > 0 ? unseenTagCount / ideaTags.length : 0;

  const ageHours = Math.max(
    0,
    (Date.now() - ideaCreatedAt.getTime()) / (1000 * 60 * 60),
  );
  const freshness = Math.max(0, 1 - ageHours / 96);

  return 0.65 * novelty + 0.35 * freshness;
};

export const rankHybridIdeas = (params: {
  userLatentVector: number[];
  userTagWeights: Map<string, number>;
  userSeenTagIds: Set<string>;
  candidates: Array<{
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
}) => {
  const { userLatentVector, userTagWeights, userSeenTagIds, candidates } =
    params;

  const ranked: RankedCandidate[] = candidates.map((candidate) => {
    const explicitScore = explicitAffinityScore(userTagWeights, candidate.tags);
    const latentScore = cosineSimilarity(
      userLatentVector,
      candidate.idea.vector,
    );
    const explorationScore = explorationBonus({
      userSeenTagIds,
      ideaTags: candidate.tags,
      ideaCreatedAt: candidate.idea.createdAt,
    });

    const finalScore =
      explicitScore * hybridConfig.rankingWeights.explicit +
      latentScore * hybridConfig.rankingWeights.latent +
      explorationScore * hybridConfig.rankingWeights.exploration;

    return {
      idea: {
        id: candidate.idea.id,
        title: candidate.idea.title,
        description: candidate.idea.description,
        fieldId: candidate.idea.fieldId,
        createdAt: candidate.idea.createdAt,
      },
      explicitScore,
      latentScore,
      explorationScore,
      finalScore,
    };
  });

  return ranked.sort((a, b) => b.finalScore - a.finalScore);
};

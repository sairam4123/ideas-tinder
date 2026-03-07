import type {
  InteractionType,
  SwipeAction,
} from "../../../../generated/prisma";

export type SwipeDirection = "left" | "right" | "top";

export type InteractionReward = {
  interactionType: InteractionType;
  reward: number;
  swipeAction: SwipeAction;
  shouldFavorite: boolean;
};

const DWELL_MINIMAL_SCALE_MS = 8_000;
const DWELL_MINIMAL_BONUS_MAX = 0.1;

const minimalDwellAdjustment = (dwellTimeMs?: number) => {
  if (!dwellTimeMs || dwellTimeMs <= 0) {
    return 0;
  }

  const normalized = Math.min(1, dwellTimeMs / DWELL_MINIMAL_SCALE_MS);
  return normalized * DWELL_MINIMAL_BONUS_MAX;
};

export const rewardFromSwipeDirection = (
  direction: SwipeDirection,
  dwellTimeMs?: number,
): InteractionReward => {
  const dwellAdjustment = minimalDwellAdjustment(dwellTimeMs);

  if (direction === "left") {
    return {
      interactionType: "SKIP",
      reward: -1 + dwellAdjustment * 0.2,
      swipeAction: "DISLIKE",
      shouldFavorite: false,
    };
  }

  if (direction === "right") {
    return {
      interactionType: "LIKE",
      reward: 1 + dwellAdjustment,
      swipeAction: "FAVE_ONLY",
      shouldFavorite: false,
    };
  }

  return {
    interactionType: "SAVE",
    reward: 1.5 + dwellAdjustment,
    swipeAction: "LIKE_AND_FAVE",
    shouldFavorite: true,
  };
};

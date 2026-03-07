import type {
  DeckCard,
  PersistedStackProgress,
  StackIdea,
  SwipeDirection,
  SwipeStatus,
} from "./types";

const STACK_PROGRESS_STORAGE_KEY = "idea-tinder-stack-progress";

export const directionToStatus: Record<SwipeDirection, SwipeStatus> = {
  left: "dislike",
  right: "like",
  top: "fav",
};

export const swipeActionToStatus = (
  action: StackIdea["swipeAction"],
): SwipeStatus | null => {
  if (action === "DISLIKE") {
    return "dislike";
  }
  if (action === "LIKE_AND_FAVE") {
    return "fav";
  }
  if (action === "FAVE_ONLY") {
    return "like";
  }
  return null;
};

export const buildDeckCards = (ideas: StackIdea[]): DeckCard[] => {
  return [
    ...ideas.map((stackItem) => ({
      kind: "idea" as const,
      key: stackItem.stackItemId,
      stackItem,
    })),
    { kind: "caught-up" as const, key: "caught-up" },
  ];
};

export const readPersistedProgress = (): Record<
  string,
  PersistedStackProgress
> => {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = window.localStorage.getItem(STACK_PROGRESS_STORAGE_KEY);
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw) as Record<string, PersistedStackProgress>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
};

export const writePersistedProgress = (
  value: Record<string, PersistedStackProgress>,
) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    STACK_PROGRESS_STORAGE_KEY,
    JSON.stringify(value),
  );
};

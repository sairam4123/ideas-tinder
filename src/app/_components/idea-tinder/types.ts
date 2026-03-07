import type { RouterOutputs } from "~/trpc/react";

export type SwipeDirection = "left" | "right" | "top";

export type QueuedSwipe = {
  stackId: string;
  ideaId: string;
  direction: SwipeDirection;
};

export type StackIdea = RouterOutputs["idea"]["getStack"]["ideas"][number];

export type SwipeStatus = "dislike" | "like" | "fav";

export type DeckCard =
  | {
      kind: "idea";
      key: string;
      stackItem: StackIdea;
    }
  | {
      kind: "caught-up";
      key: "caught-up";
    };

export type StreamedStackState = {
  id: string;
  ideaCount: number;
  ideas: StackIdea[];
};

export type PersistedStackProgress = {
  index: number;
  actions: Record<string, SwipeStatus>;
  updatedAt: number;
};

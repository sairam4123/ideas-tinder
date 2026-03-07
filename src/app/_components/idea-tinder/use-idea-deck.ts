import { useEffect, useRef, useState } from "react";

import { api } from "~/trpc/react";

import {
  buildDeckCards,
  directionToStatus,
  readPersistedProgress,
  swipeActionToStatus,
  writePersistedProgress,
} from "./utils";
import type {
  DeckCard,
  QueuedSwipe,
  StackIdea,
  StreamedStackState,
  SwipeDirection,
  SwipeStatus,
} from "./types";

const parseStreamEvent = <T>(event: Event): T | null => {
  const payload = (event as MessageEvent<string>).data;
  if (typeof payload !== "string") {
    return null;
  }

  try {
    return JSON.parse(payload) as T;
  } catch {
    return null;
  }
};

export function useIdeaDeck() {
  const utils = api.useUtils();
  const [index, setIndex] = useState(0);
  const [swipeStatusByIdea, setSwipeStatusByIdea] = useState<
    Record<string, SwipeStatus>
  >({});
  const [visibleCards, setVisibleCards] = useState<DeckCard[]>([]);
  const [streamedStack, setStreamedStack] = useState<StreamedStackState | null>(
    null,
  );
  const [isStreamingStack, setIsStreamingStack] = useState(false);
  const indexRef = useRef(0);
  const pendingSwipesRef = useRef<QueuedSwipe[]>([]);
  const isProcessingRef = useRef(false);
  const streamRef = useRef<EventSource | null>(null);
  const lastStackIdRef = useRef<string | null>(null);

  const preferencesQuery = api.idea.getPreferences.useQuery();
  const stackQuery = api.idea.getStack.useQuery(undefined, {
    enabled: preferencesQuery.data?.onboardingCompleted === true,
  });
  const swipeMutation = api.idea.swipeIdea.useMutation();

  const syncVisibleCardsFromIdeas = (
    ideas: StackIdea[],
    nextIndex = indexRef.current,
  ) => {
    setVisibleCards(buildDeckCards(ideas.slice(nextIndex)));
  };

  const closeStream = () => {
    streamRef.current?.close();
    streamRef.current = null;
  };

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (streamedStack) {
      return;
    }

    const stackData = stackQuery.data;
    const nextStackId = stackData?.id ?? null;

    if (!stackData || !nextStackId || nextStackId === lastStackIdRef.current) {
      return;
    }

    const serverActionByIdea = stackData.ideas.reduce<
      Record<string, SwipeStatus>
    >((accumulator, stackItem) => {
      const status = swipeActionToStatus(stackItem.swipeAction);
      if (status) {
        accumulator[stackItem.idea.id] = status;
      }
      return accumulator;
    }, {});

    const persistedProgress = readPersistedProgress();
    const persistedForStack = persistedProgress[nextStackId];
    const firstUnswipedIndex = stackData.ideas.findIndex(
      (stackItem) => swipeActionToStatus(stackItem.swipeAction) === null,
    );
    const serverIndex =
      firstUnswipedIndex === -1 ? stackData.ideas.length : firstUnswipedIndex;
    const persistedIndex = persistedForStack?.index ?? serverIndex;
    const nextIndex = Math.max(
      serverIndex,
      Math.min(persistedIndex, stackData.ideas.length),
    );
    const mergedActions = {
      ...serverActionByIdea,
      ...(persistedForStack?.actions ?? {}),
    };

    lastStackIdRef.current = nextStackId;
    indexRef.current = nextIndex;
    setSwipeStatusByIdea(mergedActions);
    setIndex(nextIndex);
    syncVisibleCardsFromIdeas(stackData.ideas, nextIndex);
  }, [stackQuery.data, streamedStack]);

  useEffect(() => {
    const stackId = streamedStack?.id ?? stackQuery.data?.id;
    if (!stackId) {
      return;
    }

    const persistedProgress = readPersistedProgress();
    persistedProgress[stackId] = {
      index,
      actions: swipeStatusByIdea,
      updatedAt: Date.now(),
    };
    writePersistedProgress(persistedProgress);
  }, [index, streamedStack?.id, swipeStatusByIdea, stackQuery.data?.id]);

  useEffect(() => {
    return () => {
      closeStream();
    };
  }, []);

  const effectiveStack = streamedStack ?? stackQuery.data ?? null;
  const effectiveStackId = streamedStack?.id ?? stackQuery.data?.id ?? null;
  const effectiveIdeaCount =
    streamedStack?.ideaCount ?? stackQuery.data?.ideaCount ?? 0;
  const currentCard = visibleCards[0] ?? null;
  const currentIdea =
    currentCard?.kind === "idea" ? currentCard.stackItem : null;
  const isStackExhausted = currentCard?.kind === "caught-up";
  const allItems = effectiveStack?.ideas ?? [];
  const stackExpiresAt = streamedStack
    ? null
    : stackQuery.data?.expiresAt
      ? new Date(stackQuery.data.expiresAt)
      : null;
  const isStackExpired = streamedStack
    ? false
    : stackExpiresAt !== null
      ? stackExpiresAt.getTime() <= Date.now()
      : true;
  const canGenerateNewStack = !isStreamingStack && isStackExpired;
  const deckCards = visibleCards.slice(0, 6);

  const finishStreaming = async () => {
    await stackQuery.refetch();
    setStreamedStack(null);
    setIsStreamingStack(false);
    closeStream();
  };

  const startStackStream = (forceRefresh: boolean) => {
    closeStream();
    indexRef.current = 0;
    setIsStreamingStack(true);
    setStreamedStack(null);
    setIndex(0);
    setSwipeStatusByIdea({});
    syncVisibleCardsFromIdeas([], 0);

    const source = new EventSource(
      `/api/idea/stack/stream?forceRefresh=${forceRefresh ? "true" : "false"}`,
    );
    streamRef.current = source;

    source.addEventListener("idea", (event) => {
      const payload = parseStreamEvent<{
        stackId: string;
        stackItemId: string;
        position: number;
        total: number;
        idea: StackIdea["idea"];
      }>(event);

      if (!payload) {
        return;
      }

      setStreamedStack((previous) => {
        const nextIdeas = [...(previous?.ideas ?? [])];
        const nextItem: StackIdea = {
          stackItemId: payload.stackItemId,
          position: payload.position,
          idea: payload.idea,
          swipeAction: null,
        };

        const existingIndex = nextIdeas.findIndex(
          (item) => item.stackItemId === payload.stackItemId,
        );

        if (existingIndex >= 0) {
          nextIdeas[existingIndex] = nextItem;
        } else {
          nextIdeas.push(nextItem);
        }

        nextIdeas.sort((left, right) => left.position - right.position);
        syncVisibleCardsFromIdeas(nextIdeas);

        return {
          id: payload.stackId,
          ideaCount: payload.total,
          ideas: nextIdeas,
        };
      });
    });

    source.addEventListener("ready", () => {
      void finishStreaming();
    });

    source.addEventListener("complete", () => {
      void finishStreaming();
    });

    source.addEventListener("error", () => {
      setStreamedStack(null);
      setIsStreamingStack(false);
      void stackQuery.refetch();
      closeStream();
    });

    source.onerror = () => {
      setStreamedStack(null);
      setIsStreamingStack(false);
      void stackQuery.refetch();
      closeStream();
    };
  };

  const processSwipeQueue = () => {
    if (isProcessingRef.current) {
      return;
    }

    const queuedSwipe = pendingSwipesRef.current.shift();
    if (!queuedSwipe) {
      void utils.idea.getPreferences.invalidate();
      return;
    }

    isProcessingRef.current = true;

    swipeMutation.mutate(queuedSwipe, {
      onSettled: () => {
        isProcessingRef.current = false;
        processSwipeQueue();
      },
    });
  };

  const commitSwipe = (direction: SwipeDirection) => {
    if (!currentIdea || !effectiveStackId) {
      return false;
    }

    const ideaId = currentIdea.idea.id;

    setVisibleCards((cards) => cards.slice(1));
    setIndex((value) => {
      const nextIndex = value + 1;
      indexRef.current = nextIndex;
      return nextIndex;
    });
    setSwipeStatusByIdea((previous) => ({
      ...previous,
      [ideaId]: directionToStatus[direction],
    }));

    pendingSwipesRef.current.push({
      stackId: effectiveStackId,
      ideaId,
      direction,
    });
    processSwipeQueue();

    return true;
  };

  return {
    allItems,
    canGenerateNewStack,
    commitSwipe,
    currentCard,
    currentIdea,
    deckCards,
    effectiveIdeaCount,
    effectiveStackId,
    index,
    isStackExhausted,
    isStackExpired,
    isStreamingStack,
    preferencesQuery,
    stackExpiresAt,
    stackQuery,
    startStackStream,
    swipeStatusByIdea,
  };
}

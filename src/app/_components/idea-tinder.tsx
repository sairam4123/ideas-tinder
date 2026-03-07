"use client";

import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { X, Heart, Star, Info } from "lucide-react";

import { api, type RouterOutputs } from "~/trpc/react";

type SwipeDirection = "left" | "right" | "top";
type QueuedSwipe = {
  stackId: string;
  ideaId: string;
  direction: SwipeDirection;
};

type StackIdea = RouterOutputs["idea"]["getStack"]["ideas"][number];
type SwipeStatus = "dislike" | "like" | "fav";
type DeckCard =
  | {
      kind: "idea";
      key: string;
      stackItem: StackIdea;
    }
  | {
      kind: "caught-up";
      key: "caught-up";
    };

const STACK_PROGRESS_STORAGE_KEY = "idea-tinder-stack-progress";

type PersistedStackProgress = {
  index: number;
  actions: Record<string, SwipeStatus>;
  updatedAt: number;
};

const directionToStatus: Record<SwipeDirection, SwipeStatus> = {
  left: "dislike",
  right: "like",
  top: "fav",
};

const swipeActionToStatus = (
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

const readPersistedProgress = (): Record<string, PersistedStackProgress> => {
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

const writePersistedProgress = (
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

export function IdeaTinder() {
  const utils = api.useUtils();
  const [index, setIndex] = useState(0);
  const [swipeStatusByIdea, setSwipeStatusByIdea] = useState<
    Record<string, SwipeStatus>
  >({});
  const [visibleCards, setVisibleCards] = useState<DeckCard[]>([]);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const dragRotate = useTransform(dragX, [-300, 0, 300], [-18, 0, 18]);
  const dragShadow = useTransform(
    dragX,
    [-200, 0, 200],
    [
      "0 25px 50px -6px rgba(0,0,0,0.18), 0 12px 24px -8px rgba(0,0,0,0.12)",
      "0 10px 25px -5px rgba(0,0,0,0.08), 0 4px 10px -5px rgba(0,0,0,0.04)",
      "0 25px 50px -6px rgba(0,0,0,0.18), 0 12px 24px -8px rgba(0,0,0,0.12)",
    ],
  );
  const leftDragHighlightOpacity = useTransform(dragX, [-220, 0], [0.42, 0]);
  const rightDragHighlightOpacity = useTransform(dragX, [0, 220], [0, 0.42]);
  const topDragHighlightOpacity = useTransform(dragY, [0, -220], [0, 0.42]);
  const leftDragBorderOpacity = useTransform(dragX, [-220, 0], [0.34, 0]);
  const rightDragBorderOpacity = useTransform(dragX, [0, 220], [0, 0.34]);
  const topDragBorderOpacity = useTransform(dragY, [0, -220], [0, 0.34]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isStreamingStack, setIsStreamingStack] = useState(false);
  const controls = useAnimation();
  const pendingSwipesRef = useRef<QueuedSwipe[]>([]);
  const isProcessingRef = useRef(false);
  const streamRef = useRef<EventSource | null>(null);
  const lastStackIdRef = useRef<string | null>(null);

  const preferencesQuery = api.idea.getPreferences.useQuery();
  const stackQuery = api.idea.getStack.useQuery(undefined, {
    enabled: preferencesQuery.data?.onboardingCompleted === true,
  });

  const swipeMutation = api.idea.swipeIdea.useMutation();

  const buildDeckCards = (ideas: StackIdea[]): DeckCard[] => {
    return [
      ...ideas.map((stackItem) => ({
        kind: "idea" as const,
        key: stackItem.stackItemId,
        stackItem,
      })),
      { kind: "caught-up" as const, key: "caught-up" },
    ];
  };

  useEffect(() => {
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
    setSwipeStatusByIdea(mergedActions);
    setIndex(nextIndex);
    setVisibleCards(buildDeckCards(stackData.ideas.slice(nextIndex)));
  }, [stackQuery.data]);

  useEffect(() => {
    const stackId = stackQuery.data?.id;
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
  }, [index, swipeStatusByIdea, stackQuery.data?.id]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 768px), (pointer: coarse)",
    );

    const syncTouchMode = () => {
      setIsTouchDevice(mediaQuery.matches);
    };

    syncTouchMode();
    mediaQuery.addEventListener("change", syncTouchMode);

    return () => {
      mediaQuery.removeEventListener("change", syncTouchMode);
    };
  }, []);

  useEffect(() => {
    return () => {
      closeStream();
    };
  }, []);

  const currentCard = visibleCards[0] ?? null;
  const currentIdea =
    currentCard?.kind === "idea" ? currentCard.stackItem : null;
  const isStackExhausted = currentCard?.kind === "caught-up";
  const allItems = stackQuery.data?.ideas ?? [];
  const stackExpiresAt = stackQuery.data?.expiresAt
    ? new Date(stackQuery.data.expiresAt)
    : null;
  const isStackExpired =
    stackExpiresAt !== null ? stackExpiresAt.getTime() <= Date.now() : true;
  const canGenerateNewStack = isStackExpired && !isStreamingStack;
  const deckCards = visibleCards.slice(0, 6);

  const closeStream = () => {
    streamRef.current?.close();
    streamRef.current = null;
  };

  const startStackStream = (forceRefresh: boolean) => {
    closeStream();
    setIsStreamingStack(true);

    const source = new EventSource(
      `/api/idea/stack/stream?forceRefresh=${forceRefresh ? "true" : "false"}`,
    );
    streamRef.current = source;

    source.addEventListener("idea", () => {
      void stackQuery.refetch();
    });

    source.addEventListener("ready", () => {
      setIsStreamingStack(false);
      void stackQuery.refetch();
      closeStream();
    });

    source.addEventListener("complete", () => {
      setIsStreamingStack(false);
      setIndex(0);
      void stackQuery.refetch();
      closeStream();
    });

    source.onerror = () => {
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

  const triggerSwipe = async (direction: SwipeDirection) => {
    if (!currentIdea || !stackQuery.data?.id) {
      return;
    }

    const swipeTravel = isTouchDevice ? 400 : 600;
    const exitX =
      direction === "left"
        ? -swipeTravel
        : direction === "right"
          ? swipeTravel
          : 0;
    const exitY = direction === "top" ? -swipeTravel : 0;

    setSwipeProgress(1);

    await controls.start({
      x: exitX,
      y: exitY,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 40,
        opacity: { duration: 0.25 },
      },
    });

    setVisibleCards((cards) => cards.slice(1));
    setIndex((value) => value + 1);
    setSwipeStatusByIdea((previous) => ({
      ...previous,
      [currentIdea.idea.id]: directionToStatus[direction],
    }));

    pendingSwipesRef.current.push({
      stackId: stackQuery.data.id,
      ideaId: currentIdea.idea.id,
      direction,
    });
    processSwipeQueue();

    // Reset motion values for the new top card
    dragX.set(0);
    dragY.set(0);
    controls.set({ x: 0, y: 0, opacity: 1, scale: 1 });
    setSwipeProgress(0);
  };

  const handleDragEnd = async (_: unknown, info: PanInfo) => {
    const swipeThreshold = isTouchDevice ? 40 : 90;
    const velocityThreshold = isTouchDevice ? 160 : 420;

    const projectedX = info.offset.x + info.velocity.x * 0.12;
    const projectedY = info.offset.y + info.velocity.y * 0.12;

    const horizontalIntent = Math.abs(projectedX);
    const upwardIntent = Math.max(0, -projectedY);

    const isHorizontalSwipe =
      horizontalIntent > swipeThreshold ||
      Math.abs(info.velocity.x) > velocityThreshold;
    const isTopSwipe =
      upwardIntent > swipeThreshold || info.velocity.y < -velocityThreshold;
    const horizontalDominates = horizontalIntent > upwardIntent * 1.2;

    if (isHorizontalSwipe && (horizontalDominates || !isTopSwipe)) {
      await triggerSwipe(projectedX < 0 ? "left" : "right");
    } else if (isTopSwipe) {
      await triggerSwipe("top");
    } else {
      setSwipeProgress(0);
      void controls.start({
        x: 0,
        y: 0,
        transition: { type: "spring", stiffness: 500, damping: 28, mass: 0.7 },
      });
    }
  };

  if (preferencesQuery.isPending || stackQuery.isPending) {
    return (
      <div className="flex w-full max-w-5xl flex-col gap-6">
        <div className="relative mx-auto flex h-150 w-full max-w-sm flex-col items-center self-center md:max-w-2xl">
          <div className="border-border bg-background-surface flex h-112.5 w-full flex-col rounded-4xl border p-8 shadow-sm">
            <div className="mb-auto flex items-center justify-between">
              <div className="skeleton h-7 w-22 rounded-full" />
              <div className="skeleton h-9 w-9 rounded-full" />
            </div>

            <div className="my-auto flex flex-col pt-4">
              <div className="skeleton mb-3 h-10 w-4/5 rounded-xl" />
              <div className="skeleton mb-2 h-5 w-full rounded-lg" />
              <div className="skeleton h-5 w-10/12 rounded-lg" />
            </div>

            <div className="border-border mt-auto border-t pt-6">
              <div className="skeleton h-3 w-2/3 rounded-lg" />
            </div>
          </div>
        </div>

        <section className="border-border bg-background-surface rounded-2xl border p-4 shadow-sm">
          <div className="skeleton h-5 w-28 rounded-lg" />
          <div className="mt-3 space-y-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border-border rounded-lg border p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="skeleton h-4 w-3/4 rounded-lg" />
                  <div className="skeleton h-4 w-8 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (!preferencesQuery.data?.onboardingCompleted) {
    return (
      <div className="border-border bg-background-surface relative flex h-112.5 w-full max-w-sm flex-col items-center justify-center gap-6 overflow-hidden rounded-4xl border p-10 text-center shadow-sm md:max-w-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-indigo-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-32 w-32 rounded-full bg-blue-50 blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-foreground mb-2 text-3xl font-bold">
            Complete Setup
          </h2>
          <p className="text-foreground-muted mb-6 text-sm leading-relaxed">
            Select your fields of interest first to personalize your
            AI-generated recommendations.
          </p>
          <Link
            className="bg-foreground inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 font-semibold text-white transition-all hover:scale-105 active:scale-95"
            href="/onboarding"
          >
            Go to Onboarding
          </Link>
        </div>
      </div>
    );
  }

  if (!currentCard) {
    return null;
  }

  return (
    <div className="flex w-full max-w-5xl flex-col gap-6">
      <div className="relative flex h-150 w-full max-w-sm flex-col items-center self-center select-none md:max-w-2xl">
        {/* Unified card stack */}
        {deckCards
          .slice()
          .reverse()
          .map((card, layerIndex) => {
            const depth = deckCards.length - 1 - layerIndex;
            const isTop = depth === 0;
            const isIdea = card.kind === "idea";

            // Stack depth visuals — depth 0 is the front card
            const layerScale = Math.min(
              1,
              1 - depth * 0.03 + (depth > 0 ? swipeProgress * 0.03 : 0),
            );
            const layerY = depth * 8 - (depth > 0 ? swipeProgress * 8 : 0);
            const layerOpacity = Math.min(
              1,
              1 - depth * 0.12 + (depth > 0 ? swipeProgress * 0.12 : 0),
            );

            return (
              <motion.div
                key={card.key}
                drag={isTop && isIdea}
                dragConstraints={
                  isTop ? { top: 0, bottom: 0, left: 0, right: 0 } : undefined
                }
                dragElastic={isTop ? 1 : undefined}
                dragMomentum={isTop ? true : undefined}
                dragTransition={
                  isTop
                    ? { bounceStiffness: 300, bounceDamping: 20 }
                    : undefined
                }
                onDrag={
                  isTop
                    ? (_, info) => {
                        if (!isIdea) return;
                        dragX.set(info.offset.x);
                        dragY.set(info.offset.y);
                        const progress = Math.max(
                          0,
                          Math.min(
                            1,
                            Math.max(
                              Math.abs(info.offset.x) /
                                (isTouchDevice ? 80 : 120),
                              Math.max(0, -info.offset.y) /
                                (isTouchDevice ? 80 : 120),
                            ),
                          ),
                        );
                        setSwipeProgress(progress);
                      }
                    : undefined
                }
                onDragEnd={
                  isTop
                    ? (event, info) => {
                        if (!isIdea) return;
                        void handleDragEnd(event, info);
                      }
                    : undefined
                }
                animate={
                  isTop
                    ? controls
                    : {
                        scale: layerScale,
                        y: layerY,
                        opacity: layerOpacity,
                      }
                }
                transition={
                  isTop
                    ? undefined
                    : { type: "spring", stiffness: 280, damping: 26 }
                }
                whileTap={
                  isTop && isIdea
                    ? { cursor: "grabbing", scale: 1.01 }
                    : undefined
                }
                style={
                  isTop
                    ? {
                        transformOrigin: "50% 80%",
                        rotate: dragRotate,
                        boxShadow: dragShadow,
                        x: dragX,
                        y: dragY,
                        zIndex: 10,
                      }
                    : {
                        zIndex: 0,
                      }
                }
                className={`border-border bg-background-surface absolute top-0 flex h-112.5 w-full flex-col overflow-hidden rounded-4xl border p-8 shadow-sm ${
                  isTop ? "touch-none" : "pointer-events-none"
                } ${isTop && isIdea ? "relative cursor-grab" : "cursor-default"}`}
              >
                {isIdea ? (
                  <>
                    {isTop && (
                      <>
                        <motion.div
                          className="pointer-events-none absolute inset-0 bg-red-50"
                          style={{ opacity: leftDragHighlightOpacity }}
                        />
                        <motion.div
                          className="pointer-events-none absolute inset-0 bg-emerald-50"
                          style={{ opacity: rightDragHighlightOpacity }}
                        />
                        <motion.div
                          className="pointer-events-none absolute inset-0 bg-sky-50"
                          style={{ opacity: topDragHighlightOpacity }}
                        />
                        <motion.div
                          className="pointer-events-none absolute inset-0 rounded-4xl border-2 border-red-300"
                          style={{ opacity: leftDragBorderOpacity }}
                        />
                        <motion.div
                          className="pointer-events-none absolute inset-0 rounded-4xl border-2 border-emerald-300"
                          style={{ opacity: rightDragBorderOpacity }}
                        />
                        <motion.div
                          className="pointer-events-none absolute inset-0 rounded-4xl border-2 border-sky-300"
                          style={{ opacity: topDragBorderOpacity }}
                        />
                      </>
                    )}

                    <div className="mb-auto flex items-center justify-between">
                      <span className="border-border bg-background-muted text-foreground-muted rounded-full border px-3 py-1.5 text-xs font-bold tracking-wide">
                        {index + depth + 1} / {stackQuery.data?.ideaCount ?? 0}
                      </span>
                      <Link
                        className="border-border bg-background-muted text-foreground-muted rounded-full border p-2 transition-colors hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-500"
                        href={`/ideas/${card.stackItem.idea.id}?from=stack`}
                        title="Details"
                      >
                        <Info className="h-5 w-5" />
                      </Link>
                    </div>

                    <div className="my-auto flex flex-col pt-4">
                      <h2 className="text-foreground mb-4 line-clamp-3 text-3xl leading-tight font-black tracking-tight transition-all hover:line-clamp-none">
                        {card.stackItem.idea.title}
                      </h2>
                      <p className="custom-scrollbar text-foreground-muted max-h-40 overflow-y-auto pr-2 text-base leading-relaxed font-medium">
                        {card.stackItem.idea.description}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-col items-center justify-center gap-2 border-t border-slate-100 pt-6 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      <div>
                        Swipe right to Like{" "}
                        <span className="mx-1 inline-block text-slate-300">
                          &bull;
                        </span>
                        Swipe up to Like + Fave
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="my-auto flex flex-col items-center justify-center text-center">
                    <div className="bg-background-muted mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                      <Star className="h-8 w-8 text-indigo-400" />
                    </div>
                    <h2 className="text-foreground mb-2 text-2xl font-bold">
                      You&apos;re caught up!
                    </h2>
                    <p className="text-foreground-muted mb-6 text-sm leading-relaxed">
                      {isStackExpired
                        ? "Your stack expired. Generate a new set of AI ideas based on your recent swipes."
                        : `Your current stack is still active until ${stackExpiresAt?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.`}
                    </p>
                    {isTop && (
                      <button
                        className="bg-foreground mt-2 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 font-semibold text-white transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:hover:scale-100"
                        onClick={async () => {
                          startStackStream(true);
                        }}
                        type="button"
                        disabled={!canGenerateNewStack}
                      >
                        {isStreamingStack
                          ? "Generating..."
                          : "Generate New Stack"}
                      </button>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}

        {/* Action Buttons */}
        {currentCard.kind === "idea" && (
          <div className="absolute right-0 bottom-0 left-0 z-10 flex items-center justify-center gap-6">
            <button
              className="group border-border bg-background-surface flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-sm transition-all hover:scale-110 hover:border-red-400 hover:bg-red-50 active:scale-95 disabled:opacity-50"
              onClick={() => triggerSwipe("left")}
              title="Dislike"
            >
              <X className="h-8 w-8 text-slate-400 transition-colors group-hover:text-red-500" />
            </button>

            <button
              className="group border-border bg-background-surface -mt-10 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-sm transition-all hover:scale-110 hover:border-sky-400 hover:bg-sky-50 active:scale-95 disabled:opacity-50"
              onClick={() => triggerSwipe("top")}
              title="Like + Favorite"
            >
              <Star className="h-6 w-6 text-slate-400 transition-all group-hover:fill-sky-500 group-hover:text-sky-500" />
            </button>

            <button
              className="group border-border bg-background-surface flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-sm transition-all hover:scale-110 hover:border-emerald-400 hover:bg-emerald-50 active:scale-95 disabled:opacity-50"
              onClick={() => triggerSwipe("right")}
              title="Like"
            >
              <Heart className="h-8 w-8 text-slate-400 transition-all group-hover:fill-emerald-500 group-hover:text-emerald-500" />
            </button>
          </div>
        )}
      </div>

      <section className="border-border bg-background-surface rounded-2xl border p-4 shadow-sm">
        <h3 className="text-foreground-surface text-sm font-semibold tracking-wide uppercase">
          Full Stack
        </h3>
        {isStackExhausted ? (
          <p className="text-foreground-muted mt-1 text-xs font-medium">
            Swipe recap: dislike, like, and favorite outcomes.
          </p>
        ) : null}
        <div className="mt-3 max-h-64 space-y-2 overflow-y-auto">
          {allItems.map((item, itemIndex) => {
            const itemStatus = swipeStatusByIdea[item.idea.id] ?? null;
            const isCurrent =
              currentCard.kind === "idea" && itemIndex === index;
            const isSeen = itemStatus !== null || itemIndex < index;

            const statusIcon =
              itemStatus === "dislike" ? (
                <X className="h-4 w-4 text-red-500" />
              ) : itemStatus === "like" ? (
                <Heart className="h-4 w-4 text-emerald-500" />
              ) : itemStatus === "fav" ? (
                <Star className="h-4 w-4 text-sky-500" />
              ) : null;

            return (
              <Link
                className={`block rounded-lg border px-3 py-2 text-sm transition ${
                  isCurrent
                    ? "border-indigo-200 bg-indigo-50 text-indigo-800"
                    : isSeen
                      ? "border-border bg-background-muted text-foreground-muted"
                      : "border-border bg-background-surface text-foreground-surface hover:border-slate-300"
                }`}
                href={`/ideas/${item.idea.id}?from=stack`}
                key={item.stackItemId}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="line-clamp-1 font-medium">{item.idea.title}</p>
                  <div className="flex items-center gap-2">
                    {isStackExhausted ? statusIcon : null}
                    <span className="text-xs">#{itemIndex + 1}</span>
                  </div>
                </div>
              </Link>
            );
          })}
          <div
            className={`rounded-lg border px-3 py-2 text-sm transition ${
              currentCard.kind === "caught-up"
                ? "border-indigo-200 bg-indigo-50 text-indigo-800"
                : "border-border bg-background-surface text-foreground-muted"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="line-clamp-1 font-medium">You&apos;re caught up</p>
              <span className="text-xs">
                #{(stackQuery.data?.ideaCount ?? 0) + 1}
              </span>
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
      `,
        }}
      />
    </div>
  );
}

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

export function IdeaTinder() {
  const utils = api.useUtils();
  const [index, setIndex] = useState(0);
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

    lastStackIdRef.current = nextStackId;
    setIndex(0);
    setVisibleCards(buildDeckCards(stackData.ideas));
  }, [stackQuery.data]);

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
  const allItems = stackQuery.data?.ideas ?? [];
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
      <div className="flex h-112.5 w-full max-w-sm flex-col items-center justify-center gap-4 rounded-4xl border border-slate-100 bg-white p-10 text-center shadow-xl md:max-w-2xl">
        <div className="mb-4 flex animate-pulse space-x-2">
          <div className="h-3 w-3 rounded-full bg-indigo-300"></div>
          <div
            className="h-3 w-3 rounded-full bg-indigo-300"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="h-3 w-3 rounded-full bg-indigo-300"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
        <h2 className="animate-pulse text-xl font-medium text-slate-500">
          Crafting ideas...
        </h2>
      </div>
    );
  }

  if (!preferencesQuery.data?.onboardingCompleted) {
    return (
      <div className="relative flex h-112.5 w-full max-w-sm flex-col items-center justify-center gap-6 overflow-hidden rounded-4xl border border-slate-100 bg-white p-10 text-center shadow-2xl md:max-w-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-indigo-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-32 w-32 rounded-full bg-blue-50 blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="mb-2 text-3xl font-bold text-slate-900">
            Complete Setup
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-500">
            Select your fields of interest first to personalize your
            AI-generated recommendations.
          </p>
          <Link
            className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white shadow-xl shadow-slate-200 transition-all hover:scale-105 active:scale-95"
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
            const layerScale = Math.min(1, 1 - depth * 0.03 + (depth > 0 ? swipeProgress * 0.03 : 0));
            const layerY = depth * 8 - (depth > 0 ? swipeProgress * 8 : 0);
            const layerOpacity = Math.min(1, 1 - depth * 0.12 + (depth > 0 ? swipeProgress * 0.12 : 0));

            return (
              <motion.div
                key={card.key}
                drag={isTop && isIdea}
                dragConstraints={isTop ? { top: 0, bottom: 0, left: 0, right: 0 } : undefined}
                dragElastic={isTop ? 1 : undefined}
                dragMomentum={isTop ? true : undefined}
                dragTransition={isTop ? { bounceStiffness: 300, bounceDamping: 20 } : undefined}
                onDrag={isTop ? (_, info) => {
                  if (!isIdea) return;
                  dragX.set(info.offset.x);
                  dragY.set(info.offset.y);
                  const progress = Math.max(
                    0,
                    Math.min(
                      1,
                      Math.max(
                        Math.abs(info.offset.x) / (isTouchDevice ? 80 : 120),
                        Math.max(0, -info.offset.y) / (isTouchDevice ? 80 : 120),
                      ),
                    ),
                  );
                  setSwipeProgress(progress);
                } : undefined}
                onDragEnd={isTop ? (event, info) => {
                  if (!isIdea) return;
                  void handleDragEnd(event, info);
                } : undefined}
                animate={isTop ? controls : {
                  scale: layerScale,
                  y: layerY,
                  opacity: layerOpacity,
                }}
                transition={isTop ? undefined : { type: "spring", stiffness: 280, damping: 26 }}
                whileTap={isTop && isIdea ? { cursor: "grabbing", scale: 1.01 } : undefined}
                style={isTop ? {
                  transformOrigin: "50% 80%",
                  rotate: dragRotate,
                  boxShadow: dragShadow,
                  x: dragX,
                  y: dragY,
                  zIndex: 10,
                } : {
                  zIndex: 0,
                }}
                className={`absolute top-0 flex h-112.5 w-full flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-lg ${
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
                      <span className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-bold tracking-wide text-slate-500">
                        {index + depth + 1} / {stackQuery.data?.ideaCount ?? 0}
                      </span>
                      <Link
                        className="rounded-full border border-slate-100 bg-slate-50 p-2 text-slate-400 transition-colors hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-500"
                        href={`/ideas/${card.stackItem.idea.id}`}
                        title="Details"
                      >
                        <Info className="h-5 w-5" />
                      </Link>
                    </div>

                    <div className="my-auto flex flex-col pt-4">
                      <h2 className="mb-4 line-clamp-3 text-3xl leading-tight font-black tracking-tight text-slate-900 transition-all hover:line-clamp-none">
                        {card.stackItem.idea.title}
                      </h2>
                      <p className="custom-scrollbar max-h-40 overflow-y-auto pr-2 text-base leading-relaxed font-medium text-slate-600">
                        {card.stackItem.idea.description}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-col items-center justify-center gap-2 border-t border-slate-50 pt-6 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      <div>
                        Swipe right to Like{" "}
                        <span className="mx-1 inline-block text-slate-300">&bull;</span>
                        Swipe up to Like + Fave
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="my-auto flex flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50">
                      <Star className="h-8 w-8 text-indigo-400" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-slate-900">
                      You&apos;re caught up!
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-slate-500">
                      Refresh to generate a new stack of AI ideas based on your recent swipes.
                    </p>
                    {isTop && (
                      <button
                        className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white shadow-xl shadow-slate-200 transition-all hover:scale-105 active:scale-95"
                        onClick={async () => {
                          startStackStream(true);
                        }}
                        type="button"
                      >
                        {isStreamingStack ? "Generating..." : "Generate New Stack"}
                      </button>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}

        {/* Action Buttons */}
        {currentCard.kind === "idea" && (
          <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-6">
            <button
              className="group flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-lg transition-all hover:scale-110 hover:border-red-400 hover:bg-red-50 active:scale-95 disabled:opacity-50"
              onClick={() => triggerSwipe("left")}
              title="Dislike"
            >
              <X className="h-8 w-8 text-slate-400 transition-colors group-hover:text-red-500" />
            </button>

            <button
              className="group -mt-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-lg transition-all hover:scale-110 hover:border-sky-400 hover:bg-sky-50 active:scale-95 disabled:opacity-50"
              onClick={() => triggerSwipe("top")}
              title="Like + Favorite"
            >
              <Star className="h-6 w-6 text-slate-400 transition-all group-hover:fill-sky-500 group-hover:text-sky-500" />
            </button>

            <button
              className="group flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-lg transition-all hover:scale-110 hover:border-emerald-400 hover:bg-emerald-50 active:scale-95 disabled:opacity-50"
              onClick={() => triggerSwipe("right")}
              title="Like"
            >
              <Heart className="h-8 w-8 text-slate-400 transition-all group-hover:fill-emerald-500 group-hover:text-emerald-500" />
            </button>
          </div>
        )}
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold tracking-wide text-slate-800 uppercase">
          Full Stack
        </h3>
        <div className="mt-3 max-h-64 space-y-2 overflow-y-auto">
          {allItems.map((item, itemIndex) => {
            const isCurrent = itemIndex === index;
            const isSeen = itemIndex < index;

            return (
              <Link
                className={`block rounded-lg border px-3 py-2 text-sm transition ${
                  isCurrent
                    ? "border-indigo-200 bg-indigo-50 text-indigo-800"
                    : isSeen
                      ? "border-slate-200 bg-slate-50 text-slate-500"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
                href={`/ideas/${item.idea.id}`}
                key={item.stackItemId}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="line-clamp-1 font-medium">{item.idea.title}</p>
                  <span className="text-xs">#{itemIndex + 1}</span>
                </div>
              </Link>
            );
          })}
          <div
            className={`rounded-lg border px-3 py-2 text-sm transition ${
              currentCard.kind === "caught-up"
                ? "border-indigo-200 bg-indigo-50 text-indigo-800"
                : "border-slate-200 bg-white text-slate-500"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="line-clamp-1 font-medium">You&apos;re caught up</p>
              <span className="text-xs">#{(stackQuery.data?.ideaCount ?? 0) + 1}</span>
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

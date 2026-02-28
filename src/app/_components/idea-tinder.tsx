"use client";

import { motion, useAnimation, type PanInfo } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { X, Heart, Star, Info } from "lucide-react";

import { api } from "~/trpc/react";

type SwipeDirection = "left" | "right" | "top";
type QueuedSwipe = {
  stackId: string;
  ideaId: string;
  direction: SwipeDirection;
};

export function IdeaTinder() {
  const utils = api.useUtils();
  const [index, setIndex] = useState(0);
  const [dragRotation, setDragRotation] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const controls = useAnimation();
  const pendingSwipesRef = useRef<QueuedSwipe[]>([]);
  const isProcessingRef = useRef(false);

  const preferencesQuery = api.idea.getPreferences.useQuery();
  const stackQuery = api.idea.getStack.useQuery(undefined, {
    enabled: preferencesQuery.data?.onboardingCompleted === true,
    refetchInterval: 30_000,
  });

  const swipeMutation = api.idea.swipeIdea.useMutation();

  useEffect(() => {
    setIndex(0);
  }, [stackQuery.data?.id]);

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

  const currentItem = stackQuery.data?.ideas[index] ?? null;
  const nextItem = stackQuery.data?.ideas[index + 1] ?? null;
  const allItems = stackQuery.data?.ideas ?? [];

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
    if (!currentItem || !stackQuery.data?.id) {
      return;
    }

    const swipeTravel = isTouchDevice ? 360 : 500;
    const x =
      direction === "left"
        ? -swipeTravel
        : direction === "right"
          ? swipeTravel
          : 0;
    const y = direction === "top" ? -swipeTravel : 0;
    const rotation =
      direction === "left" ? -16 : direction === "right" ? 16 : 0;

    setDragRotation(rotation);

    await controls.start({
      x,
      y,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    });

    setIndex((value) => value + 1);

    pendingSwipesRef.current.push({
      stackId: stackQuery.data.id,
      ideaId: currentItem.idea.id,
      direction,
    });
    processSwipeQueue();

    // Reset controls for the next card immediately after mutation is queued
    controls.set({ x: 0, y: 0, opacity: 1, scale: 1 });
    setDragRotation(0);
  };

  const handleDragEnd = async (_: unknown, info: PanInfo) => {
    const swipeThreshold = isTouchDevice ? 40 : 90;
    const velocityThreshold = isTouchDevice ? 160 : 420;

    const isLeftSwipe =
      info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold;
    const isRightSwipe =
      info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold;
    const isTopSwipe =
      info.offset.y < -swipeThreshold || info.velocity.y < -velocityThreshold;

    if (isTopSwipe) {
      await triggerSwipe("top");
    } else if (isRightSwipe) {
      await triggerSwipe("right");
    } else if (isLeftSwipe) {
      await triggerSwipe("left");
    } else {
      setDragRotation(0);
      void controls.start({ x: 0, y: 0, transition: { type: "spring" } });
    }
  };

  if (preferencesQuery.isPending || stackQuery.isPending) {
    return (
      <div className="flex h-112.5 w-full max-w-sm flex-col items-center justify-center gap-4 rounded-4xl border border-slate-100 bg-white p-10 text-center shadow-xl">
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
      <div className="relative flex h-112.5 w-full max-w-sm flex-col items-center justify-center gap-6 overflow-hidden rounded-4xl border border-slate-100 bg-white p-10 text-center shadow-2xl">
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

  if (!currentItem) {
    return (
      <div className="flex h-112.5 w-full max-w-sm flex-col items-center justify-center gap-6 rounded-4xl border border-slate-100 bg-white p-10 text-center shadow-2xl">
        <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50">
          <Star className="h-8 w-8 text-indigo-400" />
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            You&apos;re caught up!
          </h2>
          <p className="text-sm leading-relaxed text-slate-500">
            Refresh to generate a new stack of AI ideas based on your recent
            swipes.
          </p>
        </div>
        <button
          className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white shadow-xl shadow-slate-200 transition-all hover:scale-105 active:scale-95"
          onClick={async () => {
            await stackQuery.refetch();
            setIndex(0);
          }}
          type="button"
        >
          Generate New Stack
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-3xl flex-col gap-6">
      <div className="relative flex h-150 w-full max-w-sm flex-col items-center self-center select-none">
        {/* Background/Next card preview */}
        {nextItem && (
          <div className="absolute top-2 z-0 flex h-112.5 w-full scale-95 flex-col items-center justify-center overflow-hidden rounded-4xl border border-slate-200 bg-slate-50 opacity-80 shadow-sm">
            <div className="h-full w-full p-8 opacity-40 mix-blend-multiply blur-[2px]">
              <div className="mb-8 flex items-center justify-between">
                <div className="h-6 w-12 animate-pulse rounded-full bg-slate-300" />
                <div className="h-8 w-8 animate-pulse rounded-full bg-slate-300" />
              </div>
              <div className="mb-6 h-8 w-3/4 animate-pulse rounded-xl bg-slate-400" />
              <div className="space-y-3">
                <div className="h-4 w-full animate-pulse rounded-lg bg-slate-300" />
                <div className="h-4 w-5/6 animate-pulse rounded-lg bg-slate-300" />
                <div className="h-4 w-4/6 animate-pulse rounded-lg bg-slate-300" />
              </div>
            </div>
          </div>
        )}

        {/* Main card */}
        <motion.div
          drag
          dragElastic={isTouchDevice ? 0.95 : 0.9}
          dragMomentum
          onDrag={(_, info) => {
            const nextRotation = Math.max(
              -18,
              Math.min(18, info.offset.x / 10),
            );
            setDragRotation(nextRotation);
          }}
          onDragEnd={handleDragEnd}
          animate={controls}
          whileTap={{ cursor: "grabbing" }}
          style={{ transformOrigin: "50% 100%", rotate: dragRotation }}
          className="relative z-10 flex h-112.5 w-full cursor-grab touch-none flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-2xl"
        >
          <div className="mb-auto flex items-center justify-between">
            <span className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-bold tracking-wide text-slate-500">
              {index + 1} / {stackQuery.data?.ideaCount ?? 0}
            </span>
            <Link
              className="rounded-full border border-slate-100 bg-slate-50 p-2 text-slate-400 transition-colors hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-500"
              href={`/ideas/${currentItem.idea.id}`}
              title="Details"
            >
              <Info className="h-5 w-5" />
            </Link>
          </div>

          <div className="my-auto flex flex-col pt-4">
            <h2 className="mb-4 line-clamp-3 text-3xl leading-tight font-black tracking-tight text-slate-900 transition-all hover:line-clamp-none">
              {currentItem.idea.title}
            </h2>
            <p className="custom-scrollbar max-h-40 overflow-y-auto pr-2 text-base leading-relaxed font-medium text-slate-600">
              {currentItem.idea.description}
            </p>
          </div>

          <div className="mt-auto flex flex-col items-center justify-center gap-2 border-t border-slate-50 pt-6 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            <div>
              Swipe right to Like{" "}
              <span className="mx-1 inline-block text-slate-300">•</span> Swipe
              up to Fave
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="z-10 mt-8 flex items-center gap-6">
          <button
            className="group flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-lg transition-all hover:scale-110 hover:border-red-400 hover:bg-red-50 active:scale-95 disabled:opacity-50"
            onClick={() => triggerSwipe("left")}
            title="Dislike"
          >
            <X className="h-8 w-8 text-slate-400 transition-colors group-hover:text-red-500" />
          </button>

          <button
            className="group mb-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-lg transition-all hover:scale-110 hover:border-sky-400 hover:bg-sky-50 active:scale-95 disabled:opacity-50"
            onClick={() => triggerSwipe("top")}
            title="Favorite"
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

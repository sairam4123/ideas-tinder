"use client";

import { useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { X, Heart, Star } from "lucide-react";

import { useIdeaDeck } from "./use-idea-deck";
import { useTouchDevice } from "./use-touch-device";
import { LoadingState } from "./loading-state";
import { OnboardingPrompt } from "./onboarding-prompt";
import { DeckCard } from "./deck-card";
import { StackList } from "./stack-list";
import type { SwipeDirection } from "./types";

export function IdeaTinder() {
  const deck = useIdeaDeck();
  const isTouchDevice = useTouchDevice();

  const [swipeProgress, setSwipeProgress] = useState(0);
  const controls = useAnimation();

  // Motion values
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

  const triggerSwipe = async (direction: SwipeDirection) => {
    if (!deck.currentIdea || !deck.effectiveStackId) {
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

    const committed = deck.commitSwipe(direction);
    if (!committed) {
      // Revert if swipe wasn't possible
      dragX.set(0);
      dragY.set(0);
      controls.set({ x: 0, y: 0, opacity: 1, scale: 1 });
      setSwipeProgress(0);
      return;
    }

    // Reset motion values for the new top card
    dragX.set(0);
    dragY.set(0);
    controls.set({ x: 0, y: 0, opacity: 1, scale: 1 });
    setSwipeProgress(0);
  };

  if (deck.isDeckLoading) {
    return <LoadingState />;
  }

  if (!deck.isOnboardingCompleted) {
    return <OnboardingPrompt />;
  }

  if (!deck.currentCard) {
    return null;
  }

  return (
    <div className="flex w-full max-w-5xl flex-col gap-6">
      <div className="relative flex h-150 w-full max-w-sm flex-col items-center self-center select-none md:max-w-2xl">
        {/* Unified card stack */}
        {deck.deckCards
          .slice()
          .reverse()
          .map((card, layerIndex) => {
            const depth = deck.deckCards.length - 1 - layerIndex;

            return (
              <DeckCard
                key={card.key}
                card={card}
                depth={depth}
                index={deck.index}
                effectiveIdeaCount={deck.effectiveIdeaCount}
                isStreamingStack={deck.isStreamingStack}
                streamProgress={deck.streamProgress}
                isStackExpired={deck.isStackExpired}
                stackExpiresAt={deck.stackExpiresAt}
                canGenerateNewStack={deck.canGenerateNewStack}
                onGenerateNewStack={() => deck.startStackStream(true)}
                isTouchDevice={isTouchDevice}
                swipeProgress={swipeProgress}
                onSwipeProgress={setSwipeProgress}
                onSwipe={triggerSwipe}
                controls={controls}
                dragX={dragX}
                dragY={dragY}
                dragRotate={dragRotate}
                dragShadow={dragShadow}
                leftDragHighlightOpacity={leftDragHighlightOpacity}
                rightDragHighlightOpacity={rightDragHighlightOpacity}
                topDragHighlightOpacity={topDragHighlightOpacity}
                leftDragBorderOpacity={leftDragBorderOpacity}
                rightDragBorderOpacity={rightDragBorderOpacity}
                topDragBorderOpacity={topDragBorderOpacity}
              />
            );
          })}

        {/* Action Buttons */}
        {deck.currentCard.kind === "idea" && (
          <div className="absolute right-0 bottom-0 left-0 z-10 flex items-center justify-center gap-6">
            <button
              className="group border-border bg-background-surface flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-sm transition-all hover:scale-110 hover:border-red-400 hover:bg-red-50 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => triggerSwipe("left")}
              title="Dislike"
              disabled={deck.isStreamingStack && deck.currentCard.kind === "idea" && deck.currentCard.stackItem.idea.id.startsWith("placeholder-")}
            >
              <X className="h-8 w-8 text-slate-400 transition-colors group-hover:text-red-500" />
            </button>

            <button
              className="group border-border bg-background-surface -mt-10 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-sm transition-all hover:scale-110 hover:border-sky-400 hover:bg-sky-50 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => triggerSwipe("top")}
              title="Like + Favorite"
              disabled={deck.isStreamingStack && deck.currentCard.kind === "idea" && deck.currentCard.stackItem.idea.id.startsWith("placeholder-")}
            >
              <Star className="h-6 w-6 text-slate-400 transition-all group-hover:fill-sky-500 group-hover:text-sky-500" />
            </button>

            <button
              className="group border-border bg-background-surface flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-sm transition-all hover:scale-110 hover:border-emerald-400 hover:bg-emerald-50 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => triggerSwipe("right")}
              title="Like"
              disabled={deck.isStreamingStack && deck.currentCard.kind === "idea" && deck.currentCard.stackItem.idea.id.startsWith("placeholder-")}
            >
              <Heart className="h-8 w-8 text-slate-400 transition-all group-hover:fill-emerald-500 group-hover:text-emerald-500" />
            </button>
          </div>
        )}
      </div>

      <StackList
        allItems={deck.allItems}
        currentCard={deck.currentCard}
        index={deck.index}
        swipeStatusByIdea={deck.swipeStatusByIdea}
        effectiveIdeaCount={deck.effectiveIdeaCount}
        isStackExhausted={deck.isStackExhausted}
        isStreamingStack={deck.isStreamingStack}
      />

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

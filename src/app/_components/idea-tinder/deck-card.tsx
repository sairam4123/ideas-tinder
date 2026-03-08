import {
  motion,
  type LegacyAnimationControls,
  type MotionValue,
  type PanInfo,
} from "framer-motion";
import Link from "next/link";
import { Info, Star } from "lucide-react";

import type {
  DeckCard as DeckCardType,
  StackStreamProgress,
  SwipeDirection,
} from "./types";

type DeckCardProps = {
  card: DeckCardType;
  depth: number;
  effectiveIdeaCount: number;
  generatedIdeaCount: number;
  index: number;
  isStreamingStack: boolean;
  streamProgress: StackStreamProgress | null;
  isStackExpired: boolean;
  stackExpiresAt: Date | null;
  canGenerateNewStack: boolean;
  onGenerateNewStack: () => void;
  isTouchDevice: boolean;
  swipeProgress: number;
  onSwipeProgress: (progress: number) => void;
  onSwipe: (direction: SwipeDirection) => Promise<void>;
  controls: LegacyAnimationControls;
  dragX: MotionValue<number>;
  dragY: MotionValue<number>;
  dragRotate: MotionValue<number>;
  dragShadow: MotionValue<string>;
  leftDragHighlightOpacity: MotionValue<number>;
  rightDragHighlightOpacity: MotionValue<number>;
  topDragHighlightOpacity: MotionValue<number>;
  leftDragBorderOpacity: MotionValue<number>;
  rightDragBorderOpacity: MotionValue<number>;
  topDragBorderOpacity: MotionValue<number>;
};

export function DeckCard(props: DeckCardProps) {
  const {
    card,
    depth,
    effectiveIdeaCount,
    generatedIdeaCount,
    index,
    isStreamingStack,
    streamProgress,
    isStackExpired,
    stackExpiresAt,
    canGenerateNewStack,
    onGenerateNewStack,
    isTouchDevice,
    swipeProgress,
    onSwipeProgress,
    onSwipe,
    controls,
    dragX,
    dragY,
    dragRotate,
    dragShadow,
    leftDragHighlightOpacity,
    rightDragHighlightOpacity,
    topDragHighlightOpacity,
    leftDragBorderOpacity,
    rightDragBorderOpacity,
    topDragBorderOpacity,
  } = props;

  const isTop = depth === 0;
  const isIdea = card.kind === "idea";
  const isPlaceholder = isIdea && card.stackItem.idea.id.startsWith("placeholder-");

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
      await onSwipe(projectedX < 0 ? "left" : "right");
    } else if (isTopSwipe) {
      await onSwipe("top");
    } else {
      onSwipeProgress(0);
      void controls.start({
        x: 0,
        y: 0,
        transition: { type: "spring", stiffness: 500, damping: 28, mass: 0.7 },
      });
    }
  };

  return (
    <motion.div
      drag={isTop && isIdea && !isPlaceholder}
      dragConstraints={
        isTop && !isPlaceholder ? { top: 0, bottom: 0, left: 0, right: 0 } : undefined
      }
      dragElastic={isTop && !isPlaceholder ? 1 : undefined}
      dragMomentum={isTop && !isPlaceholder ? true : undefined}
      dragTransition={
        isTop && !isPlaceholder ? { bounceStiffness: 300, bounceDamping: 20 } : undefined
      }
      onDrag={
        isTop && !isPlaceholder
          ? (_, info) => {
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
            onSwipeProgress(progress);
          }
          : undefined
      }
      onDragEnd={
        isTop && !isPlaceholder
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
        isTop ? undefined : { type: "spring", stiffness: 280, damping: 26 }
      }
      whileTap={
        isTop && isIdea ? { cursor: "grabbing", scale: 1.01 } : undefined
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
      className={`border-border bg-background-surface absolute top-0 flex h-112.5 w-full flex-col overflow-hidden rounded-3xl sm:rounded-4xl p-6 sm:p-8 shadow-sm ${isTop && !isPlaceholder ? "touch-none" : "pointer-events-none"
        } ${isTop && isIdea && !isPlaceholder ? "relative cursor-grab" : "cursor-default"}`}
    >
      {isIdea ? (
        <>
          {isTop && (
            <>
              <motion.div
                className="pointer-events-none absolute inset-0 bg-danger-soft"
                style={{ opacity: leftDragHighlightOpacity }}
              />
              <motion.div
                className="pointer-events-none absolute inset-0 bg-success-soft"
                style={{ opacity: rightDragHighlightOpacity }}
              />
              <motion.div
                className="pointer-events-none absolute inset-0 bg-info-soft"
                style={{ opacity: topDragHighlightOpacity }}
              />
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-4xl border-4 border-danger/40"
                style={{ opacity: leftDragBorderOpacity }}
              />
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-4xl border-4 border-success/40"
                style={{ opacity: rightDragBorderOpacity }}
              />
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-4xl border-4 border-info/40"
                style={{ opacity: topDragBorderOpacity }}
              />
            </>
          )}

          <div className="mb-auto flex items-center justify-between">
            <span className="border-border bg-background-muted text-foreground-muted rounded-full border px-3 py-1.5 text-xs font-bold tracking-wide">
              {index + depth + 1} / {generatedIdeaCount}
            </span>
            <Link
              className="border-border bg-background-muted text-foreground-muted rounded-full border p-2 transition-colors hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-500"
              href={`/ideas/${card.stackItem.idea.id}?from=stack`}
              title="Details"
            >
              <Info className="h-5 w-5" />
            </Link>
          </div>

          <div className="my-auto flex flex-col pt-2 sm:pt-4">
            {card.stackItem.idea.field ? (
              <div className="mb-2 sm:mb-3">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg">
                  {card.stackItem.idea.field.label}
                </span>
              </div>
            ) : null}
            <h2 className="text-foreground mb-2 sm:mb-4 line-clamp-3 text-2xl sm:text-3xl leading-tight font-black tracking-tight transition-all hover:line-clamp-none">
              {card.stackItem.idea.title}
            </h2>
            <p className="custom-scrollbar text-foreground-muted line-clamp-4 sm:line-clamp-none sm:max-h-40 overflow-y-auto pr-2 text-sm leading-relaxed font-medium">
              {card.stackItem.idea.description}
            </p>

            {/* Tags array */}
            {card.stackItem.idea.tags && card.stackItem.idea.tags.length > 0 ? (
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-4">
                {card.stackItem.idea.tags.map((tag) => (
                  <div key={tag.tagId} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {tag.label}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="mt-auto flex flex-col items-center justify-center gap-2 border-t border-border pt-6 text-[10px] font-bold tracking-widest text-foreground-muted uppercase">
            <div>
              Swipe right to Like{" "}
              <span className="mx-1 inline-block text-border">&bull;</span>
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
            {isStreamingStack ? "Generating ideas..." : "You're caught up!"}
          </h2>
          <p className="text-foreground-muted mb-6 text-sm leading-relaxed">
            {isStreamingStack
              ? "We are currently generating new ideas based on your preferences. Please wait..."
              : isStackExpired
                ? "Your stack expired. Generate a new set of AI ideas based on your recent swipes."
                : !stackExpiresAt
                  ? "Generate your first deck of AI startup concepts to get started."
                  : `Your current stack is still active until ${stackExpiresAt.toLocaleTimeString(
                    [],
                    { hour: "2-digit", minute: "2-digit" },
                  )}.`}
          </p>
          {isTop && (
            <button
              className="bg-primary mt-2 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 font-semibold text-primary-foreground transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:bg-primary/20 disabled:text-foreground-muted disabled:hover:scale-100"
              onClick={onGenerateNewStack}
              type="button"
              disabled={!canGenerateNewStack}
            >
              {isStreamingStack
                ? streamProgress && streamProgress.total > 0
                  ? `${streamProgress.message} ${Math.min(streamProgress.current, streamProgress.total)}/${streamProgress.total}`
                  : "Generating ideas..."
                : "Generate New Stack"}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
}

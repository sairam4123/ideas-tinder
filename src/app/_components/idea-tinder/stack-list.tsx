import Link from "next/link";
import { Heart, Star, X } from "lucide-react";

import type { DeckCard, StackIdea, SwipeStatus } from "./types";

type StackListProps = {
  allItems: StackIdea[];
  currentCard: DeckCard;
  index: number;
  swipeStatusByIdea: Record<string, SwipeStatus>;
  effectiveIdeaCount: number;
  isStackExhausted: boolean;
  isStreamingStack: boolean;
};

export function StackList(props: StackListProps) {
  const {
    allItems,
    currentCard,
    index,
    swipeStatusByIdea,
    effectiveIdeaCount,
    isStackExhausted,
    isStreamingStack,
  } = props;

  const pendingCount = Math.max(0, effectiveIdeaCount - allItems.length);

  return (
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
          const isCurrent = currentCard.kind === "idea" && itemIndex === index;
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
        {isStreamingStack
          ? Array.from({ length: pendingCount }, (_, pendingIndex) => {
              const slotNumber = allItems.length + pendingIndex + 1;
              return (
                <div
                  className="border-border bg-background-muted/60 rounded-lg border border-dashed px-3 py-2 text-sm"
                  key={`pending-${slotNumber}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="line-clamp-1 font-medium text-slate-500">
                      Generating card...
                    </p>
                    <span className="text-xs text-slate-500">
                      #{slotNumber}
                    </span>
                  </div>
                </div>
              );
            })
          : null}
        <div
          className={`rounded-lg border px-3 py-2 text-sm transition ${
            currentCard.kind === "caught-up"
              ? "border-indigo-200 bg-indigo-50 text-indigo-800"
              : "border-border bg-background-surface text-foreground-muted"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <p className="line-clamp-1 font-medium">You&apos;re caught up</p>
            <span className="text-xs">#{effectiveIdeaCount + 1}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

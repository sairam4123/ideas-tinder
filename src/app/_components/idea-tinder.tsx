"use client";

import { useMemo, useState } from "react";

type SwipeDirection = "left" | "right";

type Idea = {
  id: number;
  title: string;
  pitch: string;
  tags: string[];
};

const IDEAS: Idea[] = [
  {
    id: 1,
    title: "Parking Buddy",
    pitch:
      "Live neighborhood map showing free parking spots from user reports.",
    tags: ["Mobility", "Local", "Crowdsourced"],
  },
  {
    id: 2,
    title: "Fridge Chef",
    pitch: "Generate dinner recipes from what you already have in your fridge.",
    tags: ["Food", "AI", "Household"],
  },
  {
    id: 3,
    title: "Study Sprints",
    pitch:
      "Find instant 25-minute online focus sessions with accountability peers.",
    tags: ["Education", "Productivity", "Community"],
  },
  {
    id: 4,
    title: "Pet Pulse",
    pitch: "Daily pet wellbeing check-ins that flag unusual behavior patterns.",
    tags: ["Pets", "Health", "Tracking"],
  },
  {
    id: 5,
    title: "Event Split",
    pitch: "Group event planning with built-in budget splitting and reminders.",
    tags: ["Events", "Finance", "Social"],
  },
];

const SWIPE_DISTANCE_THRESHOLD = 90;
const SWIPE_VELOCITY_THRESHOLD = 0.45;

export function IdeaTinder() {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [lastClientX, setLastClientX] = useState<number | null>(null);
  const [lastMoveTime, setLastMoveTime] = useState<number | null>(null);
  const [velocityX, setVelocityX] = useState(0);
  const [swipeOut, setSwipeOut] = useState<SwipeDirection | null>(null);

  const currentIdea = IDEAS[index] ?? null;
  const visibleIdeas = IDEAS.slice(index, index + 3);
  const totalIdeas = IDEAS.length;

  const stackStyles = useMemo(
    () => [
      { transform: "translateY(0px) scale(1) translateZ(0px)", opacity: 1 },
      {
        transform: "translateY(12px) scale(0.97) translateZ(-90px)",
        opacity: 0.88,
      },
      {
        transform: "translateY(24px) scale(0.94) translateZ(-180px)",
        opacity: 0.74,
      },
    ],
    [],
  );

  function getCardStyle(relativeIndex: number) {
    if (relativeIndex === 0) {
      if (swipeOut === "left") {
        return {
          transform: "translateX(-560px) rotate(-24deg)",
          opacity: 0,
        };
      }

      if (swipeOut === "right") {
        return {
          transform: "translateX(560px) rotate(24deg)",
          opacity: 0,
        };
      }

      const rotate = dragX * 0.08;
      return {
        transform: `translateX(${dragX}px) rotate(${rotate}deg) translateZ(0px)`,
        opacity: 1,
      };
    }

    return stackStyles[relativeIndex] ?? stackStyles[stackStyles.length - 1]!;
  }

  function startDrag(clientX: number) {
    if (!currentIdea || swipeOut) {
      return;
    }

    setStartX(clientX);
    setLastClientX(clientX);
    setLastMoveTime(Date.now());
    setVelocityX(0);
    setIsDragging(true);
  }

  function updateDrag(clientX: number) {
    if (!isDragging || startX === null || swipeOut) {
      return;
    }

    const now = Date.now();
    if (lastClientX !== null && lastMoveTime !== null) {
      const deltaTime = now - lastMoveTime;
      if (deltaTime > 0) {
        setVelocityX((clientX - lastClientX) / deltaTime);
      }
    }

    setLastClientX(clientX);
    setLastMoveTime(now);

    setDragX(clientX - startX);
  }

  function triggerSwipe(direction: SwipeDirection) {
    if (!currentIdea || swipeOut) {
      return;
    }

    setIsDragging(false);
    setSwipeOut(direction);
  }

  function handleCardTransitionEnd(
    event: React.TransitionEvent<HTMLDivElement>,
  ) {
    if (!swipeOut || event.propertyName !== "transform") {
      return;
    }

    setIndex((previousIndex) => previousIndex + 1);
    setSwipeOut(null);
    setDragX(0);
    setStartX(null);
    setLastClientX(null);
    setLastMoveTime(null);
    setVelocityX(0);
    setIsDragging(false);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") {
      event.preventDefault();
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    startDrag(event.clientX);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") {
      event.preventDefault();
    }

    updateDrag(event.clientX);
  }

  function handlePointerEnd() {
    if (!isDragging || swipeOut) {
      return;
    }

    setIsDragging(false);

    const shouldSwipeRight =
      dragX > SWIPE_DISTANCE_THRESHOLD || velocityX > SWIPE_VELOCITY_THRESHOLD;
    const shouldSwipeLeft =
      dragX < -SWIPE_DISTANCE_THRESHOLD ||
      velocityX < -SWIPE_VELOCITY_THRESHOLD;

    if (shouldSwipeRight) {
      triggerSwipe("right");
      return;
    }

    if (shouldSwipeLeft) {
      triggerSwipe("left");
      return;
    }

    setDragX(0);
    setVelocityX(0);
    setLastClientX(null);
    setLastMoveTime(null);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    if (event.touches.length !== 1) {
      return;
    }

    const touch = event.touches.item(0);
    if (!touch) {
      return;
    }

    event.preventDefault();
    startDrag(touch.clientX);
  }

  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    if (event.touches.length !== 1) {
      return;
    }

    const touch = event.touches.item(0);
    if (!touch) {
      return;
    }

    event.preventDefault();
    updateDrag(touch.clientX);
  }

  function handleTouchEnd() {
    handlePointerEnd();
  }

  if (!currentIdea) {
    return (
      <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-900">No more ideas</h2>
        <p className="text-slate-600">You reached the end of the deck.</p>
        <button
          className="rounded-full bg-slate-900 px-6 py-2 font-medium text-white transition hover:bg-slate-700"
          onClick={() => {
            setIndex(0);
            setDragX(0);
            setSwipeOut(null);
          }}
          type="button"
        >
          Restart deck
        </button>
      </div>
    );
  }

  const showDislike = dragX < -28;
  const showLike = dragX > 28;

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 select-none">
      <div className="relative h-[460px] w-full [perspective:1000px]">
        {visibleIdeas
          .slice()
          .reverse()
          .map((idea) => {
            const relativeIndex = visibleIdeas.findIndex(
              (visibleIdea) => visibleIdea.id === idea.id,
            );
            const isTopCard = relativeIndex === 0;

            return (
              <div
                key={idea.id}
                className={`absolute inset-0 transform-gpu transition-opacity transition-transform ${
                  isTopCard && isDragging ? "duration-0" : "duration-300"
                }`}
                onTransitionEnd={
                  isTopCard ? handleCardTransitionEnd : undefined
                }
                style={getCardStyle(relativeIndex)}
              >
                <div
                  className={`absolute inset-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl ${
                    isTopCard
                      ? `touch-none transition-opacity transition-transform duration-200 ${
                          isDragging ? "cursor-grabbing" : "cursor-grab"
                        }`
                      : "pointer-events-none"
                  }`}
                  onPointerDown={isTopCard ? handlePointerDown : undefined}
                  onPointerMove={isTopCard ? handlePointerMove : undefined}
                  onPointerUp={isTopCard ? handlePointerEnd : undefined}
                  onPointerLeave={isTopCard ? handlePointerEnd : undefined}
                  onPointerCancel={isTopCard ? handlePointerEnd : undefined}
                  onTouchStart={isTopCard ? handleTouchStart : undefined}
                  onTouchMove={isTopCard ? handleTouchMove : undefined}
                  onTouchEnd={isTopCard ? handleTouchEnd : undefined}
                  onTouchCancel={isTopCard ? handleTouchEnd : undefined}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        Idea {index + 1}/{totalIdeas}
                      </span>
                      {isTopCard && showDislike ? (
                        <span className="rounded-md border-2 border-red-500 px-2 py-1 text-xs font-bold tracking-wide text-red-500">
                          NOPE
                        </span>
                      ) : null}
                      {isTopCard && showLike ? (
                        <span className="rounded-md border-2 border-emerald-500 px-2 py-1 text-xs font-bold tracking-wide text-emerald-500">
                          LIKE
                        </span>
                      ) : null}
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-slate-900">
                        {idea.title}
                      </h2>
                      <p className="text-lg leading-relaxed text-slate-700">
                        {idea.pitch}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {idea.tags.map((tag) => (
                          <span
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-slate-500">
                      {isTopCard
                        ? "Drag left or right to swipe"
                        : `In stack: ${idea.title}`}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex items-center gap-4">
        <button
          className="rounded-full border border-red-300 bg-red-50 px-5 py-2 font-semibold text-red-600 transition hover:bg-red-100"
          onClick={() => {
            triggerSwipe("left");
          }}
          type="button"
        >
          Dislike
        </button>
        <button
          className="rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2 font-semibold text-emerald-600 transition hover:bg-emerald-100"
          onClick={() => {
            triggerSwipe("right");
          }}
          type="button"
        >
          Like
        </button>
      </div>
    </div>
  );
}

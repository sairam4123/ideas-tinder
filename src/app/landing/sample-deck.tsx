"use client";

import { useState } from "react";
import { motion, useAnimationControls, useMotionValue, useTransform } from "framer-motion";
import { Info, Star } from "lucide-react";

import { useTouchDevice } from "~/app/_components/idea-tinder/use-touch-device";

type MockIdea = {
    id: string;
    title: string;
    description: string;
    field: string;
    tags: string[];
};

const SAMPLE_IDEAS: MockIdea[] = [
    {
        id: "sample-1",
        field: "Productivity",
        title: "AI-Native Calendar Optimizer",
        description:
            "A calendar agent that automatically reschedules your meetings, guards focus time based on your biorhythms, and actively negotiates time with colleagues so you don't have to.",
        tags: ["Scheduling", "B2B", "LLMs"],
    },
    {
        id: "sample-2",
        field: "SaaS • DevTools",
        title: "Self-Healing E2E Test Generator",
        description:
            "A testing platform that observes users in production, automatically generates Playwright/Cypress tests for their exact flows, and self-repairs the tests when your UI changes.",
        tags: ["Testing", "Automation", "QA"],
    },
    {
        id: "sample-3",
        field: "EdTech",
        title: "Hyper-Personalized Math Tutor",
        description:
            "An voice-first AI tutor that learns exactly how a student learns best. It explains complex concepts using analogies tailored to their specific hobbies and interests.",
        tags: ["Education", "Voice AI", "B2C"],
    },
    {
        id: "sample-4",
        field: "FinTech",
        title: "Automated Expense Arbiter",
        description:
            "Expense management software that hooks into corporate cards, automatically categorizes and requests justifications over Slack, and directly syncs with your accounting software.",
        tags: ["Automation", "Finance", "B2B"],
    },
    {
        id: "sample-5",
        field: "HealthTech",
        title: "Dietary Restriction Scanner",
        description:
            "An AR app where you point your camera at any restaurant menu or grocery barcode, and it instantly highlights what you can eat based on your complex allergy profile.",
        tags: ["AR", "Wellness", "B2C"],
    },
];

export function SampleDeck() {
    const [index, setIndex] = useState(0);
    const isTouchDevice = useTouchDevice();
    const [swipeProgress, setSwipeProgress] = useState(0);

    const controls = useAnimationControls();
    const dragX = useMotionValue(0);
    const dragY = useMotionValue(0);

    // Styling transforms based on drag
    const dragRotate = useTransform(dragX, [-200, 200], [-10, 10]);
    const dragShadow = useTransform(
        dragY,
        [0, 50],
        [
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        ]
    );

    // Highlight transforms
    const leftDragHighlightOpacity = useTransform(dragX, [-40, -100], [0, 0.4]);
    const rightDragHighlightOpacity = useTransform(dragX, [40, 100], [0, 0.4]);
    const topDragHighlightOpacity = useTransform(dragY, [-40, -100], [0, 0.4]);
    const leftDragBorderOpacity = useTransform(dragX, [-40, -120], [0, 1]);
    const rightDragBorderOpacity = useTransform(dragX, [40, 120], [0, 1]);
    const topDragBorderOpacity = useTransform(dragY, [-40, -120], [0, 1]);

    const onSwipe = async (direction: "left" | "right" | "top") => {
        const x = direction === "left" ? -1000 : direction === "right" ? 1000 : 0;
        const y = direction === "top" ? -1000 : 0;

        await controls.start({
            x,
            y,
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.4 },
        });

        setIndex((prev) => prev + 1);
        setSwipeProgress(0);

        dragX.set(0);
        dragY.set(0);

        // Reset position instantly before making it visible again for next card
        await controls.start({
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.01 },
        });
    };

    const remainingIdeas = SAMPLE_IDEAS.slice(index, index + 3); // Show top 3 max

    return (
        <div className="relative mx-auto mt-12 flex h-112.5 w-full max-w-sm flex-col perspective-1000">
            {remainingIdeas.length === 0 && (
                <div className="border-border bg-background-surface absolute top-0 flex h-112.5 w-full flex-col overflow-hidden rounded-4xl border p-8 shadow-sm justify-center items-center text-center">
                    <div className="bg-background-muted mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                        <Star className="h-8 w-8 text-indigo-400" />
                    </div>
                    <h2 className="text-foreground mb-2 text-2xl font-bold">
                        You swiped them all!
                    </h2>
                    <p className="text-foreground-muted mb-6 text-sm leading-relaxed">
                        Sign up to get a never-ending stream of personalized AI ideas matching your builder DNA.
                    </p>
                </div>
            )}

            {remainingIdeas.slice().reverse().map((idea, reversedLayerIndex) => {
                const i = remainingIdeas.length - 1 - reversedLayerIndex;
                const globalIndex = index + i;
                const depth = i;
                const isTop = depth === 0;

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
                        key={idea.id}
                        drag={isTop}
                        dragConstraints={isTop ? { top: 0, bottom: 0, left: 0, right: 0 } : undefined}
                        dragElastic={isTop ? 1 : undefined}
                        dragMomentum={isTop ? true : undefined}
                        dragTransition={isTop ? { bounceStiffness: 300, bounceDamping: 20 } : undefined}
                        onDrag={
                            isTop
                                ? (_, info) => {
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
                                }
                                : undefined
                        }
                        onDragEnd={
                            isTop
                                ? async (_, info) => {
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
                                        setSwipeProgress(0);
                                        void controls.start({
                                            x: 0,
                                            y: 0,
                                            transition: { type: "spring", stiffness: 500, damping: 28, mass: 0.7 },
                                        });
                                    }
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
                        transition={isTop ? undefined : { type: "spring", stiffness: 280, damping: 26 }}
                        whileTap={isTop ? { cursor: "grabbing", scale: 1.01 } : undefined}
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
                        className={`border-border bg-background-surface absolute top-0 flex h-112.5 w-full flex-col overflow-hidden rounded-3xl sm:rounded-4xl p-6 sm:p-8 shadow-sm ${isTop ? "relative cursor-grab touch-none" : "pointer-events-none"
                            }`}
                    >
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
                                {globalIndex + 1} / {SAMPLE_IDEAS.length}
                            </span>
                            <div
                                className="border-border bg-background-muted text-foreground-muted rounded-full border p-2 cursor-pointer transition-colors hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-500"
                                title="Details"
                            >
                                <Info className="h-5 w-5" />
                            </div>
                        </div>

                        <div className="my-auto flex flex-col pt-2 sm:pt-4">
                            <div className="mb-2 sm:mb-3">
                                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg">
                                    {idea.field}
                                </span>
                            </div>
                            <h2 className="text-foreground mb-2 sm:mb-4 line-clamp-3 text-2xl sm:text-3xl leading-tight font-black tracking-tight transition-all hover:line-clamp-none">
                                {idea.title}
                            </h2>
                            <p className="custom-scrollbar text-foreground-muted line-clamp-4 sm:line-clamp-none sm:max-h-40 overflow-y-auto pr-2 text-sm leading-relaxed font-medium">
                                {idea.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-4">
                                {idea.tags.map((tag) => (
                                    <div key={tag} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto flex flex-col items-center justify-center gap-2 border-t border-border pt-6 text-[10px] font-bold tracking-widest text-foreground-muted uppercase">
                            <div>
                                Swipe right to Like{" "}
                                <span className="mx-1 inline-block text-border">&bull;</span>
                                Swipe up to Like + Fave
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

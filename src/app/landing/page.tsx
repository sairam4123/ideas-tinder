"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Zap, Repeat, Bot, Target, Info } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { SampleDeck } from "./sample-deck";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative flex min-h-[calc(100vh-73px)] w-full flex-col items-center justify-center overflow-hidden bg-background selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900/50 dark:selection:text-indigo-100">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      {/* Radial soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative px-6 py-24 mx-auto max-w-6xl w-full flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side: Copy */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10 pt-16 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 dark:border-indigo-900/50 dark:bg-indigo-900/20 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:text-indigo-300 shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Ideation Engine</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-slate-900 dark:text-white text-5xl leading-tight font-black tracking-tighter md:text-6xl lg:text-7xl"
          >
            Swipe to find your next{" "}
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              unicorn pivot.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-slate-600 dark:text-slate-400 max-w-xl text-lg leading-relaxed font-medium md:text-xl"
          >
            Swipe through endless streams of fresh, AI-generated startup concepts. We track your preferences through a mathematical vector space to align future ideas with your exact builder DNA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex w-full flex-col sm:flex-row items-center gap-4 pt-4 lg:justify-start"
          >
            <Link
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:bg-primary/90 active:scale-95"
              href="/auth/register"
            >
              Start Generating
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              className="group flex w-full sm:w-auto flex-col items-center justify-center rounded-full border-2 border-border bg-background-surface/50 px-8 py-4 font-semibold text-foreground backdrop-blur-sm transition-all hover:border-border hover:bg-background-surface active:scale-95"
              href="/auth/login"
            >
              Log back in
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-8 flex items-center gap-6 text-sm font-medium text-slate-500"
          >
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              <span>Gemini 2.5 Flash</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <span>Vector Similarity</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visual Mockup */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative mt-16 lg:mt-0 h-[500px] lg:h-[600px] perspective-1000">
          {mounted && (
            <div className="relative w-full max-w-[340px] h-[480px]">
              {/* Card 3 (Back) */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: -40, scale: 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute inset-0 bg-background-surface rounded-3xl border border-border shadow-xl opacity-60 z-0 origin-bottom flex flex-col p-6"
              />

              {/* Card 2 (Middle) */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: -20, scale: 0.95 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute inset-0 bg-background-surface rounded-3xl border border-border shadow-2xl opacity-80 z-10 origin-bottom flex flex-col p-6"
              />

              {/* Card 1 (Front - The Active Card) */}
              <motion.div
                initial={{ opacity: 0, y: 100, rotate: -10, x: 0 }}
                animate={{
                  opacity: [0, 1, 1, 1, 0, 0],
                  y: [100, 0, 0, -200, -200, 100],
                  x: [0, 0, 0, 300, 300, 0],
                  rotate: [-10, -3, -3, 20, 20, -10],
                  scale: [0.95, 1, 1, 1, 1, 0.95]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  times: [0, 0.15, 0.75, 0.95, 0.98, 1],
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-background-surface rounded-3xl border-2 border-indigo-100 dark:border-indigo-900/50 shadow-2xl shadow-indigo-500/20 z-20 overflow-hidden flex flex-col"
              >
                {/* Fake App header */}
                <div className="w-full bg-background-muted px-6 py-4 border-b border-border flex items-center justify-between">
                  <span className="border-border bg-background-surface text-foreground-muted rounded-full border px-3 py-1.5 text-xs font-bold tracking-wide">
                    1 / 10
                  </span>
                  <div className="border-border bg-background-surface text-foreground-muted rounded-full border p-2">
                    <Info className="h-5 w-5" />
                  </div>
                </div>

                {/* Fake Idea Content */}
                <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center space-y-4 sm:space-y-6">
                  <div className="space-y-2 sm:space-y-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg">
                      SaaS • DevTools
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                      AI-Native API Documentation Generator
                    </h3>
                  </div>
                  <p className="text-foreground-muted text-xs sm:text-sm font-medium line-clamp-3 sm:line-clamp-none">
                    An agent that scans your codebase, identifies all REST/tRPC endpoints, and automatically maintains an interactive, stunning documentation portal without developers writing a single line of markdown.
                  </p>

                  {/* Fake tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-4">
                    {["Automation", "B2B", "LLMs"].map((tag) => (
                      <div key={tag} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px] sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interaction hints */}
                <div className="pb-6 px-6 relative w-full flex items-center justify-center gap-6">
                  <div className="h-14 w-14 rounded-full border-2 border-rose-100 dark:border-rose-900/30 text-rose-400 flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm opacity-80 scale-90">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </div>
                  <div className="h-16 w-16 rounded-full border-2 border-emerald-100 dark:border-emerald-900/30 text-emerald-500 bg-white dark:bg-slate-900 flex items-center justify-center shadow-md scale-110">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                  </div>
                </div>

                {/* Floating "Like" badge overlay (simulated) */}
                <motion.div
                  initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                  animate={{
                    opacity: [0, 0, 1, 1, 0, 0],
                    scale: [0.8, 0.8, 1.2, 1, 1, 0.8],
                    rotate: [-15, -15, -5, -15, -15, -15]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    times: [0, 0.65, 0.75, 0.85, 0.95, 1],
                    ease: "easeInOut"
                  }}
                  className="absolute top-12 right-6 border-4 border-emerald-500 text-emerald-500 rounded-xl px-4 py-2 font-black text-2xl uppercase tracking-widest backdrop-blur-sm bg-background-surface/50 shadow-xl"
                >
                  LIKE
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Feature Section */}
      <div className="relative z-10 w-full bg-background-muted/50 border-t border-border/50 backdrop-blur-xl mt-12 py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Infinite Supply",
              icon: Sparkles,
              color: "text-blue-500",
              bg: "bg-blue-100 dark:bg-blue-900/30",
              desc: "Never run out of inspiration. Generate completely unique concepts on demand using advanced LLMs tailored directly for startup ideation.",
            },
            {
              title: "Vector Matching",
              icon: Zap,
              color: "text-indigo-500",
              bg: "bg-indigo-100 dark:bg-indigo-900/30",
              desc: "Every swipe updates your mathematical preference footprint using real-time embeddings, zeroing in on product directions you inherently vibe with.",
            },
            {
              title: "Rapid Iteration",
              icon: Repeat,
              color: "text-purple-500",
              bg: "bg-purple-100 dark:bg-purple-900/30",
              desc: "Train the algorithm quickly. What used to take months of brainstorming is compressed into minutes of instinctual swiping.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-4"
            >
              <div className={`h-12 w-12 rounded-xl ${feature.bg} flex items-center justify-center`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Sample Section */}
      <div className="relative z-10 w-full py-24 px-6 mb-24 flex items-center justify-center pt-16">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-2"
          >
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              Try a sample deck.
            </h2>
            <p className="text-foreground-muted text-lg font-medium max-w-xl mx-auto">
              Real swiping mechanics. Drag cards left, right, or top to experience what our app feels like before you sign up.
            </p>
          </motion.div>
          <div className="w-full h-full flex items-center justify-center pt-8">
            <SampleDeck />
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import {
  ArrowLeft,
  ArrowRightLeft,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function CompareContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id1 = searchParams.get("id1");
  const id2 = searchParams.get("id2");

  if (!id1 || !id2) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-8 text-center">
        <AlertTriangle className="mb-4 h-12 w-12 text-amber-500" />
        <h2 className="mb-2 text-2xl font-bold">Missing Ideas</h2>
        <p className="text-foreground-muted mb-6">
          We need two ideas to compare. Please select them from the idea details
          page.
        </p>
        <button
          onClick={() => router.back()}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 py-3 font-bold"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { data, isLoading, error } = api.idea.compare.useQuery({
    ideaId1: id1,
    ideaId2: id2,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4 p-8 text-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="bg-primary/20 absolute inset-0 animate-ping rounded-full" />
          <div className="bg-primary/40 absolute inset-2 animate-pulse rounded-full" />
          <ArrowRightLeft className="text-primary relative z-10 h-8 w-8 animate-pulse" />
        </div>
        <h2 className="text-foreground animate-pulse text-xl font-bold">
          Analyzing and comparing ideas...
        </h2>
        <p className="text-foreground-muted max-w-sm animate-pulse text-sm">
          Gemini is thinking deeply about similarities, differences, strengths,
          and challenges.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-8 text-center">
        <AlertTriangle className="text-danger mb-4 h-12 w-12" />
        <h2 className="text-danger mb-2 text-2xl font-bold">
          Comparison Failed
        </h2>
        <p className="text-foreground-muted mb-6 max-w-md">{error.message}</p>
        <button
          onClick={() => router.back()}
          className="bg-background-surface border-border text-foreground hover:bg-background-muted rounded-xl border px-6 py-3 font-bold"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="border-border bg-background-surface text-foreground-muted hover:bg-background-muted hover:text-foreground flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-foreground text-2xl font-black tracking-tight sm:text-3xl">
            Idea Comparison
          </h1>
          <p className="text-foreground-muted text-sm font-medium">
            Side-by-side Gemini AI analysis
          </p>
        </div>
      </div>

      {/* Idea Cards Box */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Idea 1 Card */}
        <div className="border-border bg-background-surface relative flex flex-col overflow-hidden rounded-3xl border p-6 shadow-sm sm:p-8">
          <div className="absolute top-0 left-0 h-1 w-full bg-blue-500" />
          <div className="mb-4 inline-flex w-fit items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold tracking-wider text-blue-500 uppercase">
            {data.idea1.field?.label ?? "General"}
          </div>
          <h2 className="text-foreground mb-3 text-2xl leading-tight font-black">
            <Link href={`/ideas/${data.idea1.id}`} className="hover:underline">
              {data.idea1.title}
            </Link>
          </h2>
          <p className="text-foreground-muted text-sm leading-relaxed">
            {data.idea1.description}
          </p>
        </div>

        {/* Idea 2 Card */}
        <div className="border-border bg-background-surface relative flex flex-col overflow-hidden rounded-3xl border p-6 shadow-sm sm:p-8">
          <div className="absolute top-0 left-0 h-1 w-full bg-purple-500" />
          <div className="mb-4 inline-flex w-fit items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold tracking-wider text-purple-500 uppercase">
            {data.idea2.field?.label ?? "General"}
          </div>
          <h2 className="text-foreground mb-3 text-2xl leading-tight font-black">
            <Link href={`/ideas/${data.idea2.id}`} className="hover:underline">
              {data.idea2.title}
            </Link>
          </h2>
          <p className="text-foreground-muted text-sm leading-relaxed">
            {data.idea2.description}
          </p>
        </div>
      </div>

      {/* Analysis Section */}
      <div className="border-border bg-background-surface space-y-8 rounded-3xl border p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-orange-100 p-2">
            <Sparkles className="h-6 w-6 text-orange-600" />
          </div>
          <h2 className="text-foreground text-2xl font-black tracking-tight">
            AI Gemini Analysis
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Similarities & Differences */}
          <div className="space-y-6">
            <div>
              <h3 className="text-foreground mb-3 flex items-center gap-2 text-lg font-bold">
                <div className="h-2 w-2 rounded-full bg-slate-500" />{" "}
                Similarities
              </h3>
              <ul className="space-y-2">
                {data.comparison.similarities.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-foreground-muted bg-background-muted flex gap-3 rounded-xl p-3 text-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-slate-400" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-foreground mb-3 flex items-center gap-2 text-lg font-bold">
                <div className="h-2 w-2 rounded-full bg-slate-500" />{" "}
                Differences
              </h3>
              <ul className="space-y-2">
                {data.comparison.differences.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-foreground-muted bg-background-muted flex gap-3 rounded-xl p-3 text-sm"
                  >
                    <AlertTriangle className="h-5 w-5 shrink-0 text-slate-400" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strengths & Challenges */}
          <div className="space-y-6">
            {/* Idea 1 Stats */}
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
              <h3 className="mb-3 text-sm font-bold tracking-wider text-blue-600 uppercase">
                {data.idea1.title}
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-foreground text-xs font-semibold">
                    Strengths:
                  </span>
                  <ul className="text-foreground-muted mt-1 list-inside list-disc space-y-1 pl-4 text-sm">
                    {data.comparison.idea1_strengths.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-foreground text-xs font-semibold">
                    Challenges:
                  </span>
                  <ul className="text-foreground-muted mt-1 list-inside list-disc space-y-1 pl-4 text-sm">
                    {data.comparison.idea1_challenges.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Idea 2 Stats */}
            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">
              <h3 className="mb-3 text-sm font-bold tracking-wider text-purple-600 uppercase">
                {data.idea2.title}
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-foreground text-xs font-semibold">
                    Strengths:
                  </span>
                  <ul className="text-foreground-muted mt-1 list-inside list-disc space-y-1 pl-4 text-sm">
                    {data.comparison.idea2_strengths.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-foreground text-xs font-semibold">
                    Challenges:
                  </span>
                  <ul className="text-foreground-muted mt-1 list-inside list-disc space-y-1 pl-4 text-sm">
                    {data.comparison.idea2_challenges.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-primary/5 border-primary/20 mt-8 rounded-2xl border p-6">
          <div className="mb-3 flex items-center gap-2">
            <Lightbulb className="text-primary h-5 w-5" />
            <h3 className="text-foreground text-lg font-bold">
              Final Recommendation
            </h3>
          </div>
          <p className="text-foreground-muted leading-relaxed font-medium">
            {data.comparison.recommendation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <main className="bg-background min-h-screen p-4 pt-20 pb-20 sm:p-8">
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center p-8">
            <div className="border-primary h-8 w-8 animate-spin rounded-full border-b-2"></div>
          </div>
        }
      >
        <CompareContent />
      </Suspense>
    </main>
  );
}

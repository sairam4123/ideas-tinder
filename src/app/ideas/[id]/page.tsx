"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Sparkles,
  Target,
  Layers,
  X,
  Heart,
  Star,
} from "lucide-react";

import { SessionGuard } from "~/app/_components/session-guard";
import { api } from "~/trpc/react";

function IdeaDetailsContent() {
  const params = useParams<{ id: string }>();
  const ideaId = params.id;

  const detailsQuery = api.idea.getIdeaDetails.useQuery({ ideaId });
  const swipeMutation = api.idea.swipeIdea.useMutation();

  if (detailsQuery.isPending) {
    return (
      <main className="mx-auto min-h-[calc(100vh-73px)] w-full max-w-4xl space-y-6 bg-slate-50 px-4 py-8">
        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <div className="mb-6 h-10 w-2/3 animate-pulse rounded-xl bg-slate-200" />
          <div className="mb-6 space-y-3">
            <div className="h-5 w-full animate-pulse rounded-lg bg-slate-200" />
            <div className="h-5 w-full animate-pulse rounded-lg bg-slate-200" />
            <div className="h-5 w-4/5 animate-pulse rounded-lg bg-slate-200" />
          </div>
          <div className="mb-8 h-5 w-1/4 animate-pulse rounded-lg bg-slate-200" />
          <div className="flex gap-3">
            <div className="h-12 w-24 animate-pulse rounded-xl bg-slate-200" />
            <div className="h-12 w-32 animate-pulse rounded-xl bg-slate-200" />
            <div className="h-12 w-24 animate-pulse rounded-xl bg-slate-200" />
          </div>
        </section>

        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <div className="mb-6 h-7 w-1/4 animate-pulse rounded-lg bg-slate-200" />
          <div className="mb-3 h-5 w-full animate-pulse rounded-lg bg-slate-200" />
          <div className="h-5 w-1/3 animate-pulse rounded-lg bg-slate-200" />
        </section>

        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <div className="mb-6 h-7 w-1/4 animate-pulse rounded-lg bg-slate-200" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-slate-100 p-5">
                <div className="mb-3 h-6 w-1/2 animate-pulse rounded-lg bg-slate-200" />
                <div className="mb-2 h-5 w-full animate-pulse rounded-lg bg-slate-200" />
                <div className="mb-4 h-5 w-4/5 animate-pulse rounded-lg bg-slate-200" />
                <div className="h-4 w-24 animate-pulse rounded-lg bg-slate-200" />
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  if (!detailsQuery.data) {
    return (
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-slate-50 px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-800">
            Idea not found
          </h2>
          <p className="font-medium text-slate-500">
            We couldn&apos;t locate the details for this idea.
          </p>
          <Link
            href="/"
            className="mt-4 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white shadow-md transition-all hover:scale-105"
          >
            Back to Deck
          </Link>
        </div>
      </main>
    );
  }

  const data = detailsQuery.data;
  const canSwipe = Boolean(data.lastStackId);

  return (
    <main className="mx-auto min-h-[calc(100vh-73px)] w-full max-w-4xl space-y-8 bg-slate-50 px-4 py-8">
      <div>
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" /> Back to stack
        </Link>

        <section className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-100/50">
          <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-indigo-50 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-bold tracking-wide text-indigo-700 uppercase">
              <Layers className="h-4 w-4" />
              <span>{data.idea.field ?? "Discovery"}</span>
            </div>

            <h1 className="text-4xl leading-tight font-black tracking-tight text-slate-900">
              {data.idea.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed font-medium text-slate-600">
              {data.idea.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-8">
              <button
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-5 py-3 font-bold text-slate-600 shadow-sm transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-600 active:scale-95 disabled:opacity-50 sm:flex-none"
                onClick={() =>
                  swipeMutation.mutate({
                    stackId: data.lastStackId,
                    ideaId,
                    direction: "left",
                  })
                }
                type="button"
                disabled={!canSwipe}
              >
                <X className="h-5 w-5" /> Dislike
              </button>
              <button
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-5 py-3 font-bold text-slate-600 shadow-sm transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 active:scale-95 disabled:opacity-50 sm:flex-none"
                onClick={() =>
                  swipeMutation.mutate({
                    stackId: data.lastStackId,
                    ideaId,
                    direction: "right",
                  })
                }
                type="button"
                disabled={!canSwipe}
              >
                <Heart className="h-5 w-5" /> Like
              </button>
              <button
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-5 py-3 font-bold text-slate-600 shadow-sm transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 active:scale-95 disabled:opacity-50 sm:flex-none"
                onClick={() =>
                  swipeMutation.mutate({
                    stackId: data.lastStackId,
                    ideaId,
                    direction: "top",
                  })
                }
                type="button"
                disabled={!canSwipe}
              >
                <Star className="h-5 w-5" /> Favorite
              </button>
            </div>
            {!canSwipe ? (
              <p className="mt-4 rounded-xl border border-amber-100 bg-amber-50 p-3 text-sm font-medium text-amber-600">
                Generate a new stack on the home page to enable swipe actions
                for this idea.
              </p>
            ) : null}
          </div>
        </section>
      </div>

      <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-purple-100 p-2">
            <Target className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            AI Analysis
          </h2>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <div>
            <span className="mb-2 block text-xs font-bold tracking-wider text-slate-500 uppercase">
              Vector Similarity Factor
            </span>
            <div className="flex items-center gap-4">
              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-indigo-500"
                  style={{
                    width: `${Math.max(0, Math.min(100, data.preferenceImpact.similarity * 100))}%`,
                  }}
                />
              </div>
              <span className="text-sm font-bold text-slate-700">
                {data.preferenceImpact.similarity.toFixed(3)}
              </span>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-4">
            <span className="mb-2 block text-xs font-bold tracking-wider text-slate-500 uppercase">
              Impact Summary
            </span>
            <p className="leading-relaxed font-medium text-slate-700">
              {data.preferenceImpact.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-2">
            <Sparkles className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            Related Ideas
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {data.relatedIdeas.map((relatedIdea) => (
            <article
              className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-slate-200 hover:bg-white hover:shadow-md"
              key={relatedIdea.id}
            >
              <h3 className="mb-2 line-clamp-2 font-bold text-slate-900">
                {relatedIdea.title}
              </h3>
              <p className="mb-4 line-clamp-3 grow text-sm font-medium text-slate-600">
                {relatedIdea.description}
              </p>
              <Link
                className="mt-auto inline-block text-sm font-bold text-indigo-600 hover:text-indigo-700"
                href={`/ideas/${relatedIdea.id}`}
              >
                Explore &rarr;
              </Link>
            </article>
          ))}
          {data.relatedIdeas.length === 0 ? (
            <p className="col-span-2 rounded-2xl border-2 border-dashed border-slate-200 p-6 text-center text-sm font-medium text-slate-500">
              No closely related ideas found in your historical stack.
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}

export default function IdeaDetailsPage() {
  return (
    <SessionGuard>
      <IdeaDetailsContent />
    </SessionGuard>
  );
}

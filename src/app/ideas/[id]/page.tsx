"use client";

import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  Target,
  Layers,
  X,
  Heart,
  Star,
  ArrowRightLeft,
} from "lucide-react";

import { SessionGuard } from "~/app/_components/session-guard";
import { api } from "~/trpc/react";

type NavigationTrailItem = {
  id: string;
  title: string;
};

function IdeaDetailsContent() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const ideaId = params.id;
  const source = searchParams.get("from") ?? "stack";
  const sourceParam = source ? `?from=${encodeURIComponent(source)}` : "";
  const backHref =
    source === "profile"
      ? "/user"
      : source === "profile-favorites"
        ? "/user/favorites"
        : "/";
  const backLabel =
    source === "profile"
      ? "Back to profile"
      : source === "profile-favorites"
        ? "Back to favorites"
        : "Back to stack";

  const detailsQuery = api.idea.getIdeaDetails.useQuery({ ideaId });
  const swipeMutation = api.idea.swipeIdea.useMutation();
  const getFavoritesQuery = api.idea.getFavorites.useQuery();

  const [compareMode, setCompareMode] = useState(false);
  const [selectedCompareId, setSelectedCompareId] = useState("");

  const [navigationTrail, setNavigationTrail] = useState<NavigationTrailItem[]>(
    [],
  );
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentIdeaId = detailsQuery.data?.idea.id;
  const currentIdeaTitle = detailsQuery.data?.idea.title;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    if (e.targetTouches.length > 0) {
      setTouchStart(e.targetTouches[0]!.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.targetTouches.length > 0) {
      setTouchEnd(e.targetTouches[0]!.clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // As requested: left swipe -> previous idea, right swipe -> next idea
    if (isLeftSwipe && detailsQuery.data?.navigation?.previousIdeaId) {
      router.push(
        `/ideas/${detailsQuery.data.navigation.previousIdeaId}${sourceParam}`,
      );
    }
    if (isRightSwipe && detailsQuery.data?.navigation?.nextIdeaId) {
      router.push(
        `/ideas/${detailsQuery.data.navigation.nextIdeaId}${sourceParam}`,
      );
    }
  };

  useEffect(() => {
    if (!currentIdeaId || !currentIdeaTitle) {
      return;
    }

    const storageKey = "idea-navigation-trail";

    try {
      const raw = window.sessionStorage.getItem(storageKey);
      const parsed = raw
        ? (JSON.parse(raw) as NavigationTrailItem[])
        : ([] as NavigationTrailItem[]);

      const withoutCurrent = parsed.filter(
        (entry) => entry.id !== currentIdeaId,
      );
      const updatedTrail = [
        ...withoutCurrent,
        { id: currentIdeaId, title: currentIdeaTitle },
      ].slice(-8);

      window.sessionStorage.setItem(storageKey, JSON.stringify(updatedTrail));
      setNavigationTrail(updatedTrail);
    } catch {
      setNavigationTrail([{ id: currentIdeaId, title: currentIdeaTitle }]);
    }
  }, [currentIdeaId, currentIdeaTitle]);

  if (detailsQuery.isPending) {
    return (
      <main className="bg-background mx-auto min-h-[calc(100vh-73px)] w-full max-w-4xl space-y-8 px-4 py-8">
        <div>
          <div className="skeleton mb-6 h-5 w-32 rounded-lg" />

          <section className="border-border bg-background-surface mb-4 rounded-2xl border p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="skeleton h-5 w-60 rounded-lg" />
              <div className="flex gap-2">
                <div className="skeleton h-7 w-18 rounded-lg" />
                <div className="skeleton h-7 w-16 rounded-lg" />
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <div className="skeleton h-6 w-24 rounded-full" />
              <div className="skeleton h-6 w-28 rounded-full" />
              <div className="skeleton h-6 w-20 rounded-full" />
            </div>
          </section>

          <section className="border-border bg-background-surface rounded-3xl border p-8 shadow-sm">
            <div className="mb-6 flex flex-wrap gap-2">
              <div className="skeleton h-6 w-28 rounded-full" />
              <div className="skeleton h-6 w-36 rounded-full" />
            </div>
            <div className="skeleton mb-3 h-10 w-3/4 rounded-xl" />
            <div className="space-y-2">
              <div className="skeleton h-5 w-full rounded-lg" />
              <div className="skeleton h-5 w-11/12 rounded-lg" />
              <div className="skeleton h-5 w-4/5 rounded-lg" />
            </div>
            <div className="border-border mt-10 flex flex-wrap gap-3 border-t pt-8">
              <div className="skeleton h-12 w-24 rounded-xl" />
              <div className="skeleton h-12 w-24 rounded-xl" />
              <div className="skeleton h-12 w-28 rounded-xl" />
            </div>
          </section>
        </div>

        <section className="border-border bg-background-surface rounded-3xl border p-8 shadow-sm">
          <div className="skeleton mb-6 h-7 w-36 rounded-lg" />
          <div className="border-border bg-background-muted rounded-2xl border p-6">
            <div className="skeleton mb-5 h-5 w-48 rounded-lg" />
            <div className="skeleton mb-5 h-3 w-full rounded-full" />
            <div className="skeleton h-4 w-2/3 rounded-lg" />
          </div>
        </section>

        <section className="border-border bg-background-surface rounded-3xl border p-8 shadow-sm">
          <div className="skeleton mb-6 h-7 w-56 rounded-lg" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border-border bg-background-muted rounded-xl border p-4"
              >
                <div className="skeleton mb-2 h-5 w-1/2 rounded-lg" />
                <div className="skeleton mb-2 h-4 w-3/5 rounded-lg" />
                <div className="skeleton h-3 w-4/5 rounded-lg" />
              </div>
            ))}
          </div>
        </section>

        <section className="border-border bg-background-surface rounded-3xl border p-8 shadow-sm">
          <div className="skeleton mb-6 h-7 w-40 rounded-lg" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border-border bg-background-muted rounded-2xl border p-6"
              >
                <div className="skeleton mb-2 h-5 w-4/5 rounded-lg" />
                <div className="skeleton mb-4 h-4 w-full rounded-lg" />
                <div className="skeleton h-5 w-20 rounded-lg" />
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  if (!detailsQuery.data) {
    return (
      <main className="bg-background flex min-h-[calc(100vh-73px)] items-center justify-center px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-foreground-surface text-3xl font-black tracking-tight">
            Idea not found
          </h2>
          <p className="text-foreground-muted font-medium">
            We couldn&apos;t locate the details for this idea.
          </p>
          <Link
            href="/"
            className="bg-foreground mt-4 rounded-xl px-6 py-3 font-bold text-white transition-all hover:scale-105"
          >
            Back to Deck
          </Link>
        </div>
      </main>
    );
  }

  const data = detailsQuery.data;
  const canSwipe = Boolean(data.lastStackId);
  const trailLinks = navigationTrail
    .slice()
    .reverse()
    .filter((entry) => entry.id !== ideaId)
    .slice(0, 4);

  return (
    <main
      className="bg-background mx-auto min-h-[calc(100vh-73px)] w-full max-w-4xl space-y-8 overflow-x-hidden px-4 py-8"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div>
        <Link
          href={backHref}
          className="text-foreground-muted hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm font-bold transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> {backLabel}
        </Link>

        <section className="border-border bg-background-surface mb-4 rounded-2xl border p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-foreground-surface text-sm font-semibold">
              {data.navigation
                ? `Stack navigation: ${data.navigation.currentPosition} / ${data.navigation.totalIdeas}`
                : "Stack navigation: unavailable for this idea"}
            </div>
            <div className="flex items-center gap-2">
              {data.navigation?.previousIdeaId ? (
                <Link
                  href={`/ideas/${data.navigation.previousIdeaId}${sourceParam}`}
                  className="border-border bg-background-surface text-foreground-surface rounded-lg border px-3 py-1.5 text-xs font-semibold hover:border-slate-300"
                >
                  Previous
                </Link>
              ) : null}
              {data.navigation?.nextIdeaId ? (
                <Link
                  href={`/ideas/${data.navigation.nextIdeaId}${sourceParam}`}
                  className="border-border bg-background-surface text-foreground-surface rounded-lg border px-3 py-1.5 text-xs font-semibold hover:border-slate-300"
                >
                  Next
                </Link>
              ) : null}
            </div>
          </div>
          {trailLinks.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {trailLinks.map((entry) => (
                <Link
                  key={`trail-${entry.id}`}
                  href={`/ideas/${entry.id}${sourceParam}`}
                  className="border-border bg-background-muted text-foreground-muted max-w-48 truncate rounded-full border px-2.5 py-1 text-xs font-medium hover:border-slate-300"
                  title={entry.title}
                >
                  {entry.title}
                </Link>
              ))}
            </div>
          ) : null}
        </section>

        <section className="border-border bg-background-surface relative overflow-hidden rounded-3xl border p-8 shadow-sm">
          <div className="bg-primary-soft dark:bg-primary/10 pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <div className="border-primary/20 bg-primary-soft text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold tracking-wide uppercase">
                <Layers className="h-4 w-4" />
                <span>{data.idea.field ?? "Discovery"}</span>
              </div>
              {data.interactionStatus.lastActionAt ? (
                <span className="border-border bg-background-muted text-foreground-muted rounded-full border px-3 py-1 text-xs font-medium">
                  Last action{" "}
                  {new Date(
                    data.interactionStatus.lastActionAt,
                  ).toLocaleString()}
                </span>
              ) : null}
            </div>

            <h1 className="text-foreground text-4xl leading-tight font-black tracking-tight">
              {data.idea.title}
            </h1>
            <p className="text-foreground-muted mt-6 text-lg leading-relaxed font-medium">
              {data.idea.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-8">
              <button
                className={`group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-bold shadow-sm transition-all active:scale-95 disabled:opacity-50 sm:flex-none ${
                  data.interactionStatus.isDisliked
                    ? "border-danger/30 bg-danger-soft text-danger"
                    : "border-border bg-background-surface text-foreground-muted hover:border-danger/30 hover:bg-danger-soft hover:text-danger"
                }`}
                onClick={() => {
                  swipeMutation.mutate({
                    stackId: data.lastStackId,
                    ideaId,
                    direction: "left",
                  });
                  if (data.navigation?.nextIdeaId) {
                    router.push(
                      `/ideas/${data.navigation.nextIdeaId}${sourceParam}`,
                    );
                  } else {
                    router.push(backHref);
                  }
                }}
                type="button"
                disabled={!canSwipe}
              >
                <X className="h-5 w-5" />
                {data.interactionStatus.isDisliked ? "Disliked" : "Dislike"}
              </button>
              <button
                className={`group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-bold shadow-sm transition-all active:scale-95 disabled:opacity-50 sm:flex-none ${
                  data.interactionStatus.isLiked
                    ? "border-success/30 bg-success-soft text-success"
                    : "border-border bg-background-surface text-foreground-muted hover:border-success/30 hover:bg-success-soft hover:text-success"
                }`}
                onClick={() => {
                  swipeMutation.mutate({
                    stackId: data.lastStackId,
                    ideaId,
                    direction: "right",
                  });
                  if (data.navigation?.nextIdeaId) {
                    router.push(
                      `/ideas/${data.navigation.nextIdeaId}${sourceParam}`,
                    );
                  } else {
                    router.push(backHref);
                  }
                }}
                type="button"
                disabled={!canSwipe}
              >
                <Heart className="h-5 w-5" />
                {data.interactionStatus.isLiked ? "Liked" : "Like"}
              </button>
              <button
                className={`group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-bold shadow-sm transition-all active:scale-95 disabled:opacity-50 sm:flex-none ${
                  data.interactionStatus.isFavorited
                    ? "border-info/30 bg-info-soft text-info"
                    : "border-border bg-background-surface text-foreground-muted hover:border-info/30 hover:bg-info-soft hover:text-info"
                }`}
                onClick={() => {
                  swipeMutation.mutate({
                    stackId: data.lastStackId,
                    ideaId,
                    direction: "top",
                  });
                  if (data.navigation?.nextIdeaId) {
                    router.push(
                      `/ideas/${data.navigation.nextIdeaId}${sourceParam}`,
                    );
                  } else {
                    router.push(backHref);
                  }
                }}
                type="button"
                disabled={!canSwipe}
              >
                <Star className="h-5 w-5" />
                {data.interactionStatus.isFavorited ? "Favorited" : "Favorite"}
              </button>
            </div>
            {!canSwipe ? (
              <p className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-sm font-medium text-amber-600 dark:text-amber-400">
                Generate a new stack on the home page to enable swipe actions
                for this idea.
              </p>
            ) : null}
          </div>
        </section>
      </div>

      {/* Compare Section */}
      <section className="border-border bg-background-surface rounded-3xl border p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-100 p-2">
              <ArrowRightLeft className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-foreground text-2xl font-black tracking-tight">
                Compare Idea
              </h2>
              <p className="text-foreground-muted mt-1 text-sm">
                See how this idea stacks up against your favorites.
              </p>
            </div>
          </div>
          {!compareMode ? (
            <button
              onClick={() => setCompareMode(true)}
              className="group border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 flex items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-bold shadow-sm transition-all active:scale-95"
            >
              <ArrowRightLeft className="h-5 w-5" />
              Compare
            </button>
          ) : (
            <button
              onClick={() => {
                setCompareMode(false);
                setSelectedCompareId("");
              }}
              className="text-foreground-muted hover:text-foreground rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {compareMode && (
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <select
                value={selectedCompareId}
                onChange={(e) => setSelectedCompareId(e.target.value)}
                className="border-border bg-background-muted text-foreground focus:border-primary focus:ring-primary w-full rounded-xl border px-4 py-3 text-sm focus:ring-1 focus:outline-none"
              >
                <option value="" disabled>
                  Select a favorited idea...
                </option>
                {getFavoritesQuery.data
                  ?.filter((f) => f.idea.id !== ideaId)
                  .map((favorite) => (
                    <option key={favorite.idea.id} value={favorite.idea.id}>
                      {favorite.idea.title}
                    </option>
                  ))}
              </select>
              {getFavoritesQuery.isLoading && (
                <p className="text-foreground-muted mt-2 animate-pulse text-xs">
                  Loading favorites...
                </p>
              )}
              {getFavoritesQuery.data?.length === 0 && (
                <p className="mt-2 text-xs text-amber-500">
                  You need to favorite some ideas first.
                </p>
              )}
            </div>
            <button
              onClick={() => {
                if (selectedCompareId) {
                  router.push(
                    `/ideas/compare?id1=${ideaId}&id2=${selectedCompareId}`,
                  );
                }
              }}
              disabled={!selectedCompareId}
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold shadow-sm transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              Let&apos;s Compare
              <ArrowRightLeft className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>

      <section className="border-border bg-background-surface rounded-3xl border p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-purple-100 p-2">
            <Target className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-foreground text-2xl font-black tracking-tight">
            AI Analysis
          </h2>
        </div>
        <div className="border-border bg-background-muted space-y-4 rounded-2xl border p-6">
          <div>
            <span className="text-foreground-muted mb-2 block text-xs font-bold tracking-wider uppercase">
              Vector Similarity Factor
            </span>
            <div className="flex items-center gap-4">
              <div className="bg-background-surface border-border relative h-3 w-full overflow-hidden rounded-full border">
                {/* Center marker */}
                <div className="border-background-surface absolute top-1/2 left-1/2 z-10 h-5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-slate-400 shadow-sm dark:bg-slate-500" />
                <div
                  className={`absolute top-0 bottom-0 rounded-full ${data.preferenceImpact.similarity >= 0 ? "bg-success" : "bg-danger"}`}
                  style={{
                    left: `${data.preferenceImpact.similarity < 0 ? 50 - Math.abs(data.preferenceImpact.similarity) * 50 : 50}%`,
                    width: `${Math.abs(data.preferenceImpact.similarity) * 50}%`,
                  }}
                />
              </div>
              <span className="text-foreground-surface text-sm font-bold">
                {data.preferenceImpact.similarity.toFixed(3)}
              </span>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-4">
            <span className="text-foreground-muted mb-2 block text-xs font-bold tracking-wider uppercase">
              Impact Summary
            </span>
            <p className="text-foreground-surface leading-relaxed font-medium">
              {data.preferenceImpact.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="border-border bg-background-surface rounded-3xl border p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-indigo-100 p-2">
            <Layers className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="text-foreground text-2xl font-black tracking-tight">
            Profile Tag Contributions
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {data.profileTagContributions.map((item) => (
            <div
              key={`contribution-${item.tagId}`}
              className="border-border bg-background-muted rounded-xl border p-4"
            >
              <p className="text-foreground text-sm font-bold">
                {item.tagLabel}
              </p>
              <p className="text-foreground-muted mt-1 text-xs">
                contribution {item.contribution.toFixed(3)}
              </p>
              <p className="text-foreground-muted mt-1 text-[11px]">
                idea tag {item.ideaTagWeight.toFixed(2)} × profile tag{" "}
                {item.userTagWeight.toFixed(2)}
              </p>
            </div>
          ))}
          {data.profileTagContributions.length === 0 ? (
            <p className="border-border text-foreground-muted rounded-xl border border-dashed p-4 text-sm sm:col-span-2">
              No tag-level contribution data is available for this idea.
            </p>
          ) : null}
        </div>
      </section>

      <section className="border-border bg-background-surface rounded-3xl border p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-2">
            <Sparkles className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-foreground text-2xl font-black tracking-tight">
            Related Ideas
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {data.relatedIdeas.map((relatedIdea) => (
            <article
              className="border-border bg-background-muted/70 hover:bg-background-surface flex flex-col rounded-2xl border p-6 transition-all hover:border-slate-200"
              key={relatedIdea.id}
            >
              <h3 className="text-foreground mb-2 line-clamp-2 font-bold">
                {relatedIdea.title}
              </h3>
              <p className="text-foreground-muted mb-4 line-clamp-3 grow text-sm font-medium">
                {relatedIdea.description}
              </p>
              <Link
                className="text-primary mt-auto inline-block text-sm font-bold hover:text-indigo-400"
                href={`/ideas/${relatedIdea.id}${sourceParam}`}
              >
                Explore &rarr;
              </Link>
            </article>
          ))}
          {data.relatedIdeas.length === 0 ? (
            <p className="border-border text-foreground-muted col-span-2 rounded-2xl border-2 border-dashed p-6 text-center text-sm font-medium">
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

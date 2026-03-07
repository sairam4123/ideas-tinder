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
      router.push(`/ideas/${detailsQuery.data.navigation.previousIdeaId}${sourceParam}`);
    }
    if (isRightSwipe && detailsQuery.data?.navigation?.nextIdeaId) {
      router.push(`/ideas/${detailsQuery.data.navigation.nextIdeaId}${sourceParam}`);
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
      <main className="mx-auto min-h-[calc(100vh-73px)] w-full max-w-4xl space-y-8 bg-background px-4 py-8">
        <div>
          <div className="skeleton mb-6 h-5 w-32 rounded-lg" />

          <section className="mb-4 rounded-2xl border border-border bg-background-surface p-4 shadow-sm">
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

          <section className="rounded-3xl border border-border bg-background-surface p-8 shadow-sm">
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
            <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
              <div className="skeleton h-12 w-24 rounded-xl" />
              <div className="skeleton h-12 w-24 rounded-xl" />
              <div className="skeleton h-12 w-28 rounded-xl" />
            </div>
          </section>
        </div>

        <section className="rounded-3xl border border-border bg-background-surface p-8 shadow-sm">
          <div className="skeleton mb-6 h-7 w-36 rounded-lg" />
          <div className="rounded-2xl border border-border bg-background-muted p-6">
            <div className="skeleton mb-5 h-5 w-48 rounded-lg" />
            <div className="skeleton mb-5 h-3 w-full rounded-full" />
            <div className="skeleton h-4 w-2/3 rounded-lg" />
          </div>
        </section>

        <section className="rounded-3xl border border-border bg-background-surface p-8 shadow-sm">
          <div className="skeleton mb-6 h-7 w-56 rounded-lg" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-background-muted p-4"
              >
                <div className="skeleton mb-2 h-5 w-1/2 rounded-lg" />
                <div className="skeleton mb-2 h-4 w-3/5 rounded-lg" />
                <div className="skeleton h-3 w-4/5 rounded-lg" />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-border bg-background-surface p-8 shadow-sm">
          <div className="skeleton mb-6 h-7 w-40 rounded-lg" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-background-muted p-6"
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
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-background px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-black tracking-tight text-foreground-surface">
            Idea not found
          </h2>
          <p className="font-medium text-foreground-muted">
            We couldn&apos;t locate the details for this idea.
          </p>
          <Link
            href="/"
            className="mt-4 rounded-xl bg-foreground px-6 py-3 font-bold text-white transition-all hover:scale-105"
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
      className="mx-auto min-h-[calc(100vh-73px)] w-full max-w-4xl space-y-8 bg-background px-4 py-8 overflow-x-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div>
        <Link
          href={backHref}
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-foreground-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> {backLabel}
        </Link>

        <section className="mb-4 rounded-2xl border border-border bg-background-surface p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm font-semibold text-foreground-surface">
              {data.navigation
                ? `Stack navigation: ${data.navigation.currentPosition} / ${data.navigation.totalIdeas}`
                : "Stack navigation: unavailable for this idea"}
            </div>
            <div className="flex items-center gap-2">
              {data.navigation?.previousIdeaId ? (
                <Link
                  href={`/ideas/${data.navigation.previousIdeaId}${sourceParam}`}
                  className="rounded-lg border border-border bg-background-surface px-3 py-1.5 text-xs font-semibold text-foreground-surface hover:border-slate-300"
                >
                  Previous
                </Link>
              ) : null}
              {data.navigation?.nextIdeaId ? (
                <Link
                  href={`/ideas/${data.navigation.nextIdeaId}${sourceParam}`}
                  className="rounded-lg border border-border bg-background-surface px-3 py-1.5 text-xs font-semibold text-foreground-surface hover:border-slate-300"
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
                  className="max-w-48 truncate rounded-full border border-border bg-background-muted px-2.5 py-1 text-xs font-medium text-foreground-muted hover:border-slate-300"
                  title={entry.title}
                >
                  {entry.title}
                </Link>
              ))}
            </div>
          ) : null}
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-border bg-background-surface p-8 shadow-sm">
          <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-primary-soft dark:bg-primary/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-bold tracking-wide text-primary uppercase">
                <Layers className="h-4 w-4" />
                <span>{data.idea.field ?? "Discovery"}</span>
              </div>
              {data.interactionStatus.lastActionAt ? (
                <span className="rounded-full border border-border bg-background-muted px-3 py-1 text-xs font-medium text-foreground-muted">
                  Last action{" "}
                  {new Date(
                    data.interactionStatus.lastActionAt,
                  ).toLocaleString()}
                </span>
              ) : null}
            </div>

            <h1 className="text-4xl leading-tight font-black tracking-tight text-foreground">
              {data.idea.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed font-medium text-foreground-muted">
              {data.idea.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-8">
              <button
                className={`group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-bold shadow-sm transition-all active:scale-95 disabled:opacity-50 sm:flex-none ${data.interactionStatus.isDisliked
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
                    router.push(`/ideas/${data.navigation.nextIdeaId}${sourceParam}`);
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
                className={`group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-bold shadow-sm transition-all active:scale-95 disabled:opacity-50 sm:flex-none ${data.interactionStatus.isLiked
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
                    router.push(`/ideas/${data.navigation.nextIdeaId}${sourceParam}`);
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
                className={`group flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-bold shadow-sm transition-all active:scale-95 disabled:opacity-50 sm:flex-none ${data.interactionStatus.isFavorited
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
                    router.push(`/ideas/${data.navigation.nextIdeaId}${sourceParam}`);
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

      <section className="rounded-3xl border border-border bg-background-surface p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-purple-100 p-2">
            <Target className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-foreground">
            AI Analysis
          </h2>
        </div>
        <div className="space-y-4 rounded-2xl border border-border bg-background-muted p-6">
          <div>
            <span className="mb-2 block text-xs font-bold tracking-wider text-foreground-muted uppercase">
              Vector Similarity Factor
            </span>
            <div className="flex items-center gap-4">
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-background-surface border border-border">
                {/* Center marker */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shadow-sm z-10 border-2 border-background-surface" />
                <div
                  className={`absolute top-0 bottom-0 rounded-full ${data.preferenceImpact.similarity >= 0 ? "bg-success" : "bg-danger"}`}
                  style={{
                    left: `${data.preferenceImpact.similarity < 0 ? 50 - Math.abs(data.preferenceImpact.similarity) * 50 : 50}%`,
                    width: `${Math.abs(data.preferenceImpact.similarity) * 50}%`,
                  }}
                />
              </div>
              <span className="text-sm font-bold text-foreground-surface">
                {data.preferenceImpact.similarity.toFixed(3)}
              </span>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-4">
            <span className="mb-2 block text-xs font-bold tracking-wider text-foreground-muted uppercase">
              Impact Summary
            </span>
            <p className="leading-relaxed font-medium text-foreground-surface">
              {data.preferenceImpact.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-background-surface p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-indigo-100 p-2">
            <Layers className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-foreground">
            Profile Tag Contributions
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {data.profileTagContributions.map((item) => (
            <div
              key={`contribution-${item.tagId}`}
              className="rounded-xl border border-border bg-background-muted p-4"
            >
              <p className="text-sm font-bold text-foreground">
                {item.tagLabel}
              </p>
              <p className="mt-1 text-xs text-foreground-muted">
                contribution {item.contribution.toFixed(3)}
              </p>
              <p className="mt-1 text-[11px] text-foreground-muted">
                idea tag {item.ideaTagWeight.toFixed(2)} × profile tag{" "}
                {item.userTagWeight.toFixed(2)}
              </p>
            </div>
          ))}
          {data.profileTagContributions.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border p-4 text-sm text-foreground-muted sm:col-span-2">
              No tag-level contribution data is available for this idea.
            </p>
          ) : null}
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-background-surface p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-2">
            <Sparkles className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-foreground">
            Related Ideas
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {data.relatedIdeas.map((relatedIdea) => (
            <article
              className="flex flex-col rounded-2xl border border-border bg-background-muted/70 p-6 transition-all hover:border-slate-200 hover:bg-background-surface"
              key={relatedIdea.id}
            >
              <h3 className="mb-2 line-clamp-2 font-bold text-foreground">
                {relatedIdea.title}
              </h3>
              <p className="mb-4 line-clamp-3 grow text-sm font-medium text-foreground-muted">
                {relatedIdea.description}
              </p>
              <Link
                className="mt-auto inline-block text-sm font-bold text-primary hover:text-indigo-400"
                href={`/ideas/${relatedIdea.id}${sourceParam}`}
              >
                Explore &rarr;
              </Link>
            </article>
          ))}
          {data.relatedIdeas.length === 0 ? (
            <p className="col-span-2 rounded-2xl border-2 border-dashed border-border p-6 text-center text-sm font-medium text-foreground-muted">
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

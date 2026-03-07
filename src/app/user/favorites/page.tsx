"use client";

import Link from "next/link";
import { Heart, ArrowLeft, ArrowRight, Tags } from "lucide-react";

import { SessionGuard } from "~/app/_components/session-guard";
import { api } from "~/trpc/react";

function FavoritesPageContent() {
  const favoritesByTag = api.idea.getFavoritesByTag.useQuery();

  if (favoritesByTag.isPending) {
    return (
      <main className="mx-auto min-h-[calc(100vh-73px)] w-full max-w-6xl space-y-6 bg-background px-4 py-8 lg:py-10">
        <section className="rounded-3xl border border-border bg-background-surface p-6 shadow-sm lg:p-8">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-2">
              <div className="skeleton h-8 w-64 rounded-lg" />
              <div className="skeleton h-5 w-80 rounded-lg" />
            </div>
            <div className="skeleton h-5 w-28 rounded-lg" />
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-background-surface p-5 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="skeleton h-8 w-40 rounded-full" />
            <div className="skeleton h-4 w-40 rounded-lg" />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border bg-background-muted p-4"
              >
                <div className="skeleton mb-2 h-5 w-4/5 rounded-lg" />
                <div className="skeleton mb-2 h-4 w-full rounded-lg" />
                <div className="skeleton mb-3 h-4 w-2/3 rounded-lg" />
                <div className="flex items-center justify-between gap-2">
                  <div className="skeleton h-6 w-28 rounded-full" />
                  <div className="skeleton h-5 w-24 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  const groupedByTags = favoritesByTag.data?.groupedByTags ?? [];

  return (
    <main className="mx-auto min-h-[calc(100vh-73px)] w-full max-w-6xl space-y-6 bg-background px-4 py-8 lg:py-10">
      <section className="rounded-3xl border border-border bg-background-surface p-6 shadow-sm lg:p-8">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-pink-100 p-2">
              <Heart className="h-6 w-6 text-pink-600" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-foreground lg:text-3xl">
              All Favorites by Tag
            </h1>
          </div>
          <Link
            href="/user"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Profile
          </Link>
        </div>
        <p className="text-sm text-foreground-muted">
          Ideas are grouped by tags, and each card shows the contribution value
          from that tag.
        </p>
      </section>

      {groupedByTags.length === 0 ? (
        <section className="rounded-3xl border border-dashed border-border bg-background-surface p-12 text-center shadow-sm">
          <Heart className="mx-auto mb-3 h-12 w-12 text-slate-300" />
          <h2 className="text-xl font-bold text-foreground">No favorites yet</h2>
          <p className="mt-1 text-foreground-muted">
            Favorite a few ideas first, then this grouped view will appear.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Start Swiping &rarr;
          </Link>
        </section>
      ) : (
        <div className="space-y-5">
          {groupedByTags.map((group) => (
            <section
              key={group.tagId}
              className="rounded-2xl border border-border bg-background-surface p-5 shadow-sm"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background-muted px-3 py-1 text-sm font-semibold text-foreground-surface">
                  <Tags className="h-4 w-4" />
                  {group.tagLabel}
                </div>
                <span className="text-xs font-medium text-foreground-muted">
                  Tag total contribution: {group.totalContribution.toFixed(2)}
                </span>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {group.ideas.map((item) => (
                  <article
                    key={`${group.tagId}-${item.favoriteId}`}
                    className="rounded-xl border border-border bg-background-muted p-4"
                  >
                    <h3 className="line-clamp-1 text-base font-bold text-foreground">
                      {item.idea.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-foreground-muted">
                      {item.idea.description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-foreground-muted">
                      <span className="rounded-full border border-border bg-background-surface px-2 py-1 font-medium">
                        {group.tagLabel} contribution:{" "}
                        {item.contribution.toFixed(2)}
                      </span>
                      <span>
                        idea tag: {item.ideaTagWeight.toFixed(2)} · your tag:{" "}
                        {item.userTagWeight.toFixed(2)}
                      </span>
                    </div>
                    <Link
                      href={`/ideas/${item.idea.id}?from=profile-favorites`}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Open idea <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}

export default function FavoritesPage() {
  return (
    <SessionGuard>
      <FavoritesPageContent />
    </SessionGuard>
  );
}

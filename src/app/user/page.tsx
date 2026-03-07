"use client";

import Link from "next/link";
import { ArrowRight, Heart, Loader2, Settings } from "lucide-react";

import { SessionGuard } from "~/app/_components/session-guard";
import { api } from "~/trpc/react";

function UserPageContent() {
  const utils = api.useUtils();
  const preferences = api.idea.getPreferences.useQuery();
  const favoritesByTag = api.idea.getFavoritesByTag.useQuery();
  const vectorInsights = preferences.data?.vectorInsights;
  const tagProfile = preferences.data?.tagProfile;
  const topFavoriteIdeas = (favoritesByTag.data?.topIdeas ?? []).slice(0, 4);
  const topInterestLabels = (tagProfile?.topInterests ?? [])
    .slice(0, 3)
    .map((tag) => tag.label);
  const emergingInterestLabels = (tagProfile?.emergingInterests ?? [])
    .slice(0, 3)
    .map((tag) => tag.label);
  const lessInterestedLabels = (tagProfile?.lessInterestedRecently ?? [])
    .slice(0, 3)
    .map((tag) => tag.label);
  const formatInterestList = (labels: string[]) =>
    labels.length === 0 ? "none yet" : labels.join(", ");
  const interestSummary = `You currently lean toward ${formatInterestList(
    topInterestLabels,
  )}; emerging signals include ${formatInterestList(
    emergingInterestLabels,
  )}; and you are cooling on ${formatInterestList(lessInterestedLabels)}.`;
  const trendSeries = (tagProfile?.topInterests ?? [])
    .slice(0, 8)
    .map((tag) => ({
      tagId: tag.tagId,
      label: tag.label,
      delta: tag.implicitWeight,
      total: tag.weight,
    }));
  const chartWidth = 520;
  const chartHeight = 180;
  const chartPaddingX = 28;
  const chartBaselineY = chartHeight / 2;
  const maxTrendDelta = Math.max(
    0.25,
    ...trendSeries.map((point) => Math.abs(point.delta)),
  );
  const trendStep =
    trendSeries.length > 1
      ? (chartWidth - chartPaddingX * 2) / (trendSeries.length - 1)
      : 0;
  const trendPoints = trendSeries.map((point, index) => {
    const x = chartPaddingX + index * trendStep;
    const y =
      chartBaselineY - (point.delta / maxTrendDelta) * (chartHeight * 0.32);
    return { ...point, x, y };
  });
  const trendPolyline = trendPoints
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  const boostTag = api.idea.boostTag.useMutation({
    onSuccess: async () => {
      await preferences.refetch();
      await utils.idea.getStack.invalidate();
    },
  });

  const muteTag = api.idea.muteTag.useMutation({
    onSuccess: async () => {
      await preferences.refetch();
      await utils.idea.getStack.invalidate();
    },
  });

  const removeOnboardingTag = api.idea.removeOnboardingTag.useMutation({
    onSuccess: async () => {
      await preferences.refetch();
      await utils.idea.getStack.invalidate();
    },
  });

  const resetRecentLearning = api.idea.resetRecentLearning.useMutation({
    onSuccess: async () => {
      await preferences.refetch();
      await utils.idea.getStack.invalidate();
    },
  });

  if (preferences.isPending || favoritesByTag.isPending) {
    return (
      <main className="bg-background mx-auto min-h-[calc(100vh-73px)] w-full max-w-7xl space-y-6 px-4 py-8 lg:py-10">
        <section className="border-border bg-background-surface rounded-3xl border p-6 shadow-sm lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-3">
              <div className="skeleton h-8 w-60 rounded-lg" />
              <div className="skeleton h-5 w-72 rounded-lg" />
            </div>
            <div className="skeleton h-10 w-40 rounded-xl" />
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <section className="border-border bg-background-surface rounded-2xl border p-6 shadow-sm">
              <div className="skeleton mb-3 h-6 w-56 rounded-lg" />
              <div className="space-y-2">
                <div className="skeleton h-4 w-full rounded-lg" />
                <div className="skeleton h-4 w-11/12 rounded-lg" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="skeleton h-7 w-22 rounded-md" />
                <div className="skeleton h-7 w-24 rounded-md" />
                <div className="skeleton h-7 w-28 rounded-md" />
              </div>
            </section>

            <section className="border-border bg-background-surface rounded-2xl border p-6 shadow-sm">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="skeleton h-6 w-52 rounded-lg" />
                <div className="skeleton h-4 w-32 rounded-lg" />
              </div>
              <div className="skeleton-soft h-44 w-full rounded-xl" />
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                <div className="skeleton h-6 rounded-md" />
                <div className="skeleton h-6 rounded-md" />
                <div className="skeleton h-6 rounded-md" />
                <div className="skeleton h-6 rounded-md" />
              </div>
            </section>

            <section className="grid gap-4 xl:grid-cols-3">
              <div className="border-border bg-background-surface rounded-xl border p-4 shadow-sm xl:col-span-3">
                <div className="skeleton mb-2 h-5 w-36 rounded-lg" />
                <div className="space-y-2">
                  <div className="skeleton h-4 w-full rounded-lg" />
                  <div className="skeleton h-4 w-10/12 rounded-lg" />
                </div>
              </div>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="border-border bg-background-surface rounded-xl border p-4 shadow-sm"
                >
                  <div className="skeleton mb-2 h-5 w-28 rounded-lg" />
                  <div className="flex flex-wrap gap-2">
                    <div className="skeleton h-6 w-18 rounded-full" />
                    <div className="skeleton h-6 w-16 rounded-full" />
                    <div className="skeleton h-6 w-20 rounded-full" />
                  </div>
                </div>
              ))}
            </section>

            <section className="border-border bg-background-surface rounded-xl border p-5 shadow-sm">
              <div className="skeleton mb-3 h-5 w-44 rounded-lg" />
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border-border bg-background-muted rounded-xl border p-3"
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <div className="skeleton h-4 w-24 rounded-lg" />
                      <div className="skeleton h-4 w-10 rounded-lg" />
                    </div>
                    <div className="flex gap-2">
                      <div className="skeleton h-7 w-16 rounded-md" />
                      <div className="skeleton h-7 w-16 rounded-md" />
                      <div className="skeleton h-7 w-20 rounded-md" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="skeleton mt-4 h-9 w-44 rounded-lg" />
            </section>
          </div>

          <section className="border-border bg-background-surface h-fit rounded-3xl border p-6 shadow-sm lg:sticky lg:top-24">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="skeleton h-8 w-44 rounded-lg" />
              <div className="skeleton h-5 w-16 rounded-lg" />
            </div>
            <div className="grid gap-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="border-border bg-background-muted rounded-xl border p-4"
                >
                  <div className="skeleton mb-2 h-5 w-4/5 rounded-lg" />
                  <div className="skeleton mb-3 h-4 w-full rounded-lg" />
                  <div className="flex items-center justify-between gap-2">
                    <div className="skeleton h-4 w-24 rounded-lg" />
                    <div className="skeleton h-8 w-20 rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background mx-auto min-h-[calc(100vh-73px)] w-full max-w-7xl space-y-6 px-4 py-8 lg:py-10">
      <section className="border-border bg-background-surface relative overflow-hidden rounded-3xl border p-6 shadow-sm lg:p-8">
        <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-indigo-50 blur-3xl" />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <div className="rounded-xl bg-indigo-100 p-2">
                <Settings className="h-6 w-6 text-indigo-600" />
              </div>
              <h1 className="text-foreground text-2xl font-black tracking-tight lg:text-3xl">
                Your Vector Profile
              </h1>
            </div>
            <p className="text-foreground-muted font-medium">
              Manage your mathematical footprint and interests.
            </p>
          </div>
          <Link
            className="bg-foreground inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold text-white transition hover:bg-slate-800"
            href="/onboarding"
          >
            Retune Preferences
          </Link>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <section className="border-border bg-background-surface rounded-2xl border p-6 shadow-sm">
            <h2 className="text-foreground mb-2 text-lg font-bold">
              Latent profile summary
            </h2>
            <p className="text-foreground-muted text-sm leading-relaxed">
              {vectorInsights?.summary ??
                "No preference signal yet. Start swiping ideas to build your profile."}
            </p>
            <div className="text-foreground-muted mt-3 flex flex-wrap gap-2 text-xs font-medium">
              <span className="border-border bg-background-muted rounded-md border px-2 py-1">
                dims: {vectorInsights?.dimensions ?? 0}
              </span>
              <span className="border-border bg-background-muted rounded-md border px-2 py-1">
                magnitude: {(vectorInsights?.magnitude ?? 0).toFixed(2)}
              </span>
              <span className="border-border bg-background-muted rounded-md border px-2 py-1">
                avg signal: {(vectorInsights?.averageSignal ?? 0).toFixed(2)}
              </span>
            </div>
          </section>

          <section className="border-border bg-background-surface rounded-2xl border p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-foreground text-lg font-bold">
                Interest momentum graph
              </h2>
              <div className="text-foreground-muted flex items-center gap-3 text-[11px] font-semibold">
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />{" "}
                  Rising
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-rose-500" /> Falling
                </span>
              </div>
            </div>

            {trendPoints.length > 0 ? (
              <div>
                <svg
                  aria-label="Interest momentum graph"
                  className="h-44 w-full"
                  preserveAspectRatio="none"
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                >
                  <line
                    stroke="#e2e8f0"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                    x1={chartPaddingX}
                    x2={chartWidth - chartPaddingX}
                    y1={chartBaselineY}
                    y2={chartBaselineY}
                  />
                  <polyline
                    fill="none"
                    points={trendPolyline}
                    stroke="#334155"
                    strokeWidth="2"
                  />
                  {trendPoints.map((point) => (
                    <circle
                      key={point.tagId}
                      cx={point.x}
                      cy={point.y}
                      fill={point.delta >= 0 ? "#10b981" : "#f43f5e"}
                      r="4"
                    />
                  ))}
                </svg>
                <div className="text-foreground-muted mt-2 grid grid-cols-2 gap-2 text-[11px] font-medium sm:grid-cols-4">
                  {trendPoints.slice(0, 8).map((point) => (
                    <div
                      className="border-border bg-background-muted truncate rounded-md border px-2 py-1"
                      key={`trend-label-${point.tagId}`}
                      title={`${point.label}: ${point.delta >= 0 ? "+" : ""}${point.delta.toFixed(2)}`}
                    >
                      {point.label}: {point.delta >= 0 ? "+" : ""}
                      {point.delta.toFixed(2)}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-foreground-muted text-sm">
                No trend data yet. Continue swiping to build interest momentum.
              </p>
            )}
          </section>

          <section className="grid gap-4 xl:grid-cols-3">
            <div className="border-border bg-background-surface rounded-xl border p-4 shadow-sm xl:col-span-3">
              <h3 className="text-foreground mb-2 text-sm font-bold">
                Interest summary
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {interestSummary}
              </p>
            </div>

            <div className="border-border bg-background-surface rounded-xl border p-4 shadow-sm">
              <h3 className="text-foreground mb-2 text-sm font-bold">
                Top interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {(tagProfile?.topInterests ?? []).slice(0, 8).map((tag) => (
                  <span
                    key={tag.tagId}
                    className="border-border text-foreground-surface rounded-full border px-2 py-1 text-xs font-medium"
                  >
                    {tag.label} ({tag.weight.toFixed(2)})
                  </span>
                ))}
                {(tagProfile?.topInterests?.length ?? 0) === 0 ? (
                  <span className="text-foreground-muted text-xs">
                    No reinforced tags yet
                  </span>
                ) : null}
              </div>
            </div>

            <div className="border-border bg-background-surface rounded-xl border p-4 shadow-sm">
              <h3 className="text-foreground mb-2 text-sm font-bold">
                Emerging interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {(tagProfile?.emergingInterests ?? [])
                  .slice(0, 8)
                  .map((tag) => (
                    <span
                      key={tag.tagId}
                      className="border-border text-foreground-surface rounded-full border px-2 py-1 text-xs font-medium"
                    >
                      {tag.label}
                    </span>
                  ))}
                {(tagProfile?.emergingInterests?.length ?? 0) === 0 ? (
                  <span className="text-foreground-muted text-xs">
                    No emerging tags yet
                  </span>
                ) : null}
              </div>
            </div>

            <div className="border-border bg-background-surface rounded-xl border p-4 shadow-sm">
              <h3 className="text-foreground mb-2 text-sm font-bold">
                Less interested recently
              </h3>
              <div className="flex flex-wrap gap-2">
                {(tagProfile?.lessInterestedRecently ?? [])
                  .slice(0, 8)
                  .map((tag) => (
                    <span
                      key={tag.tagId}
                      className="border-border text-foreground-surface rounded-full border px-2 py-1 text-xs font-medium"
                    >
                      {tag.label} ({tag.weight.toFixed(2)})
                    </span>
                  ))}
                {(tagProfile?.lessInterestedRecently?.length ?? 0) === 0 ? (
                  <span className="text-foreground-muted text-xs">
                    No suppressed tags
                  </span>
                ) : null}
              </div>
            </div>
          </section>

          <section className="border-border bg-background-surface rounded-xl border p-5 shadow-sm">
            <h3 className="text-foreground mb-3 text-sm font-bold">
              Recommendation controls
            </h3>

            <div className="mb-4 grid gap-3">
              {(tagProfile?.topInterests ?? []).slice(0, 4).map((tag) => (
                <div
                  key={`controls-${tag.tagId}`}
                  className="border-border bg-background-muted rounded-xl border p-3"
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-foreground-surface text-xs font-semibold">
                      {tag.label}
                    </span>
                    <span className="text-foreground-muted text-[11px] font-medium">
                      {tag.weight.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className="inline-flex items-center gap-1 rounded-md border border-emerald-200 bg-white px-2.5 py-1 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-60"
                      onClick={() => boostTag.mutate({ tagId: tag.tagId })}
                      type="button"
                      disabled={
                        boostTag.isPending ||
                        muteTag.isPending ||
                        removeOnboardingTag.isPending ||
                        resetRecentLearning.isPending
                      }
                    >
                      {boostTag.isPending ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : null}
                      {boostTag.isPending ? "Boosting..." : "Boost"}
                    </button>
                    <button
                      className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-white px-2.5 py-1 text-xs font-semibold text-rose-700 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-60"
                      onClick={() => muteTag.mutate({ tagId: tag.tagId })}
                      type="button"
                      disabled={
                        boostTag.isPending ||
                        muteTag.isPending ||
                        removeOnboardingTag.isPending ||
                        resetRecentLearning.isPending
                      }
                    >
                      {muteTag.isPending ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : null}
                      {muteTag.isPending ? "Muting..." : "Mute"}
                    </button>
                    <button
                      className="border-border bg-background-surface text-foreground-surface hover:bg-background-muted inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-60"
                      onClick={() =>
                        removeOnboardingTag.mutate({ tagId: tag.tagId })
                      }
                      type="button"
                      disabled={
                        boostTag.isPending ||
                        muteTag.isPending ||
                        removeOnboardingTag.isPending ||
                        resetRecentLearning.isPending
                      }
                    >
                      {removeOnboardingTag.isPending ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : null}
                      {removeOnboardingTag.isPending
                        ? "Removing..."
                        : "Remove Seed"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="border-border bg-background-surface text-foreground-surface hover:bg-background-muted inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-60"
              onClick={() => resetRecentLearning.mutate()}
              type="button"
              disabled={
                boostTag.isPending ||
                muteTag.isPending ||
                removeOnboardingTag.isPending ||
                resetRecentLearning.isPending
              }
            >
              {resetRecentLearning.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : null}
              {resetRecentLearning.isPending
                ? "Resetting recent learning..."
                : "Reset recent learning"}
            </button>
          </section>
        </div>

        <section className="border-border bg-background-surface h-fit rounded-3xl border p-6 shadow-sm lg:sticky lg:top-24">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-pink-100 p-2">
                <Heart className="h-6 w-6 text-pink-600" />
              </div>
              <h2 className="text-foreground text-2xl font-black tracking-tight">
                Favorites Vault
              </h2>
            </div>
            <Link
              href="/user/favorites"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-3">
            {topFavoriteIdeas.map((entry) => (
              <div
                className="border-border bg-background-muted grid gap-3 rounded-xl border p-4"
                key={entry.favoriteId}
              >
                <div>
                  <h3 className="text-foreground line-clamp-1 text-base font-bold">
                    {entry.idea.title}
                  </h3>
                  <p className="text-foreground-muted mt-1 line-clamp-2 text-sm leading-relaxed">
                    {entry.idea.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {entry.tagContributions.slice(0, 2).map((tag) => (
                      <span
                        key={`${entry.favoriteId}-${tag.tagId}`}
                        className="border-border bg-background-surface text-foreground-muted rounded-full border px-2 py-0.5 text-[11px] font-medium"
                      >
                        {tag.tagLabel}: {tag.contribution.toFixed(2)}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-foreground-muted text-xs font-medium">
                    Saved {new Date(entry.savedAt).toLocaleDateString()}
                  </span>
                  <Link
                    className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-100 bg-white px-3 py-1.5 text-sm font-semibold text-indigo-600 hover:border-indigo-200 hover:text-indigo-700"
                    href={`/ideas/${entry.idea.id}?from=profile`}
                  >
                    Open <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
            {favoritesByTag.data?.favoriteCount === 0 ? (
              <div className="border-border bg-background-muted rounded-2xl border-2 border-dashed py-12 text-center">
                <Heart className="mx-auto mb-3 h-12 w-12 text-slate-300" />
                <h3 className="text-foreground text-lg font-bold">
                  No favorites yet
                </h3>
                <p className="text-foreground-muted mx-auto mt-1 max-w-xs">
                  Swipe right or up on ideas in the deck to save them to your
                  vault.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-block font-semibold text-indigo-600"
                >
                  Start Swiping &rarr;
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}

export default function UserPage() {
  return (
    <SessionGuard>
      <UserPageContent />
    </SessionGuard>
  );
}

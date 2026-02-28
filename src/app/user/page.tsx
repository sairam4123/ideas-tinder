"use client";

import Link from "next/link";
import { Settings, Heart, ArrowRight } from "lucide-react";

import { SessionGuard } from "~/app/_components/session-guard";
import { api } from "~/trpc/react";

function UserPageContent() {
  const preferences = api.idea.getPreferences.useQuery();
  const favorites = api.idea.getFavorites.useQuery();

  if (preferences.isPending || favorites.isPending) {
    return (
      <main className="mx-auto min-h-[calc(100vh-73px)] w-full max-w-5xl space-y-6 bg-slate-50 px-4 py-8">
        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <div className="mb-3 h-8 w-1/4 animate-pulse rounded-lg bg-slate-200" />
          <div className="mb-6 h-5 w-2/5 animate-pulse rounded-lg bg-slate-200" />

          <div className="mb-6 space-y-4">
            <div className="h-5 w-1/3 animate-pulse rounded-lg bg-slate-200" />
            <div className="h-5 w-1/2 animate-pulse rounded-lg bg-slate-200" />
          </div>

          <div className="h-12 w-40 animate-pulse rounded-xl bg-slate-200" />
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

  return (
    <main className="mx-auto min-h-[calc(100vh-73px)] w-full max-w-4xl space-y-8 bg-slate-50 px-4 py-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-indigo-50 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-2 flex items-center gap-3">
            <div className="rounded-xl bg-indigo-100 p-2">
              <Settings className="h-6 w-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">
              Your Vector Profile
            </h1>
          </div>
          <p className="font-medium text-slate-500">
            Manage your mathematical footprint and interests.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="font-semibold text-slate-700">
                Algorithm Status
              </span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold tracking-wider text-emerald-700 uppercase">
                {preferences.data?.onboardingCompleted
                  ? "Active"
                  : "Pending Setup"}
              </span>
            </div>
            <div>
              <span className="mb-2 block font-semibold text-slate-700">
                Target Industries
              </span>
              <div className="flex flex-wrap gap-2">
                {preferences.data?.fields.map((field) => (
                  <span
                    key={field}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600"
                  >
                    {field}
                  </span>
                )) ?? (
                  <span className="text-sm text-slate-400">
                    No fields selected
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex">
            <Link
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white shadow-md shadow-slate-200 transition hover:bg-slate-800"
              href="/onboarding"
            >
              Retune Preferences
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-pink-100 p-2">
            <Heart className="h-6 w-6 text-pink-600" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            Favorites Vault
          </h2>
        </div>

        <div className="space-y-4">
          {(favorites.data ?? []).map((entry) => (
            <article
              className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-slate-200 hover:bg-white hover:shadow-md"
              key={entry.id}
            >
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                {entry.idea.title}
              </h3>
              <p className="leading-relaxed font-medium text-slate-600">
                {entry.idea.description}
              </p>
              <Link
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700"
                href={`/ideas/${entry.idea.id}`}
              >
                Deep Dive <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
          {favorites.data?.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 py-12 text-center">
              <Heart className="mx-auto mb-3 h-12 w-12 text-slate-300" />
              <h3 className="text-lg font-bold text-slate-900">
                No favorites yet
              </h3>
              <p className="mx-auto mt-1 max-w-xs text-slate-500">
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

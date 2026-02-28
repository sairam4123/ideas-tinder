"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { SessionGuard } from "~/app/_components/session-guard";
import { api } from "~/trpc/react";

function OnboardingContent() {
  const router = useRouter();
  const fieldsQuery = api.idea.getAvailableFields.useQuery();
  const preferencesQuery = api.idea.getPreferences.useQuery();
  const saveMutation = api.idea.saveInterests.useMutation({
    onSuccess: async () => {
      await preferencesQuery.refetch();
      router.replace("/");
    },
  });

  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [customField, setCustomField] = useState("");
  const [customFields, setCustomFields] = useState<string[]>([]);

  const fieldOptions = useMemo(
    () => (fieldsQuery.data ?? []).filter((field) => !field.isCustom),
    [fieldsQuery.data],
  );

  const onboardingCompleted =
    preferencesQuery.data?.onboardingCompleted === true;

  useEffect(() => {
    if (onboardingCompleted) {
      router.replace("/");
    }
  }, [onboardingCompleted, router]);

  if (onboardingCompleted) {
    return null;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-3xl space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Choose your fields
          </h1>
          <p className="text-sm text-slate-600">
            We use these interests to initialize your preference vector.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {fieldOptions.map((field) => {
            const checked = selectedFields.includes(field.label);
            return (
              <button
                className={`rounded-md border px-3 py-2 text-sm ${
                  checked
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 bg-white text-slate-700"
                }`}
                key={field.id}
                onClick={() => {
                  setSelectedFields((previous) =>
                    previous.includes(field.label)
                      ? previous.filter((value) => value !== field.label)
                      : [...previous, field.label],
                  );
                }}
                type="button"
              >
                {field.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-slate-700"
            htmlFor="custom-field"
          >
            Add custom field
          </label>
          <div className="flex gap-2">
            <input
              className="w-full rounded-md border border-slate-300 px-3 py-2"
              id="custom-field"
              onChange={(event) => setCustomField(event.target.value)}
              placeholder="e.g. Quantum"
              value={customField}
            />
            <button
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
              onClick={() => {
                const next = customField.trim();
                if (!next) return;
                if (customFields.includes(next)) return;
                setCustomFields((previous) => [...previous, next]);
                setCustomField("");
              }}
              type="button"
            >
              Add
            </button>
          </div>
          {customFields.length ? (
            <div className="flex flex-wrap gap-2">
              {customFields.map((field) => (
                <button
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs"
                  key={field}
                  onClick={() => {
                    setCustomFields((previous) =>
                      previous.filter((value) => value !== field),
                    );
                  }}
                  type="button"
                >
                  {field} ×
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <button
          className="rounded-md bg-slate-900 px-4 py-2 font-medium text-white disabled:opacity-60"
          disabled={
            saveMutation.isPending ||
            selectedFields.length + customFields.length === 0
          }
          onClick={() => {
            saveMutation.mutate({
              fields: selectedFields,
              customFields,
            });
          }}
          type="button"
        >
          {saveMutation.isPending ? "Saving..." : "Continue"}
        </button>
      </div>
    </main>
  );
}

export default function OnboardingPage() {
  return (
    <SessionGuard>
      <OnboardingContent />
    </SessionGuard>
  );
}

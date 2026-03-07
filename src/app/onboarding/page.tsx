"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

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
  const initializedFromExistingPreferencesRef = useRef(false);

  const fieldOptions = useMemo(
    () => (fieldsQuery.data ?? []).filter((field) => !field.isCustom),
    [fieldsQuery.data],
  );

  const onboardingCompleted =
    preferencesQuery.data?.onboardingCompleted === true;

  useEffect(() => {
    if (initializedFromExistingPreferencesRef.current) {
      return;
    }
    if (!fieldsQuery.data || !preferencesQuery.data) {
      return;
    }

    const optionLabels = new Set(fieldOptions.map((field) => field.label));
    const existingFields = preferencesQuery.data.fields;

    setSelectedFields(
      existingFields.filter((field) => optionLabels.has(field)),
    );
    setCustomFields(existingFields.filter((field) => !optionLabels.has(field)));

    initializedFromExistingPreferencesRef.current = true;
  }, [fieldOptions, fieldsQuery.data, preferencesQuery.data]);

  if (fieldsQuery.isPending || preferencesQuery.isPending) {
    return (
      <main className="bg-background flex min-h-screen items-center justify-center px-4 py-10">
        <div className="border-border bg-background-surface w-full max-w-3xl rounded-2xl border p-6 shadow-sm">
          <p className="text-foreground-muted text-sm">
            Loading preferences...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background flex min-h-screen items-center justify-center px-4 py-10">
      <div className="border-border bg-background-surface w-full max-w-3xl space-y-6 rounded-2xl border p-6 shadow-sm">
        <div>
          <h1 className="text-foreground text-2xl font-bold">
            {onboardingCompleted ? "Retune your fields" : "Choose your fields"}
          </h1>
          <p className="text-foreground-muted text-sm">
            {onboardingCompleted
              ? "Update your interests anytime. New recommendations will adapt from this updated seed plus your ongoing interactions."
              : "We use these interests as an initial seed and adapt over time from your interactions."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {fieldOptions.map((field) => {
            const checked = selectedFields.includes(field.label);
            return (
              <button
                className={`rounded-md border px-3 py-2 text-sm ${checked
                    ? "border-foreground bg-foreground text-background-surface"
                    : "border-border bg-background-surface text-foreground-surface"
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
            className="text-foreground-surface text-sm font-medium"
            htmlFor="custom-field"
          >
            Add custom field
          </label>
          <div className="flex gap-2">
            <input
              className="border-border bg-background-surface text-foreground w-full rounded-md border px-3 py-2"
              id="custom-field"
              onChange={(event) => setCustomField(event.target.value)}
              placeholder="e.g. Quantum"
              value={customField}
            />
            <button
              className="border-border bg-background-surface text-foreground-surface rounded-md border px-3 py-2 text-sm"
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
                  className="border-border bg-background-surface text-foreground-surface rounded-full border px-3 py-1 text-xs"
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
          className="bg-foreground rounded-md px-4 py-2 font-medium text-background-surface disabled:opacity-60"
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

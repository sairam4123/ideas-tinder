import Link from "next/link";

export function OnboardingPrompt() {
    return (
        <div className="border-border bg-background-surface relative flex h-112.5 w-full max-w-sm flex-col items-center justify-center gap-6 overflow-hidden rounded-4xl border p-10 text-center shadow-sm md:max-w-2xl">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-indigo-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-32 w-32 rounded-full bg-blue-50 blur-3xl"></div>

            <div className="relative z-10">
                <h2 className="text-foreground mb-2 text-3xl font-bold">
                    Complete Setup
                </h2>
                <p className="text-foreground-muted mb-6 text-sm leading-relaxed">
                    Select your fields of interest first to personalize your AI-generated
                    recommendations.
                </p>
                <Link
                    className="bg-foreground inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 font-semibold text-white transition-all hover:scale-105 active:scale-95"
                    href="/onboarding"
                >
                    Go to Onboarding
                </Link>
            </div>
        </div>
    );
}

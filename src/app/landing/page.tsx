import Link from "next/link";
import { Sparkles, ArrowRight, Zap, Repeat } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="bg-background relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden p-4">
      {/* Background gradients */}
      <div className="pointer-events-none absolute -top-48 -right-48 h-144 w-xl rounded-full bg-indigo-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-144 w-xl rounded-full bg-blue-200/50 blur-3xl" />

      <div className="relative z-10 w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="bg-primary-soft/70 text-primary inline-flex items-center gap-2 rounded-full border border-indigo-100 px-4 py-1.5 text-sm font-semibold shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Powered by Gemini AI</span>
          </div>

          <h1 className="text-foreground text-5xl leading-tight font-black tracking-tight md:text-7xl">
            Discover startup ideas <br className="hidden md:block" />
            <span className="bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              tuned to you.
            </span>
          </h1>

          <p className="text-foreground-muted max-w-2xl text-lg leading-relaxed font-medium md:text-xl">
            Swipe through endless AI-generated concepts. Like what you see, and
            we&apos;ll mathematically align future ideas with your exact tastes.
          </p>

          <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 pt-4 sm:w-auto sm:flex-row">
            <Link
              className="group bg-foreground flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-xl shadow-slate-200 transition-all hover:scale-105 hover:bg-slate-800 active:scale-95 sm:w-auto"
              href="/auth/register"
            >
              Start Swiping
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              className="border-border bg-background-surface/70 text-foreground-surface hover:bg-background-surface flex w-full items-center justify-center rounded-full border-2 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:border-slate-300 active:scale-95 sm:w-auto"
              href="/auth/login"
            >
              Log back in
            </Link>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 pt-16 md:grid-cols-3">
            {[
              {
                title: "AI Generation",
                icon: Sparkles,
                desc: "Infinite streams of fresh ideas cooked up by advanced language models.",
              },
              {
                title: "Vector Matching",
                icon: Zap,
                desc: "Your likes build a mathematical preference footprint for precision targeting.",
              },
              {
                title: "Continuous Loop",
                icon: Repeat,
                desc: "The more you swipe, the better the algorithm understands your goals.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="border-border bg-background-surface/75 flex flex-col items-center rounded-3xl border p-6 text-center shadow-lg shadow-slate-100/50 backdrop-blur-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

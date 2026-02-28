import Link from "next/link";
import { Sparkles, ArrowRight, Zap, Repeat } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden bg-slate-50 p-4">
      {/* Background gradients */}
      <div className="pointer-events-none absolute top-0 right-0 -mt-40 -mr-40 h-125 w-125 rounded-full bg-indigo-200/50 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 -mb-40 -ml-40 h-125 w-125 rounded-full bg-blue-200/50 blur-[100px]" />

      <div className="relative z-10 w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 text-sm font-semibold text-indigo-700 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Powered by Gemini AI</span>
          </div>

          <h1 className="text-5xl leading-tight font-black tracking-tight text-slate-900 md:text-7xl">
            Discover startup ideas <br className="hidden md:block" />
            <span className="bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              tuned to you.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed font-medium text-slate-600 md:text-xl">
            Swipe through endless AI-generated concepts. Like what you see, and
            we&apos;ll mathematically align future ideas with your exact tastes.
          </p>

          <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 pt-4 sm:w-auto sm:flex-row">
            <Link
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white shadow-xl shadow-slate-200 transition-all hover:scale-105 hover:bg-slate-800 active:scale-95 sm:w-auto"
              href="/auth/register"
            >
              Start Swiping
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              className="flex w-full items-center justify-center rounded-full border-2 border-slate-200 bg-white/50 px-8 py-4 font-semibold text-slate-700 backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-white active:scale-95 sm:w-auto"
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
                className="flex flex-col items-center rounded-3xl border border-slate-100 bg-white/60 p-6 text-center shadow-lg shadow-slate-100/50 backdrop-blur-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
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

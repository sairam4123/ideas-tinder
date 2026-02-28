import { IdeaTinder } from "~/app/_components/idea-tinder";
import { SessionGuard } from "~/app/_components/session-guard";

export default function Home() {
  return (
    <SessionGuard>
      <main className="relative flex min-h-[calc(100vh-73px)] flex-col items-center overflow-hidden bg-slate-50 px-4 py-8">
        {/* Background gradients */}
        <div className="pointer-events-none absolute top-0 right-0 -mt-40 -mr-40 h-125 w-125 rounded-full bg-indigo-200/40 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 -mb-40 -ml-40 h-125 w-125 rounded-full bg-blue-200/40 blur-[100px]" />

        <div className="z-10 mb-6 text-center">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Swipe Ideas
          </h1>
          <p className="font-sm mx-auto mt-2 max-w-sm font-medium text-slate-500">
            Discover startup concepts matching your vector profile.
          </p>
        </div>
        <div className="z-10 flex w-full justify-center">
          <IdeaTinder />
        </div>
      </main>
    </SessionGuard>
  );
}

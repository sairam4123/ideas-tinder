import { IdeaTinder } from "~/app/_components/idea-tinder";
import { SessionGuard } from "~/app/_components/session-guard";

export default function Home() {
  return (
    <SessionGuard>
      <main className="bg-background flex min-h-[calc(100vh-73px)] flex-col items-center overflow-hidden px-4 py-8">
        {/* Background gradients */}
        <div className="pointer-events-none absolute -top-48 -right-48 h-144 w-xl rounded-full bg-indigo-200/45 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-48 h-144 w-xl rounded-full bg-blue-200/45 blur-3xl" />

        <div className="z-10 mb-6 text-center">
          <h1 className="text-foreground text-3xl font-black tracking-tight sm:text-4xl">
            Swipe Ideas
          </h1>
          <p className="font-sm text-foreground-muted mx-auto mt-2 max-w-sm font-medium">
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

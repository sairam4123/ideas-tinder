import { IdeaTinder } from "~/app/_components/idea-tinder";
import LandingPage from "~/app/landing/page";
import { getSession } from "~/server/better-auth/server";

export default async function Home() {
  const session = await getSession();

  if (!session?.user) {
    return <LandingPage />;
  }

  return (
    <main className="bg-background flex min-h-[calc(100vh-73px)] flex-col items-center overflow-hidden px-4 py-8">
      {/* Background gradients */}
      <div className="pointer-events-none absolute -top-48 -right-48 h-144 w-[36rem] rounded-full bg-indigo-200/45 dark:bg-indigo-900/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-144 w-[36rem] rounded-full bg-sky-200/45 dark:bg-sky-900/20 blur-[120px]" />

      <div className="z-10 mb-6 text-center">
        <h1 className="text-foreground text-3xl font-black tracking-tight sm:text-4xl">
          Swipe Ideas
        </h1>
        <p className="font-sm text-foreground-muted mx-auto mt-2 max-w-sm font-medium">
          Discover startup concepts matching your vector profile.
        </p>
      </div>
      <div className="z-10 flex w-full items-center justify-center">
        <IdeaTinder />
      </div>
    </main>
  );
}

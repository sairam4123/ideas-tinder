import { IdeaTinder } from "~/app/_components/idea-tinder";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Ideas Tinder
        </h1>
        <p className="mt-2 text-slate-600">Swipe through startup ideas</p>
      </div>
      <IdeaTinder />
    </main>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { authClient } from "~/server/better-auth/client";

import { Sparkles, Compass, User, LogOut, Menu, X } from "lucide-react";

export function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAuthRoute = pathname.startsWith("/auth");

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link
          className="group flex items-center gap-2 text-xl font-black tracking-tight text-slate-900"
          href={session?.user ? "/" : "/landing"}
        >
          <div className="rounded-lg bg-indigo-600 p-1.5 transition-colors group-hover:bg-indigo-500">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          Ideas Tinder
        </Link>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          onClick={() => {
            setIsMenuOpen((value) => !value);
          }}
          type="button"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {session?.user ? (
            <>
              <Link
                className={`flex items-center gap-1.5 transition-colors ${pathname === "/" ? "text-indigo-600" : "text-slate-500 hover:text-slate-900"}`}
                href="/"
              >
                <Compass className="h-4 w-4" />
                Discover
              </Link>
              <Link
                className={`flex items-center gap-1.5 transition-colors ${pathname === "/user" ? "text-indigo-600" : "text-slate-500 hover:text-slate-900"}`}
                href="/user"
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
              <button
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-600 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900"
                onClick={async () => {
                  await authClient.signOut();
                  router.replace("/landing");
                }}
                type="button"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </>
          ) : isAuthRoute ? (
            <>
              <Link
                className="text-slate-500 transition-colors hover:text-slate-900"
                href="/auth/login"
              >
                Login
              </Link>
              <Link
                className="rounded-full bg-indigo-600 px-5 py-2.5 text-white shadow-md shadow-indigo-200 transition-all hover:scale-105 hover:bg-indigo-500 active:scale-95"
                href="/auth/register"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                className="text-slate-500 transition-colors hover:text-slate-900"
                href="/auth/login"
              >
                Login
              </Link>
              <Link
                className="rounded-full bg-slate-900 px-5 py-2.5 text-white shadow-md shadow-slate-200 transition-all hover:scale-105 hover:bg-slate-800 active:scale-95"
                href="/auth/register"
              >
                Get started
              </Link>
            </>
          )}
        </nav>
      </div>

      {isMenuOpen ? (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm font-semibold">
            {session?.user ? (
              <>
                <Link
                  className={`flex items-center gap-2 rounded-lg px-2 py-2 transition-colors ${pathname === "/" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
                  href="/"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <Compass className="h-4 w-4" />
                  Discover
                </Link>
                <Link
                  className={`flex items-center gap-2 rounded-lg px-2 py-2 transition-colors ${pathname === "/user" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
                  href="/user"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
                <button
                  className="flex items-center gap-2 rounded-lg border border-slate-200 px-2 py-2 text-slate-600"
                  onClick={async () => {
                    setIsMenuOpen(false);
                    await authClient.signOut();
                    router.replace("/landing");
                  }}
                  type="button"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  className="rounded-lg px-2 py-2 text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                  href="/auth/login"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  Login
                </Link>
                <Link
                  className="rounded-lg bg-slate-900 px-3 py-2 text-center text-white"
                  href="/auth/register"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {isAuthRoute ? "Register" : "Get started"}
                </Link>
              </>
            )}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

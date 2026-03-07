"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { authClient } from "~/server/better-auth/client";

import { Sparkles, Compass, User, LogOut } from "lucide-react";

export function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [isScrolled, setIsScrolled] = useState(false);

  const isAuthRoute = pathname.startsWith("/auth");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    router.replace("/landing");
  };

  return (
    <>
      <header
        className={`border-border/40 bg-background-surface/80 fixed z-50 shadow-sm backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? "top-0 right-0 left-0 w-full rounded-none border-b"
            : "top-5 left-1/2 w-[min(96%,72rem)] -translate-x-1/2 rounded-full border shadow-md"
        }`}
      >
        <div
          className={`mx-auto flex w-full items-center justify-between px-4 py-4 transition-all duration-300 ${
            isScrolled ? "max-w-6xl" : "max-w-full"
          }`}
        >
          <Link
            className="group text-foreground flex items-center gap-2 text-xl font-black tracking-tight"
            href={session?.user ? "/" : "/landing"}
          >
            <div className="bg-primary rounded-full p-1.5 transition-colors group-hover:bg-indigo-500">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            Ideas Tinder
          </Link>

          {!session?.user ? (
            <nav className="flex items-center gap-3 text-sm font-semibold md:hidden">
              <Link
                className="text-foreground-muted hover:text-foreground transition-colors"
                href="/auth/login"
              >
                Login
              </Link>
              <Link
                className="bg-foreground rounded-full px-4 py-2 text-white"
                href="/auth/register"
              >
                {isAuthRoute ? "Register" : "Get started"}
              </Link>
            </nav>
          ) : null}

          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            {session?.user ? (
              <>
                <Link
                  className={`flex items-center gap-1.5 transition-colors ${pathname === "/" ? "text-primary" : "text-foreground-muted hover:text-foreground"}`}
                  href="/"
                >
                  <Compass className="h-4 w-4" />
                  Discover
                </Link>
                <Link
                  className={`flex items-center gap-1.5 transition-colors ${pathname === "/user" ? "text-primary" : "text-foreground-muted hover:text-foreground"}`}
                  href="/user"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
                <button
                  className="border-border bg-background-surface text-foreground-muted hover:bg-background-muted hover:text-foreground flex items-center gap-1.5 rounded-full border px-4 py-2 shadow-sm transition-colors"
                  onClick={handleLogout}
                  type="button"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : isAuthRoute ? (
              <>
                <Link
                  className="text-foreground-muted hover:text-foreground transition-colors"
                  href="/auth/login"
                >
                  Login
                </Link>
                <Link
                  className="bg-primary text-primary-foreground rounded-full px-5 py-2.5 shadow-md shadow-indigo-200 transition-all hover:scale-105 hover:bg-indigo-500 active:scale-95"
                  href="/auth/register"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="text-foreground-muted hover:text-foreground transition-colors"
                  href="/auth/login"
                >
                  Login
                </Link>
                <Link
                  className="bg-foreground rounded-full px-5 py-2.5 text-white shadow-md shadow-slate-200 transition-all hover:scale-105 hover:bg-slate-800 active:scale-95"
                  href="/auth/register"
                >
                  Get started
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {session?.user ? (
        <nav className="fixed right-0 bottom-4 left-0 z-50 flex justify-center px-4 md:hidden">
          <div className="border-border bg-background-surface/95 flex w-full max-w-xs items-center justify-between rounded-full border px-3 py-2 shadow-lg backdrop-blur">
            <Link
              aria-label="Discover"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${pathname === "/" ? "bg-primary-soft text-primary" : "text-foreground-muted hover:bg-background-muted hover:text-foreground"}`}
              href="/"
            >
              <Compass className="h-5 w-5" />
            </Link>
            <Link
              aria-label="Profile"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${pathname === "/user" ? "bg-primary-soft text-primary" : "text-foreground-muted hover:bg-background-muted hover:text-foreground"}`}
              href="/user"
            >
              <User className="h-5 w-5" />
            </Link>
            <button
              aria-label="Logout"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600 transition-colors hover:bg-red-100"
              onClick={handleLogout}
              type="button"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </nav>
      ) : null}

      {/* <div className="h-22" /> */}
    </>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { authClient } from "~/server/better-auth/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Redirect to app if already logged in
  const { data: session } = authClient.useSession();
  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <form
        className="w-full max-w-md space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        onSubmit={async (event) => {
          event.preventDefault();
          setError(null);
          setIsLoading(true);

          const result = await authClient.signIn.email({
            email,
            password,
          });

          setIsLoading(false);

          if (result.error) {
            setError(result.error.message ?? "Login failed");
            return;
          }

          router.replace("/");
        }}
      >
        <h1 className="text-2xl font-bold text-slate-900">Login</h1>
        <p className="text-sm text-slate-600">
          Continue to your ideation stack.
        </p>

        <label className="block space-y-1 text-sm">
          <span>Email</span>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2"
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            value={email}
            required
          />
        </label>

        <label className="block space-y-1 text-sm">
          <span>Password</span>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2"
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            value={password}
            required
          />
        </label>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          className="w-full rounded-md bg-slate-900 px-4 py-2 font-medium text-white disabled:opacity-60"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>

        <p className="text-sm text-slate-600">
          New here?{" "}
          <Link className="font-medium text-slate-900" href="/auth/register">
            Create an account
          </Link>
        </p>
      </form>
    </main>
  );
}

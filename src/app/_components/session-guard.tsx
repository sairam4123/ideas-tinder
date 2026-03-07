"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { authClient } from "~/server/better-auth/client";

export function SessionGuard(props: {
  children: React.ReactNode;
  redirectTo?: string;
}) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.replace(props.redirectTo ?? "/auth/login");
    }
  }, [isPending, props.redirectTo, router, session?.user]);

  if (isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <p className="text-foreground-muted">Checking session...</p>
      </main>
    );
  }

  if (!session?.user) {
    return null;
  }

  return <>{props.children}</>;
}

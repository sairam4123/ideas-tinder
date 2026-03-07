import { getSession } from "~/server/better-auth/server";
import { db } from "~/server/db";
import {
  generateFreshStack,
  getOrCreateActiveStack,
} from "~/server/services/idea/engine";

export async function GET(request: Request) {
  const session = await getSession();
  if (!session?.user?.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  const url = new URL(request.url);
  const forceRefresh = url.searchParams.get("forceRefresh") === "true";

  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      const pushEvent = (event: string, payload: unknown) => {
        controller.enqueue(
          encoder.encode(
            `event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`,
          ),
        );
      };

      const run = async () => {
        try {
          pushEvent("start", { forceRefresh });

          if (!forceRefresh) {
            const stack = await getOrCreateActiveStack({
              db,
              userId: session.user.id,
              forceRefresh: false,
            });

            pushEvent("ready", {
              stackId: stack.id,
              ideaCount: stack.items.length,
            });
            controller.close();
            return;
          }

          const stack = await generateFreshStack({
            db,
            userId: session.user.id,
            onIdeaPersisted: (progress) => {
              pushEvent("idea", {
                stackId: progress.stackId,
                stackItemId: progress.stackItemId,
                position: progress.position,
                total: progress.total,
                idea: {
                  id: progress.idea.id,
                  title: progress.idea.title,
                  description: progress.idea.description,
                  fieldId: progress.idea.fieldId,
                  createdAt: progress.idea.createdAt,
                },
              });
            },
          });

          pushEvent("complete", {
            stackId: stack.id,
            ideaCount: stack.items.length,
          });
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "Stack stream failed";
          pushEvent("error", { message });
        } finally {
          controller.close();
        }
      };

      void run();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}

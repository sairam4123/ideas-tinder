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
      let isClosed = false;

      const closeStream = () => {
        if (isClosed) {
          return;
        }
        isClosed = true;
        controller.close();
      };

      const pushEvent = (event: string, payload: unknown) => {
        if (isClosed) {
          return;
        }
        controller.enqueue(
          encoder.encode(
            `event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`,
          ),
        );
      };

      const run = async () => {
        try {
          pushEvent("start", { forceRefresh });

          const activeStack = await db.ideaStack.findFirst({
            where: {
              userId: session.user.id,
              expiresAt: { gt: new Date() },
            },
            orderBy: { createdAt: "desc" },
            include: {
              items: {
                orderBy: { position: "asc" },
              },
            },
          });

          if (activeStack && !forceRefresh) {
            const stack = await getOrCreateActiveStack({
              db,
              userId: session.user.id,
            });

            pushEvent("ready", {
              stackId: stack.id,
              ideaCount: stack.items.length,
            });
            closeStream();
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
          closeStream();
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
      "Content-Encoding": "none",
      "X-Accel-Buffering": "no",
    },
  });
}

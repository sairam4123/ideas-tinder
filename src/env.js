import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const isProduction = process.env.NODE_ENV === "production";
const resolvedDatabaseUrl = isProduction
  ? process.env.DATABASE_URL_POSTGRES ?? process.env.DATABASE_URL
  : process.env.DATABASE_URL_SQLITE ?? "file:./db.sqlite";

process.env.DATABASE_URL = resolvedDatabaseUrl;
process.env.DB_PROVIDER = isProduction ? "postgres" : "sqlite";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    BETTER_AUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
    BETTER_AUTH_GITHUB_CLIENT_ID: z.string().optional(),
    BETTER_AUTH_GITHUB_CLIENT_SECRET: z.string().optional(),
    DATABASE_URL: z.string().url(),
    DB_PROVIDER: z.enum(["sqlite", "postgres"]),
    GOOGLE_API_KEY: z.string().min(1),
    GEMINI_MODEL: z.string().default("gemini-2.5-flash"),
    GEMINI_EMBED_MODEL: z.string().default("text-embedding-004"),
    STACK_SIZE_MIN: z.coerce.number().int().min(10).max(20).default(10),
    STACK_SIZE_MAX: z.coerce.number().int().min(10).max(20).default(20),
    STACK_REFRESH_TEST_SECONDS: z.coerce.number().int().min(1).default(30),
    STACK_REFRESH_PROD_SECONDS: z.coerce.number().int().min(60).default(1800),
    SWIPE_WEIGHT_LEFT: z.coerce.number().default(-1),
    SWIPE_WEIGHT_RIGHT: z.coerce.number().default(1),
    SWIPE_WEIGHT_TOP: z.coerce.number().default(1.5),
    PREF_LEARNING_RATE: z.coerce.number().min(0).max(1).default(0.1),
    EMBED_CHUNK_SIZE: z.coerce.number().int().min(100).default(800),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_GITHUB_CLIENT_ID: process.env.BETTER_AUTH_GITHUB_CLIENT_ID,
    BETTER_AUTH_GITHUB_CLIENT_SECRET:
      process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    DB_PROVIDER: process.env.DB_PROVIDER,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GEMINI_MODEL: process.env.GEMINI_MODEL,
    GEMINI_EMBED_MODEL: process.env.GEMINI_EMBED_MODEL,
    STACK_SIZE_MIN: process.env.STACK_SIZE_MIN,
    STACK_SIZE_MAX: process.env.STACK_SIZE_MAX,
    STACK_REFRESH_TEST_SECONDS: process.env.STACK_REFRESH_TEST_SECONDS,
    STACK_REFRESH_PROD_SECONDS: process.env.STACK_REFRESH_PROD_SECONDS,
    SWIPE_WEIGHT_LEFT: process.env.SWIPE_WEIGHT_LEFT,
    SWIPE_WEIGHT_RIGHT: process.env.SWIPE_WEIGHT_RIGHT,
    SWIPE_WEIGHT_TOP: process.env.SWIPE_WEIGHT_TOP,
    PREF_LEARNING_RATE: process.env.PREF_LEARNING_RATE,
    EMBED_CHUNK_SIZE: process.env.EMBED_CHUNK_SIZE,
    NODE_ENV: process.env.NODE_ENV,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});

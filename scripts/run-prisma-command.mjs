import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { spawn } from "node:child_process";

import { composePrismaSchema, resolvePrismaEngine } from "./compose-prisma-schema.mjs";

const dotenvLine = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)?\s*$/;

const parseDotenv = (content) => {
  const parsed = {};

  for (const rawLine of content.split(/\r?\n/u)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const match = rawLine.match(dotenvLine);
    if (!match) {
      continue;
    }

    const [, key, rawValue = ""] = match;
    let value = rawValue.trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    parsed[key] = value;
  }

  return parsed;
};

const loadEnvFiles = async (cwd, nodeEnv) => {
  const fileNames = [
    ".env",
    ".env.local",
    `.env.${nodeEnv}`,
    `.env.${nodeEnv}.local`,
  ];

  const combined = {};

  for (const fileName of fileNames) {
    const filePath = resolve(cwd, fileName);

    try {
      const content = await readFile(filePath, "utf8");
      Object.assign(combined, parseDotenv(content));
    } catch (error) {
      if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
        continue;
      }

      throw error;
    }
  }

  return combined;
};

const engineFlag = process.argv.find((arg) => arg.startsWith("--engine="));
const prismaArgs = process.argv.slice(2).filter((arg) => !arg.startsWith("--engine="));

if (prismaArgs.length === 0) {
  throw new Error("Usage: node scripts/run-prisma-command.mjs [--engine=sqlite|postgres] <prisma args>");
}

const requestedEngine = engineFlag?.slice("--engine=".length);
const engine = resolvePrismaEngine(requestedEngine);
const nodeEnv = process.env.NODE_ENV ?? "development";
const loadedEnv = await loadEnvFiles(process.cwd(), nodeEnv);
const mergedEnv = {
  ...loadedEnv,
  ...process.env,
};
const resolvedDatabaseUrl =
  engine === "postgres"
    ? mergedEnv.DATABASE_URL_POSTGRES ?? mergedEnv.DATABASE_URL
    : mergedEnv.DATABASE_URL_SQLITE ?? "file:./db.sqlite";

if (!resolvedDatabaseUrl) {
  throw new Error(
    engine === "postgres"
      ? "Missing DATABASE_URL_POSTGRES (or legacy DATABASE_URL) for PostgreSQL commands."
      : "Missing DATABASE_URL_SQLITE for SQLite commands.",
  );
}

const prismaEnv = {
  ...mergedEnv,
  DATABASE_URL: resolvedDatabaseUrl,
  DB_PROVIDER: engine,
};
const { outputPath } = await composePrismaSchema({ engine });
const prismaCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const prismaCommandArgs = ["exec", "--", "prisma", ...prismaArgs, "--schema", outputPath];
const sanitizedPrismaEnv = Object.fromEntries(
  Object.entries(prismaEnv).filter(
    ([key, value]) => !key.startsWith("=") && typeof value === "string",
  ),
);
const quotedCommand = [prismaCommand, ...prismaCommandArgs]
  .map((part) => (part.includes(" ") ? `"${part}"` : part))
  .join(" ");

await new Promise((resolvePromise, rejectPromise) => {
  const child = spawn(quotedCommand, {
    stdio: "inherit",
    env: sanitizedPrismaEnv,
    shell: true,
  });

  child.on("error", rejectPromise);
  child.on("exit", (code) => {
    if (code === 0) {
      resolvePromise();
      return;
    }

    rejectPromise(new Error(`Prisma exited with code ${code ?? 1}`));
  });
});
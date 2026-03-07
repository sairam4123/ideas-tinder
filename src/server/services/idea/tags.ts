import type { PrismaClient } from "../../../../generated/prisma";
import { normalizeField } from "~/server/services/idea/fields";

type DbClient = Omit<
  PrismaClient,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$extends"
>;

const toTitleCase = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const normalizeTagLabel = (value: string) => normalizeField(value);

export const ensureTagsForLabels = async (params: {
  db: DbClient;
  labels: string[];
  source?: "SYSTEM" | "USER" | "MODEL";
}) => {
  const { db, labels, source = "SYSTEM" } = params;
  const normalized = Array.from(
    new Set(labels.map((label) => normalizeTagLabel(label)).filter(Boolean)),
  );

  if (normalized.length === 0) {
    return [] as Array<{ id: string; slug: string; label: string }>;
  }

  const [existingTags, aliases] = await Promise.all([
    db.tag.findMany({
      where: {
        slug: { in: normalized },
      },
      select: {
        id: true,
        slug: true,
        label: true,
      },
    }),
    db.tagAlias.findMany({
      where: {
        alias: { in: normalized },
      },
      select: {
        alias: true,
        tag: {
          select: {
            id: true,
            slug: true,
            label: true,
          },
        },
      },
    }),
  ]);

  const tagBySlug = new Map(existingTags.map((tag) => [tag.slug, tag]));
  for (const alias of aliases) {
    tagBySlug.set(alias.alias, alias.tag);
  }

  const missing = normalized.filter((slug) => !tagBySlug.has(slug));
  if (missing.length > 0) {
    await db.tag.createMany({
      data: missing.map((slug) => ({
        slug,
        label: toTitleCase(slug),
        source,
      })),
    });
  }

  const resolved = await db.tag.findMany({
    where: {
      slug: { in: normalized },
    },
    select: {
      id: true,
      slug: true,
      label: true,
    },
  });

  return resolved;
};

export const buildCandidateTagsFromIdea = (params: {
  title: string;
  description: string;
  fieldLabel: string;
  maxTags?: number;
}) => {
  const { title, description, fieldLabel, maxTags = 5 } = params;

  const words = `${title} ${description}`
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .map((word) => word.trim())
    .filter((word) => word.length >= 4 && !/^[0-9]+$/.test(word));

  const stopWords = new Set([
    "that",
    "this",
    "with",
    "from",
    "into",
    "for",
    "your",
    "about",
    "idea",
    "build",
    "using",
    "users",
    "platform",
    "product",
    "tools",
  ]);

  const scored = new Map<string, number>();
  for (const word of words) {
    if (stopWords.has(word)) {
      continue;
    }

    scored.set(word, (scored.get(word) ?? 0) + 1);
  }

  const dynamicTags = Array.from(scored.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, Math.max(0, maxTags - 1))
    .map(([word]) => word);

  return Array.from(
    new Set([normalizeTagLabel(fieldLabel), ...dynamicTags].filter(Boolean)),
  ).slice(0, maxTags);
};

export const mapTagWeights = (tags: Array<{ slug: string }>) => {
  return tags.map((tag, index) => ({
    slug: tag.slug,
    weight: index === 0 ? 1 : Math.max(0.35, 0.8 - index * 0.12),
  }));
};

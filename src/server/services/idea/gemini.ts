import { env } from "~/env";
import { cosineSimilarity } from "~/server/services/idea/vector";

export type IdeaGenerationResult = {
  title: string;
  description: string;
  field: string;
};

export type CorpusItem = {
  id: string;
  text: string;
  vector?: number[];
};

const stopWords = new Set([
  "the",
  "and",
  "for",
  "with",
  "from",
  "that",
  "this",
  "your",
  "user",
  "prefers",
  "idea",
  "ideas",
  "area",
  "interest",
  "startup",
  "startups",
  "platform",
  "tools",
  "tool",
  "based",
  "using",
  "build",
  "building",
  "better",
  "smart",
  "modern",
]);

const isUsefulSummary = (summary: string) => {
  const cleaned = summary.trim();
  if (cleaned.length < 28) {
    return false;
  }

  if (!/^user\s+prefers\b/i.test(cleaned)) {
    return false;
  }

  const remainder = cleaned.replace(/^user\s+prefers\s*/i, "").trim();
  const words = remainder.split(/\s+/).filter(Boolean);
  return words.length >= 3;
};

const normalizeTheme = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const collectCandidateThemes = (params: {
  topMatches: Array<{ text: string }>;
}) => {
  const rankedThemes = new Map<string, number>();

  for (const match of params.topMatches) {
    const tokens = normalizeTheme(match.text)
      .replace(/\bavoidance\s+signal\b/g, "")
      .split(/\s+/)
      .filter((token) => token.length >= 4 && !stopWords.has(token));

    for (const token of tokens) {
      rankedThemes.set(token, (rankedThemes.get(token) ?? 0) + 1);
    }
  }

  return Array.from(rankedThemes.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([theme]) => theme)
    .slice(0, 6);
};

const isSummaryGroundedInThemesByEmbedding = async (
  summary: string,
  themes: string[],
) => {
  if (themes.length < 2) {
    return false;
  }

  const summaryEmbedding = await getCachedEmbedding(summary);
  const matchingThemeCount = (
    await Promise.all(
      themes.map(async (theme) => {
        const themeEmbedding = await getCachedEmbedding(theme);
        return cosineSimilarity(summaryEmbedding, themeEmbedding) >= 0.65;
      }),
    )
  ).filter(Boolean).length;

  return matchingThemeCount >= 2;
};

const formatThemeSummary = (themes: string[]) => {
  if (themes.length === 0) {
    return "User prefers practical, high-signal startup themes.";
  }

  if (themes.length === 1) {
    return `User prefers ${themes[0]}.`;
  }

  const head = themes.slice(0, -1).join(", ");
  const tail = themes.at(-1);
  return `User prefers ${head}, and ${tail}.`;
};

const embeddingCache = new Map<string, number[]>();

const getCachedEmbedding = async (text: string) => {
  const cached = embeddingCache.get(text);
  if (cached) {
    return cached;
  }

  const embedding = await embedTextWithGemini(text);
  embeddingCache.set(text, embedding);
  return embedding;
};

const geminiRequest = async <T>(
  endpoint: "generateContent" | "embedContent",
  body: unknown,
): Promise<T> => {
  const model =
    endpoint === "embedContent" ? env.GEMINI_EMBED_MODEL : env.GEMINI_MODEL;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:${endpoint}?key=${env.GOOGLE_API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini request failed (${response.status}): ${errorText}`);
  }

  return (await response.json()) as T;
};

const extractJsonArray = (text: string): IdeaGenerationResult[] => {
  const clean = text.trim();
  const codeBlockMatch = /```json\s*([\s\S]*?)\s*```/i.exec(clean);
  const jsonPayload = codeBlockMatch?.[1] ?? clean;

  const parsed = JSON.parse(jsonPayload) as unknown;
  if (!Array.isArray(parsed)) {
    throw new Error("Gemini output was not a JSON array");
  }

  return parsed
    .map((entry) => {
      if (typeof entry !== "object" || entry === null) {
        return null;
      }

      const candidate = entry as Record<string, unknown>;
      const title =
        typeof candidate.title === "string" ? candidate.title.trim() : "";
      const description =
        typeof candidate.description === "string"
          ? candidate.description.trim()
          : "";
      const field =
        typeof candidate.field === "string" ? candidate.field.trim() : "";

      if (!title || !description || !field) {
        return null;
      }

      return { title, description, field };
    })
    .filter((entry): entry is IdeaGenerationResult => entry !== null);
};

export const generateIdeasWithGemini = async (params: {
  fields: string[];
  count: number;
  userPreferenceSummary: string;
}) => {
  const prompt = `You are generating startup ideas for an ideas discovery app.
Return ONLY valid JSON (no markdown) as an array of ${params.count} objects.
Each object must have: title (string), description (string), field (string).

Rules:
- Ideas must be diverse and non-duplicative.
- Keep title short (max 12 words).
- Description should be practical and 2-4 sentences.
- field must be one of: ${params.fields.join(", ")}.
- Tailor to this user preference summary: ${params.userPreferenceSummary}`;

  type GenerateResponse = {
    candidates?: Array<{
      content?: {
        parts?: Array<{ text?: string }>;
      };
    }>;
  };

  const response = await geminiRequest<GenerateResponse>("generateContent", {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.8,
      responseMimeType: "application/json",
    },
  });

  const text =
    response.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("\n") ?? "";

  return extractJsonArray(text);
};

export const summarizePreferenceVectorFromCorpusWithGemini = async (params: {
  fields: string[];
  vector: number[];
  corpus: CorpusItem[];
  topK?: number;
}) => {
  const { fields, vector, corpus, topK = 6 } = params;

  if (vector.length === 0) {
    return "No preference signal yet. Start swiping ideas to build your profile.";
  }

  const normalizedCorpus = corpus
    .map((item) => ({
      id: item.id,
      text: item.text.replace(/\s+/g, " ").trim(),
      vector: item.vector,
    }))
    .filter((item) => item.text.length > 0);

  if (normalizedCorpus.length === 0) {
    return "Your profile is evolving from your selected interests and recent swipes.";
  }

  const scoredItems = [] as Array<{ id: string; text: string; score: number }>;

  for (const item of normalizedCorpus) {
    if (!Array.isArray(item.vector) || item.vector.length === 0) {
      throw new Error(
        `Corpus item ${item.id} is missing a precomputed embedding vector.`,
      );
    }

    if (item.vector.length !== vector.length) {
      throw new Error(
        `Corpus item ${item.id} has embedding length ${item.vector.length}, expected ${vector.length}.`,
      );
    }

    const embedding = item.vector;
    const score = cosineSimilarity(vector, embedding);

    scoredItems.push({
      id: item.id,
      text: item.text,
      score,
    });
  }

  const topMatches = scoredItems
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.max(1, topK));

  const candidateThemes = collectCandidateThemes({
    topMatches,
  });

  const topMatchesText = topMatches
    .map(
      (item, index) => `${index + 1}. (${item.score.toFixed(3)}) ${item.text}`,
    )
    .join("\n");

  const prompt = `You are summarizing a user's preference profile from vector-similarity matches.
Given the top matched texts below, infer what themes they share.

Output format rules:
- Return exactly 1 sentence.
- Start with "User prefers".
- Keep it natural and specific.
- Mention 3-6 concrete themes separated by commas, and use "and" before the final theme.
- Prefer themes from this candidate list when possible: ${candidateThemes.join(", ") || "(none)"}.
- Do not mention vectors, embeddings, cosine similarity, scores, dimensions, or technical details.

Context fields: ${fields.join(", ") || "none"}

Top matches:
${topMatchesText}`;

  type GenerateResponse = {
    candidates?: Array<{
      content?: {
        parts?: Array<{ text?: string }>;
      };
    }>;
  };

  const response = await geminiRequest<GenerateResponse>("generateContent", {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.35,
      maxOutputTokens: 120,
    },
  });

  const text =
    response.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("\n")
      .replace(/\s+/g, " ")
      .trim() ?? "";

  const fallback = formatThemeSummary(candidateThemes.slice(0, 4));

  const normalized = text.replace(/^"|"$/g, "").replace(/\.$/, "").trim();

  const normalizedSummary = /^user\s+prefers/i.test(normalized)
    ? `${normalized}.`
    : "";

  const summary =
    isUsefulSummary(normalizedSummary) &&
    (await isSummaryGroundedInThemesByEmbedding(
      normalizedSummary,
      candidateThemes,
    ))
      ? normalizedSummary
      : fallback;
  return summary;
};

export const embedTextWithGemini = async (text: string) => {
  type EmbedResponse = {
    embedding?: {
      values?: number[];
    };
  };

  const response = await geminiRequest<EmbedResponse>("embedContent", {
    content: {
      parts: [{ text }],
    },
  });

  return response.embedding?.values ?? [];
};

export const embedManyTextsWithGemini = async (texts: string[]) => {
  const vectors: number[][] = [];
  for (const text of texts) {
    vectors.push(await embedTextWithGemini(text));
  }
  return vectors;
};

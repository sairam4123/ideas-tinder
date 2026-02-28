import { env } from "~/env";

export type IdeaGenerationResult = {
  title: string;
  description: string;
  field: string;
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

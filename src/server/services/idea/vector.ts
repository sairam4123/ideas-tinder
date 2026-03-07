export type Vector = number[];

export const clamp = (value: number, min = -1, max = 1) =>
  Math.max(min, Math.min(max, value));

export const cosineSimilarity = (vecA: Vector, vecB: Vector): number => {
  if (vecA.length === 0 || vecB.length === 0 || vecA.length !== vecB.length) {
    return 0;
  }

  const dot = vecA.reduce((acc, value, index) => acc + value * vecB[index]!, 0);
  const magA = Math.sqrt(vecA.reduce((acc, value) => acc + value * value, 0));
  const magB = Math.sqrt(vecB.reduce((acc, value) => acc + value * value, 0));

  if (magA === 0 || magB === 0) {
    return 0;
  }

  return dot / (magA * magB);
};

export const averageVectors = (vectors: Vector[]): Vector => {
  if (vectors.length === 0) return [];

  const dimension = vectors[0]?.length ?? 0;
  if (dimension === 0) return [];

  const totals = new Array<number>(dimension).fill(0);

  for (const vector of vectors) {
    if (vector.length !== dimension) {
      continue;
    }

    for (let index = 0; index < dimension; index += 1) {
      totals[index] = totals[index]! + (vector[index] ?? 0);
    }
  }

  return totals.map((total) => total / vectors.length);
};

export const updatePreferenceVector = (
  current: Vector,
  idea: Vector,
  feedback: number,
  learningRate: number,
): Vector => {
  if (current.length === 0) {
    return idea.map((value) => clamp(value, -1, 1));
  }

  if (current.length !== idea.length) {
    return current;
  }

  return current.map((currentValue, index) => {
    const ideaValue = idea[index] ?? currentValue;
    return clamp(
      currentValue + feedback * (ideaValue - currentValue) * learningRate,
    );
  });
};

export const chunkText = (text: string, maxChars: number): string[] => {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (!normalized) return [];
  if (normalized.length <= maxChars) return [normalized];

  const chunks: string[] = [];
  let cursor = 0;

  while (cursor < normalized.length) {
    const upperBound = Math.min(normalized.length, cursor + maxChars);
    let end = upperBound;

    if (upperBound < normalized.length) {
      const sentenceBreak = normalized.lastIndexOf(". ", upperBound);
      const wordBreak = normalized.lastIndexOf(" ", upperBound);
      end =
        sentenceBreak > cursor + Math.floor(maxChars / 2)
          ? sentenceBreak + 1
          : wordBreak > cursor + Math.floor(maxChars / 2)
            ? wordBreak
            : upperBound;
    }

    chunks.push(normalized.slice(cursor, end).trim());
    cursor = end;
  }

  return chunks.filter(Boolean);
};

export const asVector = (value: unknown): Vector => {
  if (!Array.isArray(value)) return [];

  return value
    .map((entry) => (typeof entry === "number" ? entry : Number(entry)))
    .filter((entry) => Number.isFinite(entry));
};

export const vectorMagnitude = (vector: Vector) =>
  Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0));

export const normalizeVector = (vector: Vector): Vector => {
  const magnitude = vectorMagnitude(vector);
  if (magnitude === 0) {
    return vector;
  }

  return vector.map((value) => value / magnitude);
};

export const blendVectors = (
  current: Vector,
  idea: Vector,
  reward: number,
  alpha: number,
): Vector => {
  if (idea.length === 0) {
    return current;
  }

  if (current.length === 0) {
    return normalizeVector(idea);
  }

  if (current.length !== idea.length) {
    return current;
  }

  const boundedReward = clamp(reward, -1, 1.5);
  const next = current.map((currentValue, index) => {
    const ideaValue = idea[index] ?? currentValue;
    return currentValue * (1 - alpha) + alpha * boundedReward * ideaValue;
  });

  return normalizeVector(next);
};

export const applyDailyDecay = (
  weight: number,
  daysElapsed: number,
  gamma: number,
) => {
  if (daysElapsed <= 0) {
    return weight;
  }

  return weight * gamma ** daysElapsed;
};

export const boundedWeight = (value: number, min = -2.5, max = 3): number =>
  Math.max(min, Math.min(max, value));

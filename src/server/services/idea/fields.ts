export const DEFAULT_FIELD_TAXONOMY = [
  "AI",
  "Climate",
  "Health",
  "Education",
  "Fintech",
  "Cybersecurity",
  "Developer Tools",
  "Creator Economy",
  "Mobility",
  "Gaming",
  "E-commerce",
  "Robotics",
  "Biotech",
  "LegalTech",
  "Food",
] as const;

export const normalizeField = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ");

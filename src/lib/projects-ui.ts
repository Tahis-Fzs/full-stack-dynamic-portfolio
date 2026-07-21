import type { ProjectCategory } from "@/content/types";

export const categoryColors: Record<ProjectCategory, string> = {
  fullstack: "var(--cat-fullstack)",
  ml: "var(--cat-ml)",
  mobile: "var(--cat-mobile)",
  iot: "var(--cat-iot)",
  graphics: "var(--cat-graphics)",
  collab: "var(--cat-collab)",
};

export const categoryLabels: Record<ProjectCategory, string> = {
  fullstack: "Full-Stack",
  ml: "Machine Learning",
  mobile: "Mobile",
  iot: "IoT",
  graphics: "Graphics",
  collab: "Collaboration",
};

export function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLen)}…`;
}

export function tierLabel(tier: 1 | 2 | 3): string {
  switch (tier) {
    case 1:
      return "Launch";
    case 2:
      return "Featured";
    case 3:
      return "Archive";
  }
}

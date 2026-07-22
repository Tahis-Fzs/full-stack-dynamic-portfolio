import type { Project } from "@/content/types";
import { categoryLabels } from "@/lib/projects-ui";

export function projectSearchText(project: Project): string {
  return [
    project.title,
    project.tagline,
    project.hook,
    project.problem,
    project.approach,
    project.impact,
    categoryLabels[project.category],
    project.stack.join(" "),
    project.year,
    project.role ?? "",
  ]
    .join(" ")
    .toLowerCase();
}

export function matchesProjectQuery(project: Project, query: string): boolean {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return true;

  const haystack = projectSearchText(project);
  return trimmed.split(/\s+/).every((token) => haystack.includes(token));
}

export function filterProjectsByQuery(
  list: Project[],
  query: string,
): Project[] {
  return list.filter((project) => matchesProjectQuery(project, query));
}

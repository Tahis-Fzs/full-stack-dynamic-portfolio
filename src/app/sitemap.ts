import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    { path: "", priority: 1 },
    { path: "/works", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/resume", priority: 0.85 },
    { path: "/contact", priority: 0.8 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority,
    }),
  );

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/works/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: project.tier === 1 ? 0.95 : project.tier === 2 ? 0.75 : 0.5,
  }));

  return [...staticEntries, ...projectEntries];
}

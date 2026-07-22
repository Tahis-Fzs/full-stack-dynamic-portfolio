/** Canonical site URL for SEO, sitemap, and OG tags */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://full-stack-dynamic-portfolio-jet.vercel.app";

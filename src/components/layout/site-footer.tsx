import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "./container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--border-subtle)] py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-[var(--text-primary)]">
            {site.name}
          </p>
          <p className="mt-1 max-w-md text-sm text-[var(--text-muted)]">
            {site.thinkingHook}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="glass glass-hover flex items-center gap-2 rounded-full px-4 py-2 text-xs text-[var(--text-secondary)]"
            aria-label="Email"
          >
            <Mail className="size-3.5" aria-hidden />
            Email
          </a>
          <Link
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover flex items-center gap-2 rounded-full px-4 py-2 text-xs text-[var(--text-secondary)]"
          >
            <Github className="size-3.5" aria-hidden />
            GitHub
          </Link>
          <Link
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover flex items-center gap-2 rounded-full px-4 py-2 text-xs text-[var(--text-secondary)]"
          >
            <Linkedin className="size-3.5" aria-hidden />
            LinkedIn
          </Link>
        </div>
      </Container>

      <Container className="mt-8 flex flex-col gap-2 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--text-dim)] sm:flex-row sm:justify-between">
        <span>© {year} {site.shortName} · {site.designSystem.name} design system</span>
        <span>Problem → Approach → Impact</span>
      </Container>
    </footer>
  );
}

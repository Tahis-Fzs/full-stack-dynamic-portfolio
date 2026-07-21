import Link from "next/link";
import { ExternalLink, Monitor } from "lucide-react";
import { studentmoveLaunch } from "@/content/case-studies/studentmove";
import { Container } from "@/components/layout/container";

export function StudentmoveLiveDemo() {
  const { webUrl } = studentmoveLaunch.demo;

  return (
    <section id="live-demo" className="py-16 sm:py-24">
      <Container>
        <div className="mb-8 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
            Live platform
          </p>
          <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-4xl">
            Deployed transport PWA on Render
          </h2>
          <p className="mt-4 text-sm text-[var(--text-muted)] sm:text-base">
            StudentMove runs as a real deploy — admin, driver, and student flows
            on a Bangladesh-relevant problem domain.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--accent-cyan)_18%,transparent),transparent_70%)] blur-2xl"
          />

          <div className="glass relative overflow-hidden rounded-[1.25rem] border border-[var(--border-accent)] p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2 text-xs text-[var(--text-dim)]">
                <Monitor className="size-3.5" aria-hidden />
                studentmove-app-d866.onrender.com
              </div>
              <Link
                href={webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-cyan)] px-3 py-1.5 text-xs font-medium text-[var(--bg-void)]"
              >
                Open full screen
                <ExternalLink className="size-3" aria-hidden />
              </Link>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-void)]">
              <iframe
                title="StudentMove live demo"
                src={webUrl}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ExternalLink, Monitor, Smartphone } from "lucide-react";
import { payliteLaunch } from "@/content/case-studies/paylite-x";
import { Container } from "@/components/layout/container";

export function PayliteLiveDemo() {
  const { webUrl, phone, pin } = payliteLaunch.demo;

  return (
    <section id="live-demo" className="py-16 sm:py-24">
      <Container>
        <div className="mb-8 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
            Live product
          </p>
          <h2 className="mt-3 font-display text-2xl text-[var(--text-primary)] sm:text-4xl">
            Try the deployed wallet — not a mockup
          </h2>
          <p className="mt-4 text-sm text-[var(--text-muted)] sm:text-base">
            Demo login{" "}
            <code className="rounded bg-[var(--bg-void)] px-1.5 py-0.5 font-mono text-xs text-[var(--accent-cyan)]">
              {phone}
            </code>{" "}
            / PIN{" "}
            <code className="rounded bg-[var(--bg-void)] px-1.5 py-0.5 font-mono text-xs text-[var(--accent-cyan)]">
              {pin}
            </code>
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--accent-paylite)_20%,transparent),transparent_70%)] blur-2xl"
          />

          <div className="glass relative overflow-hidden rounded-[1.25rem] border border-[var(--border-accent)] p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2 text-xs text-[var(--text-dim)]">
                <Monitor className="size-3.5" aria-hidden />
                paylite-web.onrender.com
              </div>
              <Link
                href={webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-paylite)] px-3 py-1.5 text-xs font-medium text-white"
              >
                Open full screen
                <ExternalLink className="size-3" aria-hidden />
              </Link>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-void)]">
              <iframe
                title="PayLite X live demo"
                src={webUrl}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg-void)] to-transparent sm:hidden" />
            </div>

            <p className="mt-3 flex items-center gap-2 px-1 text-xs text-[var(--text-dim)]">
              <Smartphone className="size-3.5 shrink-0" aria-hidden />
              If embed is blocked, use Open full screen — mobile wallet UI is responsive.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, Cpu, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useExploreMode } from "@/components/providers/mode-provider";
import { Container } from "./container";
import { BrandMark } from "./brand-mark";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { resolvedMode, setMode, hasChosen } = useExploreMode();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[var(--z-nav)] border-b border-[var(--border-subtle)] bg-[color-mix(in_srgb,var(--bg-void)_82%,transparent)] backdrop-blur-xl">
      <Container as="div" className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <BrandMark size="sm" showLabel />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors",
                  active
                    ? "bg-[var(--surface-glass)] text-[var(--accent-cyan)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {hasChosen && (
            <div
              className="glass flex rounded-full p-1"
              role="group"
              aria-label="Explore mode"
            >
              <button
                type="button"
                onClick={() => setMode("recruiter")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                  resolvedMode === "recruiter"
                    ? "bg-[var(--accent-paylite)] text-white"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]",
                )}
              >
                <Briefcase className="size-3.5" aria-hidden />
                Recruiter
              </button>
              <button
                type="button"
                onClick={() => setMode("engineer")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                  resolvedMode === "engineer"
                    ? "bg-[var(--accent-cyan)] text-[var(--bg-void)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]",
                )}
              >
                <Cpu className="size-3.5" aria-hidden />
                Engineer
              </button>
            </div>
          )}

          <a
            href={site.cvPath}
            download
            className="glass glass-hover flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-[var(--text-primary)]"
          >
            <Download className="size-3.5" aria-hidden />
            CV
          </a>
        </div>

        <button
          type="button"
          className="glass rounded-full p-2.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--border-subtle)] md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-glass)]"
              >
                {link.label}
              </Link>
            ))}
            {hasChosen && (
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setMode("recruiter")}
                  className="glass flex-1 rounded-xl py-2 text-xs"
                >
                  Recruiter
                </button>
                <button
                  type="button"
                  onClick={() => setMode("engineer")}
                  className="glass flex-1 rounded-xl py-2 text-xs"
                >
                  Engineer
                </button>
              </div>
            )}
            <a
              href={site.cvPath}
              download
              className="glass mt-2 rounded-xl py-3 text-center text-sm"
            >
              Download CV
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}

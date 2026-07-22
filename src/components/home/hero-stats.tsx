"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/cn";

function parseNumeric(value: string): number | null {
  const match = value.match(/\d+/);
  return match ? Number.parseInt(match[0], 10) : null;
}

function formatValue(template: string, current: number): string {
  if (template.includes("+")) return `${current}+`;
  return String(current);
}

function StatValue({ value, run }: { value: string; run: boolean }) {
  const reduceMotion = useReducedMotion();
  const numeric = parseNumeric(value);
  const [display, setDisplay] = useState(
    reduceMotion || !run || numeric === null ? value : "0",
  );

  useEffect(() => {
    if (reduceMotion || !run || numeric === null) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(formatValue(value, Math.round(numeric * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [numeric, reduceMotion, run, value]);

  return (
    <p className="font-display text-2xl text-[var(--accent-cyan)] sm:text-3xl">
      {display}
    </p>
  );
}

type HeroStatsProps = {
  run?: boolean;
};

export function HeroStats({ run = true }: HeroStatsProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const animate = run && visible;

  return (
    <div
      ref={rootRef}
      className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
    >
      {site.hero.stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            "glass rounded-[var(--radius-card)] border border-[var(--border-subtle)] px-4 py-4 sm:px-5 sm:py-5 kinetic-stat",
          )}
          style={
            animate
              ? ({
                  "--stat-index": index,
                  "--stat-delay": "820ms",
                } as CSSProperties)
              : undefined
          }
        >
          <StatValue value={stat.value} run={animate} />
          <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[var(--text-dim)]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

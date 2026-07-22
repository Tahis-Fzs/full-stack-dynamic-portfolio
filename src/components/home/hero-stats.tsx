"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/cn";

function parseNumeric(value: string): number | null {
  const match = value.match(/[\d.]+/);
  if (!match) return null;
  const n = Number.parseFloat(match[0]);
  return Number.isFinite(n) ? n : null;
}

function StatValue({ value, run }: { value: string; run: boolean }) {
  const reduceMotion = useReducedMotion();
  const numeric = parseNumeric(value);
  const [display, setDisplay] = useState(
    reduceMotion || !run || numeric === null ? value : value.includes(".") ? "0.0" : "0",
  );

  useEffect(() => {
    if (reduceMotion || !run || numeric === null) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const duration = 900;
    const start = performance.now();
    const isDecimal = value.includes(".");

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      const current = numeric * eased;
      if (value.includes("+")) {
        setDisplay(`${Math.round(current)}+`);
      } else if (isDecimal) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(String(Math.round(current)));
      }
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [numeric, reduceMotion, run, value]);

  return (
    <p className="font-display text-[clamp(1.75rem,3vw,2.25rem)] leading-none text-[var(--text-primary)]">
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
  const allStats = site.hero.stats;

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
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const animate = run && visible;

  return (
    <div ref={rootRef}>
      <p className="premium-eyebrow mb-4">Credentials at a glance</p>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {allStats.map((stat, index) => (
          <div
            key={stat.label}
            className={cn("premium-card px-5 py-5 kinetic-stat")}
            style={
              animate
                ? ({
                    "--stat-index": index,
                    "--stat-delay": "760ms",
                  } as CSSProperties)
                : undefined
            }
          >
            <StatValue value={stat.value} run={animate} />
            <p className="mt-2 text-[11px] leading-snug text-[var(--text-dim)]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

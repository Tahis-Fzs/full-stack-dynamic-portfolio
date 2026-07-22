"use client";

import { type CSSProperties } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { ProfilePhoto } from "@/components/layout/profile-photo";
import { cn } from "@/lib/cn";

type HeroPortraitTiltProps = {
  className?: string;
};

export function HeroPortraitTilt({ className }: HeroPortraitTiltProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <ProfilePhoto
        size="xl"
        priority
        className={cn(
          "ring-2 ring-[var(--border-signal)] shadow-[0_0_64px_-16px_var(--accent-paylite)]",
          className,
        )}
      />
    );
  }

  return (
    <div
      className={cn("hero-portrait-tilt kinetic-fade-in", className)}
      style={{ "--fade-delay": "680ms" } as CSSProperties}
      onMouseMove={(event) => {
        const node = event.currentTarget;
        const rect = node.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        node.style.setProperty("--tilt-x", `${y * -7}deg`);
        node.style.setProperty("--tilt-y", `${x * 8}deg`);
      }}
      onMouseLeave={(event) => {
        const node = event.currentTarget;
        node.style.setProperty("--tilt-x", "0deg");
        node.style.setProperty("--tilt-y", "0deg");
      }}
    >
      <ProfilePhoto
        size="xl"
        priority
        className="ring-2 ring-[var(--border-signal)] shadow-[0_0_64px_-16px_var(--accent-paylite)] transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)]"
      />
    </div>
  );
}

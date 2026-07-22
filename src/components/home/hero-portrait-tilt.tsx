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

  const photo = (
    <ProfilePhoto size="xl" rounded="premium" premiumFrame priority />
  );

  if (reduceMotion) {
    return <div className={className}>{photo}</div>;
  }

  return (
    <div
      className={cn("hero-portrait-tilt kinetic-fade-in", className)}
      style={{ "--fade-delay": "280ms" } as CSSProperties}
      onMouseMove={(event) => {
        const node = event.currentTarget;
        const rect = node.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        node.style.setProperty("--tilt-x", `${y * -5}deg`);
        node.style.setProperty("--tilt-y", `${x * 6}deg`);
      }}
      onMouseLeave={(event) => {
        const node = event.currentTarget;
        node.style.setProperty("--tilt-x", "0deg");
        node.style.setProperty("--tilt-y", "0deg");
      }}
    >
      <div className="transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)]">
        {photo}
      </div>
    </div>
  );
}

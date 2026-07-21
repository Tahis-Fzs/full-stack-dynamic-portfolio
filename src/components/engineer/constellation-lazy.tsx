"use client";

import dynamic from "next/dynamic";
import { ConstellationFallback } from "@/components/engineer/constellation-hero";

export const ConstellationHeroLazy = dynamic(
  () =>
    import("@/components/engineer/constellation-hero").then(
      (m) => m.ConstellationHero,
    ),
  {
    ssr: false,
    loading: () => <ConstellationFallback />,
  },
);

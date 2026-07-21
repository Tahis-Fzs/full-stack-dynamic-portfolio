"use client";

import { ModeEntry } from "@/components/mode/mode-entry";
import { HomeShell } from "@/components/home/home-shell";
import { useExploreMode } from "@/components/providers/mode-provider";

export default function HomePage() {
  const { hasChosen } = useExploreMode();

  if (!hasChosen) {
    return <ModeEntry />;
  }

  return <HomeShell />;
}

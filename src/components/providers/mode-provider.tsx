"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ExploreMode } from "@/content/types";
import { exploreModeStorageKey } from "@/content/site";

interface ModeContextValue {
  mode: ExploreMode | null;
  resolvedMode: ExploreMode;
  hasChosen: boolean;
  setMode: (mode: ExploreMode) => void;
  clearMode: () => void;
}

const ModeContext = createContext<ModeContextValue | null>(null);

function readStoredMode(): ExploreMode | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(exploreModeStorageKey);
  if (stored === "recruiter" || stored === "engineer") return stored;
  return null;
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ExploreMode | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readStoredMode();
    setModeState(stored ?? "recruiter");
    setHydrated(true);
  }, []);

  const setMode = useCallback((next: ExploreMode) => {
    setModeState(next);
    window.localStorage.setItem(exploreModeStorageKey, next);
  }, []);

  const clearMode = useCallback(() => {
    setModeState(null);
    window.localStorage.removeItem(exploreModeStorageKey);
  }, []);

  const resolvedMode: ExploreMode = mode ?? "recruiter";

  const value = useMemo<ModeContextValue>(
    () => ({
      mode,
      resolvedMode,
      hasChosen: hydrated,
      setMode,
      clearMode,
    }),
    [mode, resolvedMode, hydrated, setMode, clearMode],
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useExploreMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) {
    throw new Error("useExploreMode must be used within ModeProvider");
  }
  return ctx;
}

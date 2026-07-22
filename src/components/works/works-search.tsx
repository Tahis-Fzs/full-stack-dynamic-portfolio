"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/cn";

type WorksSearchProps = {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
  className?: string;
};

export function WorksSearch({
  value,
  onChange,
  resultCount,
  totalCount,
  className,
}: WorksSearchProps) {
  const hasQuery = value.trim().length > 0;

  return (
    <div className={cn("mt-8 space-y-3", className)}>
      <div className="relative max-w-xl">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--accent-cyan)]"
          aria-hidden
        />
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search title, hook, stack, or domain…"
          aria-label="Search projects"
          className="glass w-full rounded-full border border-[var(--border-subtle)] bg-[var(--bg-void)] py-3 pl-11 pr-11 text-sm text-[var(--text-primary)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--text-dim)] focus:border-[var(--accent-cyan)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent-cyan)_18%,transparent)]"
        />
        {hasQuery && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-glass)] hover:text-[var(--text-primary)]"
            aria-label="Clear search"
          >
            <X className="size-3.5" aria-hidden />
          </button>
        )}
      </div>

      <p className="text-xs text-[var(--text-dim)]">
        {hasQuery ? (
          <>
            Showing{" "}
            <span className="text-[var(--accent-cyan)]">{resultCount}</span> of{" "}
            {totalCount} for{" "}
            <span className="text-[var(--text-secondary)]">
              &ldquo;{value.trim()}&rdquo;
            </span>
          </>
        ) : (
          <>
            Showing{" "}
            <span className="text-[var(--text-secondary)]">{resultCount}</span>{" "}
            {resultCount === 1 ? "project" : "projects"}
          </>
        )}
      </p>
    </div>
  );
}

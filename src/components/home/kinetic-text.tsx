"use client";

import { type CSSProperties } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/cn";

type KineticTextProps = {
  text: string;
  as?: "h1" | "h2" | "p" | "span";
  splitBy?: "char" | "word";
  className?: string;
  run?: boolean;
  staggerMs?: number;
  baseDelayMs?: number;
};

export function KineticText({
  text,
  as: Tag = "span",
  splitBy = "char",
  className,
  run = true,
  staggerMs = 42,
  baseDelayMs = 0,
}: KineticTextProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  if (splitBy === "word") {
    const words = text.split(" ");
    return (
      <Tag className={cn(run && "kinetic-run", className)} aria-label={text}>
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="kinetic-word"
            style={
              {
                "--word-index": index,
                "--word-delay": `${baseDelayMs}ms`,
                "--word-stagger": `${staggerMs}ms`,
              } as CSSProperties
            }
            aria-hidden
          >
            {word}
            {index < words.length - 1 ? "\u00a0" : ""}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={cn(run && "kinetic-run", className)} aria-label={text}>
      {[...text].map((char, index) =>
        char === " " ? (
          <span key={`space-${index}`} className="inline-block w-[0.3em]" aria-hidden />
        ) : (
          <span
            key={`${char}-${index}`}
            className="kinetic-char"
            style={
              {
                "--char-index": index,
                "--char-delay": `${baseDelayMs}ms`,
                "--char-stagger": `${staggerMs}ms`,
              } as CSSProperties
            }
            aria-hidden
          >
            {char}
          </span>
        ),
      )}
    </Tag>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  BrandWipeOverlay,
  type WipePhase,
} from "@/components/layout/brand-wipe-overlay";

const COVER_MS = 480;
const REVEAL_MS = 520;
const INITIAL_HOLD_MS = 700;

type PageTransitionContextValue = {
  navigate: (href: string) => void;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error(
      "usePageTransition must be used within PageTransitionProvider",
    );
  }
  return ctx;
}

function isInternalHref(href: string | null): href is string {
  if (!href) return false;
  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http")
  ) {
    return false;
  }
  return href.startsWith("/");
}

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<WipePhase>("initial");
  const [reduceMotion, setReduceMotion] = useState(false);
  const pendingHref = useRef<string | null>(null);
  const prevPathname = useRef(pathname);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      if (reduceMotion) {
        router.push(href);
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      if (href === pathname || phaseRef.current === "covering") return;

      pendingHref.current = href;
      setPhase("covering");
    },
    [pathname, reduceMotion, router],
  );

  useEffect(() => {
    if (reduceMotion) {
      setPhase("idle");
      return;
    }

    const holdTimer = window.setTimeout(() => {
      setPhase("revealing");
      window.setTimeout(() => setPhase("idle"), REVEAL_MS);
    }, INITIAL_HOLD_MS);

    return () => window.clearTimeout(holdTimer);
  }, [reduceMotion]);

  useEffect(() => {
    if (phase !== "covering") return;

    const coverTimer = window.setTimeout(() => {
      const href = pendingHref.current;
      if (href) {
        router.push(href);
        pendingHref.current = null;
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }, COVER_MS);

    return () => window.clearTimeout(coverTimer);
  }, [phase, router]);

  useEffect(() => {
    if (prevPathname.current === pathname) return;

    prevPathname.current = pathname;

    if (phaseRef.current === "covering") {
      setPhase("revealing");
      window.setTimeout(() => setPhase("idle"), REVEAL_MS);
    }
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!isInternalHref(href)) return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.target === "_blank") return;

      event.preventDefault();
      navigate(href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);

  const overlayActive = !reduceMotion && phase !== "idle";

  useEffect(() => {
    if (phase === "idle") {
      window.dispatchEvent(new CustomEvent("studio-tahsin:ready"));
    }
  }, [phase]);

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      {children}
      {overlayActive && <BrandWipeOverlay phase={phase} blocking />}
    </PageTransitionContext.Provider>
  );
}

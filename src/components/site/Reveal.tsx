import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit,
  initialInView = false,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(initialInView);

  useEffect(() => {
    if (initialInView) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [initialInView, options]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className,
  immediate = false,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const { ref, inView } = useInView<HTMLDivElement>(undefined, immediate);
  return (
    <As
      ref={ref as never}
      className={cn("reveal", inView && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}

import { useEffect, useState } from "react";
import { metrics } from "@/content/site";
import { useInView } from "./Reveal";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduce =
      typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active]);

  return value;
}

export function MetricCard({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const current = useCountUp(value, active);
  const display = Number.isInteger(value) ? Math.round(current).toString() : current.toFixed(1);

  return (
    <div className="relative rounded-2xl border border-border bg-card/60 p-6 text-center">
      <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
        {display}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
    </div>
  );
}

export function Metrics() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {metrics.map((m) => (
          <MetricCard key={m.label} {...m} active={inView} />
        ))}
      </div>
      <p className="mt-6 text-center font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
        Placeholder values — to be replaced with verified Genbytez figures
      </p>
    </div>
  );
}

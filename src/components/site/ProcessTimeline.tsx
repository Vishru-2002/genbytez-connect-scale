import { process } from "@/content/site";
import { useInView } from "./Reveal";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="mt-14">
      {/* Desktop: horizontal */}
      <div className="hidden lg:block">
        <div className="relative">
          <div className="absolute left-0 right-0 top-[1.4rem] h-px bg-border" />
          <div
            className="absolute left-0 top-[1.4rem] h-px bg-primary transition-[width] duration-[2200ms] ease-out"
            style={{ width: inView ? "100%" : "0%" }}
          />
          <ol className="relative grid grid-cols-6 gap-6">
            {process.map((p, i) => (
              <li
                key={p.step}
                className={cn("reveal", inView && "reveal-in")}
                style={{ transitionDelay: `${i * 160}ms` }}
              >
                <span className="relative z-10 flex size-11 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-xs text-primary">
                  {p.step}
                </span>
                <h3 className="mt-6 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile / tablet: vertical */}
      <ol className="relative space-y-8 border-l border-border pl-8 lg:hidden">
        <div
          className="absolute -left-px top-0 w-px bg-primary transition-[height] duration-[2000ms] ease-out"
          style={{ height: inView ? "100%" : "0%" }}
        />
        {process.map((p, i) => (
          <li key={p.step} className={cn("reveal relative", inView && "reveal-in")} style={{ transitionDelay: `${i * 120}ms` }}>
            <span className="absolute -left-[3.05rem] flex size-9 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-[0.65rem] text-primary">
              {p.step}
            </span>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

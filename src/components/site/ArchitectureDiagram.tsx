import { stack } from "@/content/site";
import { useInView } from "./Reveal";
import { cn } from "@/lib/utils";

export function ArchitectureDiagram() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="relative mt-14">
      {/* rising data particles */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-40 -translate-x-1/2 lg:block">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className="absolute size-1.5 rounded-full bg-primary"
            style={{
              left: `${12 + i * 15}%`,
              bottom: 0,
              animation: `gb-rise ${3.4 + i * 0.5}s linear ${i * 0.6}s infinite`,
            }}
          />
        ))}
      </div>

      <ol className="relative space-y-3">
        {stack.map((layer, i) => (
          <li
            key={layer.layer}
            className={cn(
              "reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-7",
              inView && "reveal-in",
            )}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-1"
              style={{
                background: `linear-gradient(180deg, transparent, color-mix(in oklab, var(--primary) ${75 - i * 8}%, transparent), transparent)`,
              }}
            />
            <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8">
              <div className="flex items-center gap-4 sm:w-56">
                <span className="font-mono text-sm text-primary">{layer.number}</span>
                <h3 className="text-lg font-semibold">{layer.layer}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-center font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
        Physical → Connectivity → Edge → Cloud → Intelligence → Experience
      </p>
    </div>
  );
}

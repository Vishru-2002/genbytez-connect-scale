import type { Solution } from "@/content/site";
import { Icon } from "./Icon";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article className="card-surface group relative flex h-full flex-col overflow-hidden p-7">
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
        <Icon name={solution.icon} className="size-5" />
      </span>
      <h3 className="mt-6 text-xl font-semibold">{solution.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{solution.short}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {solution.useCases.slice(0, 4).map((u) => (
          <li
            key={u}
            className="rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground"
          >
            {u}
          </li>
        ))}
      </ul>
    </article>
  );
}

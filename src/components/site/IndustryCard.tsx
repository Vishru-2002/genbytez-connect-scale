import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/content/site";
import { Icon } from "./Icon";

const accents = ["--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5"];

export function IndustryCard({ industry, index = 0 }: { industry: Industry; index?: number }) {
  const accent = `var(${accents[index % accents.length]})`;
  return (
    <Link
      to="/industries/$slug"
      params={{ slug: industry.slug }}
      className="card-surface group relative flex h-full flex-col overflow-hidden p-7"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute -left-10 -top-10 size-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: accent }}
      />
      <span
        className="inline-flex size-11 items-center justify-center rounded-xl border border-border"
        style={{ color: accent, background: `color-mix(in oklab, ${accent} 12%, transparent)` }}
      >
        <Icon name={industry.icon} className="size-5" />
      </span>
      <h3 className="mt-6 flex items-center gap-2 text-lg font-semibold">
        {industry.title}
        <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{industry.summary}</p>
      <ul className="mt-5 space-y-1.5">
        {industry.capabilities.map((c) => (
          <li key={c} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-1 rounded-full" style={{ background: accent }} />
            {c}
          </li>
        ))}
      </ul>
    </Link>
  );
}

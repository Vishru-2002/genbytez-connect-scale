import { ArrowUpRight } from "lucide-react";

export function BlogCard({
  category,
  title,
  description,
  readTime,
}: {
  category: string;
  title: string;
  description: string;
  readTime: string;
}) {
  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden">
      <div className="relative h-40 overflow-hidden border-b border-border bg-surface-2">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-chart-3/20" />
        <svg viewBox="0 0 400 160" className="relative h-full w-full text-primary/80" aria-hidden="true">
          {[0, 1, 2].map((row) => (
            <g key={row}>
              {[0, 1, 2, 3, 4].map((col) => (
                <circle key={col} cx={50 + col * 75} cy={40 + row * 40} r="2.6" fill="currentColor" fillOpacity="0.7" />
              ))}
              <path
                d={`M50 ${40 + row * 40} H350`}
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="1"
                strokeDasharray="3 224"
                style={{ animation: `gb-dash ${4 + row}s linear infinite` }}
              />
            </g>
          ))}
        </svg>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">{readTime}</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-snug">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-primary">
          Read More
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
}

export function CaseStudyCard({
  title,
  category,
  challenge,
  solution,
  result,
}: {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
}) {
  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden">
      <div className="relative h-32 overflow-hidden border-b border-border bg-surface-2">
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
        <svg viewBox="0 0 400 120" className="relative h-full w-full text-primary" aria-hidden="true">
          <path
            d="M0 90 L60 70 L110 84 L170 44 L230 62 L290 30 L350 48 L400 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeOpacity="0.75"
          />
          {[60, 170, 290, 400].map((x, i) => (
            <circle
              key={x}
              cx={x}
              cy={[70, 44, 30, 22][i]}
              r="3.2"
              fill="currentColor"
              style={{ animation: `gb-pulse ${2.4 + i * 0.4}s ease-in-out infinite`, transformOrigin: "center" }}
            />
          ))}
        </svg>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary">{category}</p>
        <h3 className="mt-3 text-xl font-semibold">{title}</h3>
        <dl className="mt-5 space-y-4 text-sm">
          {[
            ["Challenge", challenge],
            ["Solution", solution],
            ["Result", result],
          ].map(([term, def]) => (
            <div key={term} className="border-l border-border pl-4">
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">{term}</dt>
              <dd className="mt-1 leading-relaxed text-foreground/90">{def}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

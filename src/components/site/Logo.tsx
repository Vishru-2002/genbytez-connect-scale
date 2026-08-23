export function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <defs>
          <linearGradient id="gb-logo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <g className="text-primary" stroke="url(#gb-logo)" strokeWidth="1.6" fill="none">
          <path d="M16 4v8M16 20v8M4.5 10.5l7 4M20.5 17.5l7 4M27.5 10.5l-7 4M11.5 17.5l-7 4" />
        </g>
        <g className="fill-primary">
          <circle cx="16" cy="16" r="3.4" />
          <circle cx="16" cy="4" r="1.9" />
          <circle cx="16" cy="28" r="1.9" />
          <circle cx="4.5" cy="10.5" r="1.9" />
          <circle cx="27.5" cy="10.5" r="1.9" />
          <circle cx="4.5" cy="21.5" r="1.9" />
          <circle cx="27.5" cy="21.5" r="1.9" />
        </g>
      </svg>
      <span className="font-display text-[1.15rem] font-semibold tracking-tight">
        Gen<span className="text-primary">bytez</span>
      </span>
    </span>
  );
}

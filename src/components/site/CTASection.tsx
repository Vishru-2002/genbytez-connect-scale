import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTASection({
  headline = "Ready to Connect Your Business?",
  text = "Tell us about your challenge. We'll help you discover where IoT and digital technology can create measurable value.",
}: {
  headline?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-border py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <svg
        viewBox="0 0 1200 400"
        className="pointer-events-none absolute inset-0 h-full w-full text-primary opacity-50"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        {[
          [120, 90],
          [300, 200],
          [180, 320],
          [520, 120],
          [700, 280],
          [900, 130],
          [1060, 300],
          [1150, 90],
        ].map(([x, y], i, arr) => (
          <g key={`${x}-${y}`}>
            {arr[i + 1] ? (
              <path
                d={`M${x} ${y} L${arr[i + 1][0]} ${arr[i + 1][1]}`}
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="1"
              />
            ) : null}
            <circle
              cx={x}
              cy={y}
              r="3.5"
              fill="currentColor"
              style={{ animation: `gb-pulse ${2.5 + (i % 4) * 0.5}s ease-in-out ${i * 0.25}s infinite`, transformOrigin: `${x}px ${y}px` }}
            />
          </g>
        ))}
      </svg>

      <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-[1.08] sm:text-5xl">{headline}</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:glow-ring"
            >
              Talk to an Expert <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              hash="contact-form"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Start a Project
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

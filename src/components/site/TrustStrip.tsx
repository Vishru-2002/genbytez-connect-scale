import { Reveal } from "./Reveal";

/**
 * Placeholder trust strip. Replace each slot label with a real client logo,
 * technology partner, certification or association once available.
 */
const slots = [
  "Client logo",
  "Client logo",
  "Technology partner",
  "Certification",
  "Platform",
  "Industry association",
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-12">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center font-display text-lg text-foreground sm:text-xl">
            Technology that connects the physical and digital world.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {slots.map((slot, i) => (
              <li
                key={`${slot}-${i}`}
                className="flex h-16 items-center justify-center rounded-xl border border-dashed border-border bg-background/30 px-3 text-center font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground"
              >
                {slot}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

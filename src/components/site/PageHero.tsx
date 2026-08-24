import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 hero-glow opacity-80" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_40%_10%,black,transparent)]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-4xl text-[2.3rem] font-semibold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
          </Reveal>
        ) : null}
        {children ? <Reveal delay={220}>{children}</Reveal> : null}
      </div>
    </section>
  );
}

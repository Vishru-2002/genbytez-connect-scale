import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { IoTNetwork } from "./IoTNetwork";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pt-44 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal immediate>
            <p className="eyebrow">IoT • Digital Solutions • Intelligence</p>
          </Reveal>
          <Reveal delay={80} immediate>
            <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.03] sm:text-6xl lg:text-[4.2rem]">
              Connect Technology.
              <br />
              <span className="text-gradient">Create Intelligence.</span>
            </h1>
          </Reveal>
          <Reveal delay={160} immediate>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Genbytez builds IoT and digital solutions that connect devices, data, applications and
              people — helping businesses monitor operations, automate workflows and make smarter
              decisions.
            </p>
          </Reveal>
          <Reveal delay={240} immediate>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:glow-ring"
              >
                Talk to an Expert <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/"
                hash="solutions"
                className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Play className="size-4" /> Explore Solutions
              </Link>
            </div>
          </Reveal>
          <Reveal delay={320} immediate>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-8 sm:grid-cols-4">
              {[
                ["Device", "sensors & machines"],
                ["Connect", "MQTT to 5G"],
                ["Cloud", "scalable platforms"],
                ["Intelligence", "analytics & AI"],
              ].map(([term, def]) => (
                <div key={term}>
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary">
                    {term}
                  </dt>
                  <dd className="mt-1.5 text-sm text-muted-foreground">{def}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} immediate>
          <div className="relative rounded-3xl border border-border bg-surface/60 p-5 backdrop-blur-sm sm:p-7">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                Live data path
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-primary">
                <span
                  className="size-1.5 rounded-full bg-primary"
                  style={{ animation: "gb-pulse 2s infinite" }}
                />
                streaming
              </span>
            </div>
            <IoTNetwork className="text-primary" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                ["Devices", "connected"],
                ["Events", "processed"],
                ["Insights", "delivered"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-xl border border-border bg-background/40 px-3 py-2.5"
                >
                  <p className="text-xs font-medium">{a}</p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

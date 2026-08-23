import { Activity, Brain, Radio, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { title: "Connect", description: "Connect machines, sensors, assets and devices.", Icon: Radio },
  { title: "Collect", description: "Capture real-time operational data.", Icon: Activity },
  { title: "Understand", description: "Transform data into insights using analytics and AI.", Icon: Brain },
  { title: "Act", description: "Turn insights into alerts, automation and business decisions.", Icon: Zap },
];

export function FlowCards() {
  return (
    <div className="relative mt-14">
      <div className="pointer-events-none absolute left-0 right-0 top-[4.5rem] hidden h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent lg:block" />
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ title, description, Icon }, i) => (
          <Reveal as="li" key={title} delay={i * 110}>
            <div className="card-surface group relative h-full overflow-hidden p-7">
              <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <span className="inline-flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <span
                className="mt-7 block h-px w-full bg-gradient-to-r from-primary/60 to-transparent"
                style={{ animation: `gb-float ${4 + i}s ease-in-out infinite` }}
              />
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

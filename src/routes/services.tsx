import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { Icon } from "@/components/site/Icon";
import { PageHero } from "@/components/site/PageHero";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeader } from "@/components/site/SectionHeader";
import { TechnologyGrid } from "@/components/site/TechnologyGrid";
import { digitalSolutions } from "@/content/site";

const title = "Services | IoT Engineering & Digital Development | Genbytez";
const description =
  "IoT platform engineering, cloud, web and mobile applications, data analytics, AI/ML and automation services delivered end to end by Genbytez.";

const engineering = [
  {
    title: "IoT Consulting & Architecture",
    description: "Feasibility, protocol selection, architecture design and deployment planning for connected systems.",
  },
  {
    title: "Device & Firmware Engineering",
    description: "Sensor selection, embedded firmware, gateway integration and edge processing logic.",
  },
  {
    title: "Integration & Protocol Work",
    description: "MQTT, Modbus, CAN, OPC-UA and REST integrations with existing machines and enterprise systems.",
  },
  {
    title: "Platform Engineering",
    description: "Device management, telemetry ingestion, rules engines, APIs and multi-tenant access control.",
  },
  {
    title: "Automation & Workflows",
    description: "Alerting, escalation, ticket creation and closed-loop actions driven by live operational data.",
  },
  {
    title: "Support & Optimization",
    description: "Monitoring, maintenance, tuning and continuous improvement after go-live.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering Across the Full Connected Lifecycle"
        description="Device, connectivity, cloud, data, intelligence, application, business action — Genbytez can own any layer or all of them."
      />

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {engineering.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="card-surface h-full p-7">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section light>
        <SectionHeader
          eyebrow="Digital Solutions"
          title="Platforms, Applications and Intelligence"
          description="The digital layer that makes connected data usable across operations, field teams and leadership."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {digitalSolutions.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="card-surface h-full p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Process" title="From Idea to Impact" />
        <ProcessTimeline />
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader eyebrow="Technology" title="Built With Modern Technology" />
        <TechnologyGrid />
      </Section>

      <CTASection />
    </>
  );
}

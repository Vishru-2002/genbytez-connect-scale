import { createFileRoute } from "@tanstack/react-router";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { CTASection } from "@/components/site/CTASection";
import { Icon } from "@/components/site/Icon";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeader } from "@/components/site/SectionHeader";
import { SolutionCard } from "@/components/site/SolutionCard";
import { digitalSolutions, solutions } from "@/content/site";

const title = "IoT Solutions | Genbytez";
const description =
  "Industrial IoT, smart monitoring, asset tracking, predictive maintenance, smart energy, fleet intelligence and custom IoT platforms built by Genbytez.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/solutions" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="IoT Solutions Built for the Real World"
        description="From individual connected devices to enterprise-scale IoT ecosystems — designed around the constraints of real operating environments."
      />

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <Reveal key={solution.slug} delay={(i % 3) * 80}>
              <SolutionCard solution={solution} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section light>
        <SectionHeader
          eyebrow="Digital Solutions"
          title="Beyond IoT. Complete Digital Solutions."
          description="Platforms, applications and intelligence built around your connected data."
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

      <Section className="border-y border-border bg-surface/30">
        <SectionHeader eyebrow="Architecture" title="One Connected Ecosystem" />
        <ArchitectureDiagram />
      </Section>

      <CTASection headline="Not sure which solution fits?" text="Describe your environment and objectives — we'll map the shortest path to visibility." />
    </>
  );
}

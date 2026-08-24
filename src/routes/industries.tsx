import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { IndustryCard } from "@/components/site/IndustryCard";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeader } from "@/components/site/SectionHeader";
import { industries } from "@/content/site";

const title = "Industries We Serve | Genbytez IoT Solutions";
const description =
  "Connected IoT solutions for manufacturing, agriculture, healthcare, logistics, energy, smart buildings, retail, automotive, education and construction.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/industries" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Connected Solutions Across Industries"
        description="Different environments, different constraints — the same objective: real-time visibility and the ability to act on it."
      />

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={(i % 4) * 70}>
              <IndustryCard industry={industry} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section light>
        <SectionHeader
          eyebrow="Approach"
          title="Industry context shapes the architecture"
          description="Sensor choice, connectivity, edge processing and compliance requirements change by environment. We start from the physical reality of your site, not from a template."
        />
      </Section>

      <CTASection />
    </>
  );
}

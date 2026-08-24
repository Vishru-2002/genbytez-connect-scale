import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Hero } from "@/components/site/Hero";
import { Icon } from "@/components/site/Icon";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeader } from "@/components/site/SectionHeader";
import { caseStudies, digitalSolutions, solutions, whyGenbytez } from "@/content/site";

const CaseStudyCard = lazy(() =>
  import("@/components/site/CaseStudyCard").then((module) => ({ default: module.CaseStudyCard })),
);
const CTASection = lazy(() =>
  import("@/components/site/CTASection").then((module) => ({ default: module.CTASection })),
);
const FlowCards = lazy(() =>
  import("@/components/site/FlowCards").then((module) => ({ default: module.FlowCards })),
);
const Metrics = lazy(() =>
  import("@/components/site/Metrics").then((module) => ({ default: module.Metrics })),
);
const ProcessTimeline = lazy(() =>
  import("@/components/site/ProcessTimeline").then((module) => ({
    default: module.ProcessTimeline,
  })),
);
const SolutionCard = lazy(() =>
  import("@/components/site/SolutionCard").then((module) => ({ default: module.SolutionCard })),
);
const TechnologyGrid = lazy(() =>
  import("@/components/site/TechnologyGrid").then((module) => ({ default: module.TechnologyGrid })),
);
const TestimonialCarousel = lazy(() =>
  import("@/components/site/TestimonialCarousel").then((module) => ({
    default: module.TestimonialCarousel,
  })),
);

const title = "Genbytez | IoT & Digital Solutions Company";
const description =
  "Genbytez builds IoT and digital solutions that connect devices, data, software and businesses to create smarter, more efficient operations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "IoT solutions company, IoT development company, IoT solutions Chennai, Industrial IoT solutions, IoT platform development, IoT consulting, smart monitoring solutions, asset tracking solutions, digital transformation, IoT analytics",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Section>
        <SectionHeader
          eyebrow="Connect → Understand → Automate → Grow"
          title="From Connected Devices to Business Intelligence"
          description="IoT is more than connecting a device. It is about turning real-world data into meaningful business action. Genbytez helps organizations connect physical assets, capture real-time information, analyze what it means, and build the digital experiences teams use every day."
        />
        <Suspense fallback={null}>
          <FlowCards />
        </Suspense>
      </Section>

      <Section id="solutions">
        <SectionHeader
          eyebrow="IoT Solutions"
          title="IoT Solutions Built for the Real World"
          description="From individual connected devices to enterprise-scale IoT ecosystems."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={null}>
            {solutions.map((solution, i) => (
              <Reveal key={solution.slug} delay={(i % 3) * 90}>
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </Suspense>
        </div>
      </Section>

      <Section id="digital-solutions">
        <SectionHeader
          eyebrow="Digital Solutions"
          title="Beyond IoT. Complete Digital Solutions."
          description="Genbytez doesn't stop at hardware and connectivity. We build the platforms, applications and intelligence layers that make connected data useful across the business."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {digitalSolutions.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <div className="card-surface h-full p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="why-genbytez">
        <SectionHeader
          eyebrow="Why Genbytez"
          title="Why Genbytez?"
          description="Connected deployments succeed when engineering, operations and business outcomes are designed together."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyGenbytez.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <div className="card-surface h-full p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-16">
          <Suspense fallback={null}>
            <Metrics />
          </Suspense>
        </div>
      </Section>

      <Section id="case-studies">
        <SectionHeader
          eyebrow="Case Studies"
          title="Turning Real-World Challenges Into Connected Solutions"
          description="Illustrative project scenarios showing how Genbytez approaches connected deployments. Replace with real engagements once published."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={null}>
            {caseStudies.slice(0, 3).map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 90}>
                <CaseStudyCard {...cs} />
              </Reveal>
            ))}
          </Suspense>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Process"
          title="From Idea to Impact"
          description="A six-step path from problem definition to a deployed, optimized connected solution."
        />
        <Suspense fallback={null}>
          <ProcessTimeline />
        </Suspense>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Technology Ecosystem"
          title="Built With Modern Technology"
          description="Protocols, platforms and frameworks Genbytez engineers work with across the stack."
        />
        <Suspense fallback={null}>
          <TechnologyGrid />
        </Suspense>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by Teams Building What's Next"
          align="center"
        />
        <Suspense fallback={null}>
          <TestimonialCarousel />
        </Suspense>
      </Section>

      <Suspense fallback={null}>
        <CTASection />
      </Suspense>
    </>
  );
}

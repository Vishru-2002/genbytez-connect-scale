import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { Icon } from "@/components/site/Icon";
import { IoTNetwork } from "@/components/site/IoTNetwork";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeader } from "@/components/site/SectionHeader";
import { industries, solutions } from "@/content/site";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Industry unavailable | Genbytez" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.industry.title} IoT Solutions | Genbytez`;
    const description = loaderData.industry.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/industries/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
  notFoundComponent: IndustryNotFound,
  component: IndustryDetail,
});

function IndustryNotFound() {
  return (
    <Section className="pt-40">
      <h1 className="text-4xl font-semibold">Industry not found</h1>
      <p className="mt-4 text-muted-foreground">This industry page doesn't exist yet.</p>
      <Link to="/industries" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
        All industries <ArrowRight className="size-4" />
      </Link>
    </Section>
  );
}

function IndustryDetail() {
  const { industry } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow="Industry" title={`${industry.title} — Connected Operations`} description={industry.summary}>
        <Link
          to="/contact"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:glow-ring"
        >
          Talk to an Expert <ArrowRight className="size-4" />
        </Link>
      </PageHero>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <div className="card-surface p-8">
              <span className="inline-flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <Icon name={industry.icon} className="size-5" />
              </span>
              <h2 className="mt-6 text-2xl font-semibold">Where IoT creates value</h2>
              <ul className="mt-6 space-y-3">
                {industry.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-surface/50 p-6">
              <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                Deployment blueprint
              </p>
              <IoTNetwork className="text-primary" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section light>
        <SectionHeader eyebrow="Relevant solutions" title="Solutions applied in this sector" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <Link to="/solutions/$slug" params={{ slug: s.slug }} className="card-surface block h-full p-7">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}

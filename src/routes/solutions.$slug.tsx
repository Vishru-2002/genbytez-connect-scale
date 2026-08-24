import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { Icon } from "@/components/site/Icon";
import { IoTNetwork } from "@/components/site/IoTNetwork";
import { PageHero } from "@/components/site/PageHero";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeader } from "@/components/site/SectionHeader";
import { solutions } from "@/content/site";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = solutions.find((s) => s.slug === params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Solution unavailable | Genbytez" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.solution.title} | Genbytez IoT Solutions`;
    const description = loaderData.solution.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/solutions/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/solutions/${params.slug}` }],
    };
  },
  notFoundComponent: SolutionNotFound,
  component: SolutionDetail,
});

function SolutionNotFound() {
  return (
    <Section className="pt-40">
      <h1 className="text-4xl font-semibold">Solution not found</h1>
      <p className="mt-4 text-muted-foreground">This solution page doesn't exist. Browse everything we build instead.</p>
      <Link to="/solutions" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
        All solutions <ArrowRight className="size-4" />
      </Link>
    </Section>
  );
}

function SolutionDetail() {
  const { solution } = Route.useLoaderData();
  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="IoT Solution" title={solution.title} description={solution.description}>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:glow-ring"
          >
            Talk to an Expert <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
          >
            See related work
          </Link>
        </div>
      </PageHero>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <Reveal>
            <div className="card-surface p-8">
              <span className="inline-flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <Icon name={solution.icon} className="size-5" />
              </span>
              <h2 className="mt-6 text-2xl font-semibold">What it covers</h2>
              <ul className="mt-6 space-y-3">
                {solution.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {u}
                  </li>
                ))}
              </ul>
              <h3 className="mt-9 font-mono text-xs uppercase tracking-[0.18em] text-primary">Typical outcomes</h3>
              <ul className="mt-4 space-y-2">
                {solution.outcomes.map((o) => (
                  <li key={o} className="text-sm text-foreground/90">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-surface/50 p-6">
              <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                Reference data path
              </p>
              <IoTNetwork className="text-primary" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section light>
        <SectionHeader eyebrow="How we deliver" title="From Idea to Impact" />
        <ProcessTimeline />
      </Section>

      <Section>
        <SectionHeader eyebrow="Related" title="Other solutions" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="card-surface block h-full p-7"
              >
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

import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ShieldCheck, Timer, Wrench } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/SectionHeader";
import { brand } from "@/content/site";

const title = "Contact Genbytez | IoT & Digital Solutions";
const description =
  "Talk to Genbytez about IoT, digital platforms, monitoring, automation and connected product requirements.";

const contactCards = [
  {
    label: "Email",
    value: brand.email,
    href: `mailto:${brand.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: brand.phone,
    href: `tel:${brand.phone.replace(/[^\d+]/g, "")}`,
    Icon: Phone,
  },
  {
    label: "Location",
    value: brand.address,
    href: undefined,
    Icon: MapPin,
  },
] as const;

const expectations = [
  {
    title: "Requirement Review",
    description:
      "We understand the device, software, data and operations context before suggesting a path.",
    Icon: ShieldCheck,
  },
  {
    title: "Clear Next Step",
    description:
      "You get a practical direction for prototype, pilot or production rollout based on the need.",
    Icon: Wrench,
  },
  {
    title: "Quick Response",
    description:
      "A specialist will review the request and respond with the right technical context.",
    Icon: Timer,
  },
] as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to connect, monitor or automate."
        description="Share a few details about your project. Genbytez can help shape the right IoT, software and data approach for your team."
      />

      <Section className="pt-14">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal>
            <aside className="space-y-5">
              <div className="card-surface p-7">
                <p className="eyebrow">Start Here</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Use the form for project discussions, connected product ideas, monitoring
                  requirements, platform builds or automation opportunities.
                </p>
              </div>

              {contactCards.map(({ label, value, href, Icon }) => {
                const content = (
                  <>
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-foreground">
                        {value}
                      </span>
                    </span>
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="card-surface flex items-center gap-4 p-5 transition-colors hover:border-primary/40"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="card-surface flex items-center gap-4 p-5">
                    {content}
                  </div>
                );
              })}
            </aside>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {expectations.map(({ title, description, Icon }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="card-surface h-full p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin } from "lucide-react";
import { brand, digitalSolutions, solutions } from "@/content/site";
import { Logo } from "./Logo";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Home", hash: undefined },
      { label: "Solutions", hash: "solutions" },
      { label: "Services", hash: "digital-solutions" },
      { label: "Case Studies", hash: "case-studies" },
      { label: "Why Genbytez", hash: "why-genbytez" },
    ],
  },
  {
    heading: "Solutions",
    links: solutions.map((solution) => ({
      label: solution.title,
      hash: "solutions",
    })),
  },
  {
    heading: "Services",
    links: digitalSolutions.map((service) => ({
      label: service.title,
      hash: "digital-solutions",
    })),
  },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gen-bytez", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/genbytez.in/", Icon: Instagram },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 font-display text-base text-foreground">{brand.tagline}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Genbytez builds IoT and digital solutions that connect devices, data, applications and
              people — from sensors on the ground to intelligence in the cloud.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {brand.location}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to="/"
                      hash={link.hash}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Genbytez. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={`Genbytez on ${label}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

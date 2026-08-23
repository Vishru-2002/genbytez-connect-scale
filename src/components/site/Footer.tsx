import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Youtube } from "lucide-react";
import { brand } from "@/content/site";
import { Logo } from "./Logo";

const columns = [
  {
    heading: "Solutions",
    links: [
      { label: "Industrial IoT", to: "/solutions/$slug", params: { slug: "industrial-iot" } },
      { label: "Smart Monitoring", to: "/solutions/$slug", params: { slug: "smart-monitoring" } },
      { label: "Asset Tracking", to: "/solutions/$slug", params: { slug: "asset-tracking" } },
      { label: "Predictive Maintenance", to: "/solutions/$slug", params: { slug: "predictive-maintenance" } },
      { label: "Smart Energy", to: "/solutions/$slug", params: { slug: "smart-energy" } },
      { label: "Fleet Intelligence", to: "/solutions/$slug", params: { slug: "fleet-intelligence" } },
      { label: "IoT Platforms", to: "/solutions/$slug", params: { slug: "iot-platforms" } },
    ],
  },
  {
    heading: "Digital Solutions",
    links: [
      { label: "Cloud", to: "/services", params: undefined },
      { label: "Web Applications", to: "/services", params: undefined },
      { label: "Mobile Applications", to: "/services", params: undefined },
      { label: "Data & Analytics", to: "/services", params: undefined },
      { label: "AI & ML", to: "/services", params: undefined },
      { label: "Automation", to: "/services", params: undefined },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about", params: undefined },
      { label: "Case Studies", to: "/case-studies", params: undefined },
      { label: "Industries", to: "/industries", params: undefined },
      { label: "Insights", to: "/insights", params: undefined },
      { label: "Careers", to: "/careers", params: undefined },
      { label: "Contact", to: "/contact", params: undefined },
    ],
  },
] as const;

const socials = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "X", Icon: Twitter },
  { label: "GitHub", Icon: Github },
  { label: "YouTube", Icon: Youtube },
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
              Genbytez builds IoT and digital solutions that connect devices, data, applications and people — from
              sensors on the ground to intelligence in the cloud.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">{brand.location}</p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">{col.heading}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      params={link.params as never}
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
            <Link to="/privacy-policy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link to="/privacy-policy" hash="cookies" className="transition-colors hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={`Genbytez on ${label}`}
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

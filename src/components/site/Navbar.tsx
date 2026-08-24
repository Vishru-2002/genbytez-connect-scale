import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const navItems = nav.map((item) => ({
  ...item,
  key: `${item.to}-${"hash" in item ? item.hash : "page"}`,
  hash: "hash" in item ? item.hash : undefined,
}));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          to="/"
          className="text-foreground"
          onClick={() => setOpen(false)}
          aria-label="Genbytez home"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              hash={item.hash}
              activeOptions={{ exact: item.hash === undefined }}
              className={cn(
                "group relative whitespace-nowrap rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                item.hash === undefined && "data-[status=active]:text-foreground",
              )}
            >
              {item.label}
              <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:glow-ring sm:inline-flex"
          >
            Talk to an Expert
            <ArrowRight className="size-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/98 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                hash={item.hash}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.hash === undefined }}
                className={cn(
                  "rounded-xl px-3 py-3 text-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                  item.hash === undefined && "data-[status=active]:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground"
            >
              Talk to an Expert <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

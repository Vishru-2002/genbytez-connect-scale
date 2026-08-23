import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.85rem]">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-24 lg:py-28", light && "section-light", className)}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

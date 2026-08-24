import { technologies } from "@/content/site";
import { Reveal } from "./Reveal";

export function TechnologyGrid() {
  return (
    <>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="card-surface h-full p-7">
              <h3 className="inline-flex rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.2em] text-primary/90">
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-foreground/85 transition-colors hover:border-primary/35 hover:bg-primary/15 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

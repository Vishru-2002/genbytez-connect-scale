import { technologies } from "@/content/site";
import { Reveal } from "./Reveal";

export function TechnologyGrid() {
  return (
    <>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="card-surface h-full p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{group.category}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        Technologies Genbytez works with. Listing does not imply official partnership or endorsement.
      </p>
    </>
  );
}

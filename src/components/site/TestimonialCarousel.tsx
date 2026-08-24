import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/content/site";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index];

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <div className="mt-12">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
        <Quote className="size-9 text-primary/60" aria-hidden="true" />
        <blockquote className="mt-6 font-display text-xl leading-relaxed text-foreground sm:text-2xl">
          “{active.quote}”
        </blockquote>
        <figcaption className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="font-medium text-foreground">{active.name}</span>
          <span className="text-muted-foreground">
            {active.position}, {active.company}
          </span>
        </figcaption>

        <div className="mt-9 flex items-center justify-between">
          <div className="flex gap-2" role="tablist" aria-label="Testimonials">
            {testimonials.map((t, i) => (
              <button
                key={`${t.name}-${i}`}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-3 bg-border"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
      <p className="mt-5 text-center font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
        Sample content — replace with approved client quotes
      </p>
    </div>
  );
}

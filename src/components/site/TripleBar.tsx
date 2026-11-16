import { Check } from "lucide-react";
import { BARS, type BarKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const accent: Record<BarKey, { text: string; bg: string; border: string; tag: string }> = {
  cocktail: { text: "text-gold", bg: "bg-gold", border: "border-gold", tag: "Adults · 21+" },
  lemonade: { text: "text-citrus", bg: "bg-citrus", border: "border-citrus", tag: "For the little ones" },
  mocktail: { text: "text-sage", bg: "bg-sage", border: "border-sage", tag: "Zero proof · Full craft" },
};

export function TripleBar() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 border-b hairline pb-14 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow">The Triple-Bar Experience</p>
            <h2 className="display-lg mt-5">One Event. <br /><em className="text-primary">Three Unforgettable</em> Bar Experiences.</h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Most mobile bars serve the adults. We serve the whole guest list — three complementary bars, each with its own identity, all under one booking.
            </p>
          </Reveal>
        </div>

        <div className="mt-6">
          {BARS.map((bar, i) => {
            const a = accent[bar.key];
            const flip = i % 2 === 1;
            return (
              <article key={bar.key} className="grid items-center gap-10 border-b hairline py-16 md:py-24 lg:grid-cols-12">
                <Reveal className={cn("relative lg:col-span-6", flip && "lg:order-2 lg:col-start-7")}>
                  <div className="img-zoom aspect-[5/4]">
                    <img src={bar.img} alt={bar.alt} loading="lazy" className="size-full object-cover" />
                  </div>
                  <span className={cn("absolute top-0 h-full w-1", flip ? "-right-3" : "-left-3", a.bg)} aria-hidden />
                </Reveal>
                <Reveal delay={120} className={cn("lg:col-span-5", flip ? "lg:order-1" : "lg:col-start-8")}>
                  <div className="flex items-baseline gap-5">
                    <span className={cn("font-display text-7xl italic leading-none md:text-8xl", a.text)}>{bar.num}</span>
                    <span className={cn("border px-3 py-1 text-[0.65rem] tracking-[0.25em] uppercase", a.border, a.text)}>{a.tag}</span>
                  </div>
                  <p className="mt-8 text-sm tracking-[0.2em] text-muted-foreground uppercase">{bar.name}</p>
                  <h3 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{bar.title}</h3>
                  <p className="mt-6 leading-relaxed text-muted-foreground">{bar.body}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {bar.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <Check className={cn("mt-0.5 size-4 shrink-0", a.text)} aria-hidden />{p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

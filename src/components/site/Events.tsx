import { ArrowUpRight } from "lucide-react";
import { EVENTS, GALLERY } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { LuxButton } from "./LuxButton";
import { Reveal } from "./Reveal";

export function Events() {
  return (
    <section id="portfolio" className="band-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="eyebrow">Services & Portfolio</p>
            <h2 className="display-lg mt-5">Events we <em className="text-primary">elevate.</em></h2>
          </Reveal>
          <Reveal delay={100} className="max-w-md">
            <p className="text-lg leading-relaxed text-muted-foreground">
              From intimate private parties to large-scale corporate events — we bring the experience to you.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <li key={e.name} className="bg-background">
              <Reveal delay={(i % 3) * 80}>
                <a href="#contact" className="group img-zoom relative block aspect-[4/3]">
                  <img src={e.img} alt={e.alt} loading="lazy" className="size-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-ivory">
                    <div>
                      <span className="text-xs tracking-[0.25em] text-gold">0{i + 1}</span>
                      <h3 className="mt-1 font-display text-2xl md:text-3xl">{e.name}</h3>
                    </div>
                    <ArrowUpRight className="size-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1" aria-hidden />
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-28 grid gap-4 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">The Setup Speaks for Itself</p>
            <h3 className="mt-4 mb-8 font-display text-3xl md:text-4xl">A look behind the bar.</h3>
            <div className="img-zoom aspect-[4/5]"><img src={GALLERY[0]!.img} alt={GALLERY[0]!.alt} loading="lazy" className="size-full object-cover" /></div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:col-span-7">
            {GALLERY.slice(1, 5).map((g, i) => (
              <Reveal key={g.img} delay={i * 70} className={cn("img-zoom", i % 3 === 0 ? "aspect-[4/5]" : "aspect-square")}>
                <img src={g.img} alt={g.alt} loading="lazy" className="size-full object-cover" />
              </Reveal>
            ))}
          </div>
          <Reveal className="img-zoom aspect-[21/9] md:col-span-12">
            <img src={GALLERY[5]!.img} alt={GALLERY[5]!.alt} loading="lazy" className="size-full object-cover" />
          </Reveal>
        </div>
        <div className="mt-14 text-center">
          <LuxButton href="#contact" variant="outline">Inquire About Your Event</LuxButton>
        </div>
      </div>
    </section>
  );
}

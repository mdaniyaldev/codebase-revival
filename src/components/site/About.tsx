import { IMG } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="band-ivory py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-5">
          <div className="img-zoom aspect-[4/5]">
            <img src={IMG.about} alt="Bartender crafting premium cocktails at an elegant mobile bar" loading="lazy" className="size-full object-cover" />
          </div>
          <div className="absolute -right-4 -bottom-8 bg-ink px-7 py-6 text-ivory shadow-[var(--shadow-lux)] md:-right-10">
            <p className="font-display text-5xl italic text-gold">ATL</p>
            <p className="mt-1 text-[0.65rem] tracking-[0.3em] uppercase">Metro Atlanta & Georgia</p>
          </div>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal><p className="eyebrow">About Booze Babies Atl</p></Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg mt-5">We show up and <em className="text-primary">raise the bar.</em></h2>
          </Reveal>
          <Reveal delay={200} className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Booze Babies Atl is a luxury mobile bartending experience built for people who refuse to settle for average. We bring the bar to you — fully set up, beautifully presented, and staffed by bartenders who know their craft.
            </p>
            <p>
              We specialize in events where every guest deserves a moment: the adults at the cocktail bar, the kids at their own lemonade station, and everyone in between at our zero-proof bar. No one gets left out.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <dl className="mt-12 grid grid-cols-3 border-t hairline pt-8">
              {[["Georgia", "Statewide service"], ["3 Bars", "One setup"], ["Every", "Guest included"]].map(([k, v]) => (
                <div key={k} className="border-r hairline pr-4 last:border-0 [&:not(:first-child)]:pl-4">
                  <dt className="font-display text-2xl md:text-3xl">{k}</dt>
                  <dd className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { ArrowDown, ArrowRight } from "lucide-react";
import { IMG } from "@/lib/site-data";
import { LuxButton } from "./LuxButton";

export function Hero() {
  return (
    <section id="home" className="grain relative flex min-h-[100svh] items-end overflow-hidden">
      <img src={IMG.hero} alt="Luxury cocktail bar with premium spirits and atmospheric lighting" className="absolute inset-0 size-full scale-105 object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pt-36 pb-16 md:px-10 md:pb-24 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="eyebrow animate-rise">Luxury Mobile Bartending · Metro Atlanta & Georgia</p>
          <h1 className="display-xl mt-6 text-foreground animate-rise" style={{ animationDelay: "120ms" }}>
            More Than <em className="text-primary">a Bar.</em>
            <br />It's an Experience.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground animate-rise" style={{ animationDelay: "240ms" }}>
            Crafted cocktails for the grown-ups, lemonade magic for the little ones, and sophisticated zero-proof drinks for everyone in between — delivered to your event, beautifully.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-rise" style={{ animationDelay: "360ms" }}>
            <LuxButton href="#contact">Book Your Event <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></LuxButton>
            <LuxButton href="#services" variant="outline">Explore the Experience</LuxButton>
          </div>
        </div>

        <aside aria-label="The Triple-Bar Experience" className="self-end border-l hairline pl-6 lg:col-span-4 animate-rise" style={{ animationDelay: "480ms" }}>
          <p className="eyebrow">One Event · Three Bars</p>
          <ol className="mt-5 space-y-4">
            {[
              ["01", "Craft Cocktail Bar", "bg-gold"],
              ["02", "Kids' Lemonade Bar", "bg-citrus"],
              ["03", "Zero-Proof Mocktail Bar", "bg-sage"],
            ].map(([n, label, dot]) => (
              <li key={n} className="flex items-center gap-4 font-display text-xl text-foreground">
                <span className={`size-2 rounded-full ${dot}`} aria-hidden />
                <span className="font-sans text-xs text-muted-foreground">{n}</span>{label}
              </li>
            ))}
          </ol>
        </aside>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs tracking-[0.3em] text-muted-foreground uppercase hover:text-primary md:flex">
        Scroll <ArrowDown className="size-3.5 animate-bounce" />
      </a>
    </section>
  );
}

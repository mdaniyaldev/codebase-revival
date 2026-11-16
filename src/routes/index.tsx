import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { TripleBar } from "@/components/site/TripleBar";
import { Events } from "@/components/site/Events";
import { RatesCalculator } from "@/components/site/RatesCalculator";
import { BookingForm, type Prefill } from "@/components/site/BookingForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GUEST_DEFAULT, calculateEstimate, formatUSD, type Addons } from "@/lib/pricing";
import type { BarKey } from "@/lib/site-data";
import { IMG } from "@/lib/site-data";

const TITLE = "Booze Babies Atl — Luxury Mobile Bartending | Metro Atlanta & Georgia";
const DESC =
  "Luxury mobile bartending in Metro Atlanta & Georgia: a craft cocktail bar, a kids' lemonade bar and a zero-proof mocktail bar — one event, three unforgettable bar experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: "Booze Babies Atl — Luxury Mobile Bartending" },
      { property: "og:description", content: "One Event. Three Unforgettable Bar Experiences. Metro Atlanta's luxury mobile bar." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMG.hero },
    ],
  }),
  component: Index,
});

function Index() {
  const [guests, setGuests] = useState(GUEST_DEFAULT);
  const [addons, setAddons] = useState<Addons>({ lemonade: false, mocktail: false });
  const [prefill, setPrefill] = useState<Prefill | null>(null);

  const lockIn = () => {
    const est = calculateEstimate(guests, addons);
    const services: BarKey[] = ["cocktail", ...(addons.lemonade ? ["lemonade" as const] : []), ...(addons.mocktail ? ["mocktail" as const] : [])];
    setPrefill({ guestCount: String(est.guests), services, budget: `${formatUSD(est.total)} (calculator estimate)`, stamp: Date.now() });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <TripleBar />
        <Events />
        <RatesCalculator guests={guests} addons={addons} onGuests={setGuests} onAddons={setAddons} onLockIn={lockIn} />
        <BookingForm prefill={prefill} />
      </main>
      <SiteFooter />
    </>
  );
}

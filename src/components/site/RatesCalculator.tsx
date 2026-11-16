import { Info, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  ADDON_PRICES, ADDON_PRICES_CONFIRMED, BASE_FEE, GUEST_MAX, GUEST_MIN, PER_GUEST,
  calculateEstimate, formatUSD, type AddonKey, type Addons,
} from "@/lib/pricing";
import { cn } from "@/lib/utils";
import { LuxButton } from "./LuxButton";
import { Reveal } from "./Reveal";

const ADDONS: { key: AddonKey; label: string; dot: string }[] = [
  { key: "lemonade", label: "Kids' Lemonade Bar", dot: "bg-citrus" },
  { key: "mocktail", label: "Zero-Proof Mocktail Bar", dot: "bg-sage" },
];

const addonPriceLabel = (k: AddonKey) => (ADDON_PRICES_CONFIRMED ? formatUSD(ADDON_PRICES[k]) : "Price TBC");

type Props = {
  guests: number; addons: Addons;
  onGuests: (n: number) => void; onAddons: (a: Addons) => void; onLockIn: () => void;
};

export function RatesCalculator({ guests, addons, onGuests, onAddons, onLockIn }: Props) {
  const est = calculateEstimate(guests, addons);
  return (
    <section id="rates" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal><p className="eyebrow">Rates</p></Reveal>
          <Reveal delay={100}><h2 className="display-lg mt-5">Get a quick <em className="text-primary">estimate.</em></h2></Reveal>
          <Reveal delay={200} className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Base pricing starts at <strong className="font-medium text-foreground">{formatUSD(BASE_FEE)}</strong> plus{" "}
              <strong className="font-medium text-foreground">{formatUSD(PER_GUEST)} per guest</strong>. Add the bars that suit your guest list.
            </p>
            {!ADDON_PRICES_CONFIRMED && (
              <p className="flex gap-3 border-l-2 border-primary pl-4 text-sm">
                <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                Add-on pricing is pending confirmation. Estimates reflect base pricing only until finalized.
              </p>
            )}
            <p className="text-base">Ready for a personalized quote? Lock in your estimate and we'll follow up with exact pricing.</p>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
          <div className="border hairline bg-card p-6 shadow-[var(--shadow-lux)] md:p-10">
            <div className="flex items-baseline justify-between">
              <label id="guest-label" className="text-sm tracking-[0.2em] text-muted-foreground uppercase">Guest Count</label>
              <output aria-live="polite" className="font-display text-5xl text-primary tabular-nums">
                {est.guests}<span className="ml-2 font-sans text-sm text-muted-foreground">guests</span>
              </output>
            </div>
            <Slider
              aria-labelledby="guest-label"
              className="mt-8 [&_[role=slider]]:size-6 [&_[role=slider]]:border-2 [&_[role=slider]]:border-primary [&_[role=slider]]:bg-background [&_[role=slider]]:transition-transform [&_[role=slider]:hover]:scale-110"
              min={GUEST_MIN} max={GUEST_MAX} step={1} value={[est.guests]}
              onValueChange={([v]) => onGuests(v ?? guests)}
            />
            <div className="mt-3 flex justify-between text-xs text-muted-foreground"><span>{GUEST_MIN}</span><span>{GUEST_MAX}</span></div>

            <fieldset className="mt-10">
              <legend className="text-sm tracking-[0.2em] text-muted-foreground uppercase">Add-on Experiences</legend>
              <div className="mt-4 space-y-3">
                {ADDONS.map((a) => (
                  <label key={a.key} className={cn("flex cursor-pointer items-center justify-between border p-4 transition-colors", addons[a.key] ? "border-primary bg-primary/5" : "hairline hover:border-foreground/30")}>
                    <span className="flex items-center gap-3">
                      <span className={cn("size-2.5 rounded-full", a.dot)} aria-hidden />
                      <span>
                        <span className="block">{a.label}</span>
                        <span className="text-xs text-muted-foreground">{addonPriceLabel(a.key)}</span>
                      </span>
                    </span>
                    <Switch checked={addons[a.key]} onCheckedChange={(c) => onAddons({ ...addons, [a.key]: c })} aria-label={a.label} />
                  </label>
                ))}
              </div>
            </fieldset>

            <dl className="mt-10 space-y-3 border-t hairline pt-6 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">Base fee</dt><dd className="tabular-nums">{formatUSD(est.base)}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Guests ({est.guests} × {formatUSD(PER_GUEST)})</dt><dd className="tabular-nums">{formatUSD(est.guestTotal)}</dd></div>
              {ADDONS.filter((a) => addons[a.key]).map((a) => (
                <div key={a.key} className="flex justify-between"><dt className="text-muted-foreground">{a.label}</dt><dd>{ADDON_PRICES_CONFIRMED ? formatUSD(ADDON_PRICES[a.key]) : "TBC"}</dd></div>
              ))}
            </dl>
            <div className="mt-6 flex items-end justify-between border-t hairline pt-6">
              <span className="text-sm tracking-[0.2em] uppercase">Estimated Total</span>
              <span aria-live="polite" className="font-display text-5xl text-primary tabular-nums md:text-6xl">{formatUSD(est.total)}</span>
            </div>
            <LuxButton type="button" onClick={onLockIn} className="mt-8 w-full">
              Lock In Estimate & Book Now <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </LuxButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

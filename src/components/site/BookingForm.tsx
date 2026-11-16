import { useEffect, useId, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { BARS, EVENT_TYPES, type BarKey } from "@/lib/site-data";
import { emptyInquiry, submitInquiry, validateInquiry, type Inquiry, type InquiryErrors } from "@/lib/inquiry";
import { cn } from "@/lib/utils";
import { LuxButton } from "./LuxButton";
import { Reveal } from "./Reveal";

export type Prefill = { guestCount: string; services: BarKey[]; budget: string; stamp: number };

const inputCls =
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus-visible:outline-none aria-[invalid=true]:border-destructive";

function Field({ id, label, required, error, children, className }: { id: string; label: string; required?: boolean; error?: string | undefined; children: ReactNode; className?: string | undefined }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
        {label}{required && <span className="text-primary" aria-hidden> *</span>}
      </label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}

export function BookingForm({ prefill }: { prefill: Prefill | null }) {
  const uid = useId();
  const [data, setData] = useState<Inquiry>(emptyInquiry);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "ready">("idle");
  const [fromCalc, setFromCalc] = useState(false);

  useEffect(() => {
    if (!prefill) return;
    setData((d) => ({ ...d, guestCount: prefill.guestCount, services: prefill.services, budget: prefill.budget }));
    setErrors((e) => ({ ...e, guestCount: undefined, services: undefined }));
    setFromCalc(true);
    setStatus("idle");
  }, [prefill]);

  const set = <K extends keyof Inquiry>(k: K, v: Inquiry[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };
  const toggleService = (k: BarKey) =>
    set("services", data.services.includes(k) ? data.services.filter((s) => s !== k) : [...data.services, k]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validateInquiry(data);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    setStatus("submitting");
    await submitInquiry(data);
    setStatus("ready");
  };

  const f = (k: keyof Inquiry) => ({
    id: `${uid}-${k}`,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${uid}-${k}-err` : undefined,
  });
  const today = new Date().toISOString().slice(0, 10);

  return (
    <section id="contact" className="band-ivory py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal><p className="eyebrow">Booking Inquiry</p></Reveal>
          <Reveal delay={100}><h2 className="display-lg mt-5">Let's make your event <em className="text-primary">unforgettable.</em></h2></Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Tell us about your event and we'll be in touch within 24–48 hours to discuss details and confirm availability.
            </p>
            {fromCalc && (
              <p className="mt-6 border-l-2 border-primary pl-4 text-sm">Your calculator estimate has been added below. You can still adjust any field.</p>
            )}
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {status === "ready" ? (
            <div role="status" className="border hairline bg-card p-8 md:p-12 animate-rise">
              <CheckCircle2 className="size-10 text-primary" aria-hidden />
              <h3 className="mt-6 font-display text-4xl">Your inquiry details are ready.</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Thank you, {data.fullName.split(" ")[0]}. Online delivery isn't connected yet, so this inquiry has not been sent. For now, reach us on Instagram or TikTok at <strong className="text-foreground">@BoozeBabies.Atl</strong> with the details below.
              </p>
              <dl className="mt-8 grid gap-4 border-t hairline pt-6 text-sm sm:grid-cols-2">
                {[
                  ["Event", data.eventType], ["Date", data.eventDate], ["Guests", data.guestCount],
                  ["Services", data.services.map((s) => BARS.find((b) => b.key === s)?.name).join(", ")],
                  ["Budget", data.budget || "—"], ["Email", data.email],
                ].map(([k, v]) => (
                  <div key={k}><dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{k}</dt><dd className="mt-1">{v}</dd></div>
                ))}
              </dl>
              <LuxButton type="button" variant="outline" className="mt-10" onClick={() => setStatus("idle")}>Edit Details</LuxButton>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="grid gap-x-8 gap-y-8 sm:grid-cols-2" aria-label="Booking inquiry">
              <Field id={`${uid}-fullName`} label="Full Name" required error={errors.fullName}>
                <input {...f("fullName")} className={inputCls} autoComplete="name" placeholder="Your full name" value={data.fullName} onChange={(e) => set("fullName", e.target.value)} />
              </Field>
              <Field id={`${uid}-email`} label="Email Address" required error={errors.email}>
                <input {...f("email")} type="email" className={inputCls} autoComplete="email" placeholder="you@example.com" value={data.email} onChange={(e) => set("email", e.target.value)} />
              </Field>
              <Field id={`${uid}-phone`} label="Phone Number" required error={errors.phone}>
                <input {...f("phone")} type="tel" className={inputCls} autoComplete="tel" placeholder="(404) 555-0100" value={data.phone} onChange={(e) => set("phone", e.target.value)} />
              </Field>
              <Field id={`${uid}-eventType`} label="Event Type" required error={errors.eventType}>
                <select {...f("eventType")} className={cn(inputCls, "cursor-pointer [&>option]:text-ink")} value={data.eventType} onChange={(e) => set("eventType", e.target.value)}>
                  <option value="">Select event type</option>
                  {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
              <Field id={`${uid}-eventDate`} label="Event Date" required error={errors.eventDate}>
                <input {...f("eventDate")} type="date" min={today} className={inputCls} value={data.eventDate} onChange={(e) => set("eventDate", e.target.value)} />
              </Field>
              <Field id={`${uid}-guestCount`} label="Estimated Guest Count" required error={errors.guestCount}>
                <input {...f("guestCount")} type="number" inputMode="numeric" min={1} className={inputCls} placeholder="e.g. 100" value={data.guestCount} onChange={(e) => set("guestCount", e.target.value)} />
              </Field>

              <fieldset className="sm:col-span-2" aria-describedby={errors.services ? `${uid}-services-err` : undefined}>
                <legend className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Interested Services<span className="text-primary" aria-hidden> *</span></legend>
                <div className="mt-4 flex flex-wrap gap-3">
                  {BARS.map((b, i) => {
                    const on = data.services.includes(b.key);
                    return (
                      <label key={b.key} className={cn("flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring", on ? "border-foreground bg-foreground text-background" : "hairline hover:border-foreground/40")}>
                        <input id={i === 0 ? `${uid}-services` : undefined} type="checkbox" className="sr-only" checked={on} onChange={() => toggleService(b.key)} />
                        <span className={cn("size-2 rounded-full", b.key === "cocktail" ? "bg-gold" : b.key === "lemonade" ? "bg-citrus" : "bg-sage")} aria-hidden />
                        {b.name}
                      </label>
                    );
                  })}
                </div>
                {errors.services && <p id={`${uid}-services-err`} role="alert" className="mt-2 text-sm text-destructive">{errors.services}</p>}
              </fieldset>

              <Field id={`${uid}-budget`} label="Estimated Budget" className="sm:col-span-2">
                <input {...f("budget")} className={inputCls} placeholder="e.g. $1,500" value={data.budget} onChange={(e) => set("budget", e.target.value)} />
              </Field>
              <Field id={`${uid}-details`} label="Additional Event Details" className="sm:col-span-2">
                <textarea {...f("details")} rows={4} className={cn(inputCls, "resize-y")} placeholder="Venue, timing, theme, special requests…" value={data.details} onChange={(e) => set("details", e.target.value)} />
              </Field>
              <div className="sm:col-span-2">
                <LuxButton type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
                  {status === "submitting" ? "Preparing…" : "Submit Inquiry"}
                </LuxButton>
                <p className="mt-4 text-xs text-muted-foreground"><span className="text-primary">*</span> Required fields</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { LuxButton } from "./LuxButton";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "border-b hairline bg-background/90 py-3 backdrop-blur-md" : "py-6",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#home" className="leading-none" onClick={() => setOpen(false)}>
          <span className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="Booze Babies Atl"
              className="size-14 rounded-full object-cover ring-1 ring-primary/40 md:size-16"
            />
            <span className="block">
              <span className="block font-display text-lg italic text-foreground sm:text-2xl">Booze Babies <span className="text-primary">Atl</span></span>
              <span className="mt-1 block text-[0.5rem] tracking-[0.2em] text-muted-foreground uppercase sm:text-[0.6rem] sm:tracking-[0.35em]">Luxury Mobile Bar</span>
            </span>
          </span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={cn(
                  "relative text-sm tracking-wide transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-primary after:transition-all after:duration-500",
                  active === n.id ? "text-foreground after:w-full" : "text-muted-foreground after:w-0 hover:after:w-full",
                )}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LuxButton href="#contact" className="hidden px-5 py-3 sm:inline-flex">Book Now</LuxButton>
          <button
            type="button"
            className="p-2 text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto bg-background px-5 pt-10 lg:hidden"
      >
        <ul className="space-y-1">
          {NAV.map((n, i) => (
            <li key={n.id} className="animate-rise" style={{ animationDelay: `${i * 50}ms` }}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 border-b hairline py-4 font-display text-4xl text-foreground hover:text-primary">
                <span className="font-sans text-xs text-primary">0{i + 1}</span>{n.label}
              </a>
            </li>
          ))}
        </ul>
        <LuxButton href="#contact" onClick={() => setOpen(false)} className="mt-10 w-full">Book Now</LuxButton>
      </div>
    </header>
  );
}

import { NAV, SOCIAL } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t hairline">
      <div className="overflow-hidden border-b hairline py-8" aria-hidden>
        <div className="flex w-max animate-marquee gap-12 font-display text-5xl whitespace-nowrap italic text-foreground/15 md:text-7xl">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Craft Cocktails", "Kids' Lemonade", "Zero-Proof Mocktails", "Metro Atlanta"].map((t) => <span key={`${k}${t}`}>{t} <span className="text-primary/40">✦</span></span>),
          )}
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <img
            src="/logo.jpeg"
            alt="Booze Babies Atl"
            className="size-36 rounded-full object-cover ring-1 ring-primary/40"
          />
          <p className="mt-3 text-muted-foreground">Luxury Mobile Bartending<br />Metro Atlanta & Georgia</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="text-muted-foreground transition-colors hover:text-primary">{n.label}</a></li>)}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="eyebrow">Follow Along</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={SOCIAL.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram — {SOCIAL.instagram.handle}</a></li>
            <li><a href={SOCIAL.tiktok.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">TikTok — {SOCIAL.tiktok.handle}</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t hairline px-5 py-6 text-xs text-muted-foreground md:px-10">
        <p>© {new Date().getFullYear()} Booze Babies Atl. All rights reserved.</p>
        <p>Metro Atlanta & Georgia — Available for travel</p>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "@/content/site-body.html?raw";

const TITLE = "Booze Babies Atl — Luxury Mobile Bartending | Metro Atlanta & Georgia";
const DESC =
  "Booze Babies Atl — Luxury Mobile Bartending serving Metro Atlanta & Georgia. Premium cocktail bar, kids lemonade bar, and zero-proof mocktail bar for weddings, corporate events, private parties, and family celebrations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "mobile bartending Atlanta, luxury mobile bar, cocktail bar Atlanta, kids lemonade bar, mocktail bar, wedding bar service Georgia, corporate events Atlanta, Booze Babies Atl" },
      { property: "og:title", content: "Booze Babies Atl — Luxury Mobile Bartending" },
      { property: "og:description", content: "Three distinct bar experiences. One unforgettable event. Metro Atlanta's premier mobile bartending service." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" },
      { rel: "stylesheet", href: "/site/style.css" },
    ],
  }),
  component: Index,
});

function loadScript(src: string) {
  return new Promise<void>((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    s.setAttribute("data-site", "1");
    document.body.appendChild(s);
  });
}

function Index() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
      if (!cancelled) await loadScript(`/site/script.js?v=${Date.now()}`);
    })();
    return () => {
      cancelled = true;
      document.querySelectorAll("script[data-site]").forEach((s) => s.remove());
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}

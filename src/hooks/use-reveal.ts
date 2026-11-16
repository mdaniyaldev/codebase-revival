import { useEffect, useRef } from "react";

/** Adds data-shown="true" when the element scrolls into view (pairs with the `reveal` utility). */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) { el.setAttribute("data-shown", "true"); io.disconnect(); } },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

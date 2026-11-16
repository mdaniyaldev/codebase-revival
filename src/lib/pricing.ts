/** Pricing rules for the rate calculator. */
export const BASE_FEE = 500;
export const PER_GUEST = 6;
export const GUEST_MIN = 25;
export const GUEST_MAX = 300;
export const GUEST_DEFAULT = 100;

/**
 * Add-on prices are PENDING CLIENT CONFIRMATION. Kept at $0 on purpose —
 * do not invent a price. Update here once the client confirms.
 */
export const ADDON_PRICES = {
  lemonade: 0,
  mocktail: 0,
} as const;
export const ADDON_PRICES_CONFIRMED = false;

export type AddonKey = keyof typeof ADDON_PRICES;
export type Addons = Record<AddonKey, boolean>;

export function clampGuests(n: number) {
  if (!Number.isFinite(n)) return GUEST_DEFAULT;
  return Math.min(GUEST_MAX, Math.max(GUEST_MIN, Math.round(n)));
}

export function calculateEstimate(guests: number, addons: Addons) {
  const g = clampGuests(guests);
  const guestTotal = g * PER_GUEST;
  const addonTotal =
    (addons.lemonade ? ADDON_PRICES.lemonade : 0) + (addons.mocktail ? ADDON_PRICES.mocktail : 0);
  return { guests: g, base: BASE_FEE, guestTotal, addonTotal, total: BASE_FEE + guestTotal + addonTotal };
}

export const formatUSD = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

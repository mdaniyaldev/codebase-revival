import { describe, expect, it } from "vitest";
import { ADDON_PRICES, calculateEstimate, clampGuests, formatUSD } from "./pricing";

describe("rate calculator", () => {
  it("defaults: 100 guests = $500 + $600 = $1,100", () => {
    expect(calculateEstimate(100, { lemonade: false, mocktail: false }).total).toBe(1100);
  });
  it("charges $6 per guest on top of $500 base", () => {
    expect(calculateEstimate(25, { lemonade: false, mocktail: false }).total).toBe(650);
    expect(calculateEstimate(300, { lemonade: false, mocktail: false }).total).toBe(2300);
  });
  it("clamps guests to 25–300", () => {
    expect(clampGuests(5)).toBe(25);
    expect(clampGuests(999)).toBe(300);
  });
  it("add-on prices stay $0 until the client confirms", () => {
    expect(ADDON_PRICES).toEqual({ lemonade: 0, mocktail: 0 });
    expect(calculateEstimate(100, { lemonade: true, mocktail: true }).total).toBe(1100);
  });
  it("formats USD", () => {
    expect(formatUSD(1100)).toBe("$1,100");
  });
});

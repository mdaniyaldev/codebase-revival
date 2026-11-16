import type { BarKey } from "./site-data";

export type Inquiry = {
  fullName: string; email: string; phone: string; eventType: string; eventDate: string;
  guestCount: string; services: BarKey[]; budget: string; details: string;
};
export type InquiryErrors = Partial<Record<keyof Inquiry, string | undefined>>;

export const emptyInquiry: Inquiry = {
  fullName: "", email: "", phone: "", eventType: "", eventDate: "", guestCount: "", services: ["cocktail"], budget: "", details: "",
};

export function validateInquiry(d: Inquiry, today = new Date()): InquiryErrors {
  const e: InquiryErrors = {};
  if (d.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) e.email = "Please enter a valid email address.";
  if (d.phone.replace(/\D/g, "").length < 10) e.phone = "Please enter a valid phone number.";
  if (!d.eventType) e.eventType = "Please select an event type.";
  const t = new Date(today); t.setHours(0, 0, 0, 0);
  if (!d.eventDate || new Date(d.eventDate + "T00:00:00") < t) e.eventDate = "Please select a future event date.";
  if (!(Number(d.guestCount) >= 1)) e.guestCount = "Please enter a guest count of at least 1.";
  if (d.services.length === 0) e.services = "Please select at least one service.";
  return e;
}

/**
 * Submission hook. No delivery service is connected yet, so this never claims
 * the inquiry was sent. Replace the body with an API/email call to go live.
 */
export async function submitInquiry(data: Inquiry): Promise<{ delivered: boolean }> {
  console.info("[Booze Babies Atl] Inquiry prepared (no delivery service connected):", data);
  return { delivered: false };
}

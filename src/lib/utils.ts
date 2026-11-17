import { clsx, type ClassValue } from "clsx";

/**
 * Combines multiple class names using clsx
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Formats a number as Indian Currency (INR) with standard Indian numbering grouping.
 * E.g., 2999 -> "₹2,999", 22999 -> "₹22,999"
 */
export function formatINR(amount: number): string {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `₹${amount.toLocaleString("en-IN")}`;
  }
}

/**
 * Formats an Indian phone number for display (e.g., +91 98230 00000)
 */
export function formatPhoneDisplay(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, "");
  return cleaned;
}

/**
 * Generates an accessible, encoded wa.me URL
 */
export function getWhatsAppUrl(phone: string, text?: string): string {
  const digits = phone.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a clean tel: protocol link
 */
export function getPhoneUrl(phone: string): string {
  const clean = phone.replace(/[^\d+]/g, "");
  return `tel:${clean}`;
}

/**
 * Generates a directions URL to Google Maps
 */
export function getDirectionsUrl(mapsUrl?: string): string {
  return mapsUrl || "https://maps.google.com/?q=Koregaon+Park+Pune";
}

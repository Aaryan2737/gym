import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "./utils";

/**
 * Returns default friendly WhatsApp message for general enquiries or trial booking
 */
export function getDefaultWhatsAppMessage(): string {
  return `Hi ${siteConfig.name}, I would like to enquire about membership plans and booking a trial visit at your Koregaon Park facility.`;
}

/**
 * Returns tailored WhatsApp pre-filled message for a specific plan
 */
export function getPlanWhatsAppMessage(planName: string, formattedPrice: string): string {
  return `Hi ${siteConfig.name}, I am interested in joining the ${planName} plan (${formattedPrice}). Could you please share more details and current enrollment availability?`;
}

/**
 * Opens WhatsApp safely in a new browser tab/app
 */
export function openWhatsApp(phone: string = siteConfig.whatsappNumber, message?: string): void {
  const url = getWhatsAppUrl(phone, message || getDefaultWhatsAppMessage());
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

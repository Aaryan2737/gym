/**
 * Lightweight privacy-friendly analytics stub as specified in PRD section 10.
 * In production, this can forward to PostHog, Plausible, or Google Analytics.
 */
export type AnalyticsEvent =
  | "whatsapp_click"
  | "phone_click"
  | "membership_plan_view"
  | "enquiry_form_start"
  | "enquiry_form_submit"
  | "trial_request_submit"
  | "directions_click";

export function trackEvent(
  event: AnalyticsEvent | string,
  params?: Record<string, string | number | boolean | null | undefined>
): void {
  if (typeof window !== "undefined") {
    // Only log in dev mode or emit custom event
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log(`[Event Tracked: ${event}]`, params ?? {});
    }
    // Dispatch generic DOM event for any custom tag listener
    window.dispatchEvent(
      new CustomEvent("jerai:analytics", {
        detail: { event, params, timestamp: Date.now() },
      })
    );
  }
}

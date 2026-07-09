export const GA_MEASUREMENT_ID = "G-C5RZ3T7ZYJ";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type FormTrackingParams = {
  formName: string;
  formLocation: string;
};

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function trackFormSubmit(params: FormTrackingParams) {
  trackEvent("form_submit", {
    form_name: params.formName,
    form_location: params.formLocation,
    lead_type: "quote_request",
  });
}

export function trackFormSuccess(params: FormTrackingParams) {
  const baseParams = {
    form_name: params.formName,
    form_location: params.formLocation,
    lead_type: "quote_request",
  };

  trackEvent("form_submit_success", baseParams);
  trackEvent("generate_lead", baseParams);
}

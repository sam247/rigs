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

type ClickTrackingParams = {
  linkLocation: string;
  pagePath?: string;
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
  trackEvent("form_submit_success", {
    form_name: params.formName,
    form_location: params.formLocation,
    lead_type: "quote_request",
  });
}

function clickParams(params: ClickTrackingParams): EventParams {
  return {
    link_location: params.linkLocation,
    page_path:
      params.pagePath ??
      (typeof window !== "undefined" ? window.location.pathname : undefined),
  };
}

export function trackPhoneClick(params: ClickTrackingParams) {
  trackEvent("phone_click", clickParams(params));
}

export function trackEmailClick(params: ClickTrackingParams) {
  trackEvent("email_click", clickParams(params));
}

export function trackWhatsAppClick(params: ClickTrackingParams) {
  trackEvent("whatsapp_click", clickParams(params));
}

const LEAD_ENDPOINT =
  "https://admin.betterranking.co.uk/sender/api/f/bs_0g7oojs9n3vwco145o1g8n8t";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const CLICK_ID_KEYS = ["gclid", "fbclid", "msclkid"] as const;

function getSearchParam(key: string): string | undefined {
  if (typeof window === "undefined") return undefined;
  const value = new URLSearchParams(window.location.search).get(key);
  return value || undefined;
}

function attributionFields(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const fields: Record<string, string> = {
    landing_page: window.location.href,
    hostname: window.location.hostname,
  };

  if (document.referrer) {
    fields.referrer = document.referrer;
  }

  for (const key of UTM_KEYS) {
    const value = getSearchParam(key);
    if (value) fields[key] = value;
  }

  for (const key of CLICK_ID_KEYS) {
    const value = getSearchParam(key);
    if (value) fields[key] = value;
  }

  return fields;
}

export type LeadFormPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  form_name: string;
  website?: string;
  [key: string]: string | undefined;
};

export async function submitLeadForm(payload: LeadFormPayload): Promise<void> {
  const { website = "", ...fields } = payload;
  const body: Record<string, string> = {
    ...attributionFields(),
    website,
  };

  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined && value !== "") {
      body[key] = value;
    }
  }

  const res = await fetch(LEAD_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  let data: { ok?: boolean; error?: string } | null = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok || data?.ok === false) {
    throw new Error(data?.error || "Request failed");
  }
}

export { LEAD_ENDPOINT };

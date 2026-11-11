"use client";

import { useEffect } from "react";
import { trackEmailClick, trackPhoneClick, trackWhatsAppClick } from "@/lib/gtag";

function inferLinkLocation(anchor: HTMLAnchorElement): string {
  const explicit = anchor.closest("[data-link-location]")?.getAttribute("data-link-location");
  if (explicit) return explicit;
  if (anchor.closest("header")) return "header";
  if (anchor.closest("footer")) return "footer";
  return "page";
}

export default function ConversionClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const linkLocation = inferLinkLocation(anchor);

      if (href.startsWith("tel:")) {
        trackPhoneClick({ linkLocation });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEmailClick({ linkLocation });
        return;
      }

      if (/wa\.me|whatsapp\.com/i.test(href)) {
        trackWhatsAppClick({ linkLocation });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}

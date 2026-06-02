import type { LucideIcon } from "lucide-react";
import { Home, Search, ShieldCheck, ZapOff } from "lucide-react";

export type LocationPageConfig = {
  slug: string;
  name: string;
  region: string;
  heroIntro: string;
  areasCovered: {
    primary: string[];
    villages: string[];
    nearby: string[];
  };
  faq: { q: string; a: string }[];
  relatedServices: { title: string; desc: string; href: string; icon: LucideIcon }[];
};

export const LOCATION_PAGES: Record<string, LocationPageConfig> = {
  tring: {
    slug: "tring",
    name: "Tring",
    region: "Hertfordshire",
    heroIntro:
      "RIGS Electrical is your local electrician in Tring, Hertfordshire — offering safe, tidy, fully certified domestic electrical work. From fault finding and repairs to consumer unit upgrades and full rewires, we help homeowners across Tring with straightforward advice and reliable workmanship.",
    areasCovered: {
      primary: ["Tring"],
      villages: ["Aldbury", "Wigginton", "Long Marston", "Pitstone", "Ivinghoe", "Northchurch"],
      nearby: ["Berkhamsted", "Hemel Hempstead", "Aylesbury", "Wendover", "Leighton Buzzard"],
    },
    faq: [
      {
        q: "Do you cover all of Tring and nearby villages?",
        a: "Yes. We cover Tring itself plus nearby villages and surrounding areas across Hertfordshire and into Buckinghamshire where needed.",
      },
      {
        q: "What domestic electrical work do you handle?",
        a: "Everything from repairs and fault finding to consumer unit upgrades, additional sockets, lighting installations, EICR inspections and rewires.",
      },
      {
        q: "Can you help with tripping circuits or loss of power?",
        a: "Yes. If your electrics are tripping or you’ve lost power to sockets or lights, we can diagnose the fault and make the situation safe.",
      },
      {
        q: "Are you NICEIC registered?",
        a: "Yes. RIGS Electrical is NICEIC registered and we work to current standards, providing certification where required.",
      },
      {
        q: "Do you offer same-day quotations?",
        a: "Where possible, yes. After an assessment we aim to give clear, same-day quotations with options explained in plain English.",
      },
      {
        q: "Do I need an EICR for a domestic property?",
        a: "If you want a clear picture of your home’s electrical safety (or you’re buying/selling), an EICR is a great way to identify issues early and plan upgrades.",
      },
    ],
    relatedServices: [
      {
        title: "Emergency Electrician",
        desc: "Urgent faults, power outages and tripping circuits across Hertfordshire.",
        href: "/services/emergency-electrician",
        icon: ZapOff,
      },
      {
        title: "Fuse Board Upgrades",
        desc: "Modern protection and fewer nuisance trips with an updated consumer unit.",
        href: "/services/fuse-board-upgrades",
        icon: ShieldCheck,
      },
      {
        title: "House Rewiring",
        desc: "Full or partial rewires for older properties and renovations.",
        href: "/domestic#house-rewiring",
        icon: Home,
      },
      {
        title: "EICR Certificates",
        desc: "Electrical safety inspections with clear findings and next steps.",
        href: "/domestic#eicr-certificates",
        icon: Search,
      },
    ],
  },
};

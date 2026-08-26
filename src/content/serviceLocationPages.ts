import { LOCATION_PAGES } from "@/content/locations";

export type ServiceLocationPageConfig = {
  locationSlug: string;
  serviceSlug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whyItMatters: string[];
  commonReasons: string[];
  relatedArticleHrefs: string[];
};

const serviceLocationPages = [
  {
    locationSlug: "tring",
    serviceSlug: "emergency-electrician",
    title: "Emergency Electrician Tring",
    metaTitle: "Emergency Electrician Tring HP23 | Urgent Faults | RIGS",
    metaDescription:
      "Need an emergency electrician in Tring? Call 07989 205468 for urgent domestic faults, tripping circuits, power loss, hot sockets and unsafe electrics.",
    intro:
      "If something electrical feels unsafe at home in Tring, RIGS Electrical can help make the situation safe and diagnose the fault properly. We regularly help homeowners with tripping circuits, partial power loss, hot accessories and urgent domestic electrical issues across Tring and nearby villages.",
    whyItMatters: [
      "Urgent faults can point to damaged accessories, moisture, appliance issues or wiring that needs proper testing.",
      "Tring homes range from older properties to modern alterations, so a calm, methodical diagnosis matters more than guesswork.",
      "We focus on domestic work, which means the advice is shaped around lived-in homes, safe isolation and tidy repairs.",
    ],
    commonReasons: ["Repeated RCD or RCBO tripping", "Burning smells, buzzing or hot sockets", "Loss of power to sockets or lights", "Outdoor circuits affected by damp", "Faults after DIY or renovation work"],
    relatedArticleHrefs: ["/blog/why-do-my-electrics-keep-tripping", "/blog/flickering-lights-common-causes"],
  },
  {
    locationSlug: "tring",
    serviceSlug: "electrical-fault-finding",
    title: "Electrical Fault Finding Tring",
    metaTitle: "Electrical Fault Finding Tring | Tripping Circuits | RIGS",
    metaDescription:
      "Electrical fault finding in Tring for tripping circuits, dead sockets, flickering lights and intermittent domestic faults. Clear testing and repair advice.",
    intro:
      "Electrical faults are frustrating because they rarely explain themselves. RIGS Electrical provides fault finding in Tring for homeowners dealing with tripping circuits, dead sockets, flickering lights and intermittent issues that need proper testing.",
    whyItMatters: [
      "A fault finding visit helps isolate the cause before money is spent replacing the wrong part.",
      "Older wiring, outdoor circuits and later alterations are common sources of intermittent domestic faults.",
      "Clear testing gives you a practical repair plan, whether the fix is small or points to a wider upgrade.",
    ],
    commonReasons: ["Circuits tripping without an obvious cause", "Sockets or lights failing intermittently", "Flickering lights after LED changes", "Outdoor lighting faults", "Unclear EICR observations that need investigation"],
    relatedArticleHrefs: ["/blog/why-do-my-electrics-keep-tripping", "/blog/flickering-lights-common-causes"],
  },
  {
    locationSlug: "tring",
    serviceSlug: "fuse-board-upgrades",
    title: "Fuse Board Upgrades Tring",
    metaTitle: "Fuse Box Tring | Fuse Board Upgrades | RIGS Electrical",
    metaDescription:
      "Need a fuse box upgrade in Tring? RIGS replaces old fuse boards and consumer units for safer protection, clearer circuits and fewer nuisance trips — with certification.",
    intro:
      "Older fuse boards are a common issue in Tring homes, especially where properties have been extended, renovated or altered over time. RIGS Electrical upgrades domestic fuse boards and consumer units with modern protection, clear labelling and proper testing.",
    whyItMatters: [
      "Modern consumer units improve protection and make faults easier to isolate.",
      "A board upgrade is often sensible before kitchen work, new circuits, renovations or larger electrical improvements.",
      "We explain what needs upgrading and what can stay, so the work is planned around the actual condition of your home.",
    ],
    commonReasons: ["Old rewireable fuse boards", "Nuisance tripping or unclear circuit labelling", "Renovation or kitchen upgrade plans", "EICR recommendations", "Need for modern RCD or RCBO protection"],
    relatedArticleHrefs: ["/blog/how-to-tell-if-your-fuse-board-needs-replacing", "/blog/consumer-unit-vs-fuse-box", "/blog/why-do-my-electrics-keep-tripping"],
  },
  {
    locationSlug: "tring",
    serviceSlug: "eicr-certificates",
    title: "EICR Certificates Tring",
    metaTitle: "EICR Certificate Tring | Domestic Electrical Safety Check",
    metaDescription:
      "Book an EICR certificate in Tring for homeowners, buyers, landlords and older homes. Clear NICEIC electrical safety reporting and next steps.",
    intro:
      "An EICR gives you a clear view of the condition of your home electrics. RIGS Electrical provides EICR certificates in Tring for homeowners, buyers, landlords and anyone planning work on an older or altered property.",
    whyItMatters: [
      "A report helps separate urgent safety issues from sensible future improvements.",
      "It is useful before buying, selling, renovating or letting a domestic property.",
      "Where remedial work is needed, we explain the findings in plain English and help prioritise next steps.",
    ],
    commonReasons: ["Buying or selling a property", "Preparing a rental home", "Older wiring or unknown electrical history", "Repeated tripping or faults", "Planning renovations or consumer unit work"],
    relatedArticleHrefs: ["/blog/consumer-unit-vs-fuse-box", "/blog/why-do-my-electrics-keep-tripping"],
  },
  {
    locationSlug: "tring",
    serviceSlug: "electric-shower-installation",
    title: "Electric Shower Installation Tring",
    metaTitle: "Electric Shower Installation Tring | Bathroom Electrics",
    metaDescription:
      "Electric shower installation in Tring with properly rated circuits, safe isolation, RCD protection checks and practical homeowner advice.",
    intro:
      "Electric showers need the right electrical setup, not just a like-for-like swap. RIGS Electrical helps Tring homeowners with electric shower installation, replacement advice and properly rated domestic circuits.",
    whyItMatters: [
      "Electric showers are high-load appliances and need suitable cable, protection and isolation.",
      "Older bathrooms and previous alterations often need checking before a new shower is fitted.",
      "A properly tested installation helps avoid nuisance tripping, overheating and unsafe accessories.",
    ],
    commonReasons: ["Replacing an old electric shower", "Planning bathroom improvements", "Checking cable size and protection", "Repeated tripping when the shower runs", "Advice before choosing a new shower unit"],
    relatedArticleHrefs: ["/why-an-electric-shower-might-be-right-for-your-home"],
  },
  {
    locationSlug: "hemel-hempstead",
    serviceSlug: "emergency-electrician",
    title: "Emergency Electrician Hemel Hempstead",
    metaTitle: "Emergency Electrician Hemel Hempstead | Urgent Faults",
    metaDescription:
      "Need an emergency electrician in Hemel Hempstead? RIGS helps with urgent domestic faults, power loss, tripping circuits, hot sockets and unsafe electrics.",
    intro:
      "RIGS Electrical helps homeowners in Hemel Hempstead with urgent domestic electrical faults, from repeated tripping and partial power loss to hot sockets and unsafe accessories. We make the situation safe first, then test properly to find the cause.",
    whyItMatters: [
      "Hemel Hempstead homes often include older circuits, extensions and later alterations that can complicate faults.",
      "Urgent symptoms should be checked carefully before the same circuit is put back into use.",
      "A domestic-first approach keeps the focus on safe, tidy work in lived-in homes.",
    ],
    commonReasons: ["Repeated tripping", "Loss of power in part of the home", "Hot or buzzing accessories", "Lighting or socket faults", "Outdoor or garage circuits affected by damp"],
    relatedArticleHrefs: ["/blog/why-do-my-electrics-keep-tripping", "/blog/flickering-lights-common-causes"],
  },
  {
    locationSlug: "st-albans",
    serviceSlug: "emergency-electrician",
    title: "Emergency Electrician St Albans",
    metaTitle: "Emergency Electrician St Albans | Urgent Domestic Faults",
    metaDescription:
      "Need an emergency electrician in St Albans? RIGS helps with tripping circuits, power loss, unsafe sockets and urgent domestic electrical faults.",
    intro:
      "If you need an emergency electrician in St Albans, RIGS Electrical can help with urgent domestic faults, repeated tripping, loss of power and accessories that feel unsafe. We test methodically and explain the safest next step clearly.",
    whyItMatters: [
      "Older properties and later home improvements can leave faults hidden until a circuit starts tripping.",
      "Urgent electrical symptoms should be made safe before wider repair work is planned.",
      "Clear diagnosis helps avoid replacing parts unnecessarily.",
    ],
    commonReasons: ["RCD or RCBO tripping", "Loss of power to sockets or lighting", "Hot, cracked or buzzing accessories", "Faults after renovation work", "Unsafe outdoor lighting or sockets"],
    relatedArticleHrefs: ["/blog/why-do-my-electrics-keep-tripping", "/blog/flickering-lights-common-causes"],
  },
  {
    locationSlug: "watford",
    serviceSlug: "emergency-electrician",
    title: "Emergency Electrician Watford",
    metaTitle: "Emergency Electrician Watford | Urgent Domestic Faults",
    metaDescription:
      "Emergency electrician in Watford for domestic faults, tripping electrics, loss of power, hot sockets and urgent electrical safety issues.",
    intro:
      "RIGS Electrical helps Watford homeowners with urgent domestic electrical issues including tripping circuits, partial power loss, hot sockets and lighting faults. We focus on making the installation safe and finding the underlying cause.",
    whyItMatters: [
      "Repeated tripping usually means something needs testing rather than repeatedly resetting.",
      "Mixed older and newer wiring can make domestic faults harder to trace without the right approach.",
      "You get practical advice on whether the fix is urgent, minor or part of a wider upgrade.",
    ],
    commonReasons: ["Repeated trips", "Power loss to part of the home", "Socket or switch overheating", "Lighting faults", "Outdoor circuit problems"],
    relatedArticleHrefs: ["/blog/why-do-my-electrics-keep-tripping", "/blog/flickering-lights-common-causes"],
  },
  {
    locationSlug: "hemel-hempstead",
    serviceSlug: "electrical-fault-finding",
    title: "Electrical Fault Finding Hemel Hempstead",
    metaTitle: "Electrical Fault Finding Hemel Hempstead | RIGS",
    metaDescription:
      "Electrical fault finding in Hemel Hempstead for tripping circuits, dead sockets, intermittent faults and mixed-age domestic wiring.",
    intro:
      "RIGS Electrical provides domestic electrical fault finding in Hemel Hempstead for homeowners dealing with repeated tripping, intermittent faults, dead sockets and circuits that fail after extensions or kitchen work.",
    whyItMatters: [
      "Hemel Hempstead homes often mix New Town wiring with later alterations that hide the real cause of a fault.",
      "Repeated resetting without testing can leave unsafe conditions in place.",
      "Clear diagnosis helps decide between a local repair and a wider upgrade.",
    ],
    commonReasons: ["Repeated RCD trips", "Dead sockets or lighting circuits", "Faults after kitchen or extension work", "Outdoor circuit problems", "Intermittent power loss"],
    relatedArticleHrefs: ["/blog/why-do-my-electrics-keep-tripping", "/blog/what-happens-during-an-electrical-fault-finding-visit"],
  },
  {
    locationSlug: "hemel-hempstead",
    serviceSlug: "fuse-board-upgrades",
    title: "Fuse Board Upgrades Hemel Hempstead",
    metaTitle: "Fuse Board Upgrades Hemel Hempstead | Consumer Units",
    metaDescription:
      "Fuse board and consumer unit upgrades in Hemel Hempstead for safer protection, clearer circuits and modern household demand.",
    intro:
      "Need a fuse board upgrade in Hemel Hempstead? RIGS Electrical replaces outdated consumer units so kitchens, showers, home offices and outdoor circuits are better protected and easier to manage.",
    whyItMatters: [
      "Many Hemel homes still rely on older boards that were never designed for today's appliance load.",
      "A modern consumer unit improves safety and makes future electrical work clearer.",
      "Upgrade planning can sit alongside kitchen or extension projects rather than becoming a last-minute scramble.",
    ],
    commonReasons: ["Old rewireable fuses", "Repeated nuisance tripping", "No spare ways for new circuits", "Kitchen or shower upgrades", "Advice after an EICR"],
    relatedArticleHrefs: ["/blog/how-to-tell-if-your-fuse-board-needs-replacing", "/blog/consumer-unit-vs-fuse-box"],
  },
  {
    locationSlug: "aylesbury",
    serviceSlug: "emergency-electrician",
    title: "Emergency Electrician Aylesbury",
    metaTitle: "Emergency Electrician Aylesbury | Urgent Domestic Faults",
    metaDescription:
      "Need an emergency electrician in Aylesbury? RIGS helps with urgent domestic faults, power loss, tripping circuits and unsafe electrics.",
    intro:
      "RIGS Electrical helps Aylesbury homeowners with urgent domestic electrical faults, from repeated tripping and partial power loss to hot sockets and boards that will not reset. We make the situation safe first, then test properly.",
    whyItMatters: [
      "Urgent symptoms should be checked carefully before the same circuit is put back into use.",
      "Aylesbury homes often include mixed-age wiring and outdoor circuits that complicate faults.",
      "A domestic-first approach keeps the focus on safe, tidy work in lived-in homes.",
    ],
    commonReasons: ["Repeated tripping", "Loss of power", "Hot or buzzing accessories", "Lighting or socket faults", "Outdoor circuit issues"],
    relatedArticleHrefs: ["/blog/why-do-my-electrics-keep-tripping", "/blog/do-i-need-an-emergency-electrician-or-can-it-wait"],
  },
  {
    locationSlug: "berkhamsted",
    serviceSlug: "emergency-electrician",
    title: "Emergency Electrician Berkhamsted",
    metaTitle: "Emergency Electrician Berkhamsted | Urgent Domestic Faults",
    metaDescription:
      "Emergency electrician in Berkhamsted for domestic faults, tripping electrics, power loss, hot sockets and urgent electrical safety issues.",
    intro:
      "If you need an emergency electrician in Berkhamsted, RIGS Electrical can help with urgent domestic faults, repeated tripping, loss of power and accessories that feel unsafe. We test methodically and explain the safest next step clearly.",
    whyItMatters: [
      "Period properties and later alterations can hide faults until a circuit starts tripping.",
      "Urgent electrical symptoms should be made safe before wider repair work is planned.",
      "Clear diagnosis helps avoid replacing parts unnecessarily.",
    ],
    commonReasons: ["RCD or RCBO tripping", "Loss of power to sockets or lighting", "Hot, cracked or buzzing accessories", "Faults after renovation work", "Unsafe outdoor lighting or sockets"],
    relatedArticleHrefs: ["/blog/why-do-my-electrics-keep-tripping", "/blog/do-i-need-an-emergency-electrician-or-can-it-wait"],
  },
] satisfies ServiceLocationPageConfig[];

export const SERVICE_LOCATION_PAGES = serviceLocationPages.filter((page) => LOCATION_PAGES[page.locationSlug]);

export const SERVICE_LOCATION_PAGE_ROUTES = SERVICE_LOCATION_PAGES.map((page) => `/electrician/${page.locationSlug}/${page.serviceSlug}`);

export function getServiceLocationPage(locationSlug: string, serviceSlug: string) {
  return SERVICE_LOCATION_PAGES.find((page) => page.locationSlug === locationSlug && page.serviceSlug === serviceSlug);
}

export function getServiceLocationPath(locationSlug: string, serviceHref: string) {
  const serviceSlug = serviceHref.replace(/^\/services\//, "");
  return getServiceLocationPage(locationSlug, serviceSlug) ? `/electrician/${locationSlug}/${serviceSlug}` : serviceHref;
}

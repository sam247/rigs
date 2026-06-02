export type LocationPageConfig = {
  slug: string;
  name: string;
  region: string;
  map: {
    bbox: [number, number, number, number];
    marker: { lat: number; lon: number };
  };
  heroIntro: string;
  servicesIntro?: string;
  serviceBlocks: { title: string; href: string; body: string }[];
  commonProblems: { title: string; desc: string }[];
  whyChooseIntro: string;
  whyChoosePoints: { title: string; desc: string }[];
  areasCovered: {
    primary: string[];
    villages: string[];
    nearby: string[];
  };
  faq: { q: string; a: string }[];
};

export const LOCATION_PAGES: Record<string, LocationPageConfig> = {
  tring: {
    slug: "tring",
    name: "Tring",
    region: "Hertfordshire",
    map: {
      bbox: [-0.73, 51.77, -0.61, 51.82],
      marker: { lat: 51.7956, lon: -0.67 },
    },
    heroIntro:
      "Need a reliable electrician in Tring? RIGS Electrical helps homeowners across Tring, Aldbury, Wigginton and Aston Clinton with safe, tidy domestic electrical work — whether it’s a fault that needs sorting quickly or an upgrade planned as part of home improvements. We also cover the surrounding villages, so you can get local, practical advice from a NICEIC registered electrician that understands the mix of older homes and newer developments in this area.",
    servicesIntro:
      "From quick fixes to planned upgrades, we focus on the kind of work homeowners actually need — keeping your home safe, compliant and ready for modern appliances.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If your consumer unit keeps tripping, you’ve lost power to sockets or lights, or something smells hot or “electrical”, it’s worth getting it checked straight away. We’re used to urgent domestic call-outs around Tring and nearby villages, making the situation safe first and then fixing the underlying fault properly.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "Many properties around Tring still have older fuse boards that aren’t designed for today’s demands. If you’re adding a kitchen circuit, upgrading electrics during a renovation, or you’ve had repeated nuisance tripping, a modern consumer unit upgrade can improve protection and make faults easier to isolate.",
      },
      {
        title: "House Rewiring",
        href: "/domestic#house-rewiring",
        body: "Older wiring can show up as brittle insulation, unreliable sockets, or a patchwork of past alterations. If you’re renovating, extending, or you’ve been advised by an inspection report, we can plan a full or partial rewire in stages to minimise disruption while bringing everything up to current standards.",
      },
      {
        title: "EICR Certificates",
        href: "/domestic#eicr-certificates",
        body: "If you’re buying or selling in Tring, or you simply want a clear picture of what’s safe and what needs attention, an EICR is the best place to start. We’ll test your installation, explain any observations in plain English, and outline practical next steps (not scare tactics).",
      },
    ],
    commonProblems: [
      { title: "Tripping consumer units", desc: "RCBO/RCD trips caused by appliance faults, moisture in outdoor circuits, or wiring issues that need proper fault finding." },
      { title: "Faulty sockets", desc: "Loose connections, heat damage, broken faceplates or dead sockets — common in older rooms and extensions." },
      { title: "Flickering lights", desc: "Loose neutrals, failing fittings or overloaded lighting circuits — especially after LED swaps or renovations." },
      { title: "Old fuse boards", desc: "Rewireable fuses and outdated boards that lack modern protection and can be hard to troubleshoot safely." },
      { title: "Failed EICRs", desc: "Reports highlighting safety issues or outdated arrangements — we can prioritise and resolve items sensibly." },
      { title: "Electrical fault finding", desc: "Intermittent issues that need a methodical approach, not guesswork — isolating circuits and testing properly." },
    ],
    whyChooseIntro:
      "Tring has everything from older cottages and period homes to modern housing developments — and the electrics can vary massively from one street to the next. We focus purely on domestic work, so our process is built around working neatly in lived-in homes and explaining options clearly.",
    whyChoosePoints: [
      {
        title: "Local knowledge that matters",
        desc: "We regularly work in Tring, Aldbury, Wigginton and the surrounding villages, so we understand common issues in older properties as well as modern installs.",
      },
      {
        title: "Domestic-only focus",
        desc: "Our day-to-day work is kitchens, bathrooms, lighting, consumer units and household circuits — the details that matter in homes.",
      },
      {
        title: "NICEIC registered",
        desc: "Work completed safely and to current standards, with certification where required.",
      },
      {
        title: "Clear, practical quoting",
        desc: "Same-day quotations where possible, with options explained in plain English so you can make a confident decision.",
      },
    ],
    areasCovered: {
      primary: ["Tring"],
      villages: ["Aldbury", "Wigginton", "Long Marston", "Pitstone", "Marsworth", "Ivinghoe"],
      nearby: ["Berkhamsted", "Hemel Hempstead", "Aylesbury", "Leighton Buzzard"],
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
  },
};

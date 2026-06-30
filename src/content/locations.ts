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
        href: "/services#house-rewiring",
        body: "Older wiring can show up as brittle insulation, unreliable sockets, or a patchwork of past alterations. If you’re renovating, extending, or you’ve been advised by an inspection report, we can plan a full or partial rewire in stages to minimise disruption while bringing everything up to current standards.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
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
  "st-albans": {
    slug: "st-albans",
    name: "St Albans",
    region: "Hertfordshire",
    map: {
      bbox: [-0.41, 51.72, -0.26, 51.79],
      marker: { lat: 51.755, lon: -0.336 },
    },
    heroIntro:
      "Looking for a dependable electrician in St Albans? RIGS Electrical helps homeowners with safe, tidy domestic electrical work — from urgent faults and tripping circuits to planned upgrades like consumer units, additional sockets and EICR safety inspections. If you want clear advice and properly tested work from a NICEIC registered electrician, we’re here to help across St Albans and surrounding areas.",
    servicesIntro:
      "Whether it’s an urgent issue or a planned improvement, we focus on practical fixes and long-term safety — explaining options clearly so you can make confident decisions.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If you’ve lost power, something keeps tripping, or a socket feels hot or smells “electrical”, it’s worth getting it checked quickly. We’ll make the situation safe first, then diagnose and fix the underlying problem properly.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent faults can be frustrating and unsafe. We test methodically to locate issues like flickering lights, dead sockets or nuisance tripping — then explain the best repair options in plain English.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "Older fuse boards often lack modern protection and can make faults harder to isolate. A consumer unit upgrade improves safety, reduces nuisance trips and helps prepare your home for modern appliance loads.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "If you want a clear view of your home’s electrical safety, an EICR is the best starting point. We’ll test your installation, explain any observations clearly, and prioritise what matters first — without scare tactics.",
      },
    ],
    commonProblems: [
      { title: "Tripping circuits", desc: "RCBO/RCD trips caused by appliance faults, moisture on outdoor circuits, or wiring issues that need proper fault finding." },
      { title: "Hot or buzzing sockets", desc: "Loose connections and overheating behind faceplates that should be made safe and repaired quickly." },
      { title: "Flickering lighting", desc: "Loose neutrals, failing fittings or overloaded lighting circuits — often noticed after LED upgrades." },
      { title: "Outdated consumer units", desc: "Older boards without modern protection, making faults harder to diagnose and reducing safety margins." },
      { title: "EICR observations", desc: "Reports highlighting safety items or outdated arrangements — we can plan sensible remedial work and upgrades." },
      { title: "Intermittent electrical faults", desc: "Problems that come and go need a methodical approach — testing, isolating circuits and identifying root cause." },
    ],
    whyChooseIntro:
      "St Albans has a wide mix of housing types and electrical installations. We focus purely on domestic work, so our process is designed around working neatly in lived-in homes and explaining the safest options clearly.",
    whyChoosePoints: [
      { title: "Domestic-only focus", desc: "Home electrics, consumer units, lighting, sockets, fault finding and testing — the details that matter in residential properties." },
      { title: "Clear, practical advice", desc: "Options explained in plain English, with sensible prioritisation and straightforward quoting." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Tidy workmanship", desc: "Respectful, clean work in your home, with disruption kept to a minimum where possible." },
    ],
    areasCovered: {
      primary: ["St Albans"],
      villages: ["London Colney", "Colney Heath", "Redbourn", "Chiswell Green"],
      nearby: ["Harpenden", "Hatfield", "Hemel Hempstead", "Welwyn Garden City"],
    },
    faq: [
      { q: "Do you cover all of St Albans and surrounding areas?", a: "Yes. We cover St Albans plus surrounding villages and nearby towns across Hertfordshire where needed." },
      { q: "Can you help with tripping circuits or loss of power?", a: "Yes. If your electrics are tripping or you’ve lost power to sockets or lights, we can diagnose the fault and make the situation safe." },
      { q: "Do you handle consumer unit / fuse board upgrades?", a: "Yes. We replace outdated fuse boards with modern consumer units that offer improved protection and clearer circuit isolation." },
      { q: "Do you offer EICR inspections for homeowners?", a: "Yes. An EICR is a great way to understand your home’s electrical safety and plan upgrades sensibly." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and works to current standards, providing certification where required." },
      { q: "Can I request a quote before booking work?", a: "Yes. Get in touch with details of what you need and we’ll advise the best next step and provide a clear quote." },
    ],
  },
  watford: {
    slug: "watford",
    name: "Watford",
    region: "Hertfordshire",
    map: {
      bbox: [-0.46, 51.62, -0.34, 51.69],
      marker: { lat: 51.655, lon: -0.3957 },
    },
    heroIntro:
      "Need a reliable electrician in Watford? RIGS Electrical provides domestic electrical repairs, upgrades and safety inspections — from urgent faults and tripping circuits to planned consumer unit upgrades and EICR testing. If you want tidy workmanship, clear advice and properly tested work from a NICEIC registered electrician, we’re here to help across Watford and nearby areas.",
    servicesIntro:
      "We focus on the work homeowners actually need: safe fixes, sensible upgrades, and clear certification where required.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If something feels unsafe — burning smells, buzzing accessories, repeated tripping or loss of power — we’ll make it safe and diagnose the cause properly before recommending the best fix.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent issues need careful testing, not guesswork. We locate faults like tripping circuits, dead sockets and lighting problems and explain repair options clearly.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "A modern consumer unit improves protection and makes it easier to isolate issues. It’s also a common upgrade when renovating or adding high-load appliances.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "An EICR is the best way to understand the condition of your home’s wiring. We provide clear findings, sensible priorities and helpful next steps.",
      },
    ],
    commonProblems: [
      { title: "Repeated nuisance tripping", desc: "Trips caused by appliances, moisture, overloaded circuits or underlying wiring faults that need proper testing." },
      { title: "Faulty sockets and switches", desc: "Loose connections, broken faceplates or heat damage that should be repaired safely and quickly." },
      { title: "Lighting faults", desc: "Flickering lights, failed fittings or intermittent issues — often caused by loose connections or failing accessories." },
      { title: "Outdated fuse boards", desc: "Older boards with limited protection that can increase risk and make faults harder to isolate." },
      { title: "EICR recommendations", desc: "Reports highlighting safety items or improvements — we can plan remedials and upgrades sensibly." },
      { title: "Mixed or altered wiring", desc: "Older circuits combined with newer alterations can create confusing issues that need a methodical approach." },
    ],
    whyChooseIntro:
      "Watford properties can vary significantly — and electrical work often needs to be done neatly in lived-in homes with minimal disruption. We focus on domestic work and explain options clearly so you can prioritise safety without unnecessary upselling.",
    whyChoosePoints: [
      { title: "Domestic-only focus", desc: "Home electrics, fault finding, consumer units, lighting, sockets and inspections." },
      { title: "Clear prioritisation", desc: "Straightforward explanations of what needs doing now vs what can be planned." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Respectful, tidy work", desc: "Clean workmanship and clear communication throughout the job." },
    ],
    areasCovered: {
      primary: ["Watford"],
      villages: ["Bushey", "Croxley Green", "Rickmansworth", "Kings Langley"],
      nearby: ["St Albans", "Hemel Hempstead", "Harrow", "Borehamwood"],
    },
    faq: [
      { q: "Do you cover Watford and nearby areas?", a: "Yes. We cover Watford plus nearby towns and surrounding areas across Hertfordshire and close to the London border where needed." },
      { q: "Can you help with repeated tripping?", a: "Yes. Repeated tripping usually indicates a genuine fault. We can test, isolate the cause and make the situation safe before carrying out a proper repair." },
      { q: "Do you upgrade fuse boards / consumer units?", a: "Yes. We carry out tidy consumer unit upgrades with modern protection and proper testing/certification." },
      { q: "Can you do EICR inspections for homeowners?", a: "Yes. An EICR is ideal if you want to understand your home’s electrical safety, especially before renovations or after recurring faults." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and works to current standards, providing certification where required." },
      { q: "How do I get a quote?", a: "Send details of what you need (and photos if helpful). We’ll advise the next step and provide a clear quote." },
    ],
  },
};

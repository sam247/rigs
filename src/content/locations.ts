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
      "Need an electrician in Tring? RIGS Electrical is the local NICEIC registered domestic electrician for Tring, Aldbury, Wigginton, Pitstone and surrounding villages. We help homeowners with safe, tidy electrical work — whether it’s a fault that needs sorting quickly, a consumer unit upgrade, an EICR, or electrics planned as part of home improvements across HP23 and nearby Hertfordshire and Buckinghamshire.",
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
        href: "/services/house-rewiring",
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
      villages: ["Aldbury", "Wigginton", "Long Marston", "Pitstone", "Marsworth", "St Leonards", "Ivinghoe Aston", "Ringshall"],
      nearby: ["Berkhamsted", "Hemel Hempstead", "Aylesbury", "Ivinghoe", "Wendover", "Aston Clinton"],
    },
    faq: [
      {
        q: "Do you cover all of Tring and nearby villages?",
        a: "Yes. We cover Tring itself plus nearby villages including Pitstone, Marsworth, St Leonards, Ivinghoe Aston and Ringshall, plus surrounding areas across Hertfordshire and into Buckinghamshire.",
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
  "hemel-hempstead": {
    slug: "hemel-hempstead",
    name: "Hemel Hempstead",
    region: "Hertfordshire",
    map: {
      bbox: [-0.55, 51.71, -0.4, 51.79],
      marker: { lat: 51.752, lon: -0.471 },
    },
    heroIntro:
      "Need an electrician in Hemel Hempstead? RIGS Electrical is a NICEIC registered domestic electrician helping homeowners across Hemel Hempstead, Boxmoor, Apsley, Leverstock Green and Nash Mills. From urgent tripping and power loss to consumer unit upgrades, EICRs and kitchen electrics, you get practical advice from a local team used to New Town layouts, later extensions and lived-in family homes.",
    servicesIntro:
      "Hemel Hempstead homes range from older Adeyfield and Bennetts End roads to Grovehill estates, Boxmoor semis and converted garages, so the right electrical solution often depends on how the property has been altered over time.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If something feels unsafe, power has gone off, or the board will not reset in Hemel Hempstead, we make the installation safe first and then diagnose the actual cause properly — including outdoor and garage circuits affected by damp.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent faults, dead sockets and nuisance trips need proper testing rather than guesswork, especially where New Town wiring has been extended for kitchens, loft conversions or garden rooms.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "Many Hemel Hempstead homes still run on older fuse boards that struggle with showers, kitchen circuits and home working. A modern consumer unit improves protection and makes future work clearer to manage.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "Buying, selling or renovating in Hemel Hempstead? An EICR gives a clear picture of what is safe now and what should be planned before decorative work starts.",
      },
      {
        title: "House Rewiring",
        href: "/services/house-rewiring",
        body: "If the wiring is older, patchy or holding back a wider renovation, we can advise whether a staged rewire or a larger upgrade is the best route for the property.",
      },
    ],
    commonProblems: [
      { title: "Repeated tripping", desc: "Trips caused by ageing circuits, faulty appliances, damp on outside feeds or overloaded kitchen and shower circuits." },
      { title: "Older fuse boards", desc: "Boards that lack modern RCD/RCBO protection or have become cramped after years of electrical additions." },
      { title: "Extension-related alterations", desc: "Kitchens, utility spaces and rear extensions that need clearer circuit planning and safer protection." },
      { title: "Garden and garage supplies", desc: "External electrics and outbuilding feeds that have deteriorated or no longer feel reliable after wet weather." },
      { title: "Dead sockets and loose accessories", desc: "Common in busy family spaces where older fittings have seen years of wear." },
      { title: "Pre-renovation uncertainty", desc: "Homeowners wanting to know what needs upgrading before bigger decorative or kitchen work begins." },
    ],
    whyChooseIntro:
      "Domestic electrical work in Hemel Hempstead often means making older New Town layouts and later alterations work safely for modern family life. We focus on homeowner jobs, explain the safest next step clearly, and keep disruption under control in occupied homes.",
    whyChoosePoints: [
      { title: "Domestic-only focus", desc: "We work on family homes, kitchens, lighting, consumer units and household circuits rather than generic trade work." },
      { title: "Useful upgrade advice", desc: "Clear guidance on what needs doing now versus what can be planned alongside future home improvements." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Local domestic electrician", desc: "Regular coverage across Hemel Hempstead, Berkhamsted, Kings Langley and surrounding Hertfordshire towns." },
    ],
    areasCovered: {
      primary: ["Hemel Hempstead"],
      villages: ["Boxmoor", "Apsley", "Leverstock Green", "Nash Mills", "Adeyfield", "Bennetts End"],
      nearby: ["Berkhamsted", "Tring", "Kings Langley", "St Albans", "Harpenden"],
    },
    faq: [
      { q: "Do you cover all of Hemel Hempstead?", a: "Yes. We cover Hemel Hempstead itself plus Boxmoor, Apsley, Leverstock Green, Nash Mills and surrounding Hertfordshire towns." },
      { q: "Can you help with older fuse boards and repeated tripping?", a: "Yes. That is one of the most common reasons homeowners in Hemel Hempstead contact us. We test the fault properly and advise whether repair, consumer unit replacement or wider upgrade work makes most sense." },
      { q: "Do you offer emergency electrician cover in Hemel Hempstead?", a: "Yes. For urgent domestic faults, power loss and circuits that will not reset, we focus on making the installation safe first and then finding the cause." },
      { q: "Do you handle domestic upgrades as well as repairs?", a: "Yes. We carry out repairs, fault finding, lighting work, inspections, consumer unit changes and larger upgrade projects for homeowners." },
      { q: "Can I book an inspection before renovating?", a: "Yes. If you are planning a kitchen, extension or wider refurbishment, we can inspect the electrics and help you prioritise the right work early." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and works to current standards, providing certification where required." },
    ],
  },
  stevenage: {
    slug: "stevenage",
    name: "Stevenage",
    region: "Hertfordshire",
    map: {
      bbox: [-0.28, 51.86, -0.14, 51.94],
      marker: { lat: 51.902, lon: -0.202 },
    },
    heroIntro:
      "Need a dependable electrician in Stevenage? RIGS Electrical carries out domestic electrical repairs, upgrades and inspections for homeowners across Stevenage and nearby areas. From tripping circuits and failed sockets to consumer unit work and pre-renovation checks, you get practical help from a local domestic electrician who understands the mix of original New Town layouts, later refurbishments and family-home alterations found across this part of Hertfordshire.",
    servicesIntro:
      "Stevenage homes often involve reworked kitchens, converted garages, shower upgrades and altered consumer units, so a clear view of the overall installation matters just as much as the immediate job.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "For urgent power loss, hot accessories or persistent tripping, we make the situation safe first and then identify the cause without guesswork.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Useful where faults appear random, a circuit only trips under load, or several alterations over the years have made the layout harder to understand.",
      },
      {
        title: "Consumer Unit Replacement",
        href: "/services/consumer-unit-replacement",
        body: "If the board is dated, awkward to isolate, or no longer suited to modern kitchen and shower demand, we can advise on a safer replacement.",
      },
      {
        title: "Electrical Inspections",
        href: "/services/electrical-inspections",
        body: "Ideal before refurbishments, house purchases or larger upgrade work when you want to understand what is safe and what needs planning.",
      },
    ],
    commonProblems: [
      { title: "Altered kitchen circuits", desc: "Later kitchen changes and appliance upgrades that have outgrown the original electrical layout." },
      { title: "Consumer unit confusion", desc: "Boards with unclear labelling or mixed old and new work that make faults harder to isolate." },
      { title: "Shower and immersion issues", desc: "High-load circuits that need proper testing, particularly in older family homes." },
      { title: "Socket and lighting faults", desc: "Dead points, flickering circuits and loose accessories in busy household rooms." },
      { title: "Extension or conversion electrics", desc: "Garage conversions and additional rooms that need clearer integration with the main installation." },
      { title: "Pre-purchase concerns", desc: "Buyers wanting a clearer view before committing to larger improvements." },
    ],
    whyChooseIntro:
      "A good chunk of domestic work in Stevenage is about making earlier layouts work better for how the property is used now. We keep the advice practical, prioritise safety clearly and carry out the work neatly in occupied homes.",
    whyChoosePoints: [
      { title: "Homeowner-first advice", desc: "Straight answers about what needs doing urgently and what can be planned alongside later work." },
      { title: "Domestic-only focus", desc: "Household circuits, kitchens, lighting, boards, inspections and electrical troubleshooting." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Local domestic electrician", desc: "Regular coverage across Stevenage and nearby Hertfordshire towns with tidy workmanship and clear communication." },
    ],
    areasCovered: {
      primary: ["Stevenage"],
      villages: ["Knebworth", "Aston", "Walkern", "Codicote"],
      nearby: ["Hitchin", "Letchworth", "Welwyn Garden City", "Hertford"],
    },
    faq: [
      { q: "Do you cover all of Stevenage and nearby areas?", a: "Yes. We cover Stevenage plus nearby villages and surrounding Hertfordshire towns where needed." },
      { q: "Can you help with tripping consumer units and older electrical layouts?", a: "Yes. We regularly test and repair installations where several generations of changes have made the electrics harder to understand or less reliable." },
      { q: "Do you carry out inspections before renovations?", a: "Yes. An inspection can be the best first step before kitchen work, room conversions or wider electrical upgrades." },
      { q: "Do you only handle domestic work?", a: "Yes. RIGS Electrical focuses on homeowners and domestic electrical jobs rather than commercial work." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and works to current standards, providing certification where required." },
    ],
  },
  hitchin: {
    slug: "hitchin",
    name: "Hitchin",
    region: "Hertfordshire",
    map: {
      bbox: [-0.36, 51.92, -0.22, 51.98],
      marker: { lat: 51.947, lon: -0.284 },
    },
    heroIntro:
      "Looking for a trusted electrician in Hitchin? RIGS Electrical helps homeowners across Hitchin and nearby villages with safe, tidy domestic electrical work, from urgent faults and failed sockets to rewiring advice, consumer unit upgrades and EICR inspections. If you want practical help from a local domestic electrician who understands the mix of period homes, terraced streets and modern housing around Hitchin, we are here to help.",
    servicesIntro:
      "In Hitchin, the right solution often depends on whether the property has retained older wiring layouts, been extended over time, or needs planning ahead of a renovation or move.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If a circuit trips repeatedly, something smells hot, or part of the home has lost power, we can make things safe and test the fault properly.",
      },
      {
        title: "House Rewiring",
        href: "/services/house-rewiring",
        body: "Older homes and renovation projects often need more than piecemeal repairs, and we can advise when staged rewiring is the sensible option.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "An EICR is a useful starting point if you want a clearer picture of an older installation before buying, selling or improving the property.",
      },
      {
        title: "Consumer Unit Replacement",
        href: "/services/consumer-unit-replacement",
        body: "Where the board is dated or awkward to live with, a replacement can improve safety and make future electrical work easier to manage.",
      },
    ],
    commonProblems: [
      { title: "Older wiring layouts", desc: "Period homes and older terraces where the installation has built up through several generations of changes." },
      { title: "Fuse boards due for replacement", desc: "Outdated protection that makes faults harder to trace and modern demand harder to support." },
      { title: "Renovation-led upgrades", desc: "Homeowners improving kitchens, bathrooms and living spaces who need a clearer electrical plan." },
      { title: "Intermittent lighting and socket faults", desc: "Loose connections and ageing accessories in lived-in rooms." },
      { title: "Inspection concerns before moving", desc: "Uncertainty around what is safe and what work should be budgeted for after purchase." },
      { title: "Garden and external electrics", desc: "Outside circuits that have degraded over time or need upgrading alongside wider work." },
    ],
    whyChooseIntro:
      "Hitchin properties can be charming, but older domestic electrics often need careful, methodical work rather than rushed assumptions. We focus on residential jobs, explain options clearly and help homeowners plan safely around both urgent repairs and bigger upgrades.",
    whyChoosePoints: [
      { title: "Domestic-only focus", desc: "Home electrics, boards, inspections, rewires, lighting and fault finding completed with homeowners in mind." },
      { title: "Clear planning for older homes", desc: "Practical guidance on what can be repaired, what should be upgraded and what can be staged." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Local domestic electrician", desc: "Regular coverage across Hitchin and nearby Hertfordshire towns with tidy workmanship and straightforward quoting." },
    ],
    areasCovered: {
      primary: ["Hitchin"],
      villages: ["Ickleford", "St Ippolyts", "Pirton", "Preston"],
      nearby: ["Letchworth", "Stevenage", "Harpenden", "Luton"],
    },
    faq: [
      { q: "Do you cover Hitchin and nearby villages?", a: "Yes. We cover Hitchin itself plus nearby villages and surrounding Hertfordshire towns where needed." },
      { q: "Can you help with older wiring and fuse boards?", a: "Yes. Older domestic electrics are a common reason homeowners contact us. We can inspect, test and advise on the safest next step." },
      { q: "Do you handle rewires as well as repairs?", a: "Yes. We carry out fault finding and repairs, but also advise on partial or full rewiring where the condition of the installation makes that the better long-term option." },
      { q: "Can I book an EICR before buying or renovating?", a: "Yes. An EICR is a very useful way to understand what is safe, what needs attention and how to plan future electrical work sensibly." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and works to current standards, providing certification where required." },
    ],
  },
  harpenden: {
    slug: "harpenden",
    name: "Harpenden",
    region: "Hertfordshire",
    map: {
      bbox: [-0.4, 51.79, -0.3, 51.84],
      marker: { lat: 51.816, lon: -0.351 },
    },
    heroIntro:
      "Need a reliable electrician in Harpenden? RIGS Electrical helps homeowners across Harpenden and nearby areas with careful domestic electrical work, from fault finding and inspections to larger upgrades such as consumer unit replacement, rewiring advice and exterior lighting improvements. If you want clear communication and tidy work from a local domestic electrician, we are here to help.",
    servicesIntro:
      "Harpenden homes often involve a mix of period details, larger family-house upgrades and later garden or extension work, so the electrics need to be planned around both character and modern demand.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "For urgent domestic faults in Harpenden — power loss, repeated tripping, hot sockets or anything that feels unsafe — we can help make the situation safe and diagnose the cause.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Useful where faults are intermittent, one area of the home behaves differently to another, or earlier changes have made the installation harder to understand.",
      },
      {
        title: "Consumer Unit Replacement",
        href: "/services/consumer-unit-replacement",
        body: "Many homeowner upgrades start with a safer, clearer main board so later kitchen, shower or lighting work can be planned properly.",
      },
      {
        title: "House Rewiring",
        href: "/services/house-rewiring",
        body: "Where older wiring is holding back wider improvements, we can advise on staged rewiring or more substantial electrical upgrade work.",
      },
      {
        title: "Outdoor Lighting Installation",
        href: "/services/outdoor-lighting",
        body: "Garden, pathway and entrance lighting can make a big difference around larger family homes, side access and evening use of outdoor space.",
      },
    ],
    commonProblems: [
      { title: "Older property upgrades", desc: "Homes that need electrical improvements without losing sight of how the property is actually used day to day." },
      { title: "Consumer unit replacement planning", desc: "Board upgrades that sit alongside larger improvement works or recurring nuisance trips." },
      { title: "Kitchen and extension demand", desc: "Home improvements that need clearer circuit planning and better protection." },
      { title: "Garden and exterior lighting", desc: "Outdoor electrics, side access lighting and weather-exposed circuits that need tidy installation." },
      { title: "Inspection-led decision making", desc: "Homeowners wanting a clear view before committing to larger upgrades." },
      { title: "Socket and lighting wear", desc: "Busy family rooms where fittings have aged or loosened over time." },
    ],
    whyChooseIntro:
      "Domestic electrical work in Harpenden is often about getting the detail right: safe upgrades, careful fault finding and improvements that fit well with how the home is used. We keep the advice practical and the workmanship tidy.",
    whyChoosePoints: [
      { title: "Domestic-only focus", desc: "Homeowner electrical work planned around lived-in spaces, family routines and long-term reliability." },
      { title: "Useful upgrade guidance", desc: "Clear advice on what needs doing now and what can be staged alongside future improvements." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Local domestic electrician", desc: "Regular coverage across Harpenden and nearby Hertfordshire towns with a tidy, homeowner-friendly approach." },
    ],
    areasCovered: {
      primary: ["Harpenden"],
      villages: ["Wheathampstead", "Redbourn", "Batford", "Kinsbourne Green"],
      nearby: ["St Albans", "Hemel Hempstead", "Hitchin", "Welwyn Garden City"],
    },
    faq: [
      { q: "Do you cover all of Harpenden?", a: "Yes. We cover Harpenden plus nearby villages and surrounding Hertfordshire areas where needed." },
      { q: "Can you help with inspections before a renovation?", a: "Yes. Inspections are a sensible first step where homeowners want to understand the electrical work before a larger project starts." },
      { q: "Do you carry out consumer unit and rewire work?", a: "Yes. We handle both targeted upgrade work and larger electrical improvement projects where the existing setup needs more than a small repair." },
      { q: "Can you install outdoor and garden lighting?", a: "Yes. We carry out practical domestic exterior lighting work for entrances, paths, gardens and side access." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and works to current standards, providing certification where required." },
    ],
  },
  hatfield: {
    slug: "hatfield",
    name: "Hatfield",
    region: "Hertfordshire",
    map: {
      bbox: [-0.29, 51.73, -0.16, 51.79],
      marker: { lat: 51.763, lon: -0.224 },
    },
    heroIntro:
      "Looking for a dependable electrician in Hatfield? RIGS Electrical provides domestic electrical repairs, inspections and upgrade work across Hatfield and surrounding areas, helping homeowners with faults, consumer unit changes, shower circuits and wider electrical planning. If you want clear advice from a local domestic electrician who understands family homes, rented properties and later home alterations, we are here to help.",
    servicesIntro:
      "Hatfield homes often include a mix of family housing, planned estates, later kitchen changes and rental-property maintenance, so it helps to have a clear view of what the wider installation is doing.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If you have partial power loss, hot accessories or repeated trips, we can make the property safe first and then diagnose the actual issue.",
      },
      {
        title: "Electrical Inspections",
        href: "/services/electrical-inspections",
        body: "A useful route before upgrades, after repeated faults or when you want a clearer picture of a property's overall electrical condition.",
      },
      {
        title: "Consumer Unit Replacement",
        href: "/services/consumer-unit-replacement",
        body: "Where the existing board is dated or not well suited to modern domestic demand, a replacement can make the whole installation easier to manage safely.",
      },
      {
        title: "Electric Shower Installation",
        href: "/services/electric-shower-installation",
        body: "Shower circuits are a common domestic job, especially during bathroom upgrades or when older units start to fail or trip the supply.",
      },
    ],
    commonProblems: [
      { title: "Repeated tripping", desc: "Trips caused by appliances, showers, overloaded circuits or underlying faults that need proper testing." },
      { title: "Older consumer units", desc: "Boards that no longer suit the electrical demand of a modern family home." },
      { title: "Rental property upgrades", desc: "Landlord and homeowner concerns around safety checks, remedials and practical next steps." },
      { title: "Bathroom electrical issues", desc: "Shower supplies, extractor fans and isolators that need careful testing and safe repair." },
      { title: "Kitchen and socket alterations", desc: "Later room changes where the electrical layout needs improving or clarifying." },
      { title: "Pre-project inspections", desc: "Homeowners wanting clarity before a bathroom, kitchen or wider home upgrade." },
    ],
    whyChooseIntro:
      "A lot of homeowner work in Hatfield comes back to clarity: understanding whether the fault is isolated, whether the board needs upgrading, and whether the property is ready for the next improvement. We keep the process practical and the advice straightforward.",
    whyChoosePoints: [
      { title: "Domestic-only focus", desc: "Household circuits, inspections, boards, showers, repairs and upgrade work tailored to residential properties." },
      { title: "Clear next-step advice", desc: "We explain whether you need repair work, certification, a board change or wider planning." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Local domestic electrician", desc: "Regular coverage across Hatfield and nearby Hertfordshire towns with tidy workmanship and clear communication." },
    ],
    areasCovered: {
      primary: ["Hatfield"],
      villages: ["Welham Green", "Brookmans Park", "Essendon", "North Mymms"],
      nearby: ["St Albans", "Welwyn Garden City", "Potters Bar", "Harpenden"],
    },
    faq: [
      { q: "Do you cover Hatfield and nearby areas?", a: "Yes. We cover Hatfield plus nearby villages and surrounding Hertfordshire areas where needed." },
      { q: "Can you help with electric showers and bathroom electrics?", a: "Yes. We install and replace electric showers, test shower circuits and advise on the safest route where bathroom electrical faults are causing problems." },
      { q: "Do you carry out inspections before other work starts?", a: "Yes. Electrical inspections are useful where you want clarity before a renovation, a purchase or a larger upgrade project." },
      { q: "Can you replace old consumer units?", a: "Yes. We carry out consumer unit replacement where the existing board is outdated, awkward to manage or no longer suited to the home's demand." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and works to current standards, providing certification where required." },
    ],
  },
  "welwyn-garden-city": {
    slug: "welwyn-garden-city",
    name: "Welwyn Garden City",
    region: "Hertfordshire",
    map: {
      bbox: [-0.27, 51.77, -0.15, 51.84],
      marker: { lat: 51.806, lon: -0.207 },
    },
    heroIntro:
      "Need a reliable electrician in Welwyn Garden City? RIGS Electrical carries out domestic electrical repairs, upgrades and inspections across Welwyn Garden City and nearby areas, helping homeowners with fault finding, consumer unit replacement, rewiring advice and smarter lighting improvements. If you want practical guidance from a local domestic electrician, we are here to help.",
    servicesIntro:
      "Welwyn Garden City homes often involve original layouts that have been adapted over time, so a clear electrical plan matters when faults, refurbishments or modern control upgrades are involved.",
    serviceBlocks: [
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "The right place to start when circuits trip intermittently, sockets fail or the electrical history of the property is not clear.",
      },
      {
        title: "Consumer Unit Replacement",
        href: "/services/consumer-unit-replacement",
        body: "A modern board can be the key upgrade where the installation needs safer protection and better circuit organisation.",
      },
      {
        title: "Smart Home Installation",
        href: "/services/smart-home-installation",
        body: "Useful if you want to modernise lighting and controls while keeping the underlying electrical work properly planned and reliable.",
      },
      {
        title: "House Rewiring",
        href: "/services/house-rewiring",
        body: "Where older wiring or bigger home changes mean the property needs more than isolated repairs, we can advise on the best long-term route.",
      },
    ],
    commonProblems: [
      { title: "Older circuits with newer alterations", desc: "Homes where decades of changes need tidying up into a clearer, safer layout." },
      { title: "Consumer units due for replacement", desc: "Boards that lack modern protection or no longer suit current electrical demand." },
      { title: "Lighting and control upgrades", desc: "Homeowners modernising room use, switching and lighting convenience." },
      { title: "Faults in lived-in family spaces", desc: "Sockets, lights and accessories that have loosened or become unreliable over time." },
      { title: "Renovation planning", desc: "Kitchen, bathroom and wider improvement projects that need electrical clarity early." },
      { title: "External electrical wear", desc: "Garden lights and outside circuits that need proper testing and upgrading." },
    ],
    whyChooseIntro:
      "Domestic work in Welwyn Garden City is often about making original house layouts work better for modern routines. We keep the advice clear, the workmanship tidy and the next steps easy to understand.",
    whyChoosePoints: [
      { title: "Domestic-only focus", desc: "Household electrics, lighting, boards, inspections, repairs and upgrades designed around homeowner needs." },
      { title: "Practical modernisation advice", desc: "Useful guidance on what can be improved now and what should be planned as part of a larger project." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Local domestic electrician", desc: "Regular coverage across Welwyn Garden City and nearby Hertfordshire towns with tidy, homeowner-friendly work." },
    ],
    areasCovered: {
      primary: ["Welwyn Garden City"],
      villages: ["Welwyn", "Digswell", "Oaklands", "Panshanger"],
      nearby: ["Hatfield", "St Albans", "Stevenage", "Harpenden"],
    },
    faq: [
      { q: "Do you cover Welwyn Garden City and nearby areas?", a: "Yes. We cover Welwyn Garden City plus nearby villages and surrounding Hertfordshire towns where needed." },
      { q: "Can you help with modernising older electrics?", a: "Yes. We regularly work on homes where the installation needs clearer circuit planning, a better board setup or more suitable wiring for modern use." },
      { q: "Do you install smart lighting and smart home controls?", a: "Yes. We provide practical smart home installation work where the wiring, switches and room use need to be planned properly." },
      { q: "Can you advise on rewiring if the property needs more than small repairs?", a: "Yes. We can inspect the installation and explain whether targeted upgrades, staged rewiring or a larger project is the better route." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and works to current standards, providing certification where required." },
    ],
  },
  cheshunt: {
    slug: "cheshunt",
    name: "Cheshunt",
    region: "Hertfordshire",
    map: {
      bbox: [-0.09, 51.67, 0.01, 51.73],
      marker: { lat: 51.702, lon: -0.035 },
    },
    heroIntro:
      "Looking for a trusted electrician in Cheshunt? RIGS Electrical provides domestic electrical repairs, upgrades and inspections across Cheshunt and nearby areas, helping homeowners with urgent faults, security lighting, fault finding and consumer unit upgrades. If you want clear advice from a local domestic electrician who works neatly in lived-in homes, we are here to help.",
    servicesIntro:
      "In Cheshunt, a lot of homeowner work comes back to keeping family homes, extensions, garages and outside electrics working safely and reliably without overcomplicating the solution.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If something feels unsafe, the power has partly failed, or the board will not stop tripping, we can make the installation safe and test the cause properly.",
      },
      {
        title: "Security Lighting Installation",
        href: "/services/security-lighting",
        body: "Useful for driveways, side access, garden routes and entrances where homeowners want better visibility after dark.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Ideal where the issue is intermittent, linked to outdoor circuits or difficult to isolate without proper testing.",
      },
      {
        title: "Consumer Unit Replacement",
        href: "/services/consumer-unit-replacement",
        body: "If the main board is outdated or awkward to manage, replacement can improve safety and support wider upgrade work more confidently.",
      },
    ],
    commonProblems: [
      { title: "Outdoor circuit issues", desc: "Security lights, sheds and weather-exposed circuits affected by damp or ageing accessories." },
      { title: "Repeated tripping", desc: "Faults that come and go, especially on socket, kitchen or exterior circuits." },
      { title: "Board upgrades for family homes", desc: "Consumer units that need replacing to suit modern appliance demand more safely." },
      { title: "Socket and switch wear", desc: "Loose or heat-damaged accessories in busy household rooms." },
      { title: "Garage and outbuilding electrics", desc: "Later additions that need clearer circuit planning and safer protection." },
      { title: "General safety inspections", desc: "Homeowners wanting reassurance before more upgrade work begins." },
    ],
    whyChooseIntro:
      "Domestic electrical work in Cheshunt is often about practical reliability: safer access outside, fewer nuisance trips and clearer electrical planning inside the home. We focus on homeowner jobs and keep the process straightforward.",
    whyChoosePoints: [
      { title: "Domestic-only focus", desc: "Repairs, boards, lighting, inspections and household electrics designed around residential properties." },
      { title: "Practical exterior lighting advice", desc: "Useful guidance for security lighting, garden circuits and outside electrical upgrades." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Local domestic electrician", desc: "Regular coverage across Cheshunt and nearby Hertfordshire areas with tidy workmanship and clear communication." },
    ],
    areasCovered: {
      primary: ["Cheshunt"],
      villages: ["Goffs Oak", "Waltham Cross", "Cuffley", "Bury Green"],
      nearby: ["Broxbourne", "Enfield", "Potters Bar", "Hertford"],
    },
    faq: [
      { q: "Do you cover Cheshunt and nearby areas?", a: "Yes. We cover Cheshunt plus nearby areas and surrounding Hertfordshire towns where needed." },
      { q: "Can you install security lighting and outdoor electrics?", a: "Yes. We carry out practical domestic exterior lighting and related electrical work for homeowners who want better visibility and safer access." },
      { q: "What if an outside circuit keeps tripping?", a: "That usually needs proper testing. Moisture, failed fittings and damaged accessories are all common causes, and we can diagnose the issue safely." },
      { q: "Do you replace older consumer units?", a: "Yes. We carry out consumer unit replacement where the existing board is outdated, awkward to manage or no longer suited to the home's demand." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and works to current standards, providing certification where required." },
    ],
  },
  borehamwood: {
    slug: "borehamwood",
    name: "Borehamwood",
    region: "Hertfordshire",
    map: {
      bbox: [-0.35, 51.63, -0.22, 51.69],
      marker: { lat: 51.657, lon: -0.279 },
    },
    heroIntro:
      "Need a reliable electrician in Borehamwood? RIGS Electrical helps homeowners across Borehamwood and nearby areas with domestic electrical repairs, inspections and upgrade work, from urgent faults and board changes to kitchen electrics and pre-project planning. If you want practical advice from a local domestic electrician, we are here to help.",
    servicesIntro:
      "Borehamwood homes often involve extensions, flat or house refurbishments, kitchen changes and later wiring alterations, so a tidy, well-planned electrical approach matters.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If the power has partly gone off, a socket feels hot or something keeps tripping, we can make the property safe and diagnose the underlying issue.",
      },
      {
        title: "Kitchen Electrical Installation",
        href: "/services/kitchen-electrics",
        body: "Useful for kitchen refurbishments, appliance circuits, socket planning and lighting changes that need to work properly once the room is finished.",
      },
      {
        title: "Consumer Unit Replacement",
        href: "/services/consumer-unit-replacement",
        body: "A modern board can provide a better base for later electrical work, clearer protection and easier fault isolation.",
      },
      {
        title: "Electrical Inspections",
        href: "/services/electrical-inspections",
        body: "Ideal when you want clarity before a renovation, after recurring electrical problems or ahead of buying a property.",
      },
    ],
    commonProblems: [
      { title: "Kitchen-led upgrades", desc: "Properties where new kitchen layouts need more suitable circuits, sockets and appliance planning." },
      { title: "Consumer unit replacement", desc: "Older boards that are no longer ideal for modern domestic demand or repeated alterations." },
      { title: "Inspection concerns before refurbishing", desc: "Homeowners wanting to understand what needs dealing with before decorative work begins." },
      { title: "Lighting and socket faults", desc: "Failed fittings, loose accessories and intermittent domestic faults in everyday living spaces." },
      { title: "Extension and conversion changes", desc: "Later additions to the property that need clearer electrical organisation." },
      { title: "Power reliability issues", desc: "Partial outages and nuisance trips that need proper fault diagnosis rather than repeated resets." },
    ],
    whyChooseIntro:
      "Domestic electrical work in Borehamwood is often tied to bigger room changes or making the property easier to live with day to day. We keep the work tidy, explain the safest route clearly and focus on what makes sense for homeowners rather than pushing unnecessary upgrades.",
    whyChoosePoints: [
      { title: "Domestic-only focus", desc: "Household circuits, kitchens, boards, inspections and repairs tailored to residential homes." },
      { title: "Useful planning before works", desc: "Clear advice before kitchen upgrades, refurbishments and wider electrical improvements." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Local domestic electrician", desc: "Regular coverage across Borehamwood and nearby Hertfordshire areas with clear communication and tidy workmanship." },
    ],
    areasCovered: {
      primary: ["Borehamwood"],
      villages: ["Elstree", "Radlett", "Shenley", "Aldenham"],
      nearby: ["Watford", "St Albans", "Hatfield", "Potters Bar"],
    },
    faq: [
      { q: "Do you cover Borehamwood and nearby areas?", a: "Yes. We cover Borehamwood plus nearby villages and surrounding Hertfordshire areas where needed." },
      { q: "Can you handle the electrical side of a kitchen refurbishment?", a: "Yes. We carry out kitchen electrical installation work including circuits, sockets, lighting and practical layout planning." },
      { q: "Do you provide inspections before refurbishments?", a: "Yes. An inspection is often the best first step where the electrical history of the property is unclear or wider upgrades are likely." },
      { q: "Can you replace old consumer units?", a: "Yes. We carry out consumer unit replacement where the main board is outdated or no longer suits the home's demand." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and works to current standards, providing certification where required." },
    ],
  },
  letchworth: {
    slug: "letchworth",
    name: "Letchworth",
    region: "Hertfordshire",
    map: {
      bbox: [-0.29, 51.95, -0.17, 52.01],
      marker: { lat: 51.979, lon: -0.226 },
    },
    heroIntro:
      "Looking for a trusted electrician in Letchworth? RIGS Electrical helps homeowners across Letchworth and nearby areas with domestic electrical repairs, inspections and upgrade work, from fault finding and consumer unit replacement to rewiring advice and EICR testing. If you want practical help from a local domestic electrician who understands older layouts as well as later family-home alterations, we are here to help.",
    servicesIntro:
      "In Letchworth, electrical work often comes back to making older layouts and later upgrades work together safely, clearly and with as little disruption as possible.",
    serviceBlocks: [
      {
        title: "House Rewiring",
        href: "/services/house-rewiring",
        body: "Useful where older wiring has built up through years of changes or where larger improvements need a clearer long-term electrical plan.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "The right place to start when faults are intermittent, part of the home keeps losing power, or the cause is not obvious.",
      },
      {
        title: "Consumer Unit Replacement",
        href: "/services/consumer-unit-replacement",
        body: "A replacement can improve protection and make future electrical work more straightforward where the existing board is dated or awkward to manage.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "A useful way to understand the condition of the installation before buying, selling, renovating or planning bigger upgrades.",
      },
    ],
    commonProblems: [
      { title: "Older wiring with later additions", desc: "Homes where the electrics have evolved over time and now need a clearer structure." },
      { title: "Fuse boards due for upgrading", desc: "Main boards that no longer offer the protection or convenience homeowners need." },
      { title: "Recurring domestic faults", desc: "Trips, dead sockets and lighting issues that need proper diagnosis rather than repeated temporary fixes." },
      { title: "Inspection needs before projects", desc: "Homeowners wanting to understand what is safe before wider refurbishment work begins." },
      { title: "Kitchen and bathroom load changes", desc: "Higher-demand circuits that need better planning and safer protection." },
      { title: "General wear in lived-in homes", desc: "Sockets, switches and accessories that have loosened or aged over time." },
    ],
    whyChooseIntro:
      "Domestic electrical work in Letchworth is often about careful improvement rather than quick fixes: understanding what the existing setup is doing, deciding what needs upgrading and making the finished result safer and easier to live with. We keep the process clear and practical.",
    whyChoosePoints: [
      { title: "Domestic-only focus", desc: "Homeowner electrical work including repairs, inspections, boards, rewires and practical upgrades." },
      { title: "Clear long-term planning", desc: "Useful guidance where the home needs more than one isolated electrical improvement." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Local domestic electrician", desc: "Regular coverage across Letchworth and nearby Hertfordshire towns with tidy workmanship and clear communication." },
    ],
    areasCovered: {
      primary: ["Letchworth"],
      villages: ["Baldock", "Stotfold", "Arlesey", "Willian"],
      nearby: ["Hitchin", "Stevenage", "Royston", "Welwyn Garden City"],
    },
    faq: [
      { q: "Do you cover Letchworth and nearby areas?", a: "Yes. We cover Letchworth plus nearby areas and surrounding Hertfordshire towns where needed." },
      { q: "Can you help with older wiring and larger upgrade projects?", a: "Yes. We regularly advise on staged electrical improvements where the installation needs more than a small repair." },
      { q: "Do you provide EICR inspections for homeowners?", a: "Yes. An EICR is a useful way to understand the condition of the electrics before a move, renovation or larger upgrade plan." },
      { q: "Can you replace old consumer units?", a: "Yes. We carry out consumer unit replacement where the board is outdated, awkward to manage or no longer suits the home's demand." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and works to current standards, providing certification where required." },
    ],
  },
  aylesbury: {
    slug: "aylesbury",
    name: "Aylesbury",
    region: "Buckinghamshire",
    map: {
      bbox: [-0.92, 51.78, -0.72, 51.86],
      marker: { lat: 51.8168, lon: -0.8124 },
    },
    heroIntro:
      "Need an electrician in Aylesbury? RIGS Electrical is a NICEIC registered domestic electrician covering Aylesbury Vale and surrounding Buckinghamshire towns. Whether you are dealing with repeated tripping, an older fuse board, an urgent fault, or planning electrics for a kitchen or extension, you get clear advice and tidy workmanship from a domestic-first team based nearby in Tring.",
    servicesIntro:
      "Aylesbury homes range from older town-centre streets and Victorian terraces to later estates, new developments and village-edge properties — so electrical work often means sorting mixed-age layouts safely for modern family demand.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If power has dropped out, a board will not reset, or something smells hot in an Aylesbury home, we make the installation safe first and then trace the cause properly.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent trips, dead sockets and lighting faults need methodical testing — especially where kitchens, showers or outdoor circuits have been added over the years.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "Many Aylesbury properties still benefit from a modern consumer unit when older boards struggle with showers, kitchen loads and home working circuits.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "Buying, selling or renting in Aylesbury? An EICR gives a plain-English picture of what is safe now and what should be planned next.",
      },
    ],
    commonProblems: [
      { title: "Repeated RCD/RCBO trips", desc: "Common where older circuits, damp outdoor feeds or overloaded kitchen and shower loads share protection." },
      { title: "Outdated fuse boards", desc: "Boards that lack modern protection or have become cramped after years of piecemeal additions." },
      { title: "Kitchen and utility upgrades", desc: "Extra appliances and lighting that need clearer circuit planning before work starts." },
      { title: "Garden and garage electrics", desc: "External supplies that fail after wet weather or no longer feel safe to use." },
      { title: "Pre-purchase uncertainty", desc: "Buyers and sellers wanting a clear electrical report before committing to renovation budgets." },
      { title: "Worn sockets and switches", desc: "Everyday fittings that have loosened, cracked or run warm in busy family rooms." },
    ],
    whyChooseIntro:
      "Aylesbury domestic electrical work is often about making busy family homes safer and easier to live with — not generic trade jobs. We explain options clearly, keep disruption down, and plan upgrades around how the property is actually used.",
    whyChoosePoints: [
      { title: "Domestic-only focus", desc: "Homeowner repairs, inspections, boards, lighting and upgrades rather than commercial contracting." },
      { title: "Local Buckinghamshire coverage", desc: "Regular work across Aylesbury Vale, Wendover, Tring and nearby Bucks/Herts border towns." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Clear same-day quoting", desc: "Practical options explained in plain English so you can decide with confidence." },
    ],
    areasCovered: {
      primary: ["Aylesbury"],
      villages: ["Bierton", "Weedon", "Quarrendon", "Bedgrove", "Walton Court"],
      nearby: ["Wendover", "Tring", "Ivinghoe", "Aston Clinton", "Princes Risborough", "Leighton Buzzard"],
    },
    faq: [
      { q: "Do you cover Aylesbury and nearby villages?", a: "Yes. We cover Aylesbury itself plus nearby estates, villages and surrounding Buckinghamshire towns including Wendover and the Tring border." },
      { q: "Can you help with urgent faults in Aylesbury?", a: "Yes. For power loss, repeated tripping or accessories that feel unsafe, we prioritise making the installation safe and then diagnosing the cause." },
      { q: "Do you replace old consumer units?", a: "Yes. Consumer unit upgrades are a common request where older boards no longer suit kitchen, shower or home-working demand." },
      { q: "Can I get an EICR before buying or renovating?", a: "Yes. An EICR is a useful starting point before a move, rental change or larger refurbishment." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and provides certification where required." },
    ],
  },
  berkhamsted: {
    slug: "berkhamsted",
    name: "Berkhamsted",
    region: "Hertfordshire",
    map: {
      bbox: [-0.62, 51.74, -0.5, 51.78],
      marker: { lat: 51.7604, lon: -0.5604 },
    },
    heroIntro:
      "Looking for an electrician in Berkhamsted? RIGS Electrical helps homeowners across Berkhamsted, Northchurch and nearby Chiltern-edge streets with domestic fault finding, urgent repairs, consumer unit upgrades, EICRs and planned home electrical work. Based nearby in Tring, we understand the mix of period cottages, Victorian terraces and later family homes that shape electrical work here.",
    servicesIntro:
      "Berkhamsted properties often combine older wiring layouts with later kitchens, loft conversions and garden rooms — so careful testing and clear upgrade planning matter more than quick temporary fixes.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "Urgent domestic faults in Berkhamsted — power loss, boards that will not reset, hot sockets or circuits that trip repeatedly — are made safe first, then diagnosed properly.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent trips and dead circuits are common where older layouts meet modern appliance loads. We test methodically rather than guessing.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "Period and family homes in Berkhamsted often benefit from safer, clearer consumer unit protection before more kitchen or extension work is added.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "Useful before buying, selling or renovating in Berkhamsted — especially where years of alterations need a clear electrical picture.",
      },
    ],
    commonProblems: [
      { title: "Period-property wiring issues", desc: "Older layouts that struggle with modern showers, kitchens and home-office demand." },
      { title: "Nuisance tripping", desc: "RCDs that trip with outdoor lighting, damp feeds or mixed-age circuit alterations." },
      { title: "Dated consumer units", desc: "Boards that lack modern protection or space for sensible circuit labelling." },
      { title: "Loft and extension electrics", desc: "Later additions that need clearer planning and safer isolation." },
      { title: "Garden and outbuilding supplies", desc: "Weather-exposed circuits that fail or feel unsafe after wet weather." },
      { title: "Pre-renovation inspections", desc: "Homeowners wanting priorities before decorative or kitchen work begins." },
    ],
    whyChooseIntro:
      "Berkhamsted domestic electrical work rewards careful diagnosis and tidy finishing. We focus on lived-in family homes, explain what is urgent versus what can wait, and keep disruption under control.",
    whyChoosePoints: [
      { title: "Local Chiltern coverage", desc: "Regular work across Berkhamsted, Tring, Hemel Hempstead and nearby Hertfordshire towns." },
      { title: "Domestic-only focus", desc: "Home electrics, upgrades, repairs and testing — not generic commercial contracting." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Clear homeowner advice", desc: "Plain-English options so you know what needs doing now and what can be planned later." },
    ],
    areasCovered: {
      primary: ["Berkhamsted"],
      villages: ["Northchurch", "Shootersway", "Gossoms End", "Ashlyns"],
      nearby: ["Tring", "Hemel Hempstead", "Kings Langley", "Chesham", "Wendover", "St Leonards"],
    },
    faq: [
      { q: "Do you cover Berkhamsted and Northchurch?", a: "Yes. We cover Berkhamsted, Northchurch and nearby Chiltern-edge areas, plus surrounding Hertfordshire towns." },
      { q: "Can you help with emergency electrician call-outs in Berkhamsted?", a: "Yes. For urgent domestic faults we make the installation safe first and then find the underlying cause." },
      { q: "Do you work on older period properties?", a: "Yes. Period and mixed-age homes are a regular part of our Berkhamsted work, including careful upgrades during renovations." },
      { q: "Can you upgrade an old fuse board?", a: "Yes. Consumer unit upgrades are common where older boards no longer suit modern household demand." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and provides certification where required." },
    ],
  },
  wendover: {
    slug: "wendover",
    name: "Wendover",
    region: "Buckinghamshire",
    map: {
      bbox: [-0.8, 51.74, -0.68, 51.79],
      marker: { lat: 51.7619, lon: -0.7417 },
    },
    heroIntro:
      "Need an electrician in Wendover? RIGS Electrical provides NICEIC domestic electrical work for homeowners in Wendover and the surrounding Chiltern villages. From urgent faults and tripping circuits to consumer unit upgrades, EICRs and planned home improvements, you get practical local support from a Tring-based team covering this side of Buckinghamshire.",
    servicesIntro:
      "Wendover homes often sit between village streets, Chiltern-edge properties and later family housing — so outdoor electrics, older boards and renovation-related alterations come up regularly.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If electrics trip repeatedly, power drops out or something feels unsafe in a Wendover home, we stabilise the installation first and then diagnose the fault properly.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent issues and mixed-age circuits need careful testing — especially where gardens, garages and extensions have been added over time.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "A modern consumer unit helps Wendover homes cope safely with showers, kitchens and outdoor supplies that older boards were never designed for.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "Useful before buying, selling or renovating locally — giving a clear report rather than guesswork about what needs attention.",
      },
    ],
    commonProblems: [
      { title: "Tripping outdoor circuits", desc: "Garden lighting, sockets and garage feeds affected by damp or ageing accessories." },
      { title: "Older fuse boards", desc: "Boards that lack modern protection or space for clearer circuit isolation." },
      { title: "Village-home alterations", desc: "Piecemeal upgrades that leave mixed wiring needing careful testing." },
      { title: "Kitchen and shower demand", desc: "Higher loads that expose weak points in older domestic layouts." },
      { title: "Worn accessories", desc: "Sockets and switches that have loosened or run warm in day-to-day use." },
      { title: "Pre-project inspections", desc: "Homeowners wanting priorities before decorative or extension work starts." },
    ],
    whyChooseIntro:
      "Wendover domestic electrical work needs a local, homeowner-focused approach: tidy finishes, weather-aware outdoor circuits and clear advice about what is urgent versus what can wait.",
    whyChoosePoints: [
      { title: "Chiltern-edge coverage", desc: "Regular work across Wendover, Aylesbury Vale, Tring and nearby Buckinghamshire villages." },
      { title: "Domestic-only focus", desc: "Repairs, inspections, boards and upgrades for lived-in homes." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Clear communication", desc: "Same-day quoting where possible and plain-English options for homeowners." },
    ],
    areasCovered: {
      primary: ["Wendover"],
      villages: ["Halton", "Weston Turville", "Aston Clinton", "Butler's Cross", "St Leonards"],
      nearby: ["Aylesbury", "Tring", "Berkhamsted", "Princes Risborough", "Ivinghoe", "Pitstone", "Marsworth"],
    },
    faq: [
      { q: "Do you cover Wendover and nearby villages?", a: "Yes. We cover Wendover plus nearby Chiltern villages and surrounding Buckinghamshire towns." },
      { q: "Can you help with outdoor and garage electrics?", a: "Yes. Garden lighting, external sockets and garage supplies are a regular part of domestic work around Wendover." },
      { q: "Do you offer consumer unit upgrades?", a: "Yes. We replace outdated fuse boards where safer protection and clearer circuits are needed." },
      { q: "Can I book an EICR?", a: "Yes. EICRs are useful before a move, rental change or renovation in Wendover." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and provides certification where required." },
    ],
  },
  ivinghoe: {
    slug: "ivinghoe",
    name: "Ivinghoe",
    region: "Buckinghamshire",
    map: {
      bbox: [-0.68, 51.82, -0.58, 51.86],
      marker: { lat: 51.8369, lon: -0.6297 },
    },
    heroIntro:
      "Need an electrician in Ivinghoe? RIGS Electrical covers Ivinghoe and nearby Buckinghamshire villages with NICEIC domestic electrical work — from urgent faults and tripping circuits to consumer unit upgrades, EICRs and planned home improvements. Based close by in Tring, we are used to village properties, older layouts and outdoor electrics that need careful, weather-aware attention.",
    servicesIntro:
      "Ivinghoe homes often include older village wiring, later extensions and garden or outbuilding supplies. Practical domestic support means diagnosing faults properly and planning upgrades without unnecessary disruption.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "For power loss, boards that will not reset or accessories that feel unsafe in Ivinghoe, we make the installation safe first and then find the cause.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent trips and dead circuits need methodical testing — especially where outdoor feeds and older indoor wiring share the same installation.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "Village homes often benefit from modern consumer unit protection when showers, kitchens or outbuildings have outgrown the original board.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "A clear inspection report helps before buying, selling or renovating an Ivinghoe property with mixed-age electrics.",
      },
    ],
    commonProblems: [
      { title: "Village wiring age", desc: "Older layouts that struggle with modern household demand." },
      { title: "Outdoor circuit faults", desc: "Garden, garage and outbuilding supplies affected by damp or ageing accessories." },
      { title: "Repeated tripping", desc: "Shared protection that trips when showers, kitchens or outdoor circuits load up." },
      { title: "Outdated fuse boards", desc: "Boards that need safer protection and clearer circuit labelling." },
      { title: "Extension-related changes", desc: "Later additions that need careful integration with the existing installation." },
      { title: "Pre-purchase checks", desc: "Buyers wanting a clear electrical picture before committing to renovation budgets." },
    ],
    whyChooseIntro:
      "Ivinghoe domestic electrical work is about practical village coverage: tidy finishes, clear advice and a local team that already works the Tring–Aylesbury Vale corridor every week.",
    whyChoosePoints: [
      { title: "Close local coverage", desc: "Based in Tring with regular work across Ivinghoe, Pitstone, Marsworth and nearby Bucks villages." },
      { title: "Domestic-only focus", desc: "Homeowner repairs, inspections, boards and upgrades." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Clear next steps", desc: "Plain-English quoting and sensible prioritisation for urgent versus planned work." },
    ],
    areasCovered: {
      primary: ["Ivinghoe"],
      villages: ["Pitstone", "Marsworth", "Ivinghoe Aston", "Ringshall"],
      nearby: ["Tring", "Aylesbury", "Wendover", "Leighton Buzzard", "Berkhamsted", "Aston Clinton"],
    },
    faq: [
      { q: "Do you cover Ivinghoe and nearby villages?", a: "Yes. We cover Ivinghoe plus Pitstone, Marsworth and surrounding Buckinghamshire and Hertfordshire border villages." },
      { q: "Can you help with outdoor electrics on village properties?", a: "Yes. Garden lighting, garage supplies and outbuilding feeds are a regular part of local domestic work." },
      { q: "Do you upgrade old fuse boards?", a: "Yes. Consumer unit upgrades are common where older boards no longer suit modern household demand." },
      { q: "Can I get an EICR in Ivinghoe?", a: "Yes. EICRs are useful before a move, rental change or renovation." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and provides certification where required." },
    ],
  },
  pitstone: {
    slug: "pitstone",
    name: "Pitstone",
    region: "Buckinghamshire",
    map: {
      bbox: [-0.67, 51.81, -0.6, 51.84],
      marker: { lat: 51.8245, lon: -0.634 },
    },
    heroIntro:
      "Need an electrician in Pitstone? RIGS Electrical covers Pitstone and the surrounding Buckinghamshire villages with NICEIC domestic electrical work — from urgent faults and tripping circuits to consumer unit upgrades, EICRs and planned home improvements. Based just down the road in Tring, we are used to the mix of village housing, later estates and outdoor supplies that show up across Pitstone and neighbouring Ivinghoe.",
    servicesIntro:
      "Pitstone properties often sit between older village layouts and later family homes. That means mixed-age wiring, garage or garden feeds and boards that were never designed for today’s kitchen and shower loads.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If power drops out, a board will not reset or an accessory feels unsafe in a Pitstone home, we make the installation safe first and then diagnose the fault properly.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent trips and dead circuits need methodical testing — especially where outdoor feeds and indoor alterations share the same consumer unit.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "A modern consumer unit helps Pitstone homes cope safely with showers, kitchens and outdoor supplies that older boards struggle with.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "Useful before buying, selling or renovating locally — giving a clear report rather than guesswork about what needs attention.",
      },
    ],
    commonProblems: [
      { title: "Repeated RCD trips", desc: "Shared protection that trips when showers, kitchens or outdoor circuits load up." },
      { title: "Garage and garden faults", desc: "Damp or ageing outdoor accessories affecting village and estate properties." },
      { title: "Older fuse boards", desc: "Boards that lack modern protection or clear circuit isolation." },
      { title: "Extension-related wiring", desc: "Later additions that need careful integration with the existing installation." },
      { title: "Worn sockets and switches", desc: "Accessories that have loosened, run warm or failed after years of daily use." },
      { title: "Pre-purchase checks", desc: "Buyers wanting a clear electrical picture before renovation budgets are set." },
    ],
    whyChooseIntro:
      "Pitstone domestic electrical work needs a close local team: tidy finishes in lived-in homes, weather-aware outdoor circuits and clear advice about what is urgent versus what can wait.",
    whyChoosePoints: [
      { title: "Minutes from Tring", desc: "Regular coverage across Pitstone, Ivinghoe, Marsworth and the Herts–Bucks border villages." },
      { title: "Domestic-only focus", desc: "Repairs, inspections, boards and upgrades for homeowners." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Clear next steps", desc: "Plain-English quoting and sensible prioritisation for urgent versus planned work." },
    ],
    areasCovered: {
      primary: ["Pitstone"],
      villages: ["Ivinghoe", "Marsworth", "Ivinghoe Aston", "Ringshall"],
      nearby: ["Tring", "Aylesbury", "Wendover", "Aston Clinton", "Berkhamsted"],
    },
    faq: [
      { q: "Do you cover Pitstone and nearby villages?", a: "Yes. We cover Pitstone plus Ivinghoe, Marsworth and surrounding Buckinghamshire and Hertfordshire border villages." },
      { q: "Can you help with outdoor and garage electrics?", a: "Yes. Garden lighting, external sockets and garage supplies are a regular part of domestic work around Pitstone." },
      { q: "Do you offer consumer unit upgrades?", a: "Yes. We replace outdated fuse boards where safer protection and clearer circuits are needed." },
      { q: "Can I book an EICR in Pitstone?", a: "Yes. EICRs are useful before a move, rental change or renovation." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and provides certification where required." },
    ],
  },
  marsworth: {
    slug: "marsworth",
    name: "Marsworth",
    region: "Buckinghamshire",
    map: {
      bbox: [-0.7, 51.8, -0.63, 51.84],
      marker: { lat: 51.821, lon: -0.666 },
    },
    heroIntro:
      "Need an electrician in Marsworth? RIGS Electrical provides NICEIC domestic electrical work for homeowners in Marsworth and the nearby canal-side and village streets between Tring and Pitstone. From urgent faults and tripping circuits to consumer unit upgrades, EICRs and planned home improvements, you get practical local support from a Tring-based team that already works this corridor every week.",
    servicesIntro:
      "Marsworth homes often combine older village wiring with later alterations, outbuildings and damp-prone outdoor circuits. Practical domestic support means diagnosing faults properly and planning upgrades without unnecessary disruption.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "For power loss, boards that will not reset or accessories that feel unsafe in Marsworth, we stabilise the installation first and then find the cause.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent trips and dead circuits need careful testing — especially where garden, garage and indoor circuits share older protection.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "Village homes often benefit from modern consumer unit protection when showers, kitchens or outbuildings have outgrown the original board.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "A clear inspection report helps before buying, selling or renovating a Marsworth property with mixed-age electrics.",
      },
    ],
    commonProblems: [
      { title: "Damp outdoor circuits", desc: "Garden lighting, sockets and outbuilding feeds affected by moisture or ageing accessories." },
      { title: "Village wiring age", desc: "Older layouts that struggle with modern household demand." },
      { title: "Nuisance tripping", desc: "Shared RCDs that trip when multiple circuits load up together." },
      { title: "Outdated fuse boards", desc: "Boards that need safer protection and clearer circuit labelling." },
      { title: "Outbuilding supplies", desc: "Garages, workshops and garden rooms that need safer, properly rated feeds." },
      { title: "Pre-renovation advice", desc: "Homeowners wanting priorities before decorative or extension work starts." },
    ],
    whyChooseIntro:
      "Marsworth domestic electrical work is about practical village coverage: tidy finishes, weather-aware outdoor circuits and a local team that already covers the Tring–Pitstone–Ivinghoe area.",
    whyChoosePoints: [
      { title: "Close canal-side coverage", desc: "Regular work across Marsworth, Tring, Pitstone and nearby Bucks villages." },
      { title: "Domestic-only focus", desc: "Homeowner repairs, inspections, boards and upgrades." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Clear communication", desc: "Same-day quoting where possible and plain-English options for homeowners." },
    ],
    areasCovered: {
      primary: ["Marsworth"],
      villages: ["Pitstone", "Ivinghoe", "Ivinghoe Aston", "Long Marston"],
      nearby: ["Tring", "Aylesbury", "Wendover", "Aston Clinton", "Berkhamsted"],
    },
    faq: [
      { q: "Do you cover Marsworth and nearby villages?", a: "Yes. We cover Marsworth plus Pitstone, Ivinghoe and surrounding Buckinghamshire and Hertfordshire border villages." },
      { q: "Can you help with outdoor electrics on village properties?", a: "Yes. Garden lighting, garage supplies and outbuilding feeds are a regular part of local domestic work." },
      { q: "Do you upgrade old fuse boards?", a: "Yes. Consumer unit upgrades are common where older boards no longer suit modern household demand." },
      { q: "Can I get an EICR in Marsworth?", a: "Yes. EICRs are useful before a move, rental change or renovation." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and provides certification where required." },
    ],
  },
  "ivinghoe-aston": {
    slug: "ivinghoe-aston",
    name: "Ivinghoe Aston",
    region: "Buckinghamshire",
    map: {
      bbox: [-0.63, 51.83, -0.56, 51.87],
      marker: { lat: 51.852, lon: -0.598 },
    },
    heroIntro:
      "Need an electrician in Ivinghoe Aston? RIGS Electrical covers this quieter Buckinghamshire village with NICEIC domestic electrical work — from urgent faults and tripping circuits to consumer unit upgrades, EICRs and planned home improvements. Based nearby in Tring, we are used to rural-edge properties, older layouts and outdoor electrics that need careful, weather-aware attention.",
    servicesIntro:
      "Ivinghoe Aston homes often include older village wiring, later extensions and garden or outbuilding supplies. Practical domestic support means diagnosing faults properly and keeping disruption low in lived-in properties.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If electrics trip repeatedly, power drops out or something feels unsafe in an Ivinghoe Aston home, we make the situation safe first and then diagnose the fault.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent issues and mixed-age circuits need careful testing — especially where gardens, garages and extensions have been added over time.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "Village homes often benefit from modern consumer unit protection when showers, kitchens or outbuildings have outgrown the original board.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "Useful before buying, selling or renovating locally — giving a clear report on mixed-age village electrics.",
      },
    ],
    commonProblems: [
      { title: "Rural-edge outdoor faults", desc: "Garden, garage and outbuilding supplies affected by damp or ageing accessories." },
      { title: "Older village wiring", desc: "Layouts that struggle with modern household demand." },
      { title: "Repeated tripping", desc: "Shared protection that trips when showers, kitchens or outdoor circuits load up." },
      { title: "Outdated fuse boards", desc: "Boards that need safer protection and clearer circuit labelling." },
      { title: "Extension-related changes", desc: "Later additions that need careful integration with the existing installation." },
      { title: "Pre-purchase checks", desc: "Buyers wanting a clear electrical picture before committing to renovation budgets." },
    ],
    whyChooseIntro:
      "Ivinghoe Aston domestic electrical work is about practical village coverage: tidy finishes, clear advice and a local team that already works the Tring–Ivinghoe corridor every week.",
    whyChoosePoints: [
      { title: "Close local coverage", desc: "Based in Tring with regular work across Ivinghoe Aston, Ivinghoe, Pitstone and Ringshall." },
      { title: "Domestic-only focus", desc: "Homeowner repairs, inspections, boards and upgrades." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Clear next steps", desc: "Plain-English quoting and sensible prioritisation for urgent versus planned work." },
    ],
    areasCovered: {
      primary: ["Ivinghoe Aston"],
      villages: ["Ivinghoe", "Pitstone", "Marsworth", "Ringshall"],
      nearby: ["Tring", "Aylesbury", "Wendover", "Berkhamsted", "Aston Clinton"],
    },
    faq: [
      { q: "Do you cover Ivinghoe Aston?", a: "Yes. We cover Ivinghoe Aston plus Ivinghoe, Pitstone, Marsworth and surrounding Buckinghamshire border villages." },
      { q: "Can you help with outdoor electrics on village properties?", a: "Yes. Garden lighting, garage supplies and outbuilding feeds are a regular part of local domestic work." },
      { q: "Do you upgrade old fuse boards?", a: "Yes. Consumer unit upgrades are common where older boards no longer suit modern household demand." },
      { q: "Can I get an EICR in Ivinghoe Aston?", a: "Yes. EICRs are useful before a move, rental change or renovation." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and provides certification where required." },
    ],
  },
  "aston-clinton": {
    slug: "aston-clinton",
    name: "Aston Clinton",
    region: "Buckinghamshire",
    map: {
      bbox: [-0.76, 51.78, -0.69, 51.82],
      marker: { lat: 51.8, lon: -0.725 },
    },
    heroIntro:
      "Need an electrician in Aston Clinton? RIGS Electrical covers Aston Clinton and the surrounding Aylesbury Vale villages with NICEIC domestic electrical work — from urgent faults and tripping circuits to consumer unit upgrades, EICRs and planned home improvements. Based nearby in Tring, we regularly work the corridor between Wendover, Aylesbury and the Hertfordshire border.",
    servicesIntro:
      "Aston Clinton homes range from older village streets to later family housing. That mix often means outdoor electrics, older boards and renovation-related alterations that need practical, homeowner-focused support.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If electrics trip repeatedly, power drops out or something feels unsafe in an Aston Clinton home, we stabilise the installation first and then diagnose the fault properly.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent issues and mixed-age circuits need careful testing — especially where gardens, garages and extensions have been added over time.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "A modern consumer unit helps Aston Clinton homes cope safely with showers, kitchens and outdoor supplies that older boards were never designed for.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "Useful before buying, selling or renovating locally — giving a clear report rather than guesswork about what needs attention.",
      },
    ],
    commonProblems: [
      { title: "Tripping outdoor circuits", desc: "Garden lighting, sockets and garage feeds affected by damp or ageing accessories." },
      { title: "Older fuse boards", desc: "Boards that lack modern protection or space for clearer circuit isolation." },
      { title: "Village-home alterations", desc: "Piecemeal upgrades that leave mixed wiring needing careful testing." },
      { title: "Kitchen and shower demand", desc: "Higher loads that expose weak points in older domestic layouts." },
      { title: "Worn accessories", desc: "Sockets and switches that have loosened or run warm in day-to-day use." },
      { title: "Pre-project inspections", desc: "Homeowners wanting priorities before decorative or extension work starts." },
    ],
    whyChooseIntro:
      "Aston Clinton domestic electrical work needs a local, homeowner-focused approach: tidy finishes, weather-aware outdoor circuits and clear advice about what is urgent versus what can wait.",
    whyChoosePoints: [
      { title: "Aylesbury Vale coverage", desc: "Regular work across Aston Clinton, Wendover, Aylesbury, Tring and nearby Buckinghamshire villages." },
      { title: "Domestic-only focus", desc: "Repairs, inspections, boards and upgrades for lived-in homes." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Clear communication", desc: "Same-day quoting where possible and plain-English options for homeowners." },
    ],
    areasCovered: {
      primary: ["Aston Clinton"],
      villages: ["Halton", "Weston Turville", "Butler's Cross", "Marsworth"],
      nearby: ["Wendover", "Aylesbury", "Tring", "Ivinghoe", "Pitstone", "Berkhamsted"],
    },
    faq: [
      { q: "Do you cover Aston Clinton and nearby villages?", a: "Yes. We cover Aston Clinton plus nearby Aylesbury Vale villages and surrounding Buckinghamshire towns." },
      { q: "Can you help with outdoor and garage electrics?", a: "Yes. Garden lighting, external sockets and garage supplies are a regular part of domestic work around Aston Clinton." },
      { q: "Do you offer consumer unit upgrades?", a: "Yes. We replace outdated fuse boards where safer protection and clearer circuits are needed." },
      { q: "Can I book an EICR?", a: "Yes. EICRs are useful before a move, rental change or renovation in Aston Clinton." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and provides certification where required." },
    ],
  },
  "st-leonards": {
    slug: "st-leonards",
    name: "St Leonards",
    region: "Hertfordshire",
    map: {
      bbox: [-0.72, 51.73, -0.65, 51.78],
      marker: { lat: 51.755, lon: -0.685 },
    },
    heroIntro:
      "Need an electrician in St Leonards? RIGS Electrical covers St Leonards and the surrounding Chiltern-edge villages with NICEIC domestic electrical work — from urgent faults and tripping circuits to consumer unit upgrades, EICRs and planned home improvements. Based nearby in Tring, we are used to rural Hertfordshire properties, older layouts and outdoor electrics that need careful attention.",
    servicesIntro:
      "St Leonards homes often sit on quieter Chiltern lanes with older wiring, later extensions and weather-exposed outdoor supplies. Practical domestic support means diagnosing faults properly and planning upgrades without unnecessary disruption.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "For power loss, boards that will not reset or accessories that feel unsafe in St Leonards, we make the installation safe first and then find the cause.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent trips and dead circuits need methodical testing — especially where outdoor feeds and older indoor wiring share the same installation.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "Village homes often benefit from modern consumer unit protection when showers, kitchens or outbuildings have outgrown the original board.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "A clear inspection report helps before buying, selling or renovating a St Leonards property with mixed-age electrics.",
      },
    ],
    commonProblems: [
      { title: "Chiltern-edge outdoor faults", desc: "Garden, garage and outbuilding supplies affected by damp or ageing accessories." },
      { title: "Village wiring age", desc: "Older layouts that struggle with modern household demand." },
      { title: "Repeated tripping", desc: "Shared protection that trips when showers, kitchens or outdoor circuits load up." },
      { title: "Outdated fuse boards", desc: "Boards that need safer protection and clearer circuit labelling." },
      { title: "Extension-related changes", desc: "Later additions that need careful integration with the existing installation." },
      { title: "Pre-purchase checks", desc: "Buyers wanting a clear electrical picture before renovation budgets are set." },
    ],
    whyChooseIntro:
      "St Leonards domestic electrical work is about practical Chiltern coverage: tidy finishes, clear advice and a local team that already works Tring and the surrounding Hertfordshire villages every week.",
    whyChoosePoints: [
      { title: "Close Tring coverage", desc: "Regular work across St Leonards, Tring, Wendover and nearby Chiltern-edge villages." },
      { title: "Domestic-only focus", desc: "Homeowner repairs, inspections, boards and upgrades." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Clear next steps", desc: "Plain-English quoting and sensible prioritisation for urgent versus planned work." },
    ],
    areasCovered: {
      primary: ["St Leonards"],
      villages: ["Wigginton", "Cholesbury", "Buckland Common", "Hastoe"],
      nearby: ["Tring", "Berkhamsted", "Wendover", "Aston Clinton", "Chesham"],
    },
    faq: [
      { q: "Do you cover St Leonards and nearby villages?", a: "Yes. We cover St Leonards plus surrounding Chiltern-edge villages across Hertfordshire and into Buckinghamshire where needed." },
      { q: "Can you help with outdoor electrics on village properties?", a: "Yes. Garden lighting, garage supplies and outbuilding feeds are a regular part of local domestic work." },
      { q: "Do you upgrade old fuse boards?", a: "Yes. Consumer unit upgrades are common where older boards no longer suit modern household demand." },
      { q: "Can I get an EICR in St Leonards?", a: "Yes. EICRs are useful before a move, rental change or renovation." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and provides certification where required." },
    ],
  },
  ringshall: {
    slug: "ringshall",
    name: "Ringshall",
    region: "Buckinghamshire",
    map: {
      bbox: [-0.61, 51.79, -0.54, 51.83],
      marker: { lat: 51.81, lon: -0.575 },
    },
    heroIntro:
      "Need an electrician in Ringshall? RIGS Electrical covers Ringshall near Ashridge and the surrounding Buckinghamshire border villages with NICEIC domestic electrical work — from urgent faults and tripping circuits to consumer unit upgrades, EICRs and planned home improvements. Based close by in Tring, we are used to rural-edge properties, older layouts and outdoor electrics that need careful attention.",
    servicesIntro:
      "Ringshall homes often include older village wiring, later extensions and garden or outbuilding supplies beside the Ashridge edge. Practical domestic support means diagnosing faults properly and planning upgrades without unnecessary disruption.",
    serviceBlocks: [
      {
        title: "Emergency Electrician",
        href: "/services/emergency-electrician",
        body: "If power drops out, a board will not reset or an accessory feels unsafe in a Ringshall home, we make the installation safe first and then diagnose the fault properly.",
      },
      {
        title: "Electrical Fault Finding",
        href: "/services/electrical-fault-finding",
        body: "Intermittent trips and dead circuits need methodical testing — especially where outdoor feeds and older indoor wiring share the same installation.",
      },
      {
        title: "Fuse Board Upgrades",
        href: "/services/fuse-board-upgrades",
        body: "Village homes often benefit from modern consumer unit protection when showers, kitchens or outbuildings have outgrown the original board.",
      },
      {
        title: "EICR Certificates",
        href: "/services/eicr-certificates",
        body: "A clear inspection report helps before buying, selling or renovating a Ringshall property with mixed-age electrics.",
      },
    ],
    commonProblems: [
      { title: "Ashridge-edge outdoor faults", desc: "Garden, garage and outbuilding supplies affected by damp or ageing accessories." },
      { title: "Older village wiring", desc: "Layouts that struggle with modern household demand." },
      { title: "Repeated tripping", desc: "Shared protection that trips when showers, kitchens or outdoor circuits load up." },
      { title: "Outdated fuse boards", desc: "Boards that need safer protection and clearer circuit labelling." },
      { title: "Extension-related changes", desc: "Later additions that need careful integration with the existing installation." },
      { title: "Pre-purchase checks", desc: "Buyers wanting a clear electrical picture before committing to renovation budgets." },
    ],
    whyChooseIntro:
      "Ringshall domestic electrical work is about practical border-village coverage: tidy finishes, clear advice and a local team that already works Tring, Ivinghoe and the Ashridge edge every week.",
    whyChoosePoints: [
      { title: "Close Ashridge coverage", desc: "Regular work across Ringshall, Ivinghoe, Ivinghoe Aston, Pitstone and Tring." },
      { title: "Domestic-only focus", desc: "Homeowner repairs, inspections, boards and upgrades." },
      { title: "NICEIC registered", desc: "Work completed safely and to current standards, with certification where required." },
      { title: "Clear next steps", desc: "Plain-English quoting and sensible prioritisation for urgent versus planned work." },
    ],
    areasCovered: {
      primary: ["Ringshall"],
      villages: ["Ivinghoe", "Ivinghoe Aston", "Pitstone", "Little Gaddesden"],
      nearby: ["Tring", "Berkhamsted", "Wendover", "Aylesbury", "Marsworth"],
    },
    faq: [
      { q: "Do you cover Ringshall near Ashridge?", a: "Yes. We cover Ringshall plus Ivinghoe, Ivinghoe Aston, Pitstone and surrounding Buckinghamshire and Hertfordshire border villages." },
      { q: "Can you help with outdoor electrics on village properties?", a: "Yes. Garden lighting, garage supplies and outbuilding feeds are a regular part of local domestic work." },
      { q: "Do you upgrade old fuse boards?", a: "Yes. Consumer unit upgrades are common where older boards no longer suit modern household demand." },
      { q: "Can I get an EICR in Ringshall?", a: "Yes. EICRs are useful before a move, rental change or renovation." },
      { q: "Are you NICEIC registered?", a: "Yes. RIGS Electrical is NICEIC registered and provides certification where required." },
    ],
  },
};

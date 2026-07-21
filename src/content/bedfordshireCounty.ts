import type { CountyCoveragePageConfig, CountyTown } from "@/content/countyCoverage";
import { makeCountyTownContactHref } from "@/content/countyCoverage";

export const BEDFORDSHIRE_TOWNS: CountyTown[] = [
  { name: "Bedford", href: makeCountyTownContactHref("Bedford"), status: "planned", note: "Planned town page from the next growth plan.", x: 56, y: 26 },
  { name: "Biggleswade", href: makeCountyTownContactHref("Biggleswade"), status: "planned", note: "Planned town page from the next growth plan.", x: 79, y: 30 },
  { name: "Dunstable", href: makeCountyTownContactHref("Dunstable"), status: "planned", note: "Planned town page from the next growth plan.", x: 26, y: 73 },
  { name: "Flitwick", href: makeCountyTownContactHref("Flitwick"), status: "planned", note: "Planned town page from the next growth plan.", x: 46, y: 55 },
  { name: "Houghton Regis", href: makeCountyTownContactHref("Houghton Regis"), status: "planned", note: "Planned town page from the next growth plan.", x: 24, y: 69 },
  { name: "Leighton Buzzard", href: makeCountyTownContactHref("Leighton Buzzard"), status: "planned", note: "Planned town page from the next growth plan.", x: 19, y: 82 },
  { name: "Luton", href: makeCountyTownContactHref("Luton"), status: "planned", note: "Planned town page from the next growth plan.", x: 31, y: 63 },
  { name: "Ampthill", href: makeCountyTownContactHref("Ampthill"), status: "coverage", note: "County coverage area.", x: 42, y: 50 },
  { name: "Arlesey", href: makeCountyTownContactHref("Arlesey"), status: "coverage", note: "County coverage area.", x: 70, y: 42 },
  { name: "Barton-le-Clay", href: makeCountyTownContactHref("Barton-le-Clay"), status: "coverage", note: "County coverage area.", x: 36, y: 58 },
  { name: "Bromham", href: makeCountyTownContactHref("Bromham"), status: "coverage", note: "County coverage area.", x: 48, y: 24 },
  { name: "Caddington", href: makeCountyTownContactHref("Caddington"), status: "coverage", note: "County coverage area.", x: 29, y: 67 },
  { name: "Clophill", href: makeCountyTownContactHref("Clophill"), status: "coverage", note: "County coverage area.", x: 51, y: 48 },
  { name: "Kempston", href: makeCountyTownContactHref("Kempston"), status: "coverage", note: "County coverage area.", x: 52, y: 29 },
  { name: "Sandy", href: makeCountyTownContactHref("Sandy"), status: "coverage", note: "County coverage area.", x: 73, y: 20 },
  { name: "Shefford", href: makeCountyTownContactHref("Shefford"), status: "coverage", note: "County coverage area.", x: 62, y: 38 },
  { name: "Woburn", href: makeCountyTownContactHref("Woburn"), status: "coverage", note: "County coverage area.", x: 30, y: 88 },
];

export const BEDFORDSHIRE_COUNTY_PAGE: CountyCoveragePageConfig = {
  countyName: "Bedfordshire",
  slug: "bedfordshire",
  title: "Electrician Bedfordshire",
  metaTitle: "Electrician Bedfordshire | Domestic County Coverage | RIGS",
  metaDescription:
    "Domestic electrician coverage across Bedfordshire, including Luton, Dunstable, Leighton Buzzard, Bedford and nearby towns.",
  heroIntro:
    "Need a local domestic electrician anywhere in Bedfordshire? This county page brings together the main towns we cover across Bedfordshire, from the Luton and Dunstable side of the county through to Bedford, Biggleswade and surrounding towns. It is designed to help homeowners find the right next step quickly, whether the job is an urgent fault, a consumer unit upgrade, inspection work, or wider domestic electrical planning.",
  townsIntro:
    "Use the directory to jump to the town that fits your area. Some Bedfordshire towns are next in the rollout plan, while the wider county links still give homeowners a clear enquiry route today.",
  overviewIntro:
    "Bedfordshire includes larger urban centres, market-town pockets, commuter areas and village-edge housing, so domestic electrical work can range from older house upgrades to modern family-home alterations. The point of this page is to make county coverage easy to understand and give homeowners a useful first stop even before every town has its own dedicated page.",
  howWeHelpIntro:
    "Across Bedfordshire, the most common homeowner enquiries still centre on fault finding, older fuse boards, inspection work before changes, and safe upgrades for kitchens, showers, lighting and family-home demand.",
  whyCustomersIntro:
    "The exact job changes from town to town, but the pattern is consistent: homes are being upgraded, extended, rented out or brought up to a safer standard, and the electrical work needs to be planned clearly around that.",
  countyContextIntro:
    "Bedfordshire households often sit between commuter routines, busy family life and practical home improvements. That makes clear appointment windows, tidy workmanship and honest guidance especially important on domestic jobs.",
  ctaTitle: "Need An Electrician Anywhere In Bedfordshire?",
  ctaBody:
    "Tell us where you are in Bedfordshire and what work you need doing. We will point you to the right town route, talk through the job and come back with clear domestic-first advice.",
  map: {
    bbox: [-0.72, 51.82, 0.06, 52.2],
    marker: { lat: 52.04, lon: -0.46 },
    zoom: 10,
  },
  towns: BEDFORDSHIRE_TOWNS,
  overview: [
    {
      title: "County setting",
      body: "Bedfordshire links the edge of the Chilterns and south Midlands commuter corridors with larger centres like Luton and Bedford, which means the housing stock and day-to-day electrical demands vary widely across the county.",
    },
    {
      title: "Homes and households",
      body: "The county includes older terraces, semis, post-war family housing, newer estates and rental properties. That brings a steady mix of consumer unit upgrades, inspection work, lighting changes and older wiring concerns.",
    },
    {
      title: "Domestic demand pattern",
      body: "Busy family homes, landlords, home working, showers, kitchen refits and outdoor electrical additions all shape the kinds of jobs homeowners ask about across Bedfordshire.",
    },
  ],
  serviceHighlights: [
    {
      title: "Fault finding for persistent domestic issues",
      href: "/services/electrical-fault-finding",
      body: "Repeated tripping, failed sockets, dead lighting circuits and intermittent faults are common where homes have been altered over time or where older electrics are under more pressure.",
    },
    {
      title: "Consumer unit upgrades for safer modern use",
      href: "/services/fuse-board-upgrades",
      body: "Bedfordshire homes often need clearer circuit protection where kitchen work, shower demand, home office use or later extensions have outgrown an older fuse board.",
    },
    {
      title: "Inspections before buying, renting or renovating",
      href: "/services/eicr-certificates",
      body: "EICRs and broader inspections are especially useful where a property is being prepared for letting, bought for improvement, or upgraded room by room.",
    },
    {
      title: "Urgent domestic electrician support",
      href: "/services/emergency-electrician",
      body: "When part of the house loses power, a circuit will not reset, or something looks or smells unsafe, the first priority is making the installation safe and then tracing the actual cause properly.",
    },
  ],
  commonNeeds: [
    {
      title: "Commuter-home reliability",
      desc: "Luton, Leighton Buzzard, Flitwick and other commuter towns need dependable domestic electrics that do not derail workdays, school runs or evening routines.",
    },
    {
      title: "Rental and pre-let checks",
      desc: "Bedfordshire has a strong mix of rental properties and first-time-buyer housing, so landlord certificates, EICRs and practical remedial planning come up regularly.",
    },
    {
      title: "Kitchen and shower demand",
      desc: "Family homes across the county often need safer planning for showers, upgraded consumer units and kitchen circuits carrying more modern appliance load.",
    },
    {
      title: "Extension and alteration work",
      desc: "Garage conversions, rear extensions and piecemeal room changes can leave homeowners with a patchwork electrical layout that needs clarifying and upgrading.",
    },
    {
      title: "Older wiring and accessories",
      desc: "Busy lived-in homes still show up with loose accessories, ageing socket fronts, dated boards and wiring that has been added to over time.",
    },
    {
      title: "Outdoor and outbuilding electrics",
      desc: "Security lighting, sheds, garage supplies and weather-exposed outdoor circuits often need safer installation or fault diagnosis after deterioration.",
    },
  ],
  amenities: [
    {
      title: "Town centres, stations and family routines",
      body: "From Luton and Dunstable to Bedford, Flitwick and Leighton Buzzard, household schedules are shaped by stations, schools, retail areas and busy commuting patterns that leave little room for unreliable electrics.",
    },
    {
      title: "Growing housing and renovation activity",
      body: "Newer estates, older family housing and continuing refurbishments mean many Bedfordshire properties are balancing original layouts with modern electrical demand.",
    },
    {
      title: "Edge-of-town and village living",
      body: "Homes near village fringes and smaller Bedfordshire towns often include garages, outbuildings, gardens and external lighting that need weather-aware electrical work and tidy routing.",
    },
  ],
  travel: [
    {
      title: "Rail and commuter routes",
      body: "Mainline travel from Luton, Flitwick, Leighton Buzzard and Bedford shapes appointment expectations, so clear windows and dependable follow-up matter for local homeowners.",
      icon: "TrainFront",
    },
    {
      title: "Road access across Bedfordshire",
      body: "The M1, A5 and A421 help connect the county, but local travel through busier centres and surrounding towns still needs sensible planning for responsive domestic visits.",
      icon: "Car",
    },
    {
      title: "County-wide reassurance",
      body: "Whether you are in a larger town, a commuter suburb or a village-edge property, this page gives you a clear county-level route while dedicated Bedfordshire town pages are added.",
      icon: "MapPin",
    },
  ],
  faq: [
    {
      q: "Do you cover all of Bedfordshire?",
      a: "We cover homes across Bedfordshire and nearby border areas. This county page is here to make that coverage clearer and give homeowners a useful first route by area.",
    },
    {
      q: "Which Bedfordshire towns are on your radar first?",
      a: "The main next-step towns include Luton, Dunstable, Leighton Buzzard, Bedford, Biggleswade, Flitwick and Houghton Regis, alongside broader Bedfordshire coverage.",
    },
    {
      q: "Can I still enquire if my town does not have a standalone page yet?",
      a: "Yes. The county page and town directory still give you a clear enquiry route, even where a full standalone town page is scheduled for a later phase.",
    },
    {
      q: "What domestic electrical work do you handle in Bedfordshire?",
      a: "Fault finding, consumer unit upgrades, rewires, EICRs, emergency call-outs, lighting, showers, kitchen electrics and other homeowner-focused electrical work.",
    },
    {
      q: "Do you help with older homes and mixed-age electrics?",
      a: "Yes. Many Bedfordshire properties have been adapted over time, and we help homeowners understand what is safe, what needs doing now and what can be planned sensibly.",
    },
    {
      q: "Can I use this page to find the nearest town quickly on mobile?",
      a: "Yes. The county directory is designed to help you move quickly from the county page to the most relevant town or enquiry route across mobile and desktop.",
    },
  ],
};

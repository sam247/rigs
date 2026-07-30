import type { CountyCoveragePageConfig, CountyTown } from "@/content/countyCoverage";
import { makeCountyTownContactHref } from "@/content/countyCoverage";

export const HERTFORDSHIRE_TOWNS: CountyTown[] = [
  { name: "Baldock", href: makeCountyTownContactHref("Baldock"), status: "coverage", note: "A-Z county coverage area.", x: 74, y: 24 },
  { name: "Berkhamsted", href: "/electrician/berkhamsted", status: "live", note: "Live town page with full local content.", x: 17, y: 44 },
  { name: "Bishop's Stortford", href: makeCountyTownContactHref("Bishop's Stortford"), status: "coverage", note: "A-Z county coverage area.", x: 84, y: 34 },
  { name: "Borehamwood", href: "/electrician/borehamwood", status: "live", note: "Live town page with full local content.", x: 47, y: 76 },
  { name: "Broxbourne", href: makeCountyTownContactHref("Broxbourne"), status: "coverage", note: "A-Z county coverage area.", x: 73, y: 73 },
  { name: "Buntingford", href: makeCountyTownContactHref("Buntingford"), status: "coverage", note: "A-Z county coverage area.", x: 76, y: 42 },
  { name: "Bushey", href: makeCountyTownContactHref("Bushey"), status: "coverage", note: "A-Z county coverage area.", x: 35, y: 78 },
  { name: "Cheshunt", href: "/electrician/cheshunt", status: "live", note: "Live town page with full local content.", x: 66, y: 82 },
  { name: "Harpenden", href: "/electrician/harpenden", status: "live", note: "Live town page with full local content.", x: 41, y: 48 },
  { name: "Hatfield", href: "/electrician/hatfield", status: "live", note: "Live town page with full local content.", x: 55, y: 62 },
  { name: "Hemel Hempstead", href: "/electrician/hemel-hempstead", status: "live", note: "Live town page with full local content.", x: 27, y: 55 },
  { name: "Hertford", href: makeCountyTownContactHref("Hertford"), status: "coverage", note: "A-Z county coverage area.", x: 66, y: 60 },
  { name: "Hitchin", href: "/electrician/hitchin", status: "live", note: "Live town page with full local content.", x: 58, y: 30 },
  { name: "Hoddesdon", href: makeCountyTownContactHref("Hoddesdon"), status: "coverage", note: "A-Z county coverage area.", x: 70, y: 70 },
  { name: "Letchworth", href: "/electrician/letchworth", status: "live", note: "Live town page with full local content.", x: 66, y: 20 },
  { name: "Potters Bar", href: makeCountyTownContactHref("Potters Bar"), status: "coverage", note: "A-Z county coverage area.", x: 58, y: 84 },
  { name: "Rickmansworth", href: makeCountyTownContactHref("Rickmansworth"), status: "coverage", note: "A-Z county coverage area.", x: 22, y: 72 },
  { name: "Royston", href: makeCountyTownContactHref("Royston"), status: "coverage", note: "A-Z county coverage area.", x: 86, y: 18 },
  { name: "Sawbridgeworth", href: makeCountyTownContactHref("Sawbridgeworth"), status: "coverage", note: "A-Z county coverage area.", x: 84, y: 52 },
  { name: "St Albans", href: "/electrician/st-albans", status: "live", note: "Live town page with full local content.", x: 45, y: 58 },
  { name: "Stevenage", href: "/electrician/stevenage", status: "live", note: "Live town page with full local content.", x: 61, y: 42 },
  { name: "Tring", href: "/electrician/tring", status: "live", note: "Live town page with full local content.", x: 10, y: 30 },
  { name: "Ware", href: makeCountyTownContactHref("Ware"), status: "coverage", note: "A-Z county coverage area.", x: 71, y: 58 },
  { name: "Watford", href: "/electrician/watford", status: "live", note: "Live town page with full local content.", x: 31, y: 72 },
  { name: "Welwyn Garden City", href: "/electrician/welwyn-garden-city", status: "live", note: "Live town page with full local content.", x: 57, y: 52 },
  { name: "Waltham Cross", href: makeCountyTownContactHref("Waltham Cross"), status: "coverage", note: "A-Z county coverage area.", x: 68, y: 88 },
];

export const HERTFORDSHIRE_LIVE_TOWNS = HERTFORDSHIRE_TOWNS.filter((town) => town.status === "live");
export const HERTFORDSHIRE_PLANNED_TOWNS = HERTFORDSHIRE_TOWNS.filter((town) => town.status === "planned");
export const HERTFORDSHIRE_COVERAGE_TOWNS = HERTFORDSHIRE_TOWNS.filter((town) => town.status === "coverage");

export const HERTFORDSHIRE_OVERVIEW = [
  {
    title: "County setting",
    body: "Hertfordshire sits directly north of London, linking the Chilterns in the west to the Lea Valley and East Herts market towns in the east. That mix creates very different domestic electrical needs from one side of the county to the other.",
  },
  {
    title: "Homes and households",
    body: "The county combines period terraces, post-war family housing, commuter semis, new-town layouts and modern estates. Older wiring, consumer unit upgrades and extension-related alterations all show up regularly across that mix.",
  },
  {
    title: "Community pattern",
    body: "Daily life is shaped by rail commuting, school runs, home working, rental properties, and busy family homes that rely on dependable power, safe kitchens, outdoor lighting and modern circuit protection.",
  },
];

export const HERTFORDSHIRE_SERVICE_HIGHLIGHTS = [
  {
    title: "Fault finding for mixed-age housing stock",
    href: "/services/electrical-fault-finding",
    body: "Across Hertfordshire it is common to find newer additions joined onto older circuits. We trace nuisance tripping, dead sockets, failed lighting circuits and intermittent faults without guessing.",
  },
  {
    title: "Consumer unit upgrades for modern demand",
    href: "/services/fuse-board-upgrades",
    body: "Home offices, kitchen refits, EV charging plans and garden power all put more demand on older fuse boards. A modern consumer unit helps improve safety and makes future work easier to manage.",
  },
  {
    title: "EICRs before buying, selling or renovating",
    href: "/services/eicr-certificates",
    body: "Inspection work is especially useful where there have been years of piecemeal alterations. We test the installation, explain the observations clearly and separate urgent issues from longer-term upgrades.",
  },
  {
    title: "Urgent domestic electrician support",
    href: "/services/emergency-electrician",
    body: "When power drops out, a circuit starts tripping repeatedly or something smells hot, we focus on making the property safe first and then isolating the root cause properly.",
  },
];

export const HERTFORDSHIRE_COMMON_NEEDS = [
  {
    title: "Period-property upgrades",
    desc: "St Albans, Harpenden, Berkhamsted and many village homes often need careful upgrades where older wiring layouts meet modern appliance loads and renovation work.",
  },
  {
    title: "New-town circuit alterations",
    desc: "Places like Stevenage, Hatfield and Welwyn Garden City often involve extensions, kitchen reconfigurations and altered consumer units that need sensible fault finding and clearer circuit labelling.",
  },
  {
    title: "Commuter-home reliability",
    desc: "Fast turnaround matters in homes where lost power, failed showers, broken sockets or lighting faults disrupt working from home and busy weekday routines.",
  },
  {
    title: "Outdoor and garden electrics",
    desc: "Security lighting, garden rooms, garage supplies and weather-exposed circuits frequently need repairs or upgrades, especially after damp weather or property alterations.",
  },
  {
    title: "Landlord and pre-purchase checks",
    desc: "Rental properties, inherited homes and houses bought for refurbishment all benefit from EICRs and a clear plan for remedials before more decorative work begins.",
  },
  {
    title: "Consumer unit replacement planning",
    desc: "Outdated fuse boards are still common across the county, especially where several generations of electrical work have built up over time without a full upgrade.",
  },
];

export const HERTFORDSHIRE_AMENITIES = [
  {
    title: "Town centres and daily amenities",
    body: "From Watford and Hemel Hempstead to Hitchin, Hertford and St Albans, residents rely on busy town centres, schools, stations, leisure sites and retail areas that keep household schedules tight and make reliable electrics essential.",
  },
  {
    title: "Film, education and business hubs",
    body: "Leavesden, Elstree, Hatfield and Stevenage all bring a blend of commercial activity, rented homes, family housing and commuter demand. That often means a higher number of extensions, refurbishments and installation changes.",
  },
  {
    title: "Green space and village fringe living",
    body: "Homes near the Chilterns, Ashridge, Lee Valley and village edges often include garages, outbuildings, garden lighting and external supplies that need weather-aware installation and testing.",
  },
];

export const HERTFORDSHIRE_TRAVEL: CountyCoveragePageConfig["travel"] = [
  {
    title: "Rail-connected county",
    body: "Mainline routes into London from Watford, St Albans, Harpenden, Hatfield, Welwyn Garden City, Stevenage and Hitchin make access straightforward for homeowners who need appointments planned around commuting windows.",
    icon: "TrainFront",
  },
  {
    title: "Road access across the county",
    body: "The M1, A1(M), M25 and A41 corridors help connect west, central and south Hertfordshire, while east-west travel can still be slower through town centres and village roads. Planning routes properly matters for responsive call-outs.",
    icon: "Car",
  },
  {
    title: "County-wide coverage reassurance",
    body: "Whether you are in a larger urban centre, a market town or a village edge property, the county page gives you a quick route to detailed local pages and broader county coverage links where you need them.",
    icon: "MapPin",
  },
];

export const HERTFORDSHIRE_FAQ = [
  {
    q: "Do you cover all of Hertfordshire?",
    a: "We cover homes across Hertfordshire and nearby border areas. This page brings together the live town pages already on the site plus broader county coverage links for nearby areas.",
  },
  {
    q: "Which Hertfordshire town pages are live today?",
    a: "The dedicated live town pages include Tring, Berkhamsted, St Albans, Watford, Hemel Hempstead, Stevenage, Hitchin, Harpenden, Hatfield, Welwyn Garden City, Cheshunt, Borehamwood and Letchworth.",
  },
  {
    q: "Do the town links go to full local pages?",
    a: "Yes. The main Hertfordshire towns now link through to their own dedicated local electrician pages with town-specific content, service links and coverage details.",
  },
  {
    q: "What kind of electrical work do you handle across the county?",
    a: "Domestic electrical repairs, fault finding, consumer unit upgrades, rewires, inspections, lighting, sockets and other homeowner-focused work completed to current standards.",
  },
  {
    q: "Can you help with older properties and mixed wiring?",
    a: "Yes. Many Hertfordshire homes have been extended, altered or partially upgraded over time. We test methodically, explain what is safe, and prioritise the most sensible next steps.",
  },
  {
    q: "Can I use this page on mobile to find my nearest town quickly?",
    a: "Yes. The county directory and interactive map are designed to work across desktop, tablet and mobile so you can jump to detailed town pages or broader county enquiry routes from any device.",
  },
];

export const HERTFORDSHIRE_COUNTY_PAGE: CountyCoveragePageConfig = {
  countyName: "Hertfordshire",
  slug: "hertfordshire",
  title: "Electrician Hertfordshire",
  metaTitle: "Electrician Hertfordshire | NICEIC Domestic Coverage | RIGS",
  metaDescription:
    "Find a NICEIC domestic electrician across Hertfordshire. Live town pages for Tring, Berkhamsted, Hemel Hempstead, St Albans, Watford and county-wide domestic coverage.",
  heroIntro:
    "Need a reliable electrician anywhere in Hertfordshire? This county page brings together live town pages for Tring, Berkhamsted, Hemel Hempstead, St Albans, Watford and more, plus broader county coverage links so homeowners can quickly find the right next step. Whether you are dealing with tripping electrics in an older property, planning a consumer unit upgrade, or arranging an EICR before a move, the same domestic-first approach runs across every area we cover.",
  townsIntro:
    "The map is there as a quick visual guide, while the directory does the real job for customers: helping you get to your nearest town page or a working enquiry link without any guesswork.",
  overviewIntro:
    "Hertfordshire combines market towns, cathedral-city streets, new-town neighbourhoods, village edges and commuter corridors, so the homes we work in vary a lot from one area to the next. This page is here to make coverage clear, show which areas already have a detailed town page, and help customers get to the right enquiry route quickly.",
  howWeHelpIntro:
    "Most county-wide enquiries come back to the same core homeowner needs: faults that need tracing properly, older fuse boards that need updating, and inspections before people commit to buying, renovating or upgrading.",
  whyCustomersIntro:
    "The details vary by town, but the pattern is familiar: homes are being adapted for modern life and the electrics need to keep up safely, clearly and without unnecessary disruption.",
  countyContextIntro:
    "This is still a customer page first, so the main purpose here is reassurance: we understand the mix of properties, travel patterns and day-to-day routines that shape domestic electrical work across the county.",
  ctaTitle: "Need An Electrician Anywhere In Hertfordshire?",
  ctaBody:
    "Tell us what you need and we will point you to the right town page, talk through the job, and come back with clear advice. If the work is urgent, call now.",
  map: {
    bbox: [-0.8, 51.62, 0.15, 52.1],
    marker: { lat: 51.817, lon: -0.24 },
    zoom: 10,
  },
  towns: HERTFORDSHIRE_TOWNS,
  overview: HERTFORDSHIRE_OVERVIEW,
  serviceHighlights: HERTFORDSHIRE_SERVICE_HIGHLIGHTS,
  commonNeeds: HERTFORDSHIRE_COMMON_NEEDS,
  amenities: HERTFORDSHIRE_AMENITIES,
  travel: HERTFORDSHIRE_TRAVEL,
  faq: HERTFORDSHIRE_FAQ,
};

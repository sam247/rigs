import type { CountyCoveragePageConfig, CountyTown } from "@/content/countyCoverage";
import { makeCountyTownContactHref } from "@/content/countyCoverage";

export const BUCKINGHAMSHIRE_TOWNS: CountyTown[] = [
  { name: "Aylesbury", href: makeCountyTownContactHref("Aylesbury"), status: "planned", note: "Planned town page from the next growth plan.", x: 28, y: 46 },
  { name: "Amersham", href: makeCountyTownContactHref("Amersham"), status: "planned", note: "Planned town page from the next growth plan.", x: 42, y: 69 },
  { name: "Beaconsfield", href: makeCountyTownContactHref("Beaconsfield"), status: "planned", note: "Planned town page from the next growth plan.", x: 44, y: 80 },
  { name: "Chesham", href: makeCountyTownContactHref("Chesham"), status: "planned", note: "Planned town page from the next growth plan.", x: 36, y: 62 },
  { name: "Great Missenden", href: makeCountyTownContactHref("Great Missenden"), status: "planned", note: "Planned town page from the next growth plan.", x: 33, y: 57 },
  { name: "High Wycombe", href: makeCountyTownContactHref("High Wycombe"), status: "planned", note: "Planned town page from the next growth plan.", x: 37, y: 76 },
  { name: "Princes Risborough", href: makeCountyTownContactHref("Princes Risborough"), status: "planned", note: "Planned town page from the next growth plan.", x: 26, y: 63 },
  { name: "Wendover", href: makeCountyTownContactHref("Wendover"), status: "planned", note: "Planned town page from the next growth plan.", x: 25, y: 55 },
  { name: "Buckingham", href: makeCountyTownContactHref("Buckingham"), status: "coverage", note: "County coverage area.", x: 17, y: 18 },
  { name: "Bletchley", href: makeCountyTownContactHref("Bletchley"), status: "coverage", note: "County coverage area.", x: 12, y: 36 },
  { name: "Marlow", href: makeCountyTownContactHref("Marlow"), status: "coverage", note: "County coverage area.", x: 31, y: 85 },
  { name: "Newport Pagnell", href: makeCountyTownContactHref("Newport Pagnell"), status: "coverage", note: "County coverage area.", x: 20, y: 30 },
  { name: "Olney", href: makeCountyTownContactHref("Olney"), status: "coverage", note: "County coverage area.", x: 28, y: 20 },
  { name: "Winslow", href: makeCountyTownContactHref("Winslow"), status: "coverage", note: "County coverage area.", x: 20, y: 29 },
];

export const BUCKINGHAMSHIRE_COUNTY_PAGE: CountyCoveragePageConfig = {
  countyName: "Buckinghamshire",
  slug: "buckinghamshire",
  title: "Electrician Buckinghamshire",
  metaTitle: "Electrician Buckinghamshire | Domestic County Coverage | RIGS",
  metaDescription:
    "Domestic electrician coverage across Buckinghamshire, including Aylesbury, Wendover, Chesham, Amersham, High Wycombe and nearby towns.",
  heroIntro:
    "Need a local domestic electrician anywhere in Buckinghamshire? This county page brings together the main Buckinghamshire towns we cover, from Aylesbury Vale and the Wendover side of the county through to Chesham, Amersham, High Wycombe and the wider commuter belt. It gives homeowners a clear first route into county coverage while the dedicated town pages are built out over time.",
  townsIntro:
    "Use the directory to jump to the Buckinghamshire town that best fits your area. The key next-step towns from the growth plan are already surfaced here, alongside broader county enquiry routes.",
  overviewIntro:
    "Buckinghamshire combines market towns, Chiltern villages, commuter-belt housing and family homes spread across a fairly wide county footprint. That mix creates a strong need for practical domestic electrical support, especially where homeowners are upgrading, renovating or trying to make older layouts work more safely for modern living.",
  howWeHelpIntro:
    "Across Buckinghamshire, the main homeowner enquiries still come back to safe repairs, fault tracing, consumer unit upgrades, inspections before bigger decisions, and domestic electrical planning that actually suits the way the property is used.",
  whyCustomersIntro:
    "The exact job varies by town, but Buckinghamshire homes often share the same pressures: older layouts meeting modern appliances, family homes being extended, and homeowners wanting clearer advice before committing to bigger electrical work.",
  countyContextIntro:
    "Buckinghamshire households are often spread between commuter routines, school runs, renovation projects and countryside-edge properties. That means clear guidance, tidy workmanship and realistic visit planning matter just as much as the electrical work itself.",
  ctaTitle: "Need An Electrician Anywhere In Buckinghamshire?",
  ctaBody:
    "Tell us where you are in Buckinghamshire and what you need help with. We will point you to the right town route, talk through the job and come back with clear homeowner-focused advice.",
  map: {
    bbox: [-1.12, 51.48, -0.46, 52.12],
    marker: { lat: 51.81, lon: -0.81 },
    zoom: 9,
  },
  towns: BUCKINGHAMSHIRE_TOWNS,
  overview: [
    {
      title: "County setting",
      body: "Buckinghamshire stretches from Aylesbury Vale across the Chilterns and down into key commuter towns, so domestic electrical jobs can vary a lot between market-town homes, village properties and busier suburban housing.",
    },
    {
      title: "Homes and households",
      body: "The county includes period properties, family semis, larger detached homes, newer estates and long-updated commuter housing. That creates steady demand for inspections, consumer unit work, lighting upgrades and electrical problem-solving.",
    },
    {
      title: "Domestic demand pattern",
      body: "Home improvements, kitchens, showers, garden lighting, home working and piecemeal alterations all contribute to the kinds of electrical work Buckinghamshire homeowners tend to need help with.",
    },
  ],
  serviceHighlights: [
    {
      title: "Fault finding for homes with layered alterations",
      href: "/services/electrical-fault-finding",
      body: "Buckinghamshire homes often pick up years of extensions, kitchen work, outdoor electrics and room changes. Proper fault finding helps separate one isolated issue from a wider layout problem.",
    },
    {
      title: "Consumer unit upgrades for growing household demand",
      href: "/services/fuse-board-upgrades",
      body: "Many homes across Buckinghamshire benefit from safer, clearer circuit protection where older boards are being asked to support modern kitchens, showers, office use and garden supplies.",
    },
    {
      title: "EICRs before property decisions",
      href: "/services/eicr-certificates",
      body: "Inspection work is especially useful in commuter-belt housing and older family homes where buyers, landlords and renovators want a clearer electrical picture before moving ahead.",
    },
    {
      title: "Urgent domestic electrician support",
      href: "/services/emergency-electrician",
      body: "When something trips repeatedly, power drops out or part of the installation no longer feels safe, the priority is making the home safe first and then tracing the cause properly.",
    },
  ],
  commonNeeds: [
    {
      title: "Commuter-belt upgrades",
      desc: "Chesham, Amersham, Beaconsfield and High Wycombe homes often need practical upgrades that keep pace with modern family routines and working from home.",
    },
    {
      title: "Chiltern and village-edge properties",
      desc: "Properties near the Chilterns often include garages, garden lighting, outbuildings and external feeds that need tidy, weather-aware domestic electrical work.",
    },
    {
      title: "Kitchen, lighting and room-change demand",
      desc: "Refurbishments and room reconfigurations regularly lead to extra appliance load, lighting changes and the need for clearer circuit planning.",
    },
    {
      title: "Older fuse boards and inspection work",
      desc: "Homes that have been changed bit by bit over time often need inspections and safer consumer unit planning before further work is added on top.",
    },
    {
      title: "High-value home improvements",
      desc: "Many Buckinghamshire homeowners want electrical work that feels deliberate and tidy, particularly where larger family homes are being modernised in stages.",
    },
    {
      title: "Reliable everyday domestic electrics",
      desc: "Even where the job is small, homeowners still need dependable sockets, lighting, showers and protective devices that work properly around busy schedules.",
    },
  ],
  amenities: [
    {
      title: "Market towns, commuter routes and schools",
      body: "From Aylesbury and Wendover through to Amersham, Chesham, Beaconsfield and High Wycombe, household routines are shaped by commuting, schools, shopping areas and family logistics that make reliable electrics especially important.",
    },
    {
      title: "Renovation and extension activity",
      body: "Across Buckinghamshire, many homes are being updated, reconfigured or extended, which often exposes older electrical layouts that need more careful planning before new work is added.",
    },
    {
      title: "Garden, garage and external electrical demand",
      body: "Larger plots, side access, detached garages and outdoor living space often mean more demand for security lighting, outdoor circuits and weather-aware electrical work.",
    },
  ],
  travel: [
    {
      title: "Rail-connected homeowner schedules",
      body: "Mainline and Underground-linked commuter towns across Buckinghamshire mean visit planning needs to work around busy weekday schedules and tighter appointment windows.",
      icon: "TrainFront",
    },
    {
      title: "Road access across the county",
      body: "The A41, M40 and surrounding road network make county coverage realistic, although Chiltern routes, market-town centres and local roads still need sensible planning for timely domestic visits.",
      icon: "Car",
    },
    {
      title: "County-wide reassurance",
      body: "Whether you are in a market town, commuter suburb or village-edge home, this page gives you a clear Buckinghamshire route while dedicated local town pages are added.",
      icon: "MapPin",
    },
  ],
  faq: [
    {
      q: "Do you cover all of Buckinghamshire?",
      a: "We cover homes across Buckinghamshire and nearby border areas. This county page is here to make that coverage clearer and give homeowners a useful county-level starting point.",
    },
    {
      q: "Which Buckinghamshire towns are next in the rollout?",
      a: "The key next-step towns include Aylesbury, Wendover, Chesham, Amersham, High Wycombe, Princes Risborough, Great Missenden and Beaconsfield.",
    },
    {
      q: "Can I still enquire if my town does not have a standalone page yet?",
      a: "Yes. The county page still gives you a clear route to enquire by area, even where the dedicated town page is planned for a later phase.",
    },
    {
      q: "What kind of domestic electrical work do you handle in Buckinghamshire?",
      a: "We handle domestic electrical repairs, fault finding, consumer unit upgrades, rewires, inspections, emergency work, lighting and other homeowner-focused electrical jobs.",
    },
    {
      q: "Do you help with larger homes and mixed-age electrics?",
      a: "Yes. Many Buckinghamshire properties have seen years of extensions and upgrades, so we help homeowners understand what is safe now and what should be planned more carefully next.",
    },
    {
      q: "Can I use this page to find my nearest area quickly?",
      a: "Yes. The directory is designed to help you move quickly from the county page to the most relevant Buckinghamshire town or enquiry route.",
    },
  ],
};

export type ServiceIconName =
  | "ShieldCheck"
  | "Search"
  | "Home"
  | "Sun"
  | "Cpu"
  | "Bell"
  | "ClipboardCheck"
  | "Zap"
  | "Bath"
  | "Lightbulb"
  | "MapPin";

export type ServiceContentCard = {
  title: string;
  desc: string;
  icon: ServiceIconName;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceRelatedLink = {
  title: string;
  desc: string;
  href: string;
  icon: ServiceIconName;
};

export type ServiceLandingPageConfig = {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  contactService: string;
  contactLabel: string;
  serviceType: string;
  serviceDescription: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  includedTitle: string;
  includedItems: ServiceContentCard[];
  commonJobsTitle: string;
  commonJobs: ServiceContentCard[];
  whyChooseTitle: string;
  whyChooseItems: ServiceContentCard[];
  relatedLinks: ServiceRelatedLink[];
  faqs: ServiceFaq[];
  ctaTitle: string;
  ctaBody: string;
};

export const SERVICE_LANDING_PAGES: Record<string, ServiceLandingPageConfig> = {
  "outdoor-lighting": {
    slug: "outdoor-lighting",
    title: "Outdoor Lighting Installation Hertfordshire",
    eyebrow: "Local Domestic Electrician",
    metaTitle: "Outdoor Lighting Hertfordshire | Garden & Driveway Lights",
    metaDescription:
      "Outdoor lighting installation in Tring and Hertfordshire for gardens, driveways, side access and entrances. Weather-aware domestic lighting installs.",
    heroIntro:
      "Need outdoor lighting installation in Hertfordshire? RIGS Electrical installs practical, tidy exterior lighting for homeowners who want safer entrances, better-lit gardens and more usable outdoor space. As a local domestic electrician, we plan fittings, switching and circuit protection around real day-to-day use, not just how the lights look on day one.",
    contactService: "Outdoor Lighting Installation Hertfordshire",
    contactLabel: "Request a Quote",
    serviceType: "Outdoor lighting installation (domestic)",
    serviceDescription:
      "Domestic outdoor lighting installation across Hertfordshire for gardens, driveways, pathways, patios and side access.",
    overviewTitle: "Outdoor Lighting That Works In Real Homes",
    overviewParagraphs: [
      "Good outdoor lighting does two jobs at once: it improves safety around entrances, side returns, patios and steps, and it makes the outside of your home feel more usable after dark. The right setup depends on how you move around the property, where cables can be run neatly, and how exposed the fittings will be to weather.",
      "We help homeowners choose practical layouts for wall lights, pathway lighting, soffit lights, garden feature lighting and switching arrangements that make sense. If you also need PIR control or security-focused lighting, we can build that in as part of the installation rather than treating it as an afterthought.",
    ],
    includedTitle: "What This Service Includes",
    includedItems: [
      { title: "Lighting layout advice", desc: "Planning for entrances, paths, patios, side access and garden focal points.", icon: "Lightbulb" },
      { title: "Weather-aware installation", desc: "Suitable fittings, cable routes and connections for exposed outdoor conditions.", icon: "Sun" },
      { title: "Safe circuit work", desc: "Proper protection, testing and clear isolation for external lighting circuits.", icon: "ShieldCheck" },
      { title: "Tidy finishing", desc: "Neat accessory placement and homeowner-friendly switching arrangements.", icon: "Home" },
    ],
    commonJobsTitle: "Common Outdoor Lighting Jobs",
    commonJobs: [
      { title: "Front entrance lighting", desc: "Wall lights and porch lighting that make access safer and improve kerb appeal.", icon: "Lightbulb" },
      { title: "Path and side access lighting", desc: "Practical illumination for bins, gates, side returns and darker walkways.", icon: "MapPin" },
      { title: "Patio and garden feature lighting", desc: "Usable evening lighting for seating areas, planting and entertaining spaces.", icon: "Sun" },
      { title: "Garage and outbuilding lighting", desc: "Reliable exterior lighting for drives, detached garages and garden rooms.", icon: "ShieldCheck" },
    ],
    whyChooseTitle: "Why Homeowners Book Outdoor Lighting",
    whyChooseItems: [
      { title: "Safer access after dark", desc: "Reduce poorly lit steps, paths and side entrances around the home.", icon: "ShieldCheck" },
      { title: "Better-looking exterior spaces", desc: "Lighting that feels deliberate rather than a mismatched mix of fittings.", icon: "Lightbulb" },
      { title: "Future-ready planning", desc: "We think about maintenance, timer/PIR control and how you may want to expand later.", icon: "Search" },
      { title: "Domestic-first advice", desc: "Straight answers from a local domestic electrician used to working in lived-in homes.", icon: "Home" },
    ],
    relatedLinks: [
      { title: "Security Lighting Installation", desc: "Add PIR and driveway lighting with a security-first focus.", href: "/services/security-lighting", icon: "Bell" },
      { title: "Smart Home Installation", desc: "Smart switching, app control and scene-based lighting upgrades.", href: "/services/smart-home-installation", icon: "Cpu" },
      { title: "Electrical Fault Finding", desc: "Useful if existing outside lights trip, fail intermittently or have been affected by damp.", href: "/services/electrical-fault-finding", icon: "Search" },
      { title: "Locations Hub", desc: "See the Hertfordshire towns where we already have local electrician pages.", href: "/locations", icon: "MapPin" },
    ],
    faqs: [
      {
        q: "Can you install lighting in gardens and around driveways?",
        a: "Yes. We install outdoor lighting for front paths, driveways, patios, side access, gardens, garages and entrances, depending on the layout and power supply available.",
      },
      {
        q: "Do outdoor lights need their own protection?",
        a: "They often need suitable circuit protection and weather-appropriate accessories. We test the installation properly and make sure the setup is safe for external use.",
      },
      {
        q: "Can you add PIR sensors or timer control?",
        a: "Yes. We can include PIR operation, timers or more convenient switching arrangements depending on how you want the lighting to work.",
      },
      {
        q: "What if my existing outdoor lighting keeps tripping?",
        a: "That usually needs testing before new work is added. Damp, damaged fittings and faulty connections are common causes, and we can diagnose that with fault finding if needed.",
      },
      {
        q: "Do you only do domestic outdoor lighting?",
        a: "Yes. RIGS focuses on homeowners and domestic electrical work, so the advice and installation approach is designed around houses, gardens and family use.",
      },
    ],
    ctaTitle: "Need Outdoor Lighting Installed?",
    ctaBody:
      "Tell us what area you want to light up and how you want it to work. We will advise on the most practical setup, provide a clear quote, and install it neatly and safely.",
  },
  "house-rewiring": {
    slug: "house-rewiring",
    title: "House Rewiring Hertfordshire",
    eyebrow: "Local Domestic Electrician",
    metaTitle: "House Rewiring Hertfordshire | Full & Partial Rewires",
    metaDescription:
      "House rewiring in Tring and Hertfordshire for older homes, renovations and upgrades. Full and partial domestic rewires with clear planning.",
    heroIntro:
      "Need house rewiring in Hertfordshire? RIGS Electrical carries out full and partial rewires for homeowners dealing with ageing wiring, major renovations, extensions or repeated electrical issues. As a local domestic electrician, we plan rewires around how people actually live in their homes, with clear staging, sensible disruption control and practical advice from the start.",
    contactService: "House Rewiring Hertfordshire",
    contactLabel: "Request a Quote",
    serviceType: "House rewiring (domestic)",
    serviceDescription:
      "Full and partial domestic rewires across Hertfordshire for older properties, renovations, extensions and homes with outdated wiring.",
    overviewTitle: "When Rewiring Becomes The Sensible Option",
    overviewParagraphs: [
      "A rewire is not always the first answer, but in older homes it can be the safest and most cost-effective long-term solution. Signs include brittle cable insulation, outdated wiring colours, limited socket provision, repeated alterations over the years, or an EICR highlighting wider issues that cannot be solved by one small repair.",
      "We help homeowners decide whether a full rewire, partial rewire or staged upgrade makes most sense. That is especially important in Hertfordshire properties where period rooms, later extensions and modern kitchen loads often sit on a mix of older and newer electrical work.",
    ],
    includedTitle: "What We Help With",
    includedItems: [
      { title: "Full rewires", desc: "For older homes where the installation needs a complete fresh start.", icon: "Home" },
      { title: "Partial rewires", desc: "Useful when only certain floors, rooms or altered areas need replacing.", icon: "ShieldCheck" },
      { title: "Renovation planning", desc: "Electrical layout advice before plastering, kitchen fitting or decorating begins.", icon: "Search" },
      { title: "Testing and certification", desc: "Proper inspection, testing and certification once the work is complete.", icon: "ClipboardCheck" },
    ],
    commonJobsTitle: "Common Rewire Scenarios",
    commonJobs: [
      { title: "Older homes with dated wiring", desc: "Properties where wiring age, damage or previous alterations have built up over time.", icon: "Home" },
      { title: "Extensions and major refurbishments", desc: "Reworking circuits so the whole property is planned properly rather than patched together.", icon: "Bath" },
      { title: "Fuse board and circuit reorganisation", desc: "Bringing protection and circuit identification up to modern expectations.", icon: "ShieldCheck" },
      { title: "Kitchen and shower load upgrades", desc: "Homes needing new dedicated supplies for modern appliances and higher demand.", icon: "Zap" },
    ],
    whyChooseTitle: "Why Homeowners Ask About Rewiring",
    whyChooseItems: [
      { title: "Safer long-term setup", desc: "A rewire removes uncertainty where small repairs would only delay bigger work.", icon: "ShieldCheck" },
      { title: "Better room layouts", desc: "Chance to improve socket positions, lighting and switching while work is underway.", icon: "Lightbulb" },
      { title: "More suitable for modern living", desc: "A fresh electrical layout for kitchens, home working, appliances and extensions.", icon: "Zap" },
      { title: "Clear domestic-first planning", desc: "We explain what can be staged, what is disruptive, and how to approach the job sensibly.", icon: "Search" },
    ],
    relatedLinks: [
      { title: "Consumer Unit Replacement", desc: "Often part of wider rewire or major upgrade work.", href: "/services/consumer-unit-replacement", icon: "ShieldCheck" },
      { title: "Electrical Inspections", desc: "Useful if you want independent clarity before deciding whether a rewire is needed.", href: "/services/electrical-inspections", icon: "ClipboardCheck" },
      { title: "Kitchen Electrical Installation", desc: "Popular alongside rewires during larger renovation projects.", href: "/services/kitchen-electrics", icon: "Bath" },
      { title: "EICR Certificates", desc: "A formal report can help confirm the condition of older wiring before major work starts.", href: "/services/eicr-certificates", icon: "Search" },
    ],
    faqs: [
      {
        q: "How do I know if my house needs rewiring?",
        a: "Common signs include very old wiring, repeated faults, a lack of sockets, outdated fuse boards, mixed alterations from previous work, or an inspection report highlighting wider safety issues.",
      },
      {
        q: "Do all older houses need a full rewire?",
        a: "Not always. Some homes only need partial rewiring or targeted upgrades. We assess the condition of the installation and explain what is genuinely necessary.",
      },
      {
        q: "Can rewiring be staged?",
        a: "Yes, in many cases. Some homeowners rewire by floor, by room group, or alongside planned renovations. We can advise on a practical order of work.",
      },
      {
        q: "Will you replace the consumer unit as part of a rewire?",
        a: "Very often, yes. A rewire is usually tied to a modern consumer unit setup so the new circuits have suitable protection and clear labelling.",
      },
      {
        q: "Do you only handle domestic rewires?",
        a: "Yes. RIGS focuses on homeowners and domestic electrical work, which means the planning, advice and finish are all tailored to residential properties.",
      },
    ],
    ctaTitle: "Thinking About A Rewire?",
    ctaBody:
      "Send over a few details about the property, its age and what work you are planning. We will talk through whether a full rewire, partial rewire or staged upgrade is the right next step.",
  },
  "smart-home-installation": {
    slug: "smart-home-installation",
    title: "Smart Home Installation Hertfordshire",
    eyebrow: "Local Domestic Electrician",
    metaTitle: "Smart Home Installation Hertfordshire | Lighting Controls",
    metaDescription:
      "Smart home installation in Tring and Hertfordshire for lighting, switches, controls and practical automation built on safe domestic wiring.",
    heroIntro:
      "Need smart home installation in Hertfordshire? RIGS Electrical helps homeowners add smart lighting, app-controlled switching and practical automation without turning the job into a gadget experiment. As a local domestic electrician, we focus on reliable domestic wiring first, then build smart controls around how you actually use each room.",
    contactService: "Smart Home Installation Hertfordshire",
    contactLabel: "Request a Quote",
    serviceType: "Smart home installation (domestic)",
    serviceDescription:
      "Domestic smart home installation across Hertfordshire for lighting controls, smart switches, scene-based setups and practical home automation.",
    overviewTitle: "Smart Upgrades Need Good Electrical Foundations",
    overviewParagraphs: [
      "The best smart home setups feel simple to live with. That means thinking about switching positions, neutral availability, compatible fittings, Wi-Fi limitations and what still happens if the app is not open. We help homeowners make smart upgrades that are useful day to day rather than overcomplicated.",
      "This can range from smart lighting in key rooms through to exterior lighting control, hallway automation and multi-way switching upgrades. If your existing electrics need improving first, we will say so clearly before new controls are added.",
    ],
    includedTitle: "Typical Smart Home Work",
    includedItems: [
      { title: "Smart lighting", desc: "Room-by-room lighting control, dimming and scene-based switching.", icon: "Lightbulb" },
      { title: "Smart switches", desc: "Cleaner control options without relying on ad-hoc plug-in devices.", icon: "Cpu" },
      { title: "Outdoor control", desc: "Link exterior lighting and security lighting into a more convenient setup.", icon: "Sun" },
      { title: "Wiring advice first", desc: "Straight advice on what is realistic with your existing installation.", icon: "Search" },
    ],
    commonJobsTitle: "Popular Smart Home Upgrades",
    commonJobs: [
      { title: "Smart hallway and landing lighting", desc: "Useful where several switches and evening routines make automation worthwhile.", icon: "Lightbulb" },
      { title: "Kitchen and living area scenes", desc: "Flexible lighting control for cooking, entertaining and day-to-day family use.", icon: "Bath" },
      { title: "App-controlled outside lights", desc: "Combine convenience with timing or evening use around the property.", icon: "Sun" },
      { title: "Modern switch upgrades", desc: "Replacing awkward or dated switching arrangements with something more flexible.", icon: "Cpu" },
    ],
    whyChooseTitle: "Why Homeowners Ask For Smart Controls",
    whyChooseItems: [
      { title: "Better day-to-day convenience", desc: "Fewer awkward switches and more practical room control.", icon: "Cpu" },
      { title: "Lighting that adapts to real routines", desc: "Useful scenes for mornings, evenings, entertaining and security.", icon: "Lightbulb" },
      { title: "Domestic-first guidance", desc: "Advice from a local domestic electrician rather than generic product marketing.", icon: "Home" },
      { title: "Tidy installation", desc: "Proper electrical work that looks deliberate and works reliably.", icon: "ShieldCheck" },
    ],
    relatedLinks: [
      { title: "Outdoor Lighting Installation", desc: "A common starting point for smart exterior control.", href: "/services/outdoor-lighting", icon: "Sun" },
      { title: "Security Lighting Installation", desc: "PIR and security-focused lighting with more deliberate switching options.", href: "/services/security-lighting", icon: "Bell" },
      { title: "Kitchen Electrical Installation", desc: "Smart controls often make most sense during kitchen refurbishments.", href: "/services/kitchen-electrics", icon: "Bath" },
      { title: "Services Hub", desc: "Browse all domestic services and related upgrade work.", href: "/services", icon: "MapPin" },
    ],
    faqs: [
      {
        q: "Can you install smart lighting in an existing home?",
        a: "Yes. Many smart upgrades can be added to existing homes, although the best approach depends on the current wiring, switch locations and the fittings involved.",
      },
      {
        q: "Do smart home upgrades always need rewiring?",
        a: "Not always. Some installations work with the wiring already in place, while others benefit from new cabling or switch changes. We will explain what is realistic before work starts.",
      },
      {
        q: "Can you combine smart control with outdoor or security lighting?",
        a: "Yes. Smart control often works well with exterior lighting, especially where homeowners want more convenience or better evening routines.",
      },
      {
        q: "Will the lights still work manually?",
        a: "That depends on the setup chosen, but we always think about practical day-to-day use and avoid designs that are frustrating if technology is unavailable.",
      },
      {
        q: "Is this service domestic only?",
        a: "Yes. RIGS focuses on domestic electrical work, so the smart upgrades we install are planned around homeowner use, layout and reliability.",
      },
    ],
    ctaTitle: "Planning Smart Home Upgrades?",
    ctaBody:
      "Tell us which rooms or lighting circuits you want to improve and how you want the controls to work. We will recommend a practical setup that suits your home rather than overcomplicating it.",
  },
  "security-lighting": {
    slug: "security-lighting",
    title: "Security Lighting Installation Hertfordshire",
    eyebrow: "Local Domestic Electrician",
    metaTitle: "Security Lighting Hertfordshire | PIR Exterior Lights",
    metaDescription:
      "Security lighting installation in Tring and Hertfordshire for driveways, side access, gardens and entrances. PIR and exterior lights for homes.",
    heroIntro:
      "Need security lighting installation in Hertfordshire? RIGS Electrical installs practical exterior lighting for homeowners who want better visibility around entrances, driveways, side access and garden boundaries. As a local domestic electrician, we focus on lighting that is genuinely useful at home: well positioned, properly switched and not prone to nuisance problems.",
    contactService: "Security Lighting Installation Hertfordshire",
    contactLabel: "Request a Quote",
    serviceType: "Security lighting installation (domestic)",
    serviceDescription:
      "Domestic security lighting installation across Hertfordshire for entrances, driveways, side paths, gardens and exterior access points.",
    overviewTitle: "Practical Security Lighting For Real Homes",
    overviewParagraphs: [
      "Security lighting is about more than a bright floodlight on the wall. The best setups cover the places that matter most, avoid awkward glare, and use sensible switching or PIR control so the lighting feels helpful rather than intrusive.",
      "We install security-focused lighting for front doors, side paths, garages, driveways and rear gardens. If the job overlaps with general exterior lighting, we can plan both together so the finished setup feels consistent across the property.",
    ],
    includedTitle: "What We Install",
    includedItems: [
      { title: "PIR floodlights", desc: "Motion-activated lighting for entrances, drives and darker access points.", icon: "Bell" },
      { title: "Side access lighting", desc: "Clearer visibility around gates, bins, passages and less-used routes.", icon: "MapPin" },
      { title: "Driveway and garage lighting", desc: "Safer arrival and more useful coverage around vehicles and storage areas.", icon: "Sun" },
      { title: "Safe testing and setup", desc: "Proper circuit work, fitting selection and reliable operation.", icon: "ShieldCheck" },
    ],
    commonJobsTitle: "Common Security Lighting Jobs",
    commonJobs: [
      { title: "Front entrance upgrades", desc: "Better lighting for porches, paths and doorways where visibility matters most.", icon: "Bell" },
      { title: "Driveway floodlighting", desc: "Wider coverage for parking areas, garage approaches and front boundaries.", icon: "Sun" },
      { title: "Rear and side garden lighting", desc: "More confidence around darker parts of the property at night.", icon: "MapPin" },
      { title: "Replacing unreliable fittings", desc: "Fixing poor positioning, nuisance triggering or old failed exterior lights.", icon: "Search" },
    ],
    whyChooseTitle: "Why Homeowners Add Security Lighting",
    whyChooseItems: [
      { title: "Safer access", desc: "Useful lighting around doors, side passages and darker routes to the house.", icon: "ShieldCheck" },
      { title: "More confidence after dark", desc: "A better-lit exterior feels easier to manage during evenings and winter months.", icon: "Bell" },
      { title: "Cleaner, more deliberate coverage", desc: "Less guesswork about where fittings should go and how they should trigger.", icon: "Search" },
      { title: "Domestic-first installation", desc: "Advice from a local domestic electrician focused on homes, not generic trade copy.", icon: "Home" },
    ],
    relatedLinks: [
      { title: "Outdoor Lighting Installation", desc: "Combine practical security lighting with wider exterior lighting improvements.", href: "/services/outdoor-lighting", icon: "Sun" },
      { title: "Smart Home Installation", desc: "Useful if you want more flexible control over exterior lighting.", href: "/services/smart-home-installation", icon: "Cpu" },
      { title: "Electrical Fault Finding", desc: "Helpful if existing security lights trip, fail or have been affected by weather.", href: "/services/electrical-fault-finding", icon: "Search" },
      { title: "Locations Hub", desc: "Browse the Hertfordshire towns we cover as a local domestic electrician.", href: "/locations", icon: "MapPin" },
    ],
    faqs: [
      {
        q: "Can you install PIR security lights at the front and back of a house?",
        a: "Yes. We install security lighting around entrances, driveways, side access, rear gardens and other exterior areas where homeowners want better visibility.",
      },
      {
        q: "Do security lights always have to be motion activated?",
        a: "No. PIR activation is common, but some homeowners prefer manual switching or a setup combined with broader outdoor lighting. We can advise on what fits your property best.",
      },
      {
        q: "What if my current security light keeps tripping or stops working?",
        a: "That usually needs proper testing. Exterior fittings often fail because of moisture, damaged accessories or poor connections, and we can diagnose that before replacing or upgrading anything.",
      },
      {
        q: "Can security lighting be added as part of a larger outdoor lighting project?",
        a: "Yes. In many homes it makes more sense to plan the full exterior lighting layout together so the finished result is practical and consistent.",
      },
      {
        q: "Do you only install domestic security lighting?",
        a: "Yes. RIGS focuses on homeowners and domestic electrical work across Hertfordshire and nearby areas.",
      },
    ],
    ctaTitle: "Need Better Security Lighting?",
    ctaBody:
      "Tell us which parts of the property feel too dark or inconvenient after dark and we will recommend a practical lighting layout with a clear quote.",
  },
  "electrical-inspections": {
    slug: "electrical-inspections",
    title: "Electrical Inspections Hertfordshire",
    eyebrow: "Local Domestic Electrician",
    metaTitle: "Electrical Inspections Hertfordshire | Home Safety Checks",
    metaDescription:
      "Electrical inspections in Tring and Hertfordshire for homeowners buying, renovating or checking older electrics. Clear safety advice and next steps.",
    heroIntro:
      "Need an electrical inspection in Hertfordshire? RIGS Electrical helps homeowners understand the condition of their electrics before renovations, after recurring faults, or when they want a clearer picture of what is safe and what needs attention. As a local domestic electrician, we focus on practical domestic advice rather than overloading you with jargon.",
    contactService: "Electrical Inspections Hertfordshire",
    contactLabel: "Book An Inspection",
    serviceType: "Electrical inspection (domestic)",
    serviceDescription:
      "Domestic electrical inspections across Hertfordshire for homeowners planning renovations, troubleshooting concerns or checking the condition of a home's electrics.",
    overviewTitle: "Useful When You Need Clarity Before Spending Money",
    overviewParagraphs: [
      "Homeowners often ask for an inspection before a purchase, before a kitchen or extension project, or after repeated problems such as tripping circuits and suspicious-looking older electrics. The value is not just in finding issues, but in understanding which ones matter now and which can be planned sensibly.",
      "Some situations call for a formal EICR, while others need a broader inspection visit and practical domestic advice first. We can point you towards the right route depending on what you are trying to achieve.",
    ],
    includedTitle: "What An Inspection Can Help With",
    includedItems: [
      { title: "Older electrics review", desc: "Useful where fuse boards, wiring age or past alterations are causing uncertainty.", icon: "ShieldCheck" },
      { title: "Renovation planning", desc: "Check what should be upgraded before kitchens, bathrooms or decorating work begins.", icon: "Bath" },
      { title: "Purchase reassurance", desc: "Understand likely electrical priorities before you commit to bigger spending.", icon: "Search" },
      { title: "Clear next steps", desc: "We explain whether you need repair work, an EICR, rewiring or smaller upgrades.", icon: "ClipboardCheck" },
    ],
    commonJobsTitle: "When Homeowners Book Electrical Inspections",
    commonJobs: [
      { title: "Before buying or moving in", desc: "Helpful when the electrics look dated or the property's history is unclear.", icon: "Home" },
      { title: "Before renovation work", desc: "Check whether kitchens, showers, lighting plans or extensions need wider upgrades.", icon: "Bath" },
      { title: "After repeated faults", desc: "Useful where tripping, failed sockets or heat damage suggest more than one isolated issue.", icon: "Search" },
      { title: "For long-term planning", desc: "Get a realistic order of work instead of guessing what to tackle first.", icon: "ClipboardCheck" },
    ],
    whyChooseTitle: "Why Inspections Matter",
    whyChooseItems: [
      { title: "Better decisions", desc: "Know what genuinely needs doing before you spend money on the wrong fix.", icon: "Search" },
      { title: "Domestic-first advice", desc: "Plain-English guidance from a local domestic electrician used to homeowner concerns.", icon: "Home" },
      { title: "Safer upgrades", desc: "Avoid layering new kitchen, shower or lighting work onto an uncertain setup.", icon: "ShieldCheck" },
      { title: "Clear prioritisation", desc: "Separate urgent items from jobs that can be planned sensibly.", icon: "ClipboardCheck" },
    ],
    relatedLinks: [
      { title: "EICR Certificates", desc: "Book a formal condition report if documented inspection results are what you need.", href: "/services/eicr-certificates", icon: "ClipboardCheck" },
      { title: "House Rewiring", desc: "Relevant where inspection findings show wider age or condition issues.", href: "/services/house-rewiring", icon: "Home" },
      { title: "Consumer Unit Replacement", desc: "A common next step where the board lacks modern protection.", href: "/services/consumer-unit-replacement", icon: "ShieldCheck" },
      { title: "Electrical Fault Finding", desc: "Best route where the main issue is repeated tripping or intermittent faults.", href: "/services/electrical-fault-finding", icon: "Search" },
    ],
    faqs: [
      {
        q: "What is the difference between an electrical inspection and an EICR?",
        a: "An EICR is a formal Electrical Installation Condition Report. A broader inspection can be useful when you first need practical advice and a clear picture of what should happen next. We can advise which is the better fit.",
      },
      {
        q: "Should I book an inspection before renovating?",
        a: "Yes, especially if the property has older electrics, an outdated fuse board or a history of alterations. It can save time and money later by showing what needs upgrading first.",
      },
      {
        q: "Can inspections help if my electrics keep tripping?",
        a: "They can, but repeated or intermittent tripping is often best handled with dedicated fault finding. We will point you to the right service based on what is happening.",
      },
      {
        q: "Do you inspect domestic properties only?",
        a: "Yes. RIGS focuses on homeowners and domestic electrical work across Hertfordshire and nearby areas.",
      },
      {
        q: "Will I get clear recommendations afterwards?",
        a: "Yes. The whole point is to help you understand what is urgent, what can be planned, and which service is the best next step.",
      },
    ],
    ctaTitle: "Need Clarity On Your Home's Electrics?",
    ctaBody:
      "If you are unsure whether you need an EICR, repair work, a consumer unit change or something more extensive, book an inspection and we will help you prioritise the right next step.",
  },
  "consumer-unit-replacement": {
    slug: "consumer-unit-replacement",
    title: "Consumer Unit Replacement Hertfordshire",
    eyebrow: "Local Domestic Electrician",
    metaTitle: "Consumer Unit Replacement Hertfordshire | Fuse Box Upgrades",
    metaDescription:
      "Consumer unit replacement in Tring and Hertfordshire for old fuse boards, renovations and safer RCD/RCBO protection with certification.",
    heroIntro:
      "Need consumer unit replacement in Hertfordshire? RIGS Electrical replaces outdated, overcrowded or unreliable fuse boards with modern consumer units that offer better protection and clearer circuit control. As a local domestic electrician, we help homeowners understand when replacement is the sensible route and what should be checked alongside it.",
    contactService: "Consumer Unit Replacement Hertfordshire",
    contactLabel: "Request a Quote",
    serviceType: "Consumer unit replacement (domestic)",
    serviceDescription:
      "Domestic consumer unit replacement across Hertfordshire for outdated fuse boards, safety upgrades, renovation work and better circuit protection.",
    overviewTitle: "When Consumer Unit Replacement Makes Sense",
    overviewParagraphs: [
      "Consumer unit replacement is often needed where the existing board lacks modern protection, has signs of wear, is too limited for current appliance demand, or has become a patchwork of old and newer electrical work. Replacing the board can improve safety, make circuits easier to identify and create a better foundation for future upgrades.",
      "This is especially common in homes that have had kitchen work, extensions, shower additions or years of smaller electrical changes without the main board ever being updated properly. We assess the wider condition of the installation so the replacement is done sensibly, not in isolation.",
    ],
    includedTitle: "What We Provide",
    includedItems: [
      { title: "Board replacement", desc: "Removal of outdated fuse boards and installation of a modern consumer unit.", icon: "ShieldCheck" },
      { title: "Testing and checks", desc: "Inspection and testing so the installation is safe and the circuits are properly understood.", icon: "Search" },
      { title: "Clear circuit labelling", desc: "Better identification and easier fault isolation for homeowners.", icon: "ClipboardCheck" },
      { title: "Straightforward advice", desc: "Practical guidance on any wider issues found around the replacement work.", icon: "Home" },
    ],
    commonJobsTitle: "Common Reasons For Consumer Unit Replacement",
    commonJobs: [
      { title: "No RCD or limited protection", desc: "Older boards that are no longer suitable for current domestic safety expectations.", icon: "ShieldCheck" },
      { title: "Repeated tripping and poor circuit layout", desc: "Boards that make fault isolation frustrating or unreliable.", icon: "Search" },
      { title: "Renovations and additional loads", desc: "Kitchen refits, shower circuits and extensions that demand a better setup.", icon: "Bath" },
      { title: "Visible wear or age", desc: "Overcrowded boards, dated accessories or installations that need modernising.", icon: "Home" },
    ],
    whyChooseTitle: "Why Homeowners Replace The Board",
    whyChooseItems: [
      { title: "Improved safety", desc: "Modern protection devices offer better fault protection for day-to-day family use.", icon: "ShieldCheck" },
      { title: "Easier fault isolation", desc: "Clearer circuit layout means less confusion when problems do happen.", icon: "Search" },
      { title: "More suitable for modern demand", desc: "A stronger base for kitchens, showers, lighting upgrades and future work.", icon: "Zap" },
      { title: "Domestic-first explanation", desc: "We explain what the replacement solves and what other issues may still need planning.", icon: "ClipboardCheck" },
    ],
    relatedLinks: [
      { title: "Fuse Board Upgrades", desc: "Our existing page explaining fuse board / consumer unit upgrade work for homeowners.", href: "/services/fuse-board-upgrades", icon: "ShieldCheck" },
      { title: "House Rewiring", desc: "Relevant where the wider wiring condition also needs upgrading.", href: "/services/house-rewiring", icon: "Home" },
      { title: "Electrical Inspections", desc: "Useful if you want a clearer picture before deciding on replacement.", href: "/services/electrical-inspections", icon: "ClipboardCheck" },
      { title: "Electrical Fault Finding", desc: "Best route when repeated tripping suggests a separate underlying fault as well.", href: "/services/electrical-fault-finding", icon: "Search" },
    ],
    faqs: [
      {
        q: "Is a consumer unit replacement the same as a fuse board upgrade?",
        a: "In most homeowner conversations, yes. 'Fuse board' is the older term, while 'consumer unit' is the modern term for the main electrical board.",
      },
      {
        q: "When should a consumer unit be replaced?",
        a: "Common reasons include age, lack of modern protection, repeated tripping, signs of wear, or larger renovation work that needs a more suitable setup.",
      },
      {
        q: "Will replacing the consumer unit fix all electrical problems?",
        a: "Not always. It improves protection and circuit layout, but separate wiring or appliance faults may still need addressing. We explain that clearly as part of the job.",
      },
      {
        q: "Can you replace a consumer unit in an older home?",
        a: "Yes. Many replacements are in older properties. If the wiring condition raises wider concerns, we will explain the safest next step rather than ignoring it.",
      },
      {
        q: "Do you provide certification?",
        a: "Yes. Consumer unit replacement includes appropriate testing and certification once the work is complete.",
      },
    ],
    ctaTitle: "Need A Consumer Unit Replaced?",
    ctaBody:
      "Send us a photo of the existing board if you can, along with any faults or upgrade plans you have in mind. We will advise on the safest route and provide a clear quote.",
  },
  "electric-shower-installation": {
    slug: "electric-shower-installation",
    title: "Electric Shower Installation Hertfordshire",
    eyebrow: "Local Domestic Electrician",
    metaTitle: "Electric Shower Installation Hertfordshire | Bathroom Electrics",
    metaDescription:
      "Electric shower installation in Tring and Hertfordshire for replacements, new circuits and bathroom electrics with safe protection checks.",
    heroIntro:
      "Need electric shower installation in Hertfordshire? RIGS Electrical installs and replaces electric showers for homeowners who want safe, properly rated supplies and clear advice on what the circuit can realistically support. As a local domestic electrician, we look at the whole electrical setup around the shower, not just the unit on the wall.",
    contactService: "Electric Shower Installation Hertfordshire",
    contactLabel: "Request a Quote",
    serviceType: "Electric shower installation (domestic)",
    serviceDescription:
      "Domestic electric shower installation across Hertfordshire for replacements, new shower supplies, dedicated circuits and safe bathroom electrical upgrades.",
    overviewTitle: "Electric Showers Need The Right Circuit Behind Them",
    overviewParagraphs: [
      "Electric showers place a significant electrical load on the installation, so the work has to be planned around the shower rating, the existing consumer unit and the condition of the supply cable and isolation arrangements. That is why replacement is not always a like-for-like swap.",
      "We help homeowners with new shower installs, replacements and wider bathroom electrical improvements. If the circuit or consumer unit is not suitable, we will explain what needs changing before the shower is connected.",
    ],
    includedTitle: "What This Service Covers",
    includedItems: [
      { title: "Shower replacements", desc: "Swap an older or failed electric shower for a suitable new unit.", icon: "Zap" },
      { title: "New shower supplies", desc: "Install the correct dedicated electrical supply where needed.", icon: "ShieldCheck" },
      { title: "Isolation and switching", desc: "Check or install suitable isolators and safe bathroom electrical arrangements.", icon: "Search" },
      { title: "Straight advice on load", desc: "Clear guidance on what your current setup can support safely.", icon: "ClipboardCheck" },
    ],
    commonJobsTitle: "Common Electric Shower Work",
    commonJobs: [
      { title: "Replacing an old or unreliable unit", desc: "Common where showers are tripping, underperforming or no longer practical to repair.", icon: "Zap" },
      { title: "Bathroom refurbishments", desc: "Installing a new electric shower as part of wider bathroom improvements.", icon: "Bath" },
      { title: "Circuit suitability checks", desc: "Confirming whether the cable, breaker and consumer unit are suitable for the shower rating.", icon: "ShieldCheck" },
      { title: "Fault diagnosis around the shower supply", desc: "Helpful where isolators, pull cords or protective devices are causing issues.", icon: "Search" },
    ],
    whyChooseTitle: "Why Homeowners Ask For Electric Shower Installation",
    whyChooseItems: [
      { title: "Safer bathroom electrics", desc: "Make sure the shower supply, protection and switching are properly matched.", icon: "ShieldCheck" },
      { title: "Reliable hot water performance", desc: "Choose a shower setup that suits the home's electrical capacity.", icon: "Zap" },
      { title: "Better planning during bathroom work", desc: "Avoid discovering too late that the circuit is not suitable.", icon: "Bath" },
      { title: "Practical domestic guidance", desc: "Advice from a local domestic electrician rather than guesswork or forum opinions.", icon: "Home" },
    ],
    relatedLinks: [
      { title: "Kitchen Electrical Installation", desc: "Similar high-load planning considerations during kitchen upgrades.", href: "/services/kitchen-electrics", icon: "Bath" },
      { title: "Consumer Unit Replacement", desc: "Often relevant if the existing board is not suitable for modern shower demand.", href: "/services/consumer-unit-replacement", icon: "ShieldCheck" },
      { title: "Electrical Fault Finding", desc: "Useful when shower trips or supply issues need diagnosing first.", href: "/services/electrical-fault-finding", icon: "Search" },
      { title: "Locations Hub", desc: "See the Hertfordshire towns where we work as a local domestic electrician.", href: "/locations", icon: "MapPin" },
    ],
    faqs: [
      {
        q: "Can you replace an existing electric shower?",
        a: "Yes, although we still need to check that the circuit, protection and rating are suitable for the new unit rather than assuming it is a straight swap.",
      },
      {
        q: "Do electric showers need a dedicated circuit?",
        a: "In most cases, yes. Electric showers are high-load appliances and need an appropriate dedicated supply with suitable protection.",
      },
      {
        q: "My electric shower keeps tripping. Can you help?",
        a: "Yes. That may be a shower fault, an issue with the isolator, or a wider circuit problem. We can diagnose that and advise whether replacement or repair is the best route.",
      },
      {
        q: "Can you install an electric shower during a bathroom renovation?",
        a: "Yes. In fact, that is often the best time to plan the circuit, isolation and any related bathroom electrical work properly.",
      },
      {
        q: "Do you only work in domestic properties?",
        a: "Yes. RIGS focuses on homeowners and domestic electrical work across Hertfordshire and nearby areas.",
      },
    ],
    ctaTitle: "Need An Electric Shower Installed?",
    ctaBody:
      "Tell us whether you are replacing an existing unit or adding a new shower and we will advise on circuit suitability, likely work required and the best next step.",
  },
  "kitchen-electrics": {
    slug: "kitchen-electrics",
    title: "Kitchen Electrical Installation Hertfordshire",
    eyebrow: "Local Domestic Electrician",
    metaTitle: "Kitchen Electrics Hertfordshire | Sockets & Circuits",
    metaDescription:
      "Kitchen electrical installation in Tring and Hertfordshire for cooker circuits, sockets, appliance points, lighting and renovation planning.",
    heroIntro:
      "Need kitchen electrical installation in Hertfordshire? RIGS Electrical helps homeowners plan and carry out the electrical side of kitchen refurbishments, appliance upgrades and layout changes. As a local domestic electrician, we make sure the circuits, sockets, lighting and switching all suit how the kitchen will actually be used once the work is finished.",
    contactService: "Kitchen Electrical Installation Hertfordshire",
    contactLabel: "Request a Quote",
    serviceType: "Kitchen electrical installation (domestic)",
    serviceDescription:
      "Domestic kitchen electrical installation across Hertfordshire for refurbishments, appliance circuits, lighting upgrades, sockets and layout changes.",
    overviewTitle: "Kitchen Projects Need More Than A Few Extra Sockets",
    overviewParagraphs: [
      "Kitchens usually place the heaviest daily demand on a home's electrics. Appliance positions, cooker supplies, extraction, lighting, sockets and under-cabinet features all need coordinating early, especially if units, worktops and plastering are changing at the same time.",
      "We help homeowners and kitchen projects plan the electrical work properly so the finished room is practical, safe and ready for real family use. If the existing board or circuits need upgrading to support the new layout, we will explain that clearly before the project gets boxed in.",
    ],
    includedTitle: "Typical Kitchen Electrical Work",
    includedItems: [
      { title: "Appliance circuits", desc: "Cooker points, appliance supplies and dedicated circuits where required.", icon: "Zap" },
      { title: "Socket planning", desc: "Worktop sockets, island power and better outlet placement for modern kitchens.", icon: "Bath" },
      { title: "Kitchen lighting", desc: "Task lighting, pendants, under-cabinet lighting and practical switching.", icon: "Lightbulb" },
      { title: "Project coordination", desc: "Electrical work planned around fitters, plasterers and renovation stages.", icon: "ClipboardCheck" },
    ],
    commonJobsTitle: "Common Kitchen Electrical Jobs",
    commonJobs: [
      { title: "Full kitchen refurbishments", desc: "Reworking circuits and layout during complete room replacements.", icon: "Bath" },
      { title: "New cooker or appliance points", desc: "Adding suitable supplies for higher-demand kitchen equipment.", icon: "Zap" },
      { title: "Lighting redesigns", desc: "Better task lighting and cleaner switching for everyday cooking and family use.", icon: "Lightbulb" },
      { title: "Consumer unit and circuit upgrades", desc: "Supporting modern kitchens where the existing setup is no longer suitable.", icon: "ShieldCheck" },
    ],
    whyChooseTitle: "Why Kitchen Electrics Matter",
    whyChooseItems: [
      { title: "Better day-to-day use", desc: "Sockets, switches and lighting where you actually need them.", icon: "Home" },
      { title: "Safer appliance demand", desc: "Avoid overloading older circuits with a modern kitchen layout.", icon: "ShieldCheck" },
      { title: "Smoother renovation work", desc: "Plan the electrics early so the rest of the project runs more cleanly.", icon: "ClipboardCheck" },
      { title: "Domestic-first guidance", desc: "Advice from a local domestic electrician who works in real family homes.", icon: "Search" },
    ],
    relatedLinks: [
      { title: "House Rewiring", desc: "Relevant where the wider property wiring also needs bringing up to scratch.", href: "/services/house-rewiring", icon: "Home" },
      { title: "Consumer Unit Replacement", desc: "A common upgrade when a new kitchen pushes the electrical demand higher.", href: "/services/consumer-unit-replacement", icon: "ShieldCheck" },
      { title: "Smart Home Installation", desc: "Useful for modern kitchen lighting and control upgrades.", href: "/services/smart-home-installation", icon: "Cpu" },
      { title: "Electrical Inspections", desc: "Get clarity first if the current kitchen electrics are dated or uncertain.", href: "/services/electrical-inspections", icon: "ClipboardCheck" },
    ],
    faqs: [
      {
        q: "Can you do the electrical work for a kitchen refurbishment?",
        a: "Yes. We handle domestic kitchen electrical work including circuits, sockets, lighting, appliance supplies and planning around the wider renovation.",
      },
      {
        q: "Do kitchen refits often need electrical upgrades?",
        a: "Quite often, yes. Modern kitchens can place more demand on the installation, especially where older circuits or consumer units are still in place.",
      },
      {
        q: "Can you add sockets and island power?",
        a: "Yes. Additional sockets, worktop outlets and island power are common parts of kitchen electrical planning.",
      },
      {
        q: "Do you install kitchen lighting as well?",
        a: "Yes. We can install and plan kitchen lighting including under-cabinet lighting, pendants, spotlights and more practical switching arrangements.",
      },
      {
        q: "Is this service for domestic kitchens only?",
        a: "Yes. RIGS focuses on homeowners and domestic electrical work rather than commercial kitchen fit-outs.",
      },
    ],
    ctaTitle: "Planning A Kitchen Project?",
    ctaBody:
      "Tell us what is changing in the kitchen and which appliances or lighting you want to include. We will help you plan the electrical work properly and provide a clear quote.",
  },
  "landlord-electrical-certificates": {
    slug: "landlord-electrical-certificates",
    title: "Landlord Electrical Certificates Hertfordshire",
    eyebrow: "Local Domestic Electrician",
    metaTitle: "Landlord Electrical Certificates Hertfordshire | Rental EICR",
    metaDescription:
      "Landlord electrical certificates in Tring and Hertfordshire for rental EICRs, remedial work and clear domestic electrical compliance.",
    heroIntro:
      "Need landlord electrical certificates in Hertfordshire? RIGS Electrical helps landlords, letting agents and homeowners preparing a rental property with EICRs, certificate-led remedial work and straightforward advice. As a local domestic electrician, we focus on domestic rental homes and explain what is required in practical terms.",
    contactService: "Landlord Electrical Certificates Hertfordshire",
    contactLabel: "Book A Certificate",
    serviceType: "Landlord electrical certificates / EICR (domestic rental)",
    serviceDescription:
      "Landlord electrical certificates across Hertfordshire for domestic rental properties, including EICRs, remedial work and clear compliance-focused guidance.",
    overviewTitle: "Clear Certificate Support For Rental Properties",
    overviewParagraphs: [
      "Landlord electrical certificates usually come back to having the installation inspected properly, understanding the report clearly and getting any necessary remedial work handled without unnecessary delays. We help keep that process straightforward.",
      "This is useful for single rental properties, homes being prepared for first let, inherited houses moving into the rental market and landlords who need a clearer plan for older electrics before a tenancy begins or renews.",
    ],
    includedTitle: "What We Help Landlords With",
    includedItems: [
      { title: "Rental property EICRs", desc: "Inspection and reporting for domestic rental homes.", icon: "ClipboardCheck" },
      { title: "Clear remedial guidance", desc: "Understand which observations need action and what that work involves.", icon: "Search" },
      { title: "Follow-on electrical work", desc: "Handle common remedial jobs, upgrades and certificate-related fixes.", icon: "ShieldCheck" },
      { title: "Practical communication", desc: "Clear explanations for landlords, agents and property decision-makers.", icon: "Home" },
    ],
    commonJobsTitle: "Common Landlord Certificate Scenarios",
    commonJobs: [
      { title: "New rental property setup", desc: "Preparing a property for first let or for a new tenancy cycle.", icon: "Home" },
      { title: "Older rental homes", desc: "Where fuse boards, sockets or wiring age create uncertainty before inspection.", icon: "ShieldCheck" },
      { title: "Post-report remedial work", desc: "Completing the practical electrical work highlighted by the inspection.", icon: "ClipboardCheck" },
      { title: "Portfolio planning", desc: "Helping landlords prioritise jobs sensibly across more than one property.", icon: "Search" },
    ],
    whyChooseTitle: "Why Landlords Use RIGS",
    whyChooseItems: [
      { title: "Domestic rental focus", desc: "Work planned around homes, tenants and practical compliance needs.", icon: "Home" },
      { title: "Plain-English reporting support", desc: "Clear explanation of what the report means and what comes next.", icon: "Search" },
      { title: "Certification plus remedials", desc: "Useful when issues found during inspection also need resolving.", icon: "ClipboardCheck" },
      { title: "Local domestic electrician", desc: "Coverage across Hertfordshire from an electrician used to residential property work.", icon: "MapPin" },
    ],
    relatedLinks: [
      { title: "EICR Certificates", desc: "Our wider domestic EICR page for homeowners and landlords alike.", href: "/services/eicr-certificates", icon: "ClipboardCheck" },
      { title: "Electrical Inspections", desc: "Useful if you need clarity on older electrics before formal certification.", href: "/services/electrical-inspections", icon: "Search" },
      { title: "Consumer Unit Replacement", desc: "A common remedial or improvement route in older rental properties.", href: "/services/consumer-unit-replacement", icon: "ShieldCheck" },
      { title: "Electrical Fault Finding", desc: "Helpful where a rental property has repeated tripping or unresolved faults.", href: "/services/electrical-fault-finding", icon: "Search" },
    ],
    faqs: [
      {
        q: "Do landlords need an electrical certificate for a rental property?",
        a: "Landlords commonly need an up-to-date electrical inspection report for domestic rental properties. We can advise on the best route and handle the inspection work.",
      },
      {
        q: "Can you do the remedial work after the report?",
        a: "Yes. If the report identifies issues, we can explain them clearly and carry out the necessary remedial work where required.",
      },
      {
        q: "Do you work with landlords and letting agents?",
        a: "Yes. We help both private landlords and agents with domestic rental property electrical work across Hertfordshire.",
      },
      {
        q: "What if the property has an old fuse board?",
        a: "That is a common issue in rental homes. We can advise whether consumer unit replacement or other upgrades are needed as part of the overall work.",
      },
      {
        q: "Is this service only for domestic rentals?",
        a: "Yes. RIGS focuses on domestic electrical work and residential rental properties rather than commercial premises.",
      },
    ],
    ctaTitle: "Need Landlord Electrical Certificates?",
    ctaBody:
      "Tell us about the property, the tenancy stage and any existing reports or issues. We will advise on the right inspection and any likely follow-on work.",
  },
};

export const SERVICE_LANDING_PAGE_SLUGS = Object.keys(SERVICE_LANDING_PAGES);

export const DYNAMIC_SERVICE_ROUTES = SERVICE_LANDING_PAGE_SLUGS.map((slug) => `/services/${slug}`);

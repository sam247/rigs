export type BlogPost = {
  title: string;
  metaTitle?: string;
  description: string;
  href: string;
  dateLabel: string;
  sourceSlug?: string;
  relatedServiceHref?: string;
  ctaLabel?: string;
  internalLinks?: { title: string; href: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How Much Does It Cost to Rewire a House in Tring?",
    metaTitle: "House Rewire Cost in Tring & Hertfordshire",
    description:
      "What drives house rewire costs in the UK, published benchmark ranges for budgeting, and what to expect from a written quotation — not fixed RIGS prices.",
    href: "/blog/how-much-does-it-cost-to-rewire-a-house-in-tring",
    dateLabel: "August 2026",
    sourceSlug: "how-much-does-it-cost-to-rewire-a-house-in-tring",
    relatedServiceHref: "/services/house-rewiring",
    ctaLabel: "Request a rewire quote",
    internalLinks: [
      { title: "House rewiring service", href: "/services/house-rewiring" },
      { title: "Full vs partial rewire", href: "/blog/do-i-need-a-full-rewire-or-partial-rewire" },
      { title: "Electrical checks when buying", href: "/blog/electrical-checks-when-buying-a-house-in-tring" },
      { title: "Consumer unit replacement cost", href: "/blog/how-much-does-a-consumer-unit-replacement-cost" },
    ],
  },
  {
    title: "Do I Need a Full Rewire or Just a Partial Rewire?",
    metaTitle: "Full Rewire vs Partial Rewire",
    description:
      "How electricians decide between a full and partial rewire after an EICR, what each option includes, and when partial work is genuinely safe.",
    href: "/blog/do-i-need-a-full-rewire-or-partial-rewire",
    dateLabel: "August 2026",
    sourceSlug: "do-i-need-a-full-rewire-or-partial-rewire",
    relatedServiceHref: "/services/house-rewiring",
    ctaLabel: "Discuss rewire scope",
    internalLinks: [
      { title: "House rewiring", href: "/services/house-rewiring" },
      { title: "Rewire cost guide", href: "/blog/how-much-does-it-cost-to-rewire-a-house-in-tring" },
      { title: "Older home electrical problems", href: "/blog/common-electrical-problems-in-older-tring-and-hertfordshire-homes" },
      { title: "EICR for homeowners", href: "/blog/eicr-for-homeowners-when-should-you-get-your-electrics-checked" },
    ],
  },
  {
    title: "Buying a House in Tring? Electrical Checks to Make Before You Complete",
    metaTitle: "Electrical Checks When Buying a House",
    description:
      "What documents to request, what to look for on viewings, and when a pre-exchange EICR is worth paying for before you complete on a property.",
    href: "/blog/electrical-checks-when-buying-a-house-in-tring",
    dateLabel: "August 2026",
    sourceSlug: "electrical-checks-when-buying-a-house-in-tring",
    relatedServiceHref: "/services/electrical-inspections",
    ctaLabel: "Book a pre-purchase inspection",
    internalLinks: [
      { title: "Electrical inspections", href: "/services/electrical-inspections" },
      { title: "EICR certificates", href: "/services/eicr-certificates" },
      { title: "EICR for homeowners", href: "/blog/eicr-for-homeowners-when-should-you-get-your-electrics-checked" },
      { title: "Rewire cost planning", href: "/blog/how-much-does-it-cost-to-rewire-a-house-in-tring" },
    ],
  },
  {
    title: "How Much Does a Consumer Unit Replacement Cost?",
    metaTitle: "Consumer Unit Replacement Cost UK",
    description:
      "Published UK benchmark ranges for fuse board and consumer unit replacement, what affects your quote, and what certification you should receive.",
    href: "/blog/how-much-does-a-consumer-unit-replacement-cost",
    dateLabel: "August 2026",
    sourceSlug: "how-much-does-a-consumer-unit-replacement-cost",
    relatedServiceHref: "/services/consumer-unit-replacement",
    ctaLabel: "Get a consumer unit quote",
    internalLinks: [
      { title: "Consumer unit replacement", href: "/services/consumer-unit-replacement" },
      { title: "Fuse board warning signs", href: "/blog/how-to-tell-if-your-fuse-board-needs-replacing" },
      { title: "Consumer unit vs fuse box", href: "/blog/consumer-unit-vs-fuse-box" },
      { title: "Part P certification guide", href: "/blog/what-electrical-work-needs-part-p-certification" },
    ],
  },
  {
    title: "Signs a Socket or Electrical Outlet Is Unsafe",
    metaTitle: "Unsafe Socket Warning Signs",
    description:
      "Hot, buzzing or scorch-marked sockets need prompt attention. Learn the warning signs, safe steps before the electrician arrives, and typical causes.",
    href: "/blog/signs-a-socket-is-unsafe",
    dateLabel: "August 2026",
    sourceSlug: "signs-a-socket-is-unsafe",
    relatedServiceHref: "/services/electrical-fault-finding",
    ctaLabel: "Book fault finding",
    internalLinks: [
      { title: "Electrical fault finding", href: "/services/electrical-fault-finding" },
      { title: "Emergency electrician", href: "/services/emergency-electrician" },
      { title: "Why electrics keep tripping", href: "/blog/why-do-my-electrics-keep-tripping" },
      { title: "Adding sockets safely", href: "/blog/can-you-add-sockets-without-rewiring" },
    ],
  },
  {
    title: "Electrics for a House Extension: What to Plan Before Building Starts",
    metaTitle: "Extension Electrical Planning Guide",
    description:
      "Plan extension electrics before first fix: circuits, consumer unit capacity, socket positions, and Part P certification with your builder and electrician.",
    href: "/blog/electrics-for-a-house-extension-planning-guide",
    dateLabel: "August 2026",
    sourceSlug: "electrics-for-a-house-extension-planning-guide",
    relatedServiceHref: "/services/house-rewiring",
    ctaLabel: "Plan extension electrics",
    internalLinks: [
      { title: "House rewiring", href: "/services/house-rewiring" },
      { title: "Kitchen electrics renovation", href: "/blog/planning-kitchen-electrics-during-a-renovation" },
      { title: "Socket planning guide", href: "/blog/how-many-sockets-when-renovating-a-house" },
      { title: "Part P requirements", href: "/blog/what-electrical-work-needs-part-p-certification" },
    ],
  },
  {
    title: "How Many Sockets Do You Need When Renovating a House?",
    metaTitle: "Socket Count for Home Renovations",
    description:
      "Room-by-room socket planning for renovations, building regulations context for new work, and when extra outlets need new circuits.",
    href: "/blog/how-many-sockets-when-renovating-a-house",
    dateLabel: "August 2026",
    sourceSlug: "how-many-sockets-when-renovating-a-house",
    relatedServiceHref: "/services/kitchen-electrics",
    ctaLabel: "Plan renovation electrics",
    internalLinks: [
      { title: "Kitchen electrics", href: "/services/kitchen-electrics" },
      { title: "Adding sockets without rewiring", href: "/blog/can-you-add-sockets-without-rewiring" },
      { title: "Extension electrics planning", href: "/blog/electrics-for-a-house-extension-planning-guide" },
      { title: "House rewiring", href: "/services/house-rewiring" },
    ],
  },
  {
    title: "Can You Add More Sockets Without Rewiring the House?",
    metaTitle: "Adding Sockets Without a Full Rewire",
    description:
      "When extra sockets can go on existing circuits, when a new circuit or rewire is needed, and what Part P certification applies.",
    href: "/blog/can-you-add-sockets-without-rewiring",
    dateLabel: "August 2026",
    sourceSlug: "can-you-add-sockets-without-rewiring",
    relatedServiceHref: "/services/house-rewiring",
    ctaLabel: "Ask about socket additions",
    internalLinks: [
      { title: "Socket planning for renovations", href: "/blog/how-many-sockets-when-renovating-a-house" },
      { title: "Full vs partial rewire", href: "/blog/do-i-need-a-full-rewire-or-partial-rewire" },
      { title: "Unsafe socket signs", href: "/blog/signs-a-socket-is-unsafe" },
      { title: "Part P guide", href: "/blog/what-electrical-work-needs-part-p-certification" },
    ],
  },
  {
    title: "Garden Electrics: Outdoor Sockets, Lighting and Garden Room Power",
    metaTitle: "Garden Electrics & Outdoor Sockets Guide",
    description:
      "RCD-protected outdoor circuits, garden room supplies, SWA cable principles, and when fixed wiring replaces extension leads.",
    href: "/blog/garden-electrics-outdoor-sockets-lighting-garden-rooms",
    dateLabel: "August 2026",
    sourceSlug: "garden-electrics-outdoor-sockets-lighting-garden-rooms",
    relatedServiceHref: "/services/outdoor-lighting",
    ctaLabel: "Ask about garden electrics",
    internalLinks: [
      { title: "Outdoor lighting installation", href: "/services/outdoor-lighting" },
      { title: "Security lighting", href: "/services/security-lighting" },
      { title: "Part P for outdoor work", href: "/blog/what-electrical-work-needs-part-p-certification" },
      { title: "Extension electrics planning", href: "/blog/electrics-for-a-house-extension-planning-guide" },
    ],
  },
  {
    title: "What Electrical Work Needs Part P Certification?",
    metaTitle: "Part P Electrical Work Guide",
    description:
      "Notifiable vs non-notifiable domestic electrical work in England and Wales, certificates you should receive, and why registered electricians matter.",
    href: "/blog/what-electrical-work-needs-part-p-certification",
    dateLabel: "August 2026",
    sourceSlug: "what-electrical-work-needs-part-p-certification",
    relatedServiceHref: "/services/electrical-inspections",
    ctaLabel: "Speak to a registered electrician",
    internalLinks: [
      { title: "Electrical inspections", href: "/services/electrical-inspections" },
      { title: "Consumer unit replacement cost", href: "/blog/how-much-does-a-consumer-unit-replacement-cost" },
      { title: "Garden electrics", href: "/blog/garden-electrics-outdoor-sockets-lighting-garden-rooms" },
      { title: "EICR for homeowners", href: "/blog/eicr-for-homeowners-when-should-you-get-your-electrics-checked" },
    ],
  },
  {
    title: "Why an Electric Shower Might Be Right for Your Home",
    metaTitle: "Electric Shower Benefits for Your Home",
    description:
      "Thinking about an electric shower? Compare benefits, costs, cable requirements and when to call a Tring electrician for safe installation.",
    href: "/why-an-electric-shower-might-be-right-for-your-home",
    dateLabel: "July 2026",
    sourceSlug: "why-an-electric-shower-might-be-right-for-your-home",
    relatedServiceHref: "/services/electric-shower-installation",
    ctaLabel: "Ask about electric shower installation",
    internalLinks: [
      { title: "Electric shower installation in Tring", href: "/electrician/tring/electric-shower-installation" },
      { title: "Consumer unit replacement", href: "/services/consumer-unit-replacement" },
      { title: "Electrical inspections", href: "/services/electrical-inspections" },
    ],
  },
  {
    title: "Do I Need an Emergency Electrician or Can It Wait?",
    metaTitle: "Emergency Electrician or Standard Visit?",
    description:
      "Burning smell, tripping circuits or power loss? Learn when to call an emergency electrician in Tring and when a standard visit is enough.",
    href: "/blog/do-i-need-an-emergency-electrician-or-can-it-wait",
    dateLabel: "July 2026",
    sourceSlug: "do-i-need-an-emergency-electrician-or-can-it-wait",
    relatedServiceHref: "/services/emergency-electrician",
    ctaLabel: "Get emergency electrical help",
    internalLinks: [
      { title: "Unsafe socket warning signs", href: "/blog/signs-a-socket-is-unsafe" },
      { title: "Emergency electrician Tring", href: "/electrician/tring/emergency-electrician" },
      { title: "Electrical fault finding", href: "/services/electrical-fault-finding" },
      { title: "Why electrics keep tripping", href: "/blog/why-do-my-electrics-keep-tripping" },
    ],
  },
  {
    title: "Common Electrical Problems in Older Tring and Hertfordshire Homes",
    metaTitle: "Electrical Problems in Older Tring Homes",
    description:
      "Older home in Tring or Hertfordshire? Spot outdated wiring, old fuse boards, tripping circuits and the signs you need an electrical inspection.",
    href: "/blog/common-electrical-problems-in-older-tring-and-hertfordshire-homes",
    dateLabel: "July 2026",
    sourceSlug: "common-electrical-problems-in-older-tring-and-hertfordshire-homes",
    relatedServiceHref: "/electrician/tring",
    ctaLabel: "Speak to an electrician in Tring",
    internalLinks: [
      { title: "Full vs partial rewire", href: "/blog/do-i-need-a-full-rewire-or-partial-rewire" },
      { title: "Rewire cost guide", href: "/blog/how-much-does-it-cost-to-rewire-a-house-in-tring" },
      { title: "House rewiring", href: "/services/house-rewiring" },
      { title: "EICR certificates", href: "/services/eicr-certificates" },
    ],
  },
  {
    title: "How to Tell If Your Fuse Board Needs Replacing",
    description:
      "Old fuse board, no RCD protection or nuisance tripping? Learn when to replace a fuse box with a modern consumer unit in Hertfordshire.",
    href: "/blog/how-to-tell-if-your-fuse-board-needs-replacing",
    dateLabel: "July 2026",
    sourceSlug: "how-to-tell-if-your-fuse-board-needs-replacing",
    relatedServiceHref: "/services/fuse-board-upgrades",
    ctaLabel: "Ask about fuse board upgrades",
    internalLinks: [
      { title: "Fuse board upgrades in Tring", href: "/electrician/tring/fuse-board-upgrades" },
      { title: "Consumer unit replacement cost", href: "/blog/how-much-does-a-consumer-unit-replacement-cost" },
      { title: "Consumer unit vs fuse box", href: "/blog/consumer-unit-vs-fuse-box" },
      { title: "Part P certification guide", href: "/blog/what-electrical-work-needs-part-p-certification" },
    ],
  },
  {
    title: "What Happens During an Electrical Fault Finding Visit?",
    metaTitle: "Electrical Fault Finding: What Happens On a Visit",
    description:
      "Need electrical fault finding? See how a domestic electrician traces tripping circuits, dead sockets and flickering lights — and when to book a visit.",
    href: "/blog/what-happens-during-an-electrical-fault-finding-visit",
    dateLabel: "July 2026",
    sourceSlug: "what-happens-during-an-electrical-fault-finding-visit",
    relatedServiceHref: "/services/electrical-fault-finding",
    ctaLabel: "Book fault finding",
    internalLinks: [
      { title: "Unsafe socket warning signs", href: "/blog/signs-a-socket-is-unsafe" },
      { title: "Electrical fault finding in Tring", href: "/electrician/tring/electrical-fault-finding" },
      { title: "Why electrics keep tripping", href: "/blog/why-do-my-electrics-keep-tripping" },
      { title: "Flickering lights guide", href: "/blog/flickering-lights-common-causes" },
    ],
  },
  {
    title: "Electricians in Tring: What Domestic Electrical Work Usually Involves",
    metaTitle: "Electricians in Tring: Domestic Work Guide",
    description:
      "Need an electrician in Tring? Learn the domestic jobs local electricians handle, from faults and EICRs to consumer units and kitchen electrics.",
    href: "/blog/electricians-in-tring-what-domestic-electrical-work-usually-involves",
    dateLabel: "July 2026",
    sourceSlug: "electricians-in-tring-what-domestic-electrical-work-usually-involves",
    relatedServiceHref: "/electrician/tring",
    ctaLabel: "Contact a Tring electrician",
    internalLinks: [
      { title: "Emergency electrician Tring", href: "/electrician/tring/emergency-electrician" },
      { title: "Fuse board upgrades Tring", href: "/electrician/tring/fuse-board-upgrades" },
      { title: "EICR certificates Tring", href: "/electrician/tring/eicr-certificates" },
    ],
  },
  {
    title: "EICR for Homeowners: When Should You Get Your Electrics Checked?",
    metaTitle: "EICR for Homeowners: When to Book",
    description:
      "When should homeowners book an EICR? Learn what the electrical safety check covers and when Tring homes should be inspected.",
    href: "/blog/eicr-for-homeowners-when-should-you-get-your-electrics-checked",
    dateLabel: "July 2026",
    sourceSlug: "eicr-for-homeowners-when-should-you-get-your-electrics-checked",
    relatedServiceHref: "/services/eicr-certificates",
    ctaLabel: "Ask about an EICR",
    internalLinks: [
      { title: "Electrical checks when buying", href: "/blog/electrical-checks-when-buying-a-house-in-tring" },
      { title: "EICR certificates in Tring", href: "/electrician/tring/eicr-certificates" },
      { title: "Electrical inspections", href: "/services/electrical-inspections" },
      { title: "Part P guide", href: "/blog/what-electrical-work-needs-part-p-certification" },
    ],
  },
  {
    title: "Planning Kitchen Electrics During a Renovation",
    description:
      "Renovating a kitchen? Plan sockets, cooker circuits, appliance points and lighting before the fit-out locks your electrical layout in.",
    href: "/blog/planning-kitchen-electrics-during-a-renovation",
    dateLabel: "July 2026",
    sourceSlug: "planning-kitchen-electrics-during-a-renovation",
    relatedServiceHref: "/services/kitchen-electrics",
    ctaLabel: "Plan kitchen electrics",
    internalLinks: [
      { title: "Socket planning for renovations", href: "/blog/how-many-sockets-when-renovating-a-house" },
      { title: "Extension electrics planning", href: "/blog/electrics-for-a-house-extension-planning-guide" },
      { title: "Kitchen electrical installation", href: "/services/kitchen-electrics" },
      { title: "Part P guide", href: "/blog/what-electrical-work-needs-part-p-certification" },
    ],
  },
  {
    title: "Consumer Unit vs Fuse Box: What’s the Difference?",
    description:
      "Understand the key differences between a consumer unit and an old fuse box, why it matters for safety and compliance, and when to consider an upgrade.",
    href: "/blog/consumer-unit-vs-fuse-box",
    dateLabel: "June 2026",
    relatedServiceHref: "/services/consumer-unit-replacement",
    internalLinks: [
      { title: "Consumer unit replacement cost", href: "/blog/how-much-does-a-consumer-unit-replacement-cost" },
      { title: "Fuse board warning signs", href: "/blog/how-to-tell-if-your-fuse-board-needs-replacing" },
      { title: "Part P certification guide", href: "/blog/what-electrical-work-needs-part-p-certification" },
    ],
  },
  {
    title: "Why Do My Electrics Keep Tripping?",
    description: "How to tell what’s causing nuisance trips, what you can safely check at home, and when it’s time for proper electrical testing.",
    href: "/blog/why-do-my-electrics-keep-tripping",
    dateLabel: "June 2026",
    relatedServiceHref: "/services/electrical-fault-finding",
    internalLinks: [
      { title: "Unsafe socket warning signs", href: "/blog/signs-a-socket-is-unsafe" },
      { title: "Consumer unit vs fuse box", href: "/blog/consumer-unit-vs-fuse-box" },
      { title: "Electrical fault finding", href: "/services/electrical-fault-finding" },
    ],
  },
  {
    title: "Flickering Lights: Common Causes in UK Homes",
    description: "LED vs dimmer issues, loose-connection warning signs, and the practical checks that help you decide whether to book fault finding.",
    href: "/blog/flickering-lights-common-causes",
    dateLabel: "June 2026",
    relatedServiceHref: "/services/electrical-fault-finding",
    internalLinks: [
      { title: "Why electrics keep tripping", href: "/blog/why-do-my-electrics-keep-tripping" },
      { title: "Unsafe socket signs", href: "/blog/signs-a-socket-is-unsafe" },
      { title: "Fault finding visit guide", href: "/blog/what-happens-during-an-electrical-fault-finding-visit" },
    ],
  },
];

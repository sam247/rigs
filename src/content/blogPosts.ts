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
      { title: "Electrician Tring", href: "/electrician/tring" },
      { title: "House rewiring", href: "/services/house-rewiring" },
      { title: "EICR certificates", href: "/services/eicr-certificates" },
      { title: "Fuse board upgrades", href: "/services/fuse-board-upgrades" },
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
      { title: "Consumer unit replacement", href: "/services/consumer-unit-replacement" },
      { title: "Consumer unit vs fuse box", href: "/blog/consumer-unit-vs-fuse-box" },
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
      { title: "Electrical fault finding in Tring", href: "/electrician/tring/electrical-fault-finding" },
      { title: "Emergency electrician", href: "/services/emergency-electrician" },
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
      { title: "EICR certificates in Tring", href: "/electrician/tring/eicr-certificates" },
      { title: "Electrical inspections", href: "/services/electrical-inspections" },
      { title: "Consumer unit replacement", href: "/services/consumer-unit-replacement" },
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
      { title: "Kitchen electrical installation", href: "/services/kitchen-electrics" },
      { title: "Consumer unit replacement", href: "/services/consumer-unit-replacement" },
      { title: "House rewiring", href: "/services/house-rewiring" },
    ],
  },
  {
    title: "Consumer Unit vs Fuse Box: What’s the Difference?",
    description:
      "Understand the key differences between a consumer unit and an old fuse box, why it matters for safety and compliance, and when to consider an upgrade.",
    href: "/blog/consumer-unit-vs-fuse-box",
    dateLabel: "June 2026",
  },
  {
    title: "Why Do My Electrics Keep Tripping?",
    description: "How to tell what’s causing nuisance trips, what you can safely check at home, and when it’s time for proper electrical testing.",
    href: "/blog/why-do-my-electrics-keep-tripping",
    dateLabel: "June 2026",
  },
  {
    title: "Flickering Lights: Common Causes in UK Homes",
    description: "LED vs dimmer issues, loose-connection warning signs, and the practical checks that help you decide whether to book fault finding.",
    href: "/blog/flickering-lights-common-causes",
    dateLabel: "June 2026",
  },
];

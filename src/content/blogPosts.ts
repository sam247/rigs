export type BlogPost = {
  title: string;
  description: string;
  href: string;
  dateLabel: string;
};

export const BLOG_POSTS: BlogPost[] = [
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

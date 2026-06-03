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
    description: "Common causes of tripping electrics, safe homeowner checks, and when to book electrical fault finding.",
    href: "/blog/why-do-my-electrics-keep-tripping",
    dateLabel: "June 2026",
  },
  {
    title: "Flickering Lights: Common Causes in UK Homes",
    description: "What flickering can mean, what’s normal with LEDs, and when it could indicate a loose connection.",
    href: "/blog/flickering-lights-common-causes",
    dateLabel: "June 2026",
  },
];

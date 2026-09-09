import type { Metadata } from "next";
import ConsumerUnitVsFuseBoxPage from "@/components/pages/ConsumerUnitVsFuseBoxPage";

export const metadata: Metadata = {
  title: "Consumer Unit vs Fuse Box: What’s the Difference? | RIGS",
  description:
    "Difference between a fuse box and a consumer unit explained — RCD protection, when to upgrade an old fuse box in Tring & Hertfordshire, and Fusebox-brand boards.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog/consumer-unit-vs-fuse-box" },
  openGraph: {
    type: "article",
    title: "Consumer Unit vs Fuse Box: What’s the Difference? | RIGS",
    description:
      "Difference between a fuse box and a consumer unit explained — RCD protection, when to upgrade an old fuse box in Tring & Hertfordshire, and Fusebox-brand boards.",
    url: "https://rigselectrical.co.uk/blog/consumer-unit-vs-fuse-box",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consumer Unit vs Fuse Box: What’s the Difference? | RIGS",
    description:
      "Difference between a fuse box and a consumer unit explained — RCD protection, when to upgrade an old fuse box in Tring & Hertfordshire, and Fusebox-brand boards.",
  },
};

export default function Page() {
  return <ConsumerUnitVsFuseBoxPage />;
}

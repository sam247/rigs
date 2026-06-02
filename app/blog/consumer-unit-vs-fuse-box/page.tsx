import type { Metadata } from "next";
import ConsumerUnitVsFuseBoxPage from "@/components/pages/ConsumerUnitVsFuseBoxPage";

export const metadata: Metadata = {
  title: "Consumer Unit vs Fuse Box: What’s the Difference? | RIGS Electrical",
  description:
    "Learn the difference between a consumer unit and an old fuse box, why it matters for safety and compliance, and when to consider an upgrade in Tring and Hertfordshire.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog/consumer-unit-vs-fuse-box" },
  openGraph: {
    type: "article",
    title: "Consumer Unit vs Fuse Box: What’s the Difference? | RIGS Electrical",
    description:
      "Learn the difference between a consumer unit and an old fuse box, why it matters for safety and compliance, and when to consider an upgrade in Tring and Hertfordshire.",
    url: "https://rigselectrical.co.uk/blog/consumer-unit-vs-fuse-box",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consumer Unit vs Fuse Box: What’s the Difference? | RIGS Electrical",
    description:
      "Learn the difference between a consumer unit and an old fuse box, why it matters for safety and compliance, and when to consider an upgrade in Tring and Hertfordshire.",
  },
};

export default function Page() {
  return <ConsumerUnitVsFuseBoxPage />;
}

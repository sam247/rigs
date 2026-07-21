import type { Metadata } from "next";
import ConsumerUnitVsFuseBoxPage from "@/components/pages/ConsumerUnitVsFuseBoxPage";

export const metadata: Metadata = {
  title: "Consumer Unit vs Fuse Box | Should You Upgrade? | RIGS",
  description:
    "Old fuse box at home? Learn the difference between fuse boxes and consumer units, safety warning signs, and when to upgrade in Tring or Hertfordshire.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog/consumer-unit-vs-fuse-box" },
  openGraph: {
    type: "article",
    title: "Consumer Unit vs Fuse Box | Should You Upgrade? | RIGS",
    description:
      "Old fuse box at home? Learn the difference between fuse boxes and consumer units, safety warning signs, and when to upgrade in Tring or Hertfordshire.",
    url: "https://rigselectrical.co.uk/blog/consumer-unit-vs-fuse-box",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consumer Unit vs Fuse Box | Should You Upgrade? | RIGS",
    description:
      "Old fuse box at home? Learn the difference between fuse boxes and consumer units, safety warning signs, and when to upgrade in Tring or Hertfordshire.",
  },
};

export default function Page() {
  return <ConsumerUnitVsFuseBoxPage />;
}

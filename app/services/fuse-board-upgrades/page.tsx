import type { Metadata } from "next";
import FuseBoardUpgradesPage from "@/components/pages/FuseBoardUpgradesPage";

export const metadata: Metadata = {
  title: "Fuse Board Upgrades Hertfordshire | Consumer Unit Replacement | RIGS Electrical",
  description:
    "Need a fuse board upgrade in Hertfordshire? RIGS Electrical replaces outdated consumer units with modern RCD/RCBO protection, tidy workmanship and proper certification.",
  alternates: { canonical: "https://rigselectrical.co.uk/services/fuse-board-upgrades" },
  openGraph: {
    type: "website",
    title: "Fuse Board Upgrades Hertfordshire | Consumer Unit Replacement | RIGS Electrical",
    description:
      "Need a fuse board upgrade in Hertfordshire? RIGS Electrical replaces outdated consumer units with modern RCD/RCBO protection, tidy workmanship and proper certification.",
    url: "https://rigselectrical.co.uk/services/fuse-board-upgrades",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuse Board Upgrades Hertfordshire | Consumer Unit Replacement | RIGS Electrical",
    description:
      "Need a fuse board upgrade in Hertfordshire? RIGS Electrical replaces outdated consumer units with modern RCD/RCBO protection, tidy workmanship and proper certification.",
  },
};

export default function Page() {
  return <FuseBoardUpgradesPage />;
}

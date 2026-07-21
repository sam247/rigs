import type { Metadata } from "next";
import FuseBoardUpgradesPage from "@/components/pages/FuseBoardUpgradesPage";

export const metadata: Metadata = {
  title: "Fuse Board Upgrades Hertfordshire | Consumer Unit Replacement",
  description:
    "Old fuse board or nuisance tripping? RIGS Electrical upgrades consumer units in Tring and Hertfordshire with RCD/RCBO protection and certification.",
  alternates: { canonical: "https://rigselectrical.co.uk/services/fuse-board-upgrades" },
  openGraph: {
    type: "website",
    title: "Fuse Board Upgrades Hertfordshire | Consumer Unit Replacement",
    description:
      "Old fuse board or nuisance tripping? RIGS Electrical upgrades consumer units in Tring and Hertfordshire with RCD/RCBO protection and certification.",
    url: "https://rigselectrical.co.uk/services/fuse-board-upgrades",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuse Board Upgrades Hertfordshire | Consumer Unit Replacement",
    description:
      "Old fuse board or nuisance tripping? RIGS Electrical upgrades consumer units in Tring and Hertfordshire with RCD/RCBO protection and certification.",
  },
};

export default function Page() {
  return <FuseBoardUpgradesPage />;
}

import type { Metadata } from "next";
import ServicesHubPage from "@/components/pages/ServicesHubPage";

export const metadata: Metadata = {
  title: "Domestic Electrical Services Hertfordshire | RIGS Electrical",
  description:
    "Domestic electrical services across Tring and Hertfordshire: urgent faults, fault finding, fuse board upgrades, EICRs, rewires, showers and kitchen electrics.",
  alternates: { canonical: "https://rigselectrical.co.uk/services" },
  openGraph: {
    type: "website",
    title: "Domestic Electrical Services Hertfordshire | RIGS Electrical",
    description:
      "Domestic electrical services across Tring and Hertfordshire: urgent faults, fault finding, fuse board upgrades, EICRs, rewires, showers and kitchen electrics.",
    url: "https://rigselectrical.co.uk/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domestic Electrical Services Hertfordshire | RIGS Electrical",
    description:
      "Domestic electrical services across Tring and Hertfordshire: urgent faults, fault finding, fuse board upgrades, EICRs, rewires, showers and kitchen electrics.",
  },
};

export default function Page() {
  return <ServicesHubPage />;
}

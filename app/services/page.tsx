import type { Metadata } from "next";
import ServicesHubPage from "@/components/pages/ServicesHubPage";

export const metadata: Metadata = {
  title: "Electrical Services Hertfordshire | Domestic Electrician | RIGS Electrical",
  description:
    "Explore RIGS Electrical services across Hertfordshire: emergency call-outs, fault finding, fuse board upgrades, EICR certificates, rewires and consumer unit upgrades.",
  alternates: { canonical: "https://rigselectrical.co.uk/services" },
  openGraph: {
    type: "website",
    title: "Electrical Services Hertfordshire | Domestic Electrician | RIGS Electrical",
    description:
      "Explore RIGS Electrical services across Hertfordshire: emergency call-outs, fault finding, fuse board upgrades, EICR certificates, rewires and consumer unit upgrades.",
    url: "https://rigselectrical.co.uk/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Services Hertfordshire | Domestic Electrician | RIGS Electrical",
    description:
      "Explore RIGS Electrical services across Hertfordshire: emergency call-outs, fault finding, fuse board upgrades, EICR certificates, rewires and consumer unit upgrades.",
  },
};

export default function Page() {
  return <ServicesHubPage />;
}


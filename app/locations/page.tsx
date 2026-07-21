import type { Metadata } from "next";
import LocationsHubPage from "@/components/pages/LocationsHubPage";

export const metadata: Metadata = {
  title: "Electrician Near Tring & Hertfordshire | Areas Covered | RIGS",
  description:
    "Find RIGS Electrical coverage for Tring, St Albans, Hemel Hempstead, Watford and Hertfordshire towns. Domestic faults, EICRs and consumer units.",
  alternates: { canonical: "https://rigselectrical.co.uk/locations" },
  openGraph: {
    type: "website",
    title: "Electrician Near Tring & Hertfordshire | Areas Covered | RIGS",
    description:
      "Find RIGS Electrical coverage for Tring, St Albans, Hemel Hempstead, Watford and Hertfordshire towns. Domestic faults, EICRs and consumer units.",
    url: "https://rigselectrical.co.uk/locations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician Near Tring & Hertfordshire | Areas Covered | RIGS",
    description:
      "Find RIGS Electrical coverage for Tring, St Albans, Hemel Hempstead, Watford and Hertfordshire towns. Domestic faults, EICRs and consumer units.",
  },
};

export default function Page() {
  return <LocationsHubPage />;
}

import type { Metadata } from "next";
import LocationsHubPage from "@/components/pages/LocationsHubPage";

export const metadata: Metadata = {
  title: "Electrician Locations Hertfordshire | Areas Covered | RIGS Electrical",
  description:
    "Browse RIGS Electrical coverage areas across Hertfordshire and nearby regions. Find your nearest local electrician page for domestic repairs, upgrades and inspections.",
  alternates: { canonical: "https://rigselectrical.co.uk/locations" },
  openGraph: {
    type: "website",
    title: "Electrician Locations Hertfordshire | Areas Covered | RIGS Electrical",
    description:
      "Browse RIGS Electrical coverage areas across Hertfordshire and nearby regions. Find your nearest local electrician page for domestic repairs, upgrades and inspections.",
    url: "https://rigselectrical.co.uk/locations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician Locations Hertfordshire | Areas Covered | RIGS Electrical",
    description:
      "Browse RIGS Electrical coverage areas across Hertfordshire and nearby regions. Find your nearest local electrician page for domestic repairs, upgrades and inspections.",
  },
};

export default function Page() {
  return <LocationsHubPage />;
}


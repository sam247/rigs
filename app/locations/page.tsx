import type { Metadata } from "next";
import LocationsHubPage from "@/components/pages/LocationsHubPage";

export const metadata: Metadata = {
  title: "Electrician Locations | Herts, Bucks & Beds | RIGS",
  description:
    "Find RIGS Electrical coverage across Tring, Pitstone, Marsworth, Aylesbury, Hemel Hempstead, Berkhamsted, Wendover and towns in Hertfordshire, Buckinghamshire and Bedfordshire.",
  alternates: { canonical: "https://rigselectrical.co.uk/locations" },
  openGraph: {
    type: "website",
    title: "Electrician Locations | Herts, Bucks & Beds | RIGS",
    description:
      "Find RIGS Electrical coverage across Tring, Pitstone, Marsworth, Aylesbury, Hemel Hempstead, Berkhamsted, Wendover and towns in Hertfordshire, Buckinghamshire and Bedfordshire.",
    url: "https://rigselectrical.co.uk/locations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician Locations | Herts, Bucks & Beds | RIGS",
    description:
      "Find RIGS Electrical coverage across Tring, Pitstone, Marsworth, Aylesbury, Hemel Hempstead, Berkhamsted, Wendover and towns in Hertfordshire, Buckinghamshire and Bedfordshire.",
  },
};

export default function Page() {
  return <LocationsHubPage />;
}

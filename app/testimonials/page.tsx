import type { Metadata } from "next";
import TestimonialsPage from "@/components/pages/TestimonialsPage";

export const metadata: Metadata = {
  title: "Electrician Reviews Tring | RIGS Electrical Customers",
  description:
    "Read customer reviews for RIGS Electrical in Tring and Hertfordshire. Domestic electrician feedback for fault finding, lighting, rewires and upgrades.",
  alternates: { canonical: "https://rigselectrical.co.uk/testimonials" },
  openGraph: {
    type: "website",
    title: "Electrician Reviews Tring | RIGS Electrical Customers",
    description:
      "Read customer reviews for RIGS Electrical in Tring and Hertfordshire. Domestic electrician feedback for fault finding, lighting, rewires and upgrades.",
    url: "https://rigselectrical.co.uk/testimonials",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician Reviews Tring | RIGS Electrical Customers",
    description:
      "Read customer reviews for RIGS Electrical in Tring and Hertfordshire. Domestic electrician feedback for fault finding, lighting, rewires and upgrades.",
  },
};

export default function Page() {
  return <TestimonialsPage />;
}

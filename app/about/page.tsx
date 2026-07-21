import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About RIGS Electrical | NICEIC Domestic Electrician Tring",
  description: "Meet RIGS Electrical, a NICEIC registered domestic electrician in Tring helping homeowners with safe repairs, EICRs, consumer units and rewires.",
  alternates: { canonical: "https://rigselectrical.co.uk/about" },
  openGraph: {
    type: "website",
    title: "About RIGS Electrical | NICEIC Domestic Electrician Tring",
    description:
      "Meet RIGS Electrical, a NICEIC registered domestic electrician in Tring helping homeowners with safe repairs, EICRs, consumer units and rewires.",
    url: "https://rigselectrical.co.uk/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About RIGS Electrical | NICEIC Domestic Electrician Tring",
    description:
      "Meet RIGS Electrical, a NICEIC registered domestic electrician in Tring helping homeowners with safe repairs, EICRs, consumer units and rewires.",
  },
};

export default function Page() {
  return <AboutPage />;
}

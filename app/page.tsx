import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Electrician Tring HP23 | NICEIC Domestic Electrician | RIGS",
  description:
    "Need an electrician in Tring? Call 07989 205468 for NICEIC domestic fault finding, urgent repairs, consumer unit upgrades, EICRs and clear quotes.",
  alternates: { canonical: "https://rigselectrical.co.uk/" },
  openGraph: {
    type: "website",
    title: "Electrician Tring HP23 | NICEIC Domestic Electrician | RIGS",
    description:
      "Need an electrician in Tring? Call 07989 205468 for NICEIC domestic fault finding, urgent repairs, consumer unit upgrades, EICRs and clear quotes.",
    url: "https://rigselectrical.co.uk/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician Tring HP23 | NICEIC Domestic Electrician | RIGS",
    description:
      "Need an electrician in Tring? Call 07989 205468 for NICEIC domestic fault finding, urgent repairs, consumer unit upgrades, EICRs and clear quotes.",
  },
};

export default function Page() {
  return <HomePage />;
}

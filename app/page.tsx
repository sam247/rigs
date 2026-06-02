import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Electrician in Tring, Hertfordshire | RIGS Electrical",
  description:
    "NICEIC registered Tring electricians for rewires, kitchen & bathroom electrics, fault finding and more across Hertfordshire. Get a quote today.",
  alternates: { canonical: "https://rigselectrical.co.uk/" },
  openGraph: {
    type: "website",
    title: "Electrician in Tring, Hertfordshire | RIGS Electrical",
    description:
      "NICEIC registered Tring electricians for rewires, kitchen & bathroom electrics, fault finding and more across Hertfordshire. Get a quote today.",
    url: "https://rigselectrical.co.uk/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician in Tring, Hertfordshire | RIGS Electrical",
    description:
      "NICEIC registered Tring electricians for rewires, kitchen & bathroom electrics, fault finding and more across Hertfordshire. Get a quote today.",
  },
};

export default function Page() {
  return <HomePage />;
}

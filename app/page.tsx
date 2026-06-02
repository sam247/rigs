import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Electrician Tring | Emergency Electricians Tring | Tring, Hertfordshire UK",
  description:
    "NICEIC registered Tring electricians for rewires, kitchen & bathroom electrics, fault finding and more across Hertfordshire. Get a quote today.",
  alternates: { canonical: "https://www.rigselectrical.co.uk/" },
};

export default function Page() {
  return <HomePage />;
}

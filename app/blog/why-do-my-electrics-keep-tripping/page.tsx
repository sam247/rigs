import type { Metadata } from "next";
import WhyDoMyElectricsKeepTrippingPage from "@/components/pages/WhyDoMyElectricsKeepTrippingPage";

export const metadata: Metadata = {
  title: "Why Do My Electrics Keep Tripping? Causes & Safe Checks",
  description:
    "Electrics keep tripping? Learn safe checks, common RCD/RCBO causes, and when to book electrical fault finding in Tring or Hertfordshire.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog/why-do-my-electrics-keep-tripping" },
  openGraph: {
    type: "article",
    title: "Why Do My Electrics Keep Tripping? Causes & Safe Checks",
    description:
      "Electrics keep tripping? Learn safe checks, common RCD/RCBO causes, and when to book electrical fault finding in Tring or Hertfordshire.",
    url: "https://rigselectrical.co.uk/blog/why-do-my-electrics-keep-tripping",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Do My Electrics Keep Tripping? Causes & Safe Checks",
    description:
      "Electrics keep tripping? Learn safe checks, common RCD/RCBO causes, and when to book electrical fault finding in Tring or Hertfordshire.",
  },
};

export default function Page() {
  return <WhyDoMyElectricsKeepTrippingPage />;
}

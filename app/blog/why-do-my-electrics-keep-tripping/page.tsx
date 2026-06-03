import type { Metadata } from "next";
import WhyDoMyElectricsKeepTrippingPage from "@/components/pages/WhyDoMyElectricsKeepTrippingPage";

export const metadata: Metadata = {
  title: "Why Do My Electrics Keep Tripping? Causes & Safe Checks | RIGS Electrical",
  description:
    "Why your electrics keep tripping, what patterns to look for, safe checks you can do at home, and when to book fault finding in Hertfordshire.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog/why-do-my-electrics-keep-tripping" },
  openGraph: {
    type: "article",
    title: "Why Do My Electrics Keep Tripping? Causes & Safe Checks | RIGS Electrical",
    description:
      "Why your electrics keep tripping, what patterns to look for, safe checks you can do at home, and when to book fault finding in Hertfordshire.",
    url: "https://rigselectrical.co.uk/blog/why-do-my-electrics-keep-tripping",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Do My Electrics Keep Tripping? Causes & Safe Checks | RIGS Electrical",
    description:
      "Why your electrics keep tripping, what patterns to look for, safe checks you can do at home, and when to book fault finding in Hertfordshire.",
  },
};

export default function Page() {
  return <WhyDoMyElectricsKeepTrippingPage />;
}

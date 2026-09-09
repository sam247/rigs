import type { Metadata } from "next";
import WhyDoMyElectricsKeepTrippingPage from "@/components/pages/WhyDoMyElectricsKeepTrippingPage";

export const metadata: Metadata = {
  title: "Why Do My Electrics Keep Tripping? Causes & Safe Checks | RIGS",
  description:
    "RCD or MCB keeps tripping? Safe checks, common causes, and when to book fault finding — including circuit tripping issues around Hemel Hempstead and Tring.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog/why-do-my-electrics-keep-tripping" },
  openGraph: {
    type: "article",
    title: "Why Do My Electrics Keep Tripping? Causes & Safe Checks | RIGS",
    description:
      "RCD or MCB keeps tripping? Safe checks, common causes, and when to book fault finding — including circuit tripping issues around Hemel Hempstead and Tring.",
    url: "https://rigselectrical.co.uk/blog/why-do-my-electrics-keep-tripping",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Do My Electrics Keep Tripping? Causes & Safe Checks | RIGS",
    description:
      "RCD or MCB keeps tripping? Safe checks, common causes, and when to book fault finding — including circuit tripping issues around Hemel Hempstead and Tring.",
  },
};

export default function Page() {
  return <WhyDoMyElectricsKeepTrippingPage />;
}

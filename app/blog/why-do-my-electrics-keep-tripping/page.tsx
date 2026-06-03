import type { Metadata } from "next";
import WhyDoMyElectricsKeepTrippingPage from "@/components/pages/WhyDoMyElectricsKeepTrippingPage";

export const metadata: Metadata = {
  title: "Why Do My Electrics Keep Tripping? | RIGS Electrical",
  description:
    "A practical homeowner guide to tripping electrics: common causes, what to check safely, and when to call an electrician in Hertfordshire.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog/why-do-my-electrics-keep-tripping" },
  openGraph: {
    type: "article",
    title: "Why Do My Electrics Keep Tripping? | RIGS Electrical",
    description:
      "A practical homeowner guide to tripping electrics: common causes, what to check safely, and when to call an electrician in Hertfordshire.",
    url: "https://rigselectrical.co.uk/blog/why-do-my-electrics-keep-tripping",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Do My Electrics Keep Tripping? | RIGS Electrical",
    description:
      "A practical homeowner guide to tripping electrics: common causes, what to check safely, and when to call an electrician in Hertfordshire.",
  },
};

export default function Page() {
  return <WhyDoMyElectricsKeepTrippingPage />;
}


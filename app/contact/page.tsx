import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Electrician in Tring | Call RIGS Electrical",
  description: "Call 07989 205468 or request a quote from RIGS Electrical, a NICEIC domestic electrician in Tring for faults, EICRs, consumer units and rewires.",
  alternates: { canonical: "https://rigselectrical.co.uk/contact" },
  openGraph: {
    type: "website",
    title: "Contact Electrician in Tring | Call RIGS Electrical",
    description:
      "Call 07989 205468 or request a quote from RIGS Electrical, a NICEIC domestic electrician in Tring for faults, EICRs, consumer units and rewires.",
    url: "https://rigselectrical.co.uk/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Electrician in Tring | Call RIGS Electrical",
    description:
      "Call 07989 205468 or request a quote from RIGS Electrical, a NICEIC domestic electrician in Tring for faults, EICRs, consumer units and rewires.",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ContactPage />
    </Suspense>
  );
}

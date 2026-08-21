import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Electrician Tring | NICEIC Domestic Electrician | RIGS Electrical",
  description:
    "Local NICEIC electrician in Tring for domestic faults, urgent repairs, consumer units and EICRs. Clear quotes across Hertfordshire and Bucks. Call 07989 205468.",
  alternates: { canonical: "https://rigselectrical.co.uk/" },
  openGraph: {
    type: "website",
    title: "Electrician Tring | NICEIC Domestic Electrician | RIGS Electrical",
    description:
      "Local NICEIC electrician in Tring for domestic faults, urgent repairs, consumer units and EICRs. Clear quotes across Hertfordshire and Bucks.",
    url: "https://rigselectrical.co.uk/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician Tring | NICEIC Domestic Electrician | RIGS Electrical",
    description:
      "Local NICEIC electrician in Tring for domestic faults, urgent repairs, consumer units and EICRs. Clear quotes across Hertfordshire and Bucks.",
  },
};

export default function Page() {
  return <HomePage />;
}

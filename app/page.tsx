import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "RIGS Electrical | NICEIC Domestic Electrician | Herts & Bucks",
  description:
    "NICEIC domestic electrician covering Hertfordshire, Buckinghamshire and nearby towns. Fault finding, urgent repairs, consumer units, EICRs and clear same-day quotes. Call 07989 205468.",
  alternates: { canonical: "https://rigselectrical.co.uk/" },
  openGraph: {
    type: "website",
    title: "RIGS Electrical | NICEIC Domestic Electrician | Herts & Bucks",
    description:
      "NICEIC domestic electrician covering Hertfordshire, Buckinghamshire and nearby towns. Fault finding, urgent repairs, consumer units, EICRs and clear same-day quotes.",
    url: "https://rigselectrical.co.uk/",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIGS Electrical | NICEIC Domestic Electrician | Herts & Bucks",
    description:
      "NICEIC domestic electrician covering Hertfordshire, Buckinghamshire and nearby towns. Fault finding, urgent repairs, consumer units, EICRs and clear same-day quotes.",
  },
};

export default function Page() {
  return <HomePage />;
}

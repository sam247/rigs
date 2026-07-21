import type { Metadata } from "next";
import EicrCertificatesPage from "@/components/pages/EicrCertificatesPage";

export const metadata: Metadata = {
  title: "EICR Certificate Hertfordshire | Home Electrical Safety Check",
  description:
    "Book an EICR certificate in Tring or Hertfordshire. NICEIC domestic electrical safety inspections for homeowners, buyers and landlords.",
  alternates: { canonical: "https://rigselectrical.co.uk/services/eicr-certificates" },
  openGraph: {
    type: "website",
    title: "EICR Certificate Hertfordshire | Home Electrical Safety Check",
    description:
      "Book an EICR certificate in Tring or Hertfordshire. NICEIC domestic electrical safety inspections for homeowners, buyers and landlords.",
    url: "https://rigselectrical.co.uk/services/eicr-certificates",
  },
  twitter: {
    card: "summary_large_image",
    title: "EICR Certificate Hertfordshire | Home Electrical Safety Check",
    description:
      "Book an EICR certificate in Tring or Hertfordshire. NICEIC domestic electrical safety inspections for homeowners, buyers and landlords.",
  },
};

export default function Page() {
  return <EicrCertificatesPage />;
}

import type { Metadata } from "next";
import EicrCertificatesPage from "@/components/pages/EicrCertificatesPage";

export const metadata: Metadata = {
  title: "EICR Certificates Hertfordshire | Electrical Safety Inspection | RIGS Electrical",
  description:
    "Book an EICR in Hertfordshire with RIGS Electrical. Domestic electrical safety inspections with clear findings, practical priorities and helpful advice (no scare tactics).",
  alternates: { canonical: "https://rigselectrical.co.uk/services/eicr-certificates" },
  openGraph: {
    type: "website",
    title: "EICR Certificates Hertfordshire | Electrical Safety Inspection | RIGS Electrical",
    description:
      "Book an EICR in Hertfordshire with RIGS Electrical. Domestic electrical safety inspections with clear findings, practical priorities and helpful advice (no scare tactics).",
    url: "https://rigselectrical.co.uk/services/eicr-certificates",
  },
  twitter: {
    card: "summary_large_image",
    title: "EICR Certificates Hertfordshire | Electrical Safety Inspection | RIGS Electrical",
    description:
      "Book an EICR in Hertfordshire with RIGS Electrical. Domestic electrical safety inspections with clear findings, practical priorities and helpful advice (no scare tactics).",
  },
};

export default function Page() {
  return <EicrCertificatesPage />;
}

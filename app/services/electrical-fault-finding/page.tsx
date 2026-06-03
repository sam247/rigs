import type { Metadata } from "next";
import ElectricalFaultFindingPage from "@/components/pages/ElectricalFaultFindingPage";

export const metadata: Metadata = {
  title: "Electrical Fault Finding Hertfordshire | Domestic Diagnosis & Repairs | RIGS Electrical",
  description:
    "Need electrical fault finding in Hertfordshire? RIGS Electrical diagnoses tripping circuits, dead sockets, flickering lights and intermittent faults with safe testing and clear repair advice.",
  alternates: { canonical: "https://rigselectrical.co.uk/services/electrical-fault-finding" },
  openGraph: {
    type: "website",
    title: "Electrical Fault Finding Hertfordshire | Domestic Diagnosis & Repairs | RIGS Electrical",
    description:
      "Need electrical fault finding in Hertfordshire? RIGS Electrical diagnoses tripping circuits, dead sockets, flickering lights and intermittent faults with safe testing and clear repair advice.",
    url: "https://rigselectrical.co.uk/services/electrical-fault-finding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Fault Finding Hertfordshire | Domestic Diagnosis & Repairs | RIGS Electrical",
    description:
      "Need electrical fault finding in Hertfordshire? RIGS Electrical diagnoses tripping circuits, dead sockets, flickering lights and intermittent faults with safe testing and clear repair advice.",
  },
};

export default function Page() {
  return <ElectricalFaultFindingPage />;
}


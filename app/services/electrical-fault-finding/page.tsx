import type { Metadata } from "next";
import ElectricalFaultFindingPage from "@/components/pages/ElectricalFaultFindingPage";

export const metadata: Metadata = {
  title: "Electrical Fault Finding Hertfordshire | Tripping Circuits | RIGS",
  description:
    "Tripping electrics, dead sockets or flickering lights? RIGS Electrical provides domestic fault finding in Tring and Hertfordshire with clear repair advice.",
  alternates: { canonical: "https://rigselectrical.co.uk/services/electrical-fault-finding" },
  openGraph: {
    type: "website",
    title: "Electrical Fault Finding Hertfordshire | Tripping Circuits | RIGS",
    description:
      "Tripping electrics, dead sockets or flickering lights? RIGS Electrical provides domestic fault finding in Tring and Hertfordshire with clear repair advice.",
    url: "https://rigselectrical.co.uk/services/electrical-fault-finding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Fault Finding Hertfordshire | Tripping Circuits | RIGS",
    description:
      "Tripping electrics, dead sockets or flickering lights? RIGS Electrical provides domestic fault finding in Tring and Hertfordshire with clear repair advice.",
  },
};

export default function Page() {
  return <ElectricalFaultFindingPage />;
}

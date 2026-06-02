import type { Metadata } from "next";
import EmergencyElectricianPage from "@/components/pages/EmergencyElectricianPage";

export const metadata: Metadata = {
  title: "Emergency Electrician Hertfordshire | Rapid Domestic Call-Outs | RIGS Electrical",
  description:
    "Need an emergency electrician in Hertfordshire? RIGS Electrical handles tripping circuits, power outages, hot sockets and urgent domestic faults with fast, practical help and same-day quotations.",
  alternates: { canonical: "https://www.rigselectrical.co.uk/services/emergency-electrician" },
};

export default function Page() {
  return <EmergencyElectricianPage />;
}

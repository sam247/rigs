import type { Metadata } from "next";
import EmergencyElectricianPage from "@/components/pages/EmergencyElectricianPage";

export const metadata: Metadata = {
  title: "Emergency Electrician Hertfordshire | Urgent Faults | RIGS",
  description:
    "Urgent electrical fault in Tring or Hertfordshire? Call 07989 205468 for help with tripping circuits, power loss, hot sockets and unsafe electrics.",
  alternates: { canonical: "https://rigselectrical.co.uk/services/emergency-electrician" },
  openGraph: {
    type: "website",
    title: "Emergency Electrician Hertfordshire | Urgent Faults | RIGS",
    description:
      "Urgent electrical fault in Tring or Hertfordshire? Call 07989 205468 for help with tripping circuits, power loss, hot sockets and unsafe electrics.",
    url: "https://rigselectrical.co.uk/services/emergency-electrician",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Electrician Hertfordshire | Urgent Faults | RIGS",
    description:
      "Urgent electrical fault in Tring or Hertfordshire? Call 07989 205468 for help with tripping circuits, power loss, hot sockets and unsafe electrics.",
  },
};

export default function Page() {
  return <EmergencyElectricianPage />;
}

import type { Metadata } from "next";
import DomesticPage from "@/components/pages/DomesticPage";

export const metadata: Metadata = {
  title: "Domestic Electrical Services in Tring | RIGS Electrical",
  description: "Rewires, consumer units, kitchen & bathroom electrics, lighting, fault finding and smart home wiring from your local Tring domestic electricians.",
  alternates: { canonical: "https://www.rigselectrical.co.uk/domestic" },
};

export default function Page() {
  return <DomesticPage />;
}

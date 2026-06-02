import type { Metadata } from "next";
import { Suspense } from "react";
import DomesticPage from "@/components/pages/DomesticPage";

export const metadata: Metadata = {
  title: "Domestic Electrical Services in Tring | RIGS Electrical",
  description: "Rewires, consumer units, kitchen & bathroom electrics, lighting, fault finding and smart home wiring from your local Tring domestic electricians.",
  alternates: { canonical: "https://rigselectrical.co.uk/domestic" },
  openGraph: {
    type: "website",
    title: "Domestic Electrical Services in Tring | RIGS Electrical",
    description:
      "Rewires, consumer units, kitchen & bathroom electrics, lighting, fault finding and smart home wiring from your local Tring domestic electricians.",
    url: "https://rigselectrical.co.uk/domestic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domestic Electrical Services in Tring | RIGS Electrical",
    description:
      "Rewires, consumer units, kitchen & bathroom electrics, lighting, fault finding and smart home wiring from your local Tring domestic electricians.",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <DomesticPage />
    </Suspense>
  );
}

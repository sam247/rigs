import type { Metadata } from "next";
import HertfordshireCountyPage from "@/components/pages/HertfordshireCountyPage";

const title = "Electrician Hertfordshire | Town Directory, Map & Areas Covered | RIGS Electrical";
const description =
  "Explore Hertfordshire electrical coverage with a county-wide town directory, interactive map, live local pages and planned location placeholders for domestic electrical work.";
const canonical = "https://rigselectrical.co.uk/electrician/hertfordshire";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    title,
    description,
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function Page() {
  return <HertfordshireCountyPage />;
}

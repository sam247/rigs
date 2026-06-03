import type { Metadata } from "next";
import FlickeringLightsCommonCausesPage from "@/components/pages/FlickeringLightsCommonCausesPage";

export const metadata: Metadata = {
  title: "Flickering Lights in UK Homes: Causes & When to Worry | RIGS Electrical",
  description:
    "Why lights flicker in UK homes, what you can check safely, and the warning signs that mean it’s time to book electrical fault finding.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog/flickering-lights-common-causes" },
  openGraph: {
    type: "article",
    title: "Flickering Lights in UK Homes: Causes & When to Worry | RIGS Electrical",
    description:
      "Why lights flicker in UK homes, what you can check safely, and the warning signs that mean it’s time to book electrical fault finding.",
    url: "https://rigselectrical.co.uk/blog/flickering-lights-common-causes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flickering Lights in UK Homes: Causes & When to Worry | RIGS Electrical",
    description:
      "Why lights flicker in UK homes, what you can check safely, and the warning signs that mean it’s time to book electrical fault finding.",
  },
};

export default function Page() {
  return <FlickeringLightsCommonCausesPage />;
}

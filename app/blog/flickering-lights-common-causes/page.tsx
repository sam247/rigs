import type { Metadata } from "next";
import FlickeringLightsCommonCausesPage from "@/components/pages/FlickeringLightsCommonCausesPage";

export const metadata: Metadata = {
  title: "Flickering Lights in UK Homes | Causes & When to Worry",
  description:
    "Flickering lights at home? Learn common causes, safe checks and warning signs that need electrical fault finding in Tring or Hertfordshire.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog/flickering-lights-common-causes" },
  openGraph: {
    type: "article",
    title: "Flickering Lights in UK Homes | Causes & When to Worry",
    description:
      "Flickering lights at home? Learn common causes, safe checks and warning signs that need electrical fault finding in Tring or Hertfordshire.",
    url: "https://rigselectrical.co.uk/blog/flickering-lights-common-causes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flickering Lights in UK Homes | Causes & When to Worry",
    description:
      "Flickering lights at home? Learn common causes, safe checks and warning signs that need electrical fault finding in Tring or Hertfordshire.",
  },
};

export default function Page() {
  return <FlickeringLightsCommonCausesPage />;
}

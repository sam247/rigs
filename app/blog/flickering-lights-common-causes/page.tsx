import type { Metadata } from "next";
import FlickeringLightsCommonCausesPage from "@/components/pages/FlickeringLightsCommonCausesPage";

export const metadata: Metadata = {
  title: "Flickering Lights: Common Causes in UK Homes | RIGS Electrical",
  description:
    "Flickering lights can be harmless—or a sign of a loose connection. Learn common causes, safe checks, and when to book fault finding in Hertfordshire.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog/flickering-lights-common-causes" },
  openGraph: {
    type: "article",
    title: "Flickering Lights: Common Causes in UK Homes | RIGS Electrical",
    description:
      "Flickering lights can be harmless—or a sign of a loose connection. Learn common causes, safe checks, and when to book fault finding in Hertfordshire.",
    url: "https://rigselectrical.co.uk/blog/flickering-lights-common-causes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flickering Lights: Common Causes in UK Homes | RIGS Electrical",
    description:
      "Flickering lights can be harmless—or a sign of a loose connection. Learn common causes, safe checks, and when to book fault finding in Hertfordshire.",
  },
};

export default function Page() {
  return <FlickeringLightsCommonCausesPage />;
}


import type { Metadata } from "next";
import BlogHubPage from "@/components/pages/BlogHubPage";

export const metadata: Metadata = {
  title: "Electrical Advice for Tring Homeowners | RIGS Blog",
  description:
    "Electrical advice for Tring and Hertfordshire homeowners: emergency faults, fuse boards, EICRs, electric showers, kitchen electrics and older homes.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog" },
  openGraph: {
    type: "website",
    title: "Electrical Advice for Tring Homeowners | RIGS Blog",
    description:
      "Electrical advice for Tring and Hertfordshire homeowners: emergency faults, fuse boards, EICRs, electric showers, kitchen electrics and older homes.",
    url: "https://rigselectrical.co.uk/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Advice for Tring Homeowners | RIGS Blog",
    description:
      "Electrical advice for Tring and Hertfordshire homeowners: emergency faults, fuse boards, EICRs, electric showers, kitchen electrics and older homes.",
  },
};

export default function Page() {
  return <BlogHubPage />;
}

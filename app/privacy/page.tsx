import type { Metadata } from "next";
import PrivacyPage from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | RIGS Electrical",
  description: "How RIGS Electrical collects, uses and safeguards your personal data when you use our website and electrical services.",
  alternates: { canonical: "https://rigselectrical.co.uk/privacy" },
  openGraph: {
    type: "website",
    title: "Privacy Policy | RIGS Electrical",
    description:
      "How RIGS Electrical collects, uses and safeguards your personal data when you use our website and electrical services.",
    url: "https://rigselectrical.co.uk/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | RIGS Electrical",
    description:
      "How RIGS Electrical collects, uses and safeguards your personal data when you use our website and electrical services.",
  },
};

export default function Page() {
  return <PrivacyPage />;
}

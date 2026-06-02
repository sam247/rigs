import type { Metadata } from "next";
import PrivacyPage from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | RIGS Electrical",
  description: "How RIGS Electrical collects, uses and safeguards your personal data when you use our website and electrical services.",
  alternates: { canonical: "https://www.rigselectrical.co.uk/privacy" },
};

export default function Page() {
  return <PrivacyPage />;
}

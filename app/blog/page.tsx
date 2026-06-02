import type { Metadata } from "next";
import BlogHubPage from "@/components/pages/BlogHubPage";

export const metadata: Metadata = {
  title: "Blog | RIGS Electrical",
  description:
    "Practical, homeowner-focused electrical advice from RIGS Electrical — safety, upgrades and common domestic faults across Tring and Hertfordshire.",
  alternates: { canonical: "https://rigselectrical.co.uk/blog" },
  openGraph: {
    type: "website",
    title: "Blog | RIGS Electrical",
    description:
      "Practical, homeowner-focused electrical advice from RIGS Electrical — safety, upgrades and common domestic faults across Tring and Hertfordshire.",
    url: "https://rigselectrical.co.uk/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | RIGS Electrical",
    description:
      "Practical, homeowner-focused electrical advice from RIGS Electrical — safety, upgrades and common domestic faults across Tring and Hertfordshire.",
  },
};

export default function Page() {
  return <BlogHubPage />;
}

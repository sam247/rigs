import type { Metadata } from "next";
import BlogHubPage from "@/components/pages/BlogHubPage";

export const metadata: Metadata = {
  title: "Blog | RIGS Electrical",
  description:
    "Practical, homeowner-focused electrical advice from RIGS Electrical — safety, upgrades and common domestic faults across Tring and Hertfordshire.",
  alternates: { canonical: "https://www.rigselectrical.co.uk/blog" },
};

export default function Page() {
  return <BlogHubPage />;
}

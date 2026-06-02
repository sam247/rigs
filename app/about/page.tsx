import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About RIGS Electrical | NICEIC Tring Electricians",
  description: "Family-run NICEIC registered domestic electricians based in Tring, covering Hertfordshire, Buckinghamshire and Bedfordshire. Meet the team.",
  alternates: { canonical: "https://www.rigselectrical.co.uk/about" },
};

export default function Page() {
  return <AboutPage />;
}

import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About RIGS Electrical | NICEIC Tring Electricians",
  description: "Family-run NICEIC registered domestic electricians based in Tring, covering Hertfordshire, Buckinghamshire and Bedfordshire. Meet the team.",
  alternates: { canonical: "https://rigselectrical.co.uk/about" },
  openGraph: {
    type: "website",
    title: "About RIGS Electrical | NICEIC Tring Electricians",
    description:
      "Family-run NICEIC registered domestic electricians based in Tring, covering Hertfordshire, Buckinghamshire and Bedfordshire. Meet the team.",
    url: "https://rigselectrical.co.uk/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About RIGS Electrical | NICEIC Tring Electricians",
    description:
      "Family-run NICEIC registered domestic electricians based in Tring, covering Hertfordshire, Buckinghamshire and Bedfordshire. Meet the team.",
  },
};

export default function Page() {
  return <AboutPage />;
}

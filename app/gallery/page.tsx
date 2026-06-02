import type { Metadata } from "next";
import GalleryPage from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Project Gallery | RIGS Electrical Tring",
  description: "See recent electrical work by RIGS Electrical — lighting, rewires, sockets and outdoor installations across Tring and Hertfordshire.",
  alternates: { canonical: "https://rigselectrical.co.uk/gallery" },
  openGraph: {
    type: "website",
    title: "Project Gallery | RIGS Electrical Tring",
    description:
      "See recent electrical work by RIGS Electrical — lighting, rewires, sockets and outdoor installations across Tring and Hertfordshire.",
    url: "https://rigselectrical.co.uk/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery | RIGS Electrical Tring",
    description:
      "See recent electrical work by RIGS Electrical — lighting, rewires, sockets and outdoor installations across Tring and Hertfordshire.",
  },
};

export default function Page() {
  return <GalleryPage />;
}

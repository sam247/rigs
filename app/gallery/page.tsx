import type { Metadata } from "next";
import GalleryPage from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Project Gallery | RIGS Electrical Tring",
  description: "See recent electrical work by RIGS Electrical — lighting, rewires, sockets and outdoor installations across Tring and Hertfordshire.",
  alternates: { canonical: "https://www.rigselectrical.co.uk/gallery" },
};

export default function Page() {
  return <GalleryPage />;
}

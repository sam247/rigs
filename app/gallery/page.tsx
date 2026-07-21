import type { Metadata } from "next";
import GalleryPage from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Electrical Work Gallery Tring | RIGS Electrical",
  description: "See recent domestic electrical work by RIGS Electrical in Tring and Hertfordshire, including lighting, sockets, rewires and outdoor installs.",
  alternates: { canonical: "https://rigselectrical.co.uk/gallery" },
  openGraph: {
    type: "website",
    title: "Electrical Work Gallery Tring | RIGS Electrical",
    description:
      "See recent domestic electrical work by RIGS Electrical in Tring and Hertfordshire, including lighting, sockets, rewires and outdoor installs.",
    url: "https://rigselectrical.co.uk/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Work Gallery Tring | RIGS Electrical",
    description:
      "See recent domestic electrical work by RIGS Electrical in Tring and Hertfordshire, including lighting, sockets, rewires and outdoor installs.",
  },
};

export default function Page() {
  return <GalleryPage />;
}

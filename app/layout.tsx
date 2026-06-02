import type { Metadata } from "next";
import Providers from "./providers";
import "../src/index.css";

export const metadata: Metadata = {
  title: "RIGS Electrical | Trusted Tring Electrician | Hertfordshire",
  description:
    "NICEIC registered Tring electricians for rewires, EV chargers, fault finding and more across Hertfordshire. Request a callback today.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "RIGS Electrical | Trusted Tring Electrician | Hertfordshire",
    description:
      "NICEIC registered Tring electricians for rewires, EV chargers, fault finding and more across Hertfordshire. Request a callback today.",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ccbacb7b-15e5-4f34-94be-a5d3b56eebe6/id-preview-d5d536a4--2206eaf7-84ed-4836-8faf-340691cd3b46.lovable.app-1777125823664.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIGS Electrical | Trusted Tring Electrician | Hertfordshire",
    description:
      "NICEIC registered Tring electricians for rewires, EV chargers, fault finding and more across Hertfordshire. Request a callback today.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ccbacb7b-15e5-4f34-94be-a5d3b56eebe6/id-preview-d5d536a4--2206eaf7-84ed-4836-8faf-340691cd3b46.lovable.app-1777125823664.png",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


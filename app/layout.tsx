import type { Metadata } from "next";
import Script from "next/script";
import Providers from "./providers";
import "../src/index.css";
import JsonLd from "@/components/JsonLd";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

export const metadata: Metadata = {
  metadataBase: new URL("https://rigselectrical.co.uk"),
  title: "RIGS Electrical | NICEIC Domestic Electrician | Herts & Bucks",
  description:
    "Call 07989 205468 for a NICEIC domestic electrician across Hertfordshire, Buckinghamshire and nearby towns. Fault finding, urgent repairs, consumer units, EICRs and home upgrades.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "RIGS Electrical",
    locale: "en_GB",
    title: "RIGS Electrical | NICEIC Domestic Electrician | Herts & Bucks",
    description:
      "Call 07989 205468 for a NICEIC domestic electrician across Hertfordshire, Buckinghamshire and nearby towns. Fault finding, urgent repairs, consumer units, EICRs and home upgrades.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIGS Electrical | NICEIC Domestic Electrician | Herts & Bucks",
    description:
      "Call 07989 205468 for a NICEIC domestic electrician across Hertfordshire, Buckinghamshire and nearby towns. Fault finding, urgent repairs, consumer units, EICRs and home upgrades.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "RIGS Electrical",
    url: "https://rigselectrical.co.uk",
    telephone: "07989 205468",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hertfordshire" },
      { "@type": "AdministrativeArea", name: "Buckinghamshire" },
      { "@type": "AdministrativeArea", name: "Bedfordshire" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tring",
      addressRegion: "Hertfordshire",
      addressCountry: "GB",
    },
    sameAs: [
      "https://www.instagram.com/rigselectrical",
      "https://www.checkatrade.com/trades/rigselectrical",
      "https://share.google/XUn0fl3yeiuCGd4Nr",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RIGS Electrical",
    url: "https://rigselectrical.co.uk",
  };

  return (
    <html lang="en-GB">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

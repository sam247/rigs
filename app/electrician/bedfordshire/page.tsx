import type { Metadata } from "next";
import CountyCoveragePage from "@/components/pages/CountyCoveragePage";
import { BEDFORDSHIRE_COUNTY_PAGE } from "@/content/bedfordshireCounty";

const { metaTitle: title, metaDescription: description, slug } = BEDFORDSHIRE_COUNTY_PAGE;
const canonical = `https://rigselectrical.co.uk/electrician/${slug}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    title,
    description,
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function Page() {
  return <CountyCoveragePage county={BEDFORDSHIRE_COUNTY_PAGE} />;
}

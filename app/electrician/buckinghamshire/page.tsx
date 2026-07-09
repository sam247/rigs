import type { Metadata } from "next";
import CountyCoveragePage from "@/components/pages/CountyCoveragePage";
import { BUCKINGHAMSHIRE_COUNTY_PAGE } from "@/content/buckinghamshireCounty";

const { metaTitle: title, metaDescription: description, slug } = BUCKINGHAMSHIRE_COUNTY_PAGE;
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
  return <CountyCoveragePage county={BUCKINGHAMSHIRE_COUNTY_PAGE} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPageClient from "@/components/location/LocationPageClient";
import { LOCATION_PAGES } from "@/content/locations";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(LOCATION_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const key = (slug ?? "").toLowerCase();
  const location = LOCATION_PAGES[key];
  if (!location) return {};

  const title = `Electrician ${location.name} | Domestic NICEIC | RIGS`;
  const description = `Need an electrician in ${location.name}? Call RIGS Electrical for domestic faults, consumer units, EICRs, rewires and clear quotes across ${location.region}.`;
  const canonical = `https://rigselectrical.co.uk/electrician/${location.slug}`;

  return {
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
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const key = (slug ?? "").toLowerCase();
  const location = LOCATION_PAGES[key];
  if (!location) notFound();

  return <LocationPageClient location={location} />;
}

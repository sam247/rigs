import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPageClient from "@/components/location/LocationPageClient";
import { LOCATION_PAGES } from "@/content/locations";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const key = (slug ?? "").toLowerCase();
  const location = LOCATION_PAGES[key];
  if (!location) return {};

  const title = `Electrician ${location.name} | RIGS Electrical`;
  const description = `Looking for a local electrician in ${location.name}, ${location.region}? NICEIC registered domestic electricians for fault finding, consumer units, rewires, lighting and EICRs.`;
  const canonical = `https://www.rigselectrical.co.uk/electrician/${location.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const key = (slug ?? "").toLowerCase();
  const location = LOCATION_PAGES[key];
  if (!location) notFound();

  return <LocationPageClient location={location} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLandingPage from "@/components/pages/ServiceLandingPage";
import { SERVICE_LANDING_PAGES, SERVICE_LANDING_PAGE_SLUGS } from "@/content/serviceLandingPages";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICE_LANDING_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_LANDING_PAGES[(slug ?? "").toLowerCase()];
  if (!service) return {};

  const canonical = `https://rigselectrical.co.uk/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICE_LANDING_PAGES[(slug ?? "").toLowerCase()];
  if (!service) notFound();

  return <ServiceLandingPage service={service} />;
}

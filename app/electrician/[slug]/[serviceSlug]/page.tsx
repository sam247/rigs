import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS } from "@/content/blogPosts";
import { LOCATION_PAGES } from "@/content/locations";
import { SERVICE_LANDING_PAGES } from "@/content/serviceLandingPages";
import { SERVICE_LOCATION_PAGES, getServiceLocationPage } from "@/content/serviceLocationPages";

type PageProps = {
  params: Promise<{ slug: string; serviceSlug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return SERVICE_LOCATION_PAGES.map((page) => ({
    slug: page.locationSlug,
    serviceSlug: page.serviceSlug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, serviceSlug } = await params;
  const page = getServiceLocationPage(slug, serviceSlug);
  if (!page) return {};

  const canonical = `https://rigselectrical.co.uk/electrician/${page.locationSlug}/${page.serviceSlug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug, serviceSlug } = await params;
  const page = getServiceLocationPage(slug, serviceSlug);
  if (!page) notFound();

  const location = LOCATION_PAGES[page.locationSlug];
  if (!location) notFound();

  const service = SERVICE_LANDING_PAGES[page.serviceSlug];
  const serviceTitle = service?.title ?? page.title.replace(` ${location.name}`, "");
  const serviceType = service?.serviceType ?? serviceTitle;

  const path = `/electrician/${page.locationSlug}/${page.serviceSlug}`;
  const contactHref = `/contact?service=${encodeURIComponent(page.title)}`;
  const relatedArticles = page.relatedArticleHrefs
    .map(
      (href) =>
        BLOG_POSTS.find((post) => post.href === href) ?? {
          href,
          title: "Why an Electric Shower Might Be Right for Your Home",
          description: "A homeowner guide to when an electric shower makes sense and what to check before installing one.",
          dateLabel: "July 2026",
        },
    )
    .slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    serviceType,
    areaServed: [
      { "@type": "Place", name: location.name },
      { "@type": "AdministrativeArea", name: location.region },
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "RIGS Electrical",
      telephone: "07989 205468",
      url: "https://rigselectrical.co.uk",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tring",
        addressRegion: "Hertfordshire",
        addressCountry: "GB",
      },
    },
    url: `https://rigselectrical.co.uk${path}`,
    description: page.metaDescription,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rigselectrical.co.uk" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://rigselectrical.co.uk/locations" },
      { "@type": "ListItem", position: 3, name: location.name, item: `https://rigselectrical.co.uk/electrician/${location.slug}` },
      { "@type": "ListItem", position: 4, name: serviceTitle, item: `https://rigselectrical.co.uk${path}` },
    ],
  };

  return (
    <Layout>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">Local Domestic Electrician</p>
            <h1 className="text-4xl md:text-5xl font-heading font-800 mb-6">{page.title}</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href={contactHref}>
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-heading font-600">
                <a href="tel:+447989205468">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 07989 205468
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-heading font-800 mb-6">Why {serviceTitle.toLowerCase()} matters in {location.name}</h2>
              <div className="grid gap-4">
                {page.whyItMatters.map((item) => (
                  <Card key={item} className="border-2 border-border">
                    <CardContent className="p-6 flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-800 mb-6">Common reasons homeowners call</h2>
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <ul className="space-y-3 text-muted-foreground">
                    {page.commonReasons.map((reason) => (
                      <li key={reason} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-heading font-800 mb-4">Domestic electrical help across {location.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                RIGS Electrical is a NICEIC registered domestic electrician covering {location.name}, nearby villages and surrounding towns. For the broader
                area page, visit{" "}
                <Link href={`/electrician/${location.slug}`} className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  electrician {location.name}
                </Link>
                , or compare the main{" "}
                <Link href={`/services/${page.serviceSlug}`} className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  {serviceTitle.toLowerCase()} service page
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="font-heading font-700">
                  <Link href={contactHref}>
                    Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="font-heading font-700 bg-primary/10 text-primary hover:bg-primary/20">
                  <Link href="/locations">
                    <MapPin className="mr-2 h-5 w-5" />
                    Areas Covered
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 grid gap-4">
              {relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="block">
                  <Card className="border-2 border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-5">
                      <p className="text-xs text-muted-foreground mb-2">{article.dateLabel}</p>
                      <h3 className="font-heading font-800 mb-2">{article.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{article.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

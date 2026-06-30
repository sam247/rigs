"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/JsonLd";
import { LOCATION_PAGES } from "@/content/locations";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const countyPlaceholders = [
  {
    name: "Hertfordshire",
    blurb: "Domestic electrical work across towns and villages throughout Hertfordshire.",
    href: "/contact?service=Electrician%20Hertfordshire",
  },
  {
    name: "Bedfordshire",
    blurb: "Home electrical repairs, upgrades and inspections across Bedfordshire.",
    href: "/contact?service=Electrician%20Bedfordshire",
  },
  {
    name: "Buckinghamshire",
    blurb: "Trusted domestic electrician support across Buckinghamshire and nearby areas.",
    href: "/contact?service=Electrician%20Buckinghamshire",
  },
];

const locations = Object.values(LOCATION_PAGES).sort((a, b) => a.name.localeCompare(b.name));

export default function LocationsHubPage() {
  const path = "/locations";

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Electrician Locations",
    itemListElement: locations.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Electrician ${l.name}`,
      url: `https://rigselectrical.co.uk/electrician/${l.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rigselectrical.co.uk" },
      { "@type": "ListItem", position: 2, name: "Locations", item: `https://rigselectrical.co.uk${path}` },
    ],
  };

  return (
    <Layout>
      <JsonLd data={itemListSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">
              Areas Covered
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
              Electrician Locations
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Find your nearest page for local domestic electrical work — repairs, upgrades and inspections with clear advice and tidy workmanship.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href="/contact?service=Local%20Electrician">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-heading font-600">
                <Link href="/services">
                  Browse Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-heading font-800 mb-3">Areas We Cover</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                If you're looking for an electrician across Hertfordshire, Bedfordshire or Buckinghamshire, start here. These are broader coverage
                areas, so for now the best next step is to get in touch and we’ll confirm availability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countyPlaceholders.map((county, i) => (
                <motion.div key={county.name} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={i}>
                  <Card className="group h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                        <MapPin className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <h2 className="font-heading font-800 text-xl mb-3">Electrician {county.name}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {county.blurb}
                      </p>
                      <Link href={county.href} className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                        Contact Us <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-heading font-800 mb-3">Local Area Pages</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                These are the towns where we already have dedicated local electrician pages with more detail on coverage, services and common types of work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((l, i) => (
                <motion.div key={l.slug} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={i + countyPlaceholders.length}>
                  <Link href={`/electrician/${l.slug}`} className="block h-full">
                    <Card className="group h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                          <MapPin className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <h2 className="font-heading font-800 text-xl mb-3">Electrician {l.name}</h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          NICEIC registered domestic electricians covering {l.name}, {l.region} and surrounding areas.
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary group-hover:text-primary/80 transition-colors">
                          View location <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

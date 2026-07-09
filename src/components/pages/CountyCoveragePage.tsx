"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Car, Home, MapPin, Phone, Search, ShieldCheck, TrainFront, ZapOff } from "lucide-react";
import Layout from "@/components/layout/Layout";
import InteractiveCountyMap from "@/components/location/InteractiveCountyMap";
import JsonLd from "@/components/JsonLd";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CountyCoveragePageConfig } from "@/content/countyCoverage";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const relatedServices = [
  {
    title: "Emergency Electrician",
    desc: "Urgent domestic electrical faults and power loss with a safe first response.",
    href: "/services/emergency-electrician",
    icon: ZapOff,
  },
  {
    title: "Electrical Fault Finding",
    desc: "Methodical testing for tripping circuits, dead sockets and intermittent problems.",
    href: "/services/electrical-fault-finding",
    icon: Search,
  },
  {
    title: "Fuse Board Upgrades",
    desc: "Modern consumer units that improve safety and make future work easier to manage.",
    href: "/services/fuse-board-upgrades",
    icon: ShieldCheck,
  },
  {
    title: "House Rewiring",
    desc: "Full or partial rewires for older properties, extensions and major renovations.",
    href: "/services/house-rewiring",
    icon: Home,
  },
];

const travelIconMap = {
  TrainFront,
  Car,
  MapPin,
};

export default function CountyCoveragePage({ county }: { county: CountyCoveragePageConfig }) {
  const serviceParam = encodeURIComponent(`Electrician ${county.countyName}`);
  const path = `/electrician/${county.slug}`;

  const liveTowns = county.towns.filter((town) => town.status === "live");
  const plannedTowns = county.towns.filter((town) => town.status === "planned");
  const coverageTowns = county.towns.filter((town) => town.status === "coverage");

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RIGS Electrical",
    url: `https://rigselectrical.co.uk${path}`,
    telephone: "07989 205468",
    areaServed: [
      { "@type": "AdministrativeArea", name: county.countyName },
      ...county.towns.map((town) => ({ "@type": "Place", name: town.name })),
    ],
    serviceType: ["Domestic Electrician", "Emergency Electrician", "Electrical Fault Finding", "Fuse Board Upgrades", "EICR Testing"],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${county.countyName} town directory`,
    itemListElement: county.towns.map((town, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: town.name,
      url: `https://rigselectrical.co.uk${town.href}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: county.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <Layout>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={itemListSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-4xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">
              County Coverage
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
              {county.title}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              {county.heroIntro}
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href={`/contact?service=${serviceParam}`}>
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-heading font-600">
                <a href="tel:+447989205468">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 07989 205468
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-4">
              Towns We Cover Across {county.countyName}
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed max-w-4xl mb-10">
              {county.townsIntro}
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <InteractiveCountyMap countyName={county.countyName} towns={county.towns} map={county.map} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-4">
              {county.countyName} County Overview
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed max-w-4xl mb-10">
              {county.overviewIntro}
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6">
              {county.overview.map((item, index) => (
                <motion.div key={item.title} variants={fadeUp} custom={index + 2}>
                  <Card className="h-full border-2 border-border">
                    <CardContent className="p-6">
                      <h3 className="font-heading font-800 text-xl mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-4">
                How We Help Across The County
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-8">
                {county.howWeHelpIntro}
              </motion.p>
              <motion.div variants={fadeUp} custom={2} className="grid gap-4">
                {county.serviceHighlights.map((service) => (
                  <Card key={service.title} className="border-2 border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-heading font-800">{service.title}</p>
                        <Link href={service.href} className="text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                          View service →
                        </Link>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">{service.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-4">
                Why Customers Enquire From Different Parts Of {county.countyName}
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-8">
                {county.whyCustomersIntro}
              </motion.p>
              <div className="grid sm:grid-cols-2 gap-4">
                {county.commonNeeds.map((item, index) => (
                  <motion.div key={item.title} variants={fadeUp} custom={index + 2}>
                    <Card className="h-full border-2 border-border">
                      <CardContent className="p-6">
                        <h3 className="font-heading font-700 text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-4">
                County Context
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-8">
                {county.countyContextIntro}
              </motion.p>
              <motion.div variants={fadeUp} custom={1} className="grid gap-4">
                {county.amenities.map((item) => (
                  <Card key={item.title} className="border-2 border-border">
                    <CardContent className="p-6">
                      <h3 className="font-heading font-700 text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-4">
                Access And Travel
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-8">
                Travel matters because customers want realistic appointment windows and dependable follow-up, especially around commuter schedules and busy family homes.
              </motion.p>
              <motion.div variants={fadeUp} custom={1} className="grid gap-4">
                {county.travel.map((item) => {
                  const Icon = travelIconMap[item.icon];
                  return (
                    <Card key={item.title} className="border-2 border-border">
                      <CardContent className="p-6 flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-heading font-800">{item.title}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.body}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
                {coverageTowns.length > 0 ? (
                  <Card className="border-2 border-border">
                    <CardContent className="p-6">
                      <p className="font-heading font-800 mb-2">Broader county coverage</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The directory also covers towns such as {coverageTowns.slice(0, 8).map((town) => town.name).join(", ")} and more,
                        {plannedTowns.length > 0 ? ` alongside planned next-step areas including ${plannedTowns.map((town) => town.name).join(", ")}.` : " giving homeowners a clear county-wide route."}
                      </p>
                    </CardContent>
                  </Card>
                ) : null}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Related Services
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((service, index) => (
                <motion.div key={service.title} variants={fadeUp} custom={index + 1}>
                  <Link href={service.href} className="block h-full">
                    <Card className="h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-heading font-700 text-lg mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                          View service <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-4xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-8 text-center">
              FAQs
            </motion.h2>
            <motion.div variants={fadeUp} custom={1}>
              <Accordion type="single" collapsible className="w-full">
                {county.faq.map((item) => (
                  <AccordionItem key={item.q} value={item.q}>
                    <AccordionTrigger className="text-left font-heading font-700">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-heading font-800 mb-4">{county.ctaTitle}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{county.ctaBody}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="font-heading font-700">
                  <Link href={`/contact?service=${serviceParam}`}>
                    Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="font-heading font-700 bg-primary/10 text-primary hover:bg-primary/20">
                  <a href="tel:+447989205468">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 grid gap-4">
              {[
                {
                  title: "More areas covered",
                  desc: `The ${county.countyName} page supports broader county coverage beyond the nearest town pages, so homeowners always have a clear enquiry route.`,
                },
                {
                  title: "County-wide coverage",
                  desc: liveTowns.length > 0
                    ? `Detailed town pages are linked alongside broader county coverage so customers can take the most useful next step.`
                    : `The county page gives homeowners a clear first stop while the nearest town pages are built out over time.`,
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-background p-5">
                  <p className="font-heading font-700 mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

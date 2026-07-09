"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bath,
  Bell,
  ClipboardCheck,
  Cpu,
  Home,
  Lightbulb,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import JsonLd from "@/components/JsonLd";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ServiceIconName, ServiceLandingPageConfig } from "@/content/serviceLandingPages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const iconMap: Record<ServiceIconName, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Search,
  Home,
  Sun,
  Cpu,
  Bell,
  ClipboardCheck,
  Zap,
  Bath,
  Lightbulb,
  MapPin,
};

export default function ServiceLandingPage({ service }: { service: ServiceLandingPageConfig }) {
  const path = `/services/${service.slug}`;
  const contactHref = `/contact?service=${encodeURIComponent(service.contactService)}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.serviceType,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hertfordshire" },
      { "@type": "AdministrativeArea", name: "Buckinghamshire" },
      { "@type": "City", name: "Tring" },
      { "@type": "City", name: "Hemel Hempstead" },
      { "@type": "City", name: "St Albans" },
      { "@type": "City", name: "Watford" },
      { "@type": "City", name: "Stevenage" },
      { "@type": "City", name: "Harpenden" },
      { "@type": "City", name: "Hitchin" },
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "RIGS Electrical",
      telephone: "07989 205468",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tring",
        addressRegion: "Hertfordshire",
        addressCountry: "GB",
      },
      url: "https://rigselectrical.co.uk",
    },
    url: `https://rigselectrical.co.uk${path}`,
    description: service.serviceDescription,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rigselectrical.co.uk" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://rigselectrical.co.uk/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://rigselectrical.co.uk${path}` },
    ],
  };

  return (
    <Layout>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">
              {service.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
              {service.title}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              {service.heroIntro}
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href={contactHref}>
                  {service.contactLabel} <ArrowRight className="ml-2 h-5 w-5" />
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

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-6">
                {service.overviewTitle}
              </motion.h2>
              {service.overviewParagraphs.map((paragraph, index) => (
                <motion.p key={paragraph} variants={fadeUp} custom={index + 1} className="text-muted-foreground leading-relaxed mb-5">
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-heading font-800 mb-4">
                {service.includedTitle}
              </motion.h3>
              <motion.div variants={fadeUp} custom={1} className="grid sm:grid-cols-2 gap-4">
                {service.includedItems.map((item) => {
                  const Icon = iconMap[item.icon];

                  return (
                    <Card key={item.title} className="border-2 border-border">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="font-heading font-700 mb-1">{item.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              {service.commonJobsTitle}
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.commonJobs.map((item, index) => {
                const Icon = iconMap[item.icon];

                return (
                  <motion.div key={item.title} variants={fadeUp} custom={index + 1}>
                    <Card className="h-full border-2 border-border">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-heading font-700 text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              {service.whyChooseTitle}
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.whyChooseItems.map((item, index) => {
                const Icon = iconMap[item.icon];

                return (
                  <motion.div key={item.title} variants={fadeUp} custom={index + 1}>
                    <Card className="h-full border-2 border-border">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-heading font-700 text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Related Pages
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.relatedLinks.map((link, index) => {
                const Icon = iconMap[link.icon];

                return (
                  <motion.div key={link.href} variants={fadeUp} custom={index}>
                    <Link href={link.href} className="block h-full">
                      <Card className="h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-heading font-700 text-lg mb-2">{link.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{link.desc}</p>
                          <span className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                            View page <ArrowRight className="h-4 w-4" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-4xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-8 text-center">
              FAQs
            </motion.h2>
            <motion.div variants={fadeUp} custom={1}>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq) => (
                  <AccordionItem key={faq.q} value={faq.q}>
                    <AccordionTrigger className="text-left font-heading font-700">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-heading font-800 mb-4">{service.ctaTitle}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.ctaBody}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="font-heading font-700">
                  <Link href={contactHref}>
                    {service.contactLabel} <ArrowRight className="ml-2 h-5 w-5" />
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
              {[
                { title: "Local domestic electrician", desc: "Home electrical work planned around real domestic use and local homeowner needs." },
                { title: "Clear next steps", desc: "Straightforward advice on whether the job is ready to book or needs wider electrical planning." },
                { title: "Internal linking that helps", desc: "Useful related pages so you can move between the service, local pages and supporting inspection routes." },
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

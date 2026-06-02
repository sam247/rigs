"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CoverageMap from "@/components/location/CoverageMap";
import { BLOG_POSTS } from "@/content/blogPosts";
import type { LocationPageConfig } from "@/content/locations";
import JsonLd from "@/components/JsonLd";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function LocationPageClient({ location }: { location: LocationPageConfig }) {
  const path = `/electrician/${location.slug}`;
  const serviceParam = encodeURIComponent(`Electrician ${location.name}`);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RIGS Electrical",
    url: `https://www.rigselectrical.co.uk${path}`,
    telephone: "07989 205468",
    areaServed: [
      { "@type": "Place", name: location.name },
      { "@type": "AdministrativeArea", name: location.region },
      { "@type": "AdministrativeArea", name: "Buckinghamshire" },
    ],
    serviceType: ["Domestic Electrician", "Emergency Electrician", "Fuse Board Upgrades", "House Rewiring", "EICR Testing"],
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.region,
      addressCountry: "GB",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Layout>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">
              Local Domestic Electrician
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
              Electrician {location.name}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              {location.heroIntro}
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

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-4">
                Electrical Services in {location.name}
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed">
                We carry out domestic electrical work for homeowners in {location.name} — repairs, installations and upgrades completed to current
                standards with tidy workmanship and clear communication. For a full breakdown, browse our{" "}
                <Link href="/domestic" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  domestic electrical services
                </Link>
                .
              </motion.p>
              {location.servicesIntro ? (
                <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mt-4">
                  {location.servicesIntro}
                </motion.p>
              ) : null}
              <motion.div variants={fadeUp} custom={3} className="mt-8 grid gap-4">
                {location.serviceBlocks.map((s) => (
                  <Card key={s.title} className="border-2 border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-heading font-800">{s.title}</p>
                        <Link href={s.href} className="text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                          View service →
                        </Link>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        {s.body}{" "}
                        <Link href={s.href} className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                          Learn more
                        </Link>
                        .
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} custom={4} className="text-sm text-muted-foreground leading-relaxed mt-6">
                Planning upgrades? You may also want to look at{" "}
                <Link href="/domestic#consumer-unit-upgrades" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  consumer unit upgrades
                </Link>{" "}
                and our guide to{" "}
                <Link href="/blog/consumer-unit-vs-fuse-box" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  consumer units vs fuse boxes
                </Link>
                .
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-6">
                Why Homeowners in {location.name} Choose RIGS
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-6">
                {location.whyChooseIntro}
              </motion.p>
              <motion.div variants={fadeUp} custom={2} className="grid gap-4">
                {location.whyChoosePoints.map((item, i) => {
                  const Icon = [MapPin, ShieldCheck, ShieldCheck, Clock][i] ?? ShieldCheck;
                  return (
                    <Card key={item.title} className="border-2 border-border">
                      <CardContent className="p-6 flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-heading font-800">{item.title}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.desc}</p>
                        </div>
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-6xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Common Electrical Problems We Solve in {location.name}
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.commonProblems.map((p, i) => (
                <motion.div key={p.title} variants={fadeUp} custom={i + 1}>
                  <Card className="border-2 border-border h-full">
                    <CardContent className="p-6">
                      <h3 className="font-heading font-700 text-lg mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-6xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Areas Covered
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We’re based locally and regularly carry out domestic electrical work across {location.name} and the surrounding villages, as well as nearby
                  towns in {location.region} and Buckinghamshire. If you’re not sure whether we cover your road, get in touch and we’ll confirm.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading font-800 mb-3">Villages We Regularly Cover</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {location.areasCovered.villages.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading font-800 mb-3">Nearby Towns</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {location.areasCovered.nearby.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 lg:max-w-sm">
                <CoverageMap
                  mainTown={location.name}
                  nearbyTowns={location.areasCovered.nearby}
                  nearbyVillages={location.areasCovered.villages}
                  variant="compact"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-6xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Related Services
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {location.relatedServices.map((s, i) => (
                <motion.div key={s.title} variants={fadeUp} custom={i}>
                  <Link href={s.href} className="block h-full">
                    <Card className="h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <s.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-heading font-700 text-lg mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                          View Service <ArrowRight className="h-4 w-4" />
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-6xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Related Articles
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.slice(0, 3).map((p, i) => (
                <motion.div key={p.href} variants={fadeUp} custom={i + 1}>
                  <Link href={p.href} className="block h-full">
                    <Card className="h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <p className="text-xs text-muted-foreground mb-2">{p.dateLabel}</p>
                        <h3 className="font-heading font-800 text-lg mb-2">{p.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                          Read article <ArrowRight className="h-4 w-4" />
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
                {location.faq.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="text-left font-heading font-700">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-heading font-800 mb-4">Need an Electrician in {location.name}?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tell us what you need and we’ll come back with friendly advice and a clear quote. If it’s urgent, call now.
              </p>
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
                { title: "Domestic-first", desc: "Home electrics, upgrades, repairs and testing — not generic trade work." },
                { title: "Local knowledge", desc: `Regularly working in ${location.name} and nearby areas across ${location.region}.` },
                { title: "Trusted & certified", desc: "NICEIC registered, fully insured, and clear certification where required." },
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

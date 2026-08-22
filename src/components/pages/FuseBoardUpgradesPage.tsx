"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home, MapPin, Phone, Search, ShieldCheck, ZapOff } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import JsonLd from "@/components/JsonLd";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const faqs = [
  {
    q: "Is a fuse board upgrade the same as a consumer unit upgrade?",
    a: "Yes. Most homeowners still call it a “fuse board”, but the modern term is “consumer unit”. An upgrade replaces older fuses or outdated breakers with modern RCD/RCBO protection and a compliant layout.",
  },
  {
    q: "When should I upgrade my fuse board?",
    a: "Common triggers include repeated tripping, signs of overheating, a lack of RCD protection, home renovations, adding high-load appliances (EV charging, showers, kitchens), or an EICR recommending improvements.",
  },
  {
    q: "Will an upgrade stop nuisance tripping?",
    a: "It often helps by separating circuits more effectively and using RCBO protection per circuit. If tripping is caused by a genuine fault (appliance, wiring, moisture), we’ll identify and resolve that too.",
  },
  {
    q: "Do you provide certification after a fuse board upgrade?",
    a: "Yes. Consumer unit replacements require testing. We provide the appropriate certification and explain the results clearly.",
  },
  {
    q: "Can you upgrade the fuse board in an older property?",
    a: "Yes. Many upgrades are done in older homes. If testing reveals issues with existing wiring, we’ll explain the safest options and prioritise what matters first.",
  },
  {
    q: "How do I know if I have RCD protection?",
    a: "Most modern consumer units have RCD/RCBO protection and test buttons. If you’re unsure, send a photo or book an inspection and we’ll confirm what protection you currently have.",
  },
];

const relatedLinks = [
  {
    title: "Consumer Unit vs Fuse Box",
    desc: "A homeowner-friendly guide explaining the differences and what to look for.",
    href: "/blog/consumer-unit-vs-fuse-box",
    icon: Search,
  },
  {
    title: "Consumer Unit Replacement Cost",
    desc: "Published UK benchmark ranges and what affects your quotation.",
    href: "/blog/how-much-does-a-consumer-unit-replacement-cost",
    icon: Search,
  },
  {
    title: "EICR Certificates",
    desc: "Electrical safety inspections that often highlight board and protection improvements.",
    href: "/services/eicr-certificates",
    icon: ShieldCheck,
  },
  {
    title: "Emergency Electrician",
    desc: "If something smells hot or keeps tripping, make it safe first and diagnose properly.",
    href: "/services/emergency-electrician",
    icon: ZapOff,
  },
  {
    title: "Electrical Fault Finding",
    desc: "Methodical diagnosis for intermittent tripping, dead sockets and lighting faults.",
    href: "/services/electrical-fault-finding",
    icon: Search,
  },
];

export default function FuseBoardUpgradesPage() {
  const path = "/services/fuse-board-upgrades";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fuse Board Upgrades Hertfordshire",
    serviceType: "Fuse board / consumer unit upgrade (domestic)",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hertfordshire" },
      { "@type": "AdministrativeArea", name: "Buckinghamshire" },
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "RIGS Electrical",
      telephone: "07989 205468",
      address: { "@type": "PostalAddress", addressLocality: "Tring", addressRegion: "Hertfordshire", addressCountry: "GB" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rigselectrical.co.uk" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://rigselectrical.co.uk/services" },
      { "@type": "ListItem", position: 3, name: "Fuse Board Upgrades", item: `https://rigselectrical.co.uk${path}` },
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
              Consumer Unit Replacement
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
              Fuse Board Upgrades Hertfordshire
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              If your fuse board is outdated, lacks RCD protection, or keeps tripping, a modern consumer unit upgrade can improve safety and make
              faults easier to isolate. We carry out tidy, compliant fuse board upgrades for homeowners across Hertfordshire and nearby areas.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href="/contact?service=Fuse%20Board%20Upgrade%20Hertfordshire">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
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
          <div className="grid lg:grid-cols-2 gap-12 ">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-6">
                When to Consider a Fuse Board Upgrade
              </motion.h2>
              <motion.div variants={fadeUp} custom={1} className="space-y-3">
                {[
                  "Your fuse board has no RCD protection (or only partial protection).",
                  "You’ve had repeated tripping and want clearer fault isolation.",
                  "You’re renovating (kitchen, extension, loft conversion) and adding new circuits.",
                  "An EICR has highlighted safety issues or outdated arrangements.",
                  "You’ve seen heat damage, buzzing, or scorching near breakers/fuses (switch off and call).",
                ].map((text) => (
                  <div key={text} className="flex gap-3 rounded-lg border border-border bg-secondary p-4">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} custom={2} className="text-sm text-muted-foreground mt-6 leading-relaxed">
                If you’re unsure what you have, our{" "}
                <Link href="/services/eicr-certificates" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  EICR inspection
                </Link>{" "}
                is the quickest way to get a clear view of what’s safe, what’s outdated, and what to prioritise.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-heading font-800 mb-4">
                What’s Included
              </motion.h3>
              <motion.div variants={fadeUp} custom={1} className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Proper testing", desc: "Inspection and testing before and after the upgrade, with results explained clearly." },
                  { title: "Modern protection", desc: "RCD/RCBO protection configured to current standards for safer fault protection." },
                  { title: "Tidy workmanship", desc: "Neat installation with clear labelling so you can isolate circuits confidently." },
                  { title: "Certification", desc: "Appropriate electrical certification provided after completion." },
                ].map((item) => (
                  <Card key={item.title} className="border-2 border-border">
                    <CardContent className="p-6">
                      <p className="font-heading font-700 mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} custom={2} className="text-sm text-muted-foreground mt-6 leading-relaxed">
                For background reading, see{" "}
                <Link href="/blog/consumer-unit-vs-fuse-box" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  consumer unit vs fuse box
                </Link>{" "}
                — a straightforward guide for homeowners.
              </motion.p>
            </motion.div>
          </div>
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
                {faqs.map((f) => (
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

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Related Pages
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedLinks.map((s, i) => (
                <motion.div key={s.href} variants={fadeUp} custom={i}>
                  <Link href={s.href} className="block h-full">
                    <Card className="h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <s.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-heading font-700 text-lg mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                          View <ArrowRight className="h-4 w-4" />
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

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-heading font-800 mb-4">Want a Quote for a Fuse Board Upgrade?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tell us what you have now (or send a photo) and what you’re planning to add. We’ll advise the safest route and provide a clear quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="font-heading font-700">
                  <Link href="/contact?service=Fuse%20Board%20Upgrade%20Hertfordshire">
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
              {[
                { title: "Local pages", desc: "See our coverage in Tring, St Albans and Watford." },
                { title: "Service hub", desc: "Browse all services and find the best match for your issue." },
                { title: "Domestic-only focus", desc: "Home electrics, upgrades, repairs and testing — completed neatly and safely." },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-background p-5">
                  <p className="font-heading font-700 mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}{" "}
                    {item.title === "Local pages" ? (
                      <>
                        <Link href="/electrician/tring" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                          Tring
                        </Link>
                        {" • "}
                        <Link href="/electrician/st-albans" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                          St Albans
                        </Link>
                        {" • "}
                        <Link href="/electrician/watford" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                          Watford
                        </Link>
                      </>
                    ) : item.title === "Service hub" ? (
                      <>
                        <Link href="/services" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                          View services
                        </Link>
                        .
                      </>
                    ) : null}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


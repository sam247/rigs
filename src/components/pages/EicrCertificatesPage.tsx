"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, MapPin, Phone, Search, ShieldCheck } from "lucide-react";
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
    q: "What is an EICR?",
    a: "An Electrical Installation Condition Report (EICR) is a safety inspection of your home’s fixed wiring. It checks for potential hazards, deterioration, and non-compliant arrangements, then provides a written report with observations and recommended actions.",
  },
  {
    q: "Do homeowners need an EICR?",
    a: "It’s not always legally required for owner-occupiers, but it’s strongly recommended if you’ve moved into a property, you’re planning renovations, you’ve had recurring electrical issues, or you want a clear view of what’s safe and what needs attention.",
  },
  {
    q: "What happens if the report has issues?",
    a: "We’ll explain the observations in plain English and prioritise what matters. Some items can be fixed quickly; others may be planned as part of upgrades. We’ll provide clear options and quotes without scare tactics.",
  },
  {
    q: "Will you issue an EICR certificate after the inspection?",
    a: "Yes. You’ll receive the EICR report documenting the inspection and test results. If remedial work is required, we can complete it and advise what additional certification applies once issues are resolved.",
  },
  {
    q: "Can an EICR identify why my electrics keep tripping?",
    a: "It can highlight underlying installation issues and deterioration, but intermittent tripping is often best handled with dedicated fault finding. We’ll recommend the best approach based on what you’re experiencing.",
  },
  {
    q: "Which areas do you cover for EICR testing?",
    a: "We cover Hertfordshire and nearby areas including Tring, St Albans, Watford and surrounding towns and villages.",
  },
];

const relatedLinks = [
  {
    title: "Electrical Fault Finding",
    desc: "Diagnosis for repeated tripping, dead sockets, flickering lights and intermittent faults.",
    href: "/services/electrical-fault-finding",
    icon: Search,
  },
  {
    title: "Fuse Board Upgrades",
    desc: "Upgrade outdated consumer units for modern protection and compliant installation.",
    href: "/services/fuse-board-upgrades",
    icon: ShieldCheck,
  },
  {
    title: "Electrical Checks When Buying a House",
    desc: "Documents to request and what to look for before you complete on a property.",
    href: "/blog/electrical-checks-when-buying-a-house-in-tring",
    icon: ClipboardCheck,
  },
  {
    title: "Why Do My Electrics Keep Tripping?",
    desc: "A homeowner guide to common causes and what to do next.",
    href: "/blog/why-do-my-electrics-keep-tripping",
    icon: ClipboardCheck,
  },
  {
    title: "Emergency Electrician",
    desc: "If something feels unsafe, make it safe first and investigate properly.",
    href: "/services/emergency-electrician",
    icon: ShieldCheck,
  },
];

export default function EicrCertificatesPage() {
  const path = "/services/eicr-certificates";

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
    name: "EICR Certificates Hertfordshire",
    serviceType: "Electrical Installation Condition Report (domestic)",
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
      { "@type": "ListItem", position: 3, name: "EICR Certificates", item: `https://rigselectrical.co.uk${path}` },
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
              Electrical Safety Inspection
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
              EICR Certificates Hertfordshire
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              An EICR (Electrical Installation Condition Report) is the clearest way to understand the safety of your home’s wiring. We carry out
              domestic EICR inspections across Hertfordshire and nearby areas, explaining findings in plain English and prioritising what matters.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href="/contact?service=EICR%20Certificates%20Hertfordshire">
                  Book an EICR <ArrowRight className="ml-2 h-5 w-5" />
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
                What an EICR Gives You
              </motion.h2>
              <motion.div variants={fadeUp} custom={1} className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Safety clarity", desc: "A clear view of what’s safe, what’s deteriorating, and what needs attention." },
                  { title: "Practical priorities", desc: "We explain which items are urgent and which can be planned sensibly." },
                  { title: "Better decisions", desc: "Useful before renovations, buying/selling, or when you’ve had recurring issues." },
                  { title: "Written report", desc: "A documented condition report and test results for your records." },
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
                If the main issue is repeated tripping or an intermittent fault, you may want dedicated{" "}
                <Link href="/services/electrical-fault-finding" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  fault finding
                </Link>{" "}
                alongside or instead of a condition report.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-heading font-800 mb-4">
                Common Outcomes After an EICR
              </motion.h3>
              <motion.div variants={fadeUp} custom={1} className="space-y-3">
                {[
                  "RCD/RCBO protection improvements recommended for safer fault protection.",
                  "Loose connections or signs of heat damage flagged for urgent attention.",
                  "Outdated arrangements identified — often improved during a fuse board upgrade.",
                  "Deteriorated accessories/circuits found in older properties and extensions.",
                  "Advice on what to fix now vs what to plan during renovations.",
                ].map((text) => (
                  <div key={text} className="flex gap-3 rounded-lg border border-border bg-secondary p-4">
                    <ClipboardCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} custom={2} className="text-sm text-muted-foreground mt-6 leading-relaxed">
                A fuse board/consumer unit change is one of the most common follow-on upgrades, which you can read about on our{" "}
                <Link href="/services/fuse-board-upgrades" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  fuse board upgrades
                </Link>{" "}
                page.
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
              <h2 className="text-3xl font-heading font-800 mb-4">Book an EICR</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you want a clear picture of your home’s electrical safety, request an EICR and we’ll come back with practical guidance and a clear
                quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="font-heading font-700">
                  <Link href="/contact?service=EICR%20Certificates%20Hertfordshire">
                    Book an EICR <ArrowRight className="ml-2 h-5 w-5" />
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
                { title: "Service hub", desc: "Browse all services and find the best match for your situation." },
                { title: "Practical outcomes", desc: "Clear next steps, prioritised sensibly — not jargon or pressure." },
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


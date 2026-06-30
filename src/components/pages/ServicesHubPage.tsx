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
  Search,
  ShieldCheck,
  Sun,
  Zap,
  ZapOff,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/JsonLd";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const services = [
  {
    title: "Emergency Electrician",
    desc: "Urgent domestic faults, tripping circuits and power outages across Hertfordshire and surrounding areas.",
    href: "/services/emergency-electrician",
    schemaHref: "/services/emergency-electrician",
    id: "emergency-electrician",
    icon: ZapOff,
    ctaLabel: "View service",
    status: "Live",
  },
  {
    title: "Electrical Fault Finding",
    desc: "Safe, methodical diagnosis for flickering lights, dead sockets, nuisance tripping and intermittent faults.",
    href: "/services/electrical-fault-finding",
    schemaHref: "/services/electrical-fault-finding",
    id: "electrical-fault-finding",
    icon: Search,
    ctaLabel: "View service",
    status: "Live",
  },
  {
    title: "Fuse Board Upgrades",
    desc: "Upgrade outdated fuse boards/consumer units for modern protection and simpler fault isolation.",
    href: "/services/fuse-board-upgrades",
    schemaHref: "/services/fuse-board-upgrades",
    id: "fuse-board-upgrades",
    icon: ShieldCheck,
    ctaLabel: "View service",
    status: "Live",
  },
  {
    title: "EICR Certificates",
    desc: "Domestic electrical safety inspections with clear findings and practical next steps.",
    href: "/services/eicr-certificates",
    schemaHref: "/services/eicr-certificates",
    id: "eicr-certificates",
    icon: Search,
    ctaLabel: "View service",
    status: "Live",
  },
  {
    title: "Outdoor Lighting Installation",
    desc: "Garden lighting, exterior feature lighting and practical outdoor installations for safer, better-lit homes.",
    href: "/contact?service=Outdoor%20Lighting%20Installation%20Hertfordshire",
    schemaHref: "/services#outdoor-lighting",
    id: "outdoor-lighting",
    icon: Sun,
    ctaLabel: "Contact Us",
    status: "Placeholder",
  },
  {
    title: "House Rewiring",
    desc: "Full or partial rewires for older properties, renovations, extensions and modern appliance loads.",
    href: "/contact?service=House%20Rewiring%20Hertfordshire",
    schemaHref: "/services#house-rewiring",
    id: "house-rewiring",
    icon: Home,
    ctaLabel: "Contact Us",
    status: "Placeholder",
  },
  {
    title: "Smart Home Installation",
    desc: "Smart lighting, controls and future-ready domestic electrical upgrades for modern living.",
    href: "/contact?service=Smart%20Home%20Installation%20Hertfordshire",
    schemaHref: "/services#smart-home-installation",
    id: "smart-home-installation",
    icon: Cpu,
    ctaLabel: "Contact Us",
    status: "Placeholder",
  },
  {
    title: "Security Lighting Installation",
    desc: "PIR floodlights, driveway lighting and practical security-focused exterior lighting for homes.",
    href: "/contact?service=Security%20Lighting%20Installation",
    schemaHref: "/services#security-lighting",
    id: "security-lighting",
    icon: Bell,
    ctaLabel: "Contact Us",
    status: "Placeholder",
  },
  {
    title: "Electrical Inspections",
    desc: "Domestic electrical inspections for homeowners who want clear safety advice and practical next steps.",
    href: "/contact?service=Electrical%20Inspections%20Hertfordshire",
    schemaHref: "/services#electrical-inspections",
    id: "electrical-inspections",
    icon: ClipboardCheck,
    ctaLabel: "Contact Us",
    status: "Placeholder",
  },
  {
    title: "Consumer Unit Replacement",
    desc: "Modern consumer unit replacements installed safely, neatly and to current standards.",
    href: "/contact?service=Consumer%20Unit%20Replacement%20Hertfordshire",
    schemaHref: "/services#consumer-unit-replacement",
    id: "consumer-unit-replacement",
    icon: ShieldCheck,
    aliases: ["consumer-unit-upgrades"],
    ctaLabel: "Contact Us",
    status: "Placeholder",
  },
  {
    title: "Electric Shower Installation",
    desc: "Installation and replacement of electric showers with safe, properly rated circuits and clear advice.",
    href: "/contact?service=Electric%20Shower%20Installation%20Hertfordshire",
    schemaHref: "/services#electric-shower-installation",
    id: "electric-shower-installation",
    icon: Zap,
    ctaLabel: "Contact Us",
    status: "Placeholder",
  },
  {
    title: "Kitchen Electrical Installation",
    desc: "Domestic kitchen electrics including cooker circuits, appliance points, sockets, lighting and renovation work.",
    href: "/contact?service=Kitchen%20Electrical%20Installation%20Hertfordshire",
    schemaHref: "/services#kitchen-electrics",
    id: "kitchen-electrics",
    icon: Bath,
    ctaLabel: "Contact Us",
    status: "Placeholder",
  },
  {
    title: "Landlord Electrical Certificates",
    desc: "Certification and inspection support for landlords who need compliant, clearly explained electrical documentation.",
    href: "/contact?service=Landlord%20Electrical%20Certificates%20Hertfordshire",
    schemaHref: "/services#landlord-electrical-certificates",
    id: "landlord-electrical-certificates",
    icon: ClipboardCheck,
    ctaLabel: "Contact Us",
    status: "Placeholder",
  },
];

export default function ServicesHubPage() {
  const path = "/services";

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Electrical Services in Hertfordshire",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://rigselectrical.co.uk${s.schemaHref}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rigselectrical.co.uk" },
      { "@type": "ListItem", position: 2, name: "Services", item: `https://rigselectrical.co.uk${path}` },
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
              Domestic Electrician
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
              Electrical Services in Hertfordshire
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              NICEIC registered domestic electricians providing safe repairs, upgrades and testing across Hertfordshire and nearby areas.
              Browse our most requested services and get a clear quote with practical advice.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href="/contact?service=Electrical%20Services%20Hertfordshire">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-heading font-600">
                <a href="/locations">
                  <MapPin className="mr-2 h-5 w-5" />
                  View Areas Covered
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <motion.div id={s.id} key={s.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={i}>
                <Card className="group h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8 h-full flex flex-col">
                    {s.aliases?.map((alias: string) => <span key={alias} id={alias} />)}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h2 className="font-heading font-800 text-xl">{s.title}</h2>
                      <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-[11px] font-heading font-700 uppercase tracking-wider text-muted-foreground">
                        {s.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                    <Link href={s.href} className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                      {s.ctaLabel} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-heading font-800 mb-4">Need a Local Electrician?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you’re not sure which service fits your issue, start with our{" "}
                <Link href="/services/electrical-fault-finding" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  fault finding
                </Link>{" "}
                page or request a quote and we’ll advise the safest next step.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="font-heading font-700">
                  <Link href="/contact?service=Electrical%20Services%20Hertfordshire">
                    Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                { title: "Domestic-first", desc: "Home electrics, upgrades, repairs and testing — not generic trade work." },
                { title: "Clear quoting", desc: "Practical options explained in plain English, with same-day quotations where possible." },
                { title: "Trusted & certified", desc: "NICEIC registered, fully insured, and completed to current standards." },
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

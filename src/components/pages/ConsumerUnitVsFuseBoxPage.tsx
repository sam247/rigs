"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import JsonLd from "@/components/JsonLd";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const comparisonRows = [
  { feature: "Fuse protection", old: "Rewireable fuses", modern: "Circuit breakers" },
  { feature: "Electric shock protection", old: "Limited", modern: "RCD protection" },
  { feature: "Reset after fault", old: "Replace fuse wire", modern: "Reset switch" },
  { feature: "Modern regulations", old: "Usually non-compliant", modern: "Fully compliant" },
  { feature: "Safety level", old: "Lower", modern: "Higher" },
];

const faqs = [
  {
    q: "Is a fuse box the same as a consumer unit?",
    a: "No. A consumer unit is the modern replacement for an older fuse box and provides significantly improved safety protection.",
  },
  {
    q: "How much does a consumer unit upgrade cost?",
    a: "Costs vary depending on the number of circuits and condition of the existing installation.",
  },
  {
    q: "Can I sell a house with an old fuse box?",
    a: "Yes, but buyers and surveyors may recommend an upgrade to meet modern safety expectations.",
  },
];

const ConsumerUnitVsFuseBoxPage = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Consumer Unit vs Fuse Box: What’s the Difference?",
    image: ["https://rigselectrical.co.uk/blog_images/consumer_unit_vs_fuse_box.jpg"],
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
    author: { "@type": "Organization", name: "RIGS Electrical" },
    publisher: { "@type": "Organization", name: "RIGS Electrical" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://rigselectrical.co.uk/blog/consumer-unit-vs-fuse-box" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Layout>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden text-primary-foreground">
        <Image
          src="/blog_images/consumer_unit_vs_fuse_box.jpg"
          alt="Modern consumer unit with circuit breakers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rigs-dark/90 via-primary/80 to-primary/60" />
        <div className="container relative py-20 md:py-28">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">
              Blog
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
              Consumer Unit vs Fuse Box: What’s the Difference?
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              If you’ve ever looked at your home’s electrical setup and wondered whether you have a consumer unit or an old fuse box, you’re not
              alone. Properties in Tring, Berkhamsted, Hemel Hempstead and across Hertfordshire still rely on older fuse boxes installed decades
              ago.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href="/contact?service=Consumer%20Unit%20Upgrade">
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
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-10">
              <Link href="/blog" className="text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                ← Back to Blog
              </Link>
              <Link href="/services/emergency-electrician" className="text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                Need urgent help? Emergency electrician →
              </Link>
            </div>

            <article className="prose prose-rigs max-w-none md:prose-lg">
              <p className="lead">
                Understanding the difference between a consumer unit vs fuse box is essential—not just for compliance, but for protecting your
                home and family.
              </p>

              <h2>What Is a Fuse Box?</h2>
              <p>
                A fuse box is the older type of electrical distribution board found in many UK homes built before the 2000s. It uses traditional
                fuses—thin wires that melt when there’s too much current flowing through a circuit.
              </p>
              <p>While fuse boxes were effective in their time, they come with several drawbacks:</p>
              <ul>
                <li>They require manual replacement when a fuse blows</li>
                <li>They offer limited protection against electric shock</li>
                <li>They are not designed for modern electrical demands</li>
              </ul>
              <p>If your home still has rewireable fuses, it may be time to consider an old fuse box replacement.</p>

              <h2>What Is a Consumer Unit?</h2>
              <p>
                A consumer unit is the modern equivalent of a fuse box. It performs the same basic function—distributing electricity around your
                home—but with significantly improved safety features.
              </p>
              <p>Modern consumer units typically include:</p>
              <ul>
                <li>MCBs (Miniature Circuit Breakers) that automatically trip when a fault occurs</li>
                <li>RCDs (Residual Current Devices) that protect against electric shock</li>
                <li>Surge protection devices in some newer installations</li>
              </ul>
              <p>Unlike old fuse boxes, consumer units reset at the flick of a switch rather than requiring fuse wire replacement.</p>

              <h2>Key Differences at a Glance</h2>
              <p>The main differences between a consumer unit vs fuse box come down to safety, convenience, and compliance.</p>
            </article>

            <div className="rounded-xl overflow-hidden border border-border my-10">
              <Image
                src="/blog_images/consumer_unit_vs_fuse_box.jpg"
                alt="Modern UK consumer unit with circuit breakers and RCD protection"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <Card className="border-2 border-border my-8 not-prose">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%]">Feature</TableHead>
                      <TableHead>Old Fuse Box</TableHead>
                      <TableHead>Modern Consumer Unit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonRows.map((r) => (
                      <TableRow key={r.feature}>
                        <TableCell className="font-heading font-700">{r.feature}</TableCell>
                        <TableCell>{r.old}</TableCell>
                        <TableCell>{r.modern}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <article className="prose prose-rigs max-w-none md:prose-lg">
              <ul>
                <li>Safety: Consumer units provide far better protection, especially with RCDs</li>
                <li>Ease of use: No need to replace fuses—just reset the breaker</li>
                <li>Compliance: Modern consumer units meet current UK wiring regulations (BS 7671)</li>
                <li>Reliability: Less risk of incorrect fuse wire installation</li>
              </ul>

              <h2>Do You Need an Old Fuse Box Replacement?</h2>
              <p>If you’re unsure whether you need an upgrade, here are some common signs:</p>
              <ul>
                <li>You still have ceramic fuses or a wooden-backed fuse box</li>
                <li>
                  Your electrics trip frequently or unpredictably (if it feels unsafe, speak to an{" "}
                  <Link href="/services/emergency-electrician">emergency electrician</Link>)
                </li>
                <li>You’re planning a renovation or extension</li>
                <li>Your home hasn’t had an electrical upgrade in 20+ years</li>
              </ul>
              <p>
                In Tring and the wider Hertfordshire area, many older homes still rely on outdated systems. Replacing them is one of the most
                effective ways to improve electrical safety.
              </p>

              <h2>Benefits of a Consumer Unit Upgrade</h2>
              <p>
                Investing in a <Link href="/services/fuse-board-upgrades">consumer unit upgrade</Link> offers both immediate and long-term benefits:
              </p>
              <ul>
                <li>Improved protection against electrical fires and shocks</li>
                <li>Compliance with modern safety standards</li>
                <li>Increased property value and easier home insurance approvals</li>
                <li>Better capacity for modern appliances and EV chargers</li>
              </ul>
              <p>It also gives you peace of mind knowing your electrical system is built for today’s demands.</p>

              <h2>Why Choose RIGS Electrical in Tring?</h2>
              <p>
                At RIGS Electrical, we specialise in old fuse box replacement and consumer unit upgrades for homes across Tring and Hertfordshire.
                Our qualified electricians ensure all installations meet the latest UK regulations and are completed safely and efficiently.
              </p>
              <p>
                Whether you’re upgrading an older property or simply want to improve your home’s electrical safety, we’re here to help with expert
                advice and reliable service.
              </p>

              <h2>Book Your Consumer Unit Upgrade Today</h2>
              <p>
                If you’re still relying on an outdated fuse box, now is the time to make the switch. Contact RIGS Electrical in Tring to arrange a
                professional inspection and get a quote for your consumer unit upgrade.
              </p>

              <h2>FAQ</h2>
            </article>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left font-heading font-700">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConsumerUnitVsFuseBoxPage;

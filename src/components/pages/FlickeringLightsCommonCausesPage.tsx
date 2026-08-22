"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import JsonLd from "@/components/JsonLd";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const faqs = [
  {
    q: "Are flickering lights dangerous?",
    a: "Sometimes. Occasional flicker from certain LED lamps can be normal, but persistent flickering can indicate a loose connection, a failing switch/dimmer, or a wiring issue. If you notice burning smells, heat, buzzing, or visible scorching, switch off the circuit and call an electrician.",
  },
  {
    q: "Why do LED lights flicker?",
    a: "LEDs can flicker due to incompatible dimmers, poor-quality lamps, loose connections, or voltage fluctuations. Testing helps identify whether it’s just the lamp/dimmer or an underlying circuit problem.",
  },
  {
    q: "Can a loose connection cause flickering?",
    a: "Yes. Loose terminals can create intermittent contact and heat, which can cause flicker and may become unsafe. This is one of the key reasons persistent flickering should be investigated.",
  },
  {
    q: "What should I do if lights flicker when an appliance turns on?",
    a: "It may be normal in some homes, but it can also indicate a circuit issue or a weakened connection. If it’s getting worse or happens across multiple rooms, a fault finding visit is the safest next step.",
  },
  {
    q: "Why do lights flicker in just one room?",
    a: "If it’s limited to one room or one fitting, it’s often a lamp, driver/transformer, switch, dimmer, or a local connection issue. We focus testing on that circuit and those accessories first.",
  },
  {
    q: "Can flickering be linked to tripping electrics?",
    a: "It can. Flicker can show up when there’s a failing accessory or connection. If your consumer unit is also tripping, treat it as a fault finding job rather than just a lighting issue.",
  },
  {
    q: "Should I worry if only one bulb flickers?",
    a: "Start with the simple checks: swap the lamp, check whether it’s on a dimmer, and see if the flicker returns. If the same fitting keeps flickering with different lamps, it’s likely a fitting/switch/connection issue and should be inspected.",
  },
  {
    q: "When should I book an EICR?",
    a: "If your home is older, you’re seeing multiple electrical symptoms (flicker, dead sockets, nuisance trips), or you’ve never had the installation tested, an EICR can identify underlying issues and prioritise fixes.",
  },
];

const FlickeringLightsCommonCausesPage = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Flickering Lights: Common Causes in UK Homes",
    image: ["https://rigselectrical.co.uk/blog_images/flickering-lights-common-causes.jpg"],
    datePublished: "2026-06-03",
    dateModified: "2026-06-03",
    author: { "@type": "Organization", name: "RIGS Electrical" },
    publisher: { "@type": "Organization", name: "RIGS Electrical" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://rigselectrical.co.uk/blog/flickering-lights-common-causes" },
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
          src="/blog_images/flickering-lights-common-causes.jpg"
          alt="Domestic lighting in a UK home"
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
              Flickering Lights: Common Causes in UK Homes
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Flickering lights can be a simple lamp issue—or a warning sign of a loose connection. This guide explains the most common domestic
              causes, what you can check safely, and when to book electrical fault finding in Hertfordshire.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href="/services/electrical-fault-finding">
                  Book fault finding <ArrowRight className="ml-2 h-5 w-5" />
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
              <Link href="/blog" className="text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                ← Back to Blog
              </Link>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>June 2026</span>
              </div>
            </div>

            <article className="prose prose-rigs max-w-none md:prose-lg">
              <p className="lead">
                Flicker is common with some LED lamps, but persistent flickering, dimming, or lights that cut out can indicate an electrical
                problem. The key is to work out whether it’s limited to one fitting (lamp, switch, dimmer) or affects multiple lights/circuits
                (wider electrical issue).
              </p>

              <h2>1) The Lamp Itself (Especially LEDs)</h2>
              <p>
                Some LED lamps flicker when they’re low quality, nearing end of life, or not compatible with the fitting/dimmer. If you can swap
                the lamp for a known good one, it’s a simple first check.
              </p>
              <p>
                Pay attention to the type of lamp too. GU10 LEDs and integrated LED fittings behave differently, and some cheaper lamps flicker
                noticeably on certain circuits.
              </p>

              <h2>2) Incompatible or Failing Dimmers</h2>
              <p>
                Older dimmers often don’t play nicely with LEDs. You might see flicker, buzzing, or lights that won’t dim smoothly. Replacing the
                dimmer with an LED-compatible model usually resolves it, but we still check the wiring and connections.
              </p>
              <p>
                A common giveaway is flicker only at low dim settings, or a “pulse” that starts a few minutes after the lights have been on.
              </p>

              <h2>3) Loose Connections (A Common “Real Fault”)</h2>
              <p>
                Loose terminals behind a switch, ceiling rose, or junction point can cause intermittent contact and heat. This often shows as
                flicker that gets worse over time, especially when something else in the home switches on.
              </p>

              <div className="rounded-xl overflow-hidden border border-border my-10">
                <Image
                  src="/blog_images/flickering-lights-common-causes.jpg"
                  alt="Flickering light fitting in a domestic room"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              <p>
                If you notice heat, a burning smell, or crackling/buzzing, treat it as urgent and contact an{" "}
                <Link href="/services/emergency-electrician">emergency electrician</Link>.
              </p>

              <h2>4) Circuit Issues (When Flicker Isn’t Just One Room)</h2>
              <p>
                If multiple lights across different rooms flicker, it can point to a broader issue that needs proper testing. A fault finding
                visit can isolate whether the problem sits within a lighting circuit, an accessory, or a wider supply/connection issue.
              </p>
              <p>
                If flicker is accompanied by other symptoms (dead sockets, buzzing from a switch, or any tripping at the consumer unit), it’s
                often better handled as{" "}
                <Link href="/services/electrical-fault-finding">
                  electrical fault finding
                </Link>{" "}
                rather than “just swapping a bulb”.
              </p>

              <h2>Situations Where Flicker Often Shows a Fault</h2>
              <ul>
                <li>
                  <strong>Bathroom lights:</strong> moisture can affect fittings, transformers and connections.
                </li>
                <li>
                  <strong>Outdoor lighting:</strong> rain and condensation can cause intermittent faults over time.
                </li>
                <li>
                  <strong>After DIY work:</strong> a new fitting or switch that starts flickering can point to a poor connection.
                </li>
                <li>
                  <strong>Older properties:</strong> ageing accessories and junctions are more likely to loosen or overheat.
                </li>
              </ul>

              <h2>What You Can Check Safely</h2>
              <ul>
                <li>Try a different lamp (same type/wattage) in the same fitting.</li>
                <li>If there’s a dimmer, try a non-dimmable LED and/or check whether the dimmer is LED compatible.</li>
                <li>Note whether flicker happens with a specific appliance switching on (kettle, washing machine, etc.).</li>
                <li>Don’t remove switches or fittings — leave fixed wiring to a qualified electrician.</li>
              </ul>
              <p>
                If you want one extra useful step, note whether flicker happens in multiple rooms at the same time. That detail helps an
                electrician decide whether to focus on one circuit, one accessory, or something broader.
              </p>

              <h2>When to Book Fault Finding</h2>
              <p>
                If the flicker is persistent, getting worse, or affecting multiple areas, the safest option is structured testing. See{" "}
                <Link href="/services/electrical-fault-finding">electrical fault finding Hertfordshire</Link> for what we investigate and how we
                approach diagnosis.
              </p>
              <p>
                If you’re also dealing with trips at the consumer unit, this guide is useful alongside flickering issues:{" "}
                <Link href="/blog/why-do-my-electrics-keep-tripping">
                  why do my electrics keep tripping
                </Link>
                . Warm or buzzing sockets need prompt attention — see{" "}
                <Link href="/blog/signs-a-socket-is-unsafe">signs a socket is unsafe</Link>.
              </p>
              <p>
                For homeowners in Tring and nearby towns, our local page covers common domestic issues we see:{" "}
                <Link href="/electrician/tring">
                  electrician Tring
                </Link>
                .
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

export default FlickeringLightsCommonCausesPage;

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
    q: "Is it dangerous if the consumer unit keeps tripping?",
    a: "Repeated tripping is a warning sign. The protective device is cutting power because it has detected a fault or an unsafe condition. If you smell burning, notice heat, or see scorching, treat it as urgent and stop using the circuit.",
  },
  {
    q: "Should I keep resetting the breaker?",
    a: "If it trips repeatedly, stop resetting it. Unplug what you safely can and contact an electrician. Repeated resets can allow overheating or arcing to continue.",
  },
  {
    q: "What’s the difference between an RCD trip and an MCB trip?",
    a: "An RCD/RCBO trip is commonly linked to earth leakage (moisture, insulation breakdown, appliance leakage). An MCB trip is more often overload or a short circuit. Knowing which one is tripping helps narrow down the cause.",
  },
  {
    q: "What is the most common cause of tripping electrics?",
    a: "Faulty appliances and moisture-related faults are common. Kettles, washing machines, outdoor sockets, and bathroom circuits can all trigger trips depending on the fault type and the protection on your board.",
  },
  {
    q: "Why does it trip even when nothing is plugged in?",
    a: "If everything is unplugged and it still trips, the fault is likely fixed wiring or an accessory on that circuit (a socket, switch, junction, outdoor point, or a light fitting). That’s when electrical testing is needed rather than trial-and-error.",
  },
  {
    q: "Can a single appliance cause the whole house to trip?",
    a: "Yes. On some boards, one RCD may protect multiple circuits. A faulty appliance can then trip the RCD and take out more than one circuit at once. We can advise whether a board configuration change or upgrade would reduce nuisance trips.",
  },
  {
    q: "Can RIGS Electrical diagnose the cause?",
    a: "Yes. We provide structured domestic testing and diagnosis across Hertfordshire, with clear findings and repair recommendations.",
  },
];

const WhyDoMyElectricsKeepTrippingPage = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Why Do My Electrics Keep Tripping?",
    image: ["https://rigselectrical.co.uk/blog_images/why-do-my-electrics-keep-tripping.jpg"],
    datePublished: "2026-06-03",
    dateModified: "2026-06-03",
    author: { "@type": "Organization", name: "RIGS Electrical" },
    publisher: { "@type": "Organization", name: "RIGS Electrical" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://rigselectrical.co.uk/blog/why-do-my-electrics-keep-tripping" },
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
          src="/blog_images/why-do-my-electrics-keep-tripping.jpg"
          alt="Consumer unit with a tripped breaker"
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
              Why Do My Electrics Keep Tripping?
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Tripping electrics can feel random and frustrating, but it usually means your consumer unit is protecting you from a genuine
              electrical problem. This guide explains the common causes, what you can check safely as a homeowner, and when to call an electrician
              in Hertfordshire.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href="/services/electrical-fault-finding">
                  Electrical fault finding <ArrowRight className="ml-2 h-5 w-5" />
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
          <div className="max-w-3xl mx-auto">
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
                When a circuit trips, it’s usually for a reason: earth leakage, a short circuit, an overloaded circuit, or a fault in an
                appliance or accessory. The safest approach is to work out whether it’s a specific appliance, a specific circuit, or something
                more intermittent.
              </p>

              <h2>What Does “Tripping” Actually Mean?</h2>
              <p>
                Most modern consumer units use a mix of protective devices. The exact cause depends on what has tripped:
              </p>
              <ul>
                <li>RCD trips: often earth leakage (moisture, insulation breakdown, faulty appliance)</li>
                <li>RCBO trips: similar to RCD, but specific to one circuit</li>
                <li>MCB trips: often overload or short circuit on a circuit</li>
              </ul>
              <p>
                If you’re not sure which device has tripped, don’t worry. A fault finding visit can confirm what’s operating and why, without
                guesswork.
              </p>

              <h2>Patterns That Help Identify the Cause</h2>
              <p>
                Homeowners often describe tripping as “random”, but there’s usually a pattern. These are the clues that matter most:
              </p>
              <ul>
                <li>
                  <strong>Trips instantly when reset:</strong> more likely a hard fault on the circuit or a failed accessory.
                </li>
                <li>
                  <strong>Trips after a few minutes:</strong> can point to an appliance warming up, moisture, or a connection that fails under load.
                </li>
                <li>
                  <strong>Only trips when it rains:</strong> outdoor sockets, garden lighting, and exterior junctions are common causes.
                </li>
                <li>
                  <strong>Trips when one item runs:</strong> kettles, washing machines, tumble dryers and dishwashers often expose faults.
                </li>
              </ul>

              <h2>Common Causes of Tripping Electrics</h2>
              <ul>
                <li>
                  <strong>Faulty appliances:</strong> kettles, washing machines, tumble dryers and dishwashers are common culprits.
                </li>
                <li>
                  <strong>Moisture:</strong> outdoor sockets, garden lighting, bathrooms and utility rooms can cause leakage faults.
                </li>
                <li>
                  <strong>Loose connections:</strong> overheating and arcing behind a socket or switch can trigger trips.
                </li>
                <li>
                  <strong>Accessory failure:</strong> failed sockets, fused spurs, cooker switches, shower isolators or light fittings.
                </li>
                <li>
                  <strong>Wiring issues:</strong> damaged cable insulation, junction box faults, or older wiring struggling under load.
                </li>
              </ul>

              <div className="rounded-xl overflow-hidden border border-border my-10">
                <Image
                  src="/blog_images/why-do-my-electrics-keep-tripping.jpg"
                  alt="Domestic consumer unit showing a tripped circuit breaker"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              <h2>What You Can Check Safely (Without Guessing)</h2>
              <p>These steps help you narrow down the cause without taking covers off or touching fixed wiring:</p>
              <ol>
                <li>Switch off and unplug appliances on the circuit (start with anything that heats, spins, or is outdoors).</li>
                <li>Reset the consumer unit once.</li>
                <li>Plug appliances back in one at a time to see if one triggers the trip.</li>
                <li>If it trips with everything unplugged, it’s likely a circuit/accessory/wiring fault and needs testing.</li>
              </ol>
              <p>
                If you discover it’s one appliance, keep it unplugged and have it checked. If the trip returns when nothing is plugged in, stop
                resetting and book proper testing.
              </p>

              <h2>When It’s Not an Appliance Problem</h2>
              <p>These situations usually need electrical testing rather than more resets:</p>
              <ul>
                <li>The same circuit trips even with everything unplugged.</li>
                <li>You’ve got dead sockets in one room or on one wall.</li>
                <li>Lights dim or flicker before the trip happens.</li>
                <li>The trip started after heavy rain (outdoor fault is likely).</li>
              </ul>
              <p>
                A useful next step is an{" "}
                <Link href="/services/eicr-certificates">
                  EICR certificate
                </Link>{" "}
                if your home hasn’t been tested in a long time, or if you’ve moved into an older property and you want a clear picture of the
                installation’s condition.
              </p>

              <h2>When to Call for Urgent Help</h2>
              <p>
                If you notice burning smells, heat at a socket/switch, buzzing, visible scorching, or power loss affecting safety-critical areas,
                contact an{" "}
                <Link href="/services/emergency-electrician">
                  emergency electrician
                </Link>{" "}
                and keep the circuit switched off.
              </p>

              <h2>What Happens During Electrical Fault Finding?</h2>
              <p>
                A structured visit involves safe tests to identify leakage, shorts and failed components. If you’re in Hertfordshire and need
                help, see{" "}
                <Link href="/services/electrical-fault-finding">
                  electrical fault finding Hertfordshire
                </Link>{" "}
                for what we typically investigate and how the process works.
              </p>
              <p>
                If nuisance trips are frequent and your board is older, it’s also worth understanding the difference between a modern consumer
                unit and an older fuse box. This article explains it clearly:{" "}
                <Link href="/blog/consumer-unit-vs-fuse-box">
                  consumer unit vs fuse box
                </Link>
                .
              </p>
              <p>
                For some homes, a{" "}
                <Link href="/services/fuse-board-upgrades">
                  fuse board upgrade
                </Link>{" "}
                can reduce the “whole house went off” scenario by improving protection and separating circuits more effectively.
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

export default WhyDoMyElectricsKeepTrippingPage;

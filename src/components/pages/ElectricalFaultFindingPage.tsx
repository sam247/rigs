"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, MapPin, Phone, Search, ShieldCheck, ZapOff } from "lucide-react";
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
    q: "What is electrical fault finding?",
    a: "Electrical fault finding is a structured way of testing circuits and accessories to identify why something isn’t working or why a safety device is tripping. The goal is to locate the cause (not just reset the breaker) and make the installation safe.",
  },
  {
    q: "How long does fault finding take?",
    a: "It depends on how intermittent the fault is and which circuit is affected. Some issues can be identified quickly (e.g. a failed socket or a clear appliance fault), while intermittent trips can take longer because we test methodically and may need to isolate sections of the circuit.",
  },
  {
    q: "Why do my electrics keep tripping?",
    a: "Common causes include faulty appliances, moisture in outdoor/bathroom circuits, damaged cable insulation, loose connections, and failing accessories. We test to identify whether the problem is on a specific circuit, accessory, or an appliance plugged into it.",
  },
  {
    q: "Can you diagnose faults without damaging walls?",
    a: "In most cases, yes. We use electrical test equipment to narrow down where the fault is. If a cable has been damaged inside a wall or under a floor, we’ll explain the likely location and the least disruptive access options before any work is carried out.",
  },
  {
    q: "Is fault finding covered by insurance?",
    a: "Sometimes, especially if the fault is linked to an insured event (like water ingress). Policies vary, so it’s worth checking your wording. We can provide clear findings and recommendations to help support a claim where appropriate.",
  },
  {
    q: "What happens after the fault is found?",
    a: "We’ll explain what caused the issue, what needs repairing, and the safest options. Where possible we can rectify the fault on the day; if additional parts or planned access are required, we’ll provide a straightforward quote and next steps.",
  },
  {
    q: "Do you handle tripping consumer units and RCBOs?",
    a: "Yes. Nuisance trips are one of the most common reasons homeowners call us. We isolate the circuit or equipment involved, test for insulation/earth leakage issues, and identify whether it’s an appliance fault, accessory fault, or wiring issue.",
  },
];

const relatedServices = [
  {
    title: "Emergency Electrician",
    desc: "If your home feels unsafe, power is out, or the consumer unit won’t reset, get urgent advice and help.",
    href: "/services/emergency-electrician",
    icon: ZapOff,
  },
  {
    title: "Fuse Board Upgrades",
    desc: "Upgrade older fuse boards and improve protection against faults and electric shock.",
    href: "/services/fuse-board-upgrades",
    icon: ShieldCheck,
  },
  {
    title: "House Rewiring",
    desc: "Full or partial rewires for older properties, extensions and renovations.",
    href: "/services#house-rewiring",
    icon: MapPin,
  },
  {
    title: "EICR Certificates",
    desc: "A thorough safety check with a clear report and practical next steps.",
    href: "/services/eicr-certificates",
    icon: Search,
  },
  {
    title: "Consumer Unit Upgrades",
    desc: "Modern RCBO/RCD protection and compliant installation for safer circuits.",
    href: "/services#consumer-unit-upgrades",
    icon: ShieldCheck,
  },
];

const relatedArticles = [
  {
    title: "Consumer Unit vs Fuse Box: What’s the Difference?",
    desc: "Understand why older fuse boxes can lead to nuisance trips and reduced protection.",
    href: "/blog/consumer-unit-vs-fuse-box",
  },
  {
    title: "Why Do My Electrics Keep Tripping?",
    desc: "Practical causes of repeated tripping and what to check before calling an electrician.",
    href: "/blog/why-do-my-electrics-keep-tripping",
  },
  {
    title: "Flickering Lights: Common Causes in UK Homes",
    desc: "What flickering can mean, what’s normal, and when it’s a sign of a real fault.",
    href: "/blog/flickering-lights-common-causes",
  },
];

const ElectricalFaultFindingPage = () => {
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
    name: "Electrical Fault Finding Hertfordshire",
    serviceType: "Domestic electrical fault finding and diagnosis",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hertfordshire" },
      { "@type": "AdministrativeArea", name: "Buckinghamshire" },
      { "@type": "City", name: "Tring" },
      { "@type": "City", name: "Berkhamsted" },
      { "@type": "City", name: "Hemel Hempstead" },
      { "@type": "City", name: "St Albans" },
      { "@type": "City", name: "Watford" },
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "RIGS Electrical",
      telephone: "07989 205468",
      address: { "@type": "PostalAddress", addressLocality: "Tring", addressRegion: "Hertfordshire", addressCountry: "GB" },
      url: "https://rigselectrical.co.uk",
    },
    url: "https://rigselectrical.co.uk/services/electrical-fault-finding",
    description:
      "Domestic electrical fault finding for tripping circuits, dead sockets, flickering lights and intermittent faults across Hertfordshire and surrounding areas.",
  };

  return (
    <Layout>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-rigs-dark via-primary to-primary/70" />
        <div className="container relative py-20 md:py-28">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">
              Domestic Electrical Diagnosis
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
              Electrical Fault Finding Hertfordshire
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              If your consumer unit keeps tripping, sockets have gone dead, or lights are flickering for no clear reason, fault finding helps
              pinpoint the cause safely. RIGS Electrical provides structured domestic electrical fault diagnosis across Hertfordshire and nearby
              areas, with clear repair recommendations and no jargon.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href="/contact?service=Electrical%20Fault%20Finding%20Hertfordshire">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-heading font-600">
                <a href="tel:+447989205468">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg p-3">
                <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                <span>NICEIC Registered</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg p-3">
                <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg p-3">
                <Clock className="h-4 w-4 text-accent shrink-0" />
                <span>Same-day quotations</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 ">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-6">
                What Is Electrical Fault Finding?
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-5">
                Electrical fault finding is the process of testing and checking your home’s circuits to identify why something has failed or why
                a protective device (RCD/RCBO/MCB) is operating. Instead of guessing, we use measurements to narrow down the cause and confirm the
                installation is safe.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-5">
                Faults often occur due to moisture, ageing accessories, loose connections, damaged cable insulation, or a failing appliance
                plugged into a circuit. Intermittent faults are especially common in kitchens, bathrooms, outdoor sockets and older wiring.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
                Professional diagnosis matters because repeated tripping is a safety warning, not an inconvenience. Proper testing helps prevent
                overheating, electric shock risk, and ongoing damage to your electrical system.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-heading font-800 mb-4">
                Quick Guidance for Homeowners
              </motion.h3>
              <motion.div variants={fadeUp} custom={1} className="space-y-3">
                {[
                  "If something smells like burning or a socket is hot, switch off the circuit at the consumer unit and call for advice.",
                  "If a circuit trips repeatedly, stop resetting it — isolate appliances and let us test the circuit properly.",
                  "If the issue is near water (bathroom, outdoor, utility), treat it as urgent and avoid using the circuit.",
                ].map((text) => (
                  <div key={text} className="flex gap-3 rounded-lg border border-border bg-secondary p-4">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} custom={2} className="text-sm text-muted-foreground mt-6 leading-relaxed">
                If you need urgent help, visit{" "}
                <Link href="/services/emergency-electrician" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  emergency electrician Hertfordshire
                </Link>
                . For non-urgent diagnosis, request a quote and we’ll book in a fault finding visit.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Common Electrical Problems We Investigate
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Tripping consumer units", desc: "RCD/RCBO/MCB trips caused by earth leakage, insulation breakdown, moisture, or faulty appliances." },
                { title: "Power loss to sockets", desc: "Dead socket circuits, loose connections, failed accessories and damaged spurs." },
                { title: "Flickering lights", desc: "Loose connections, failing switches/dimmers, or circuit issues that cause visible flicker or dimming." },
                { title: "Burning smells", desc: "Overheating connections behind sockets/switches, damaged cables, or failing accessories." },
                { title: "Faulty switches", desc: "Intermittent operation, buzzing, heat, or lights that won’t stay on or off reliably." },
                { title: "Dead circuits", desc: "Circuits that won’t reset or that fail under load, requiring testing to locate the fault point." },
                { title: "Intermittent electrical faults", desc: "Occasional trips or random loss of power that needs methodical isolation and testing." },
              ].map((item) => (
                <Card key={item.title} className="border-2 border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-700 text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Signs You May Need Electrical Fault Finding
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Electrics randomly tripping", desc: "If the consumer unit trips with no obvious trigger, there’s usually an underlying fault that needs proper testing." },
                { title: "Lights dimming unexpectedly", desc: "Dimming or flickering when appliances switch on can indicate a loose connection or circuit issue." },
                { title: "Sockets not working", desc: "A dead socket (or a group of sockets) may be a failed spur, connection issue, or a fault on the circuit." },
                { title: "Appliances losing power", desc: "Intermittent power to appliances can be an accessory issue, circuit connection fault, or a failing appliance." },
                { title: "Burning smells", desc: "Treat this as urgent. Overheating behind accessories can become dangerous quickly." },
                { title: "Buzzing consumer units", desc: "Buzzing, heat or visible scorching around protective devices needs inspection and testing." },
              ].map((s) => (
                <Card key={s.title} className="border-2 border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <ZapOff className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-700 text-lg mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Our Fault Finding Process
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Initial assessment", desc: "We ask what happened, when it occurs, and which circuits or rooms are affected." },
                { title: "Circuit testing", desc: "We carry out safe electrical tests to identify leakage, faults and failed components." },
                { title: "Fault diagnosis", desc: "We isolate the issue to an appliance, accessory, circuit section or wiring problem." },
                { title: "Repair recommendations", desc: "You get clear options and advice on the safest, most practical repair path." },
                { title: "Safe rectification", desc: "Where possible we fix the fault, restore power and confirm safe operation." },
              ].map((step, i) => (
                <Card key={step.title} className="border-2 border-border">
                  <CardContent className="p-6">
                    <p className="text-xs font-heading font-700 text-primary mb-2">Step {i + 1}</p>
                    <h3 className="font-heading font-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <motion.p variants={fadeUp} custom={1} className="text-sm text-muted-foreground mt-8 leading-relaxed max-w-3xl mx-auto text-center">
              If testing shows your installation would benefit from preventative improvements, we’ll point you to options like{" "}
              <Link href="/services/fuse-board-upgrades" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                fuse board upgrades
              </Link>{" "}
              or{" "}
              <Link href="/services/eicr-certificates" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                an EICR certificate
              </Link>
              .
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Why Choose RIGS
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "NICEIC registered", desc: "Domestic work completed safely, correctly and to current standards.", icon: ShieldCheck },
                { title: "Fully insured", desc: "Proper cover for your home and peace of mind for every visit.", icon: ShieldCheck },
                { title: "Domestic specialist", desc: "Focused on household circuits, kitchens, bathrooms and consumer units.", icon: Search },
                { title: "Same-day quotations", desc: "Clear advice and options after assessment — no pressure.", icon: Clock },
                { title: "No jargon", desc: "Straight answers, practical guidance and a clear plan for repairs.", icon: CheckCircle2 },
              ].map((item) => (
                <Card key={item.title} className="border-2 border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-700 text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Areas Covered
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-700 text-lg">Hertfordshire</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Domestic electrical fault finding across Hertfordshire — with a strong local focus around Tring and nearby towns.
                  </p>
                  <p className="text-xs text-muted-foreground">Tring • Berkhamsted • Hemel Hempstead • St Albans • Watford</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-700 text-lg">Buckinghamshire</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    We also cover nearby Buckinghamshire when homeowners need practical, local diagnosis and repair.
                  </p>
                  <p className="text-xs text-muted-foreground">Including surrounding towns and villages near the Hertfordshire border</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-700 text-lg">Local Service</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    See our local page for more information about working in Tring, including common household issues and related services.
                  </p>
                  <Button asChild className="font-heading font-700 w-full">
                    <Link href="/electrician/tring">Electrician Tring</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Related Electrical Services
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((s, i) => (
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Related Articles
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((a, i) => (
                <motion.div key={a.href} variants={fadeUp} custom={i}>
                  <Link href={a.href} className="block h-full">
                    <Card className="h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="font-heading font-800 text-lg mb-2">{a.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.desc}</p>
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

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-4xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-8 text-center">
              FAQ
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

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-heading font-800 mb-4">Need Help With a Domestic Electrical Fault?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Request a callback or quotation and we’ll arrange a fault finding visit. If something feels unsafe (burning smell, heat, buzzing
                or repeated tripping), call us for immediate advice. You can also browse the{" "}
                <Link href="/services" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  services hub
                </Link>{" "}
                for upgrades and preventative work.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="font-heading font-700">
                  <Link href="/contact?service=Electrical%20Fault%20Finding%20Hertfordshire">
                    Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                { title: "Clear next steps", desc: "You’ll know what caused the fault and what it takes to fix it safely." },
                { title: "Minimal disruption", desc: "We test and isolate methodically to avoid unnecessary damage or guesswork." },
                { title: "Domestic-first", desc: "Focused on household circuits, accessories and practical repairs." },
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
};

export default ElectricalFaultFindingPage;

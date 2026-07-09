"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Phone, Search, ShieldCheck, ZapOff } from "lucide-react";
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
    q: "Do you cover domestic electrical emergencies in Hertfordshire?",
    a: "Yes — we prioritise urgent domestic faults across Hertfordshire and nearby Buckinghamshire towns. If you have no power, repeated tripping, a burning smell, or anything that feels unsafe, call us and we’ll advise the safest next step.",
  },
  {
    q: "What counts as an electrical emergency in a home?",
    a: "Typical emergencies include power outages affecting sockets or lighting, circuits that won’t stop tripping, hot or buzzing sockets/switches, burning smells, exposed wiring, and signs of water affecting electrics (e.g. around a shower, boiler cupboard or utility room).",
  },
  {
    q: "My consumer unit is tripping — should I keep resetting it?",
    a: "If it trips repeatedly, stop resetting and unplug what you safely can. Repeated tripping usually means a genuine fault (appliance, circuit or moisture). We can isolate the cause and make it safe before carrying out a proper repair.",
  },
  {
    q: "Can you fix a partial power cut (some sockets/lights working, some not)?",
    a: "Yes. Partial outages are common with faulty breakers/RCBOs, loose connections, damaged circuits or appliance faults. We’ll test, locate the issue and restore power safely.",
  },
  {
    q: "Do you issue certification for emergency electrical work?",
    a: "Where certification is required, we provide it. Some emergency call-outs are “make safe” visits first, followed by a scheduled repair and any necessary testing/certification once the fault is resolved.",
  },
  {
    q: "Is it safe to use extension leads after a socket fault?",
    a: "Use them only as a short-term workaround and never overload them. If a socket has been hot, buzzing or scorched, stop using that circuit until it’s inspected — the fault is often behind the faceplate or in the back box.",
  },
  {
    q: "Do you work on older properties?",
    a: "Yes. Many emergency faults occur in older homes with ageing wiring or outdated fuse boards. We can make the situation safe quickly, then advise on longer-term fixes such as consumer unit upgrades or rewiring where needed.",
  },
  {
    q: "How do I get a same-day quotation?",
    a: "For urgent jobs we’ll often quote after the initial assessment. For follow-up repairs or upgrades, we aim to provide clear, same-day quotations where possible, with options explained in plain English.",
  },
];

const relatedServices = [
  {
    title: "Services Hub",
    desc: "Explore all domestic electrical services offered by RIGS Electrical.",
    href: "/services",
    icon: ShieldCheck,
  },
  {
    title: "Fuse Board Upgrades",
    desc: "Upgrade outdated fuse boards for safer protection and fewer nuisance trips.",
    href: "/services/fuse-board-upgrades",
    icon: ZapOff,
  },
  {
    title: "House Rewiring",
    desc: "Full or partial rewires for older properties, extensions and renovations.",
    href: "/services/house-rewiring",
    icon: MapPin,
  },
  {
    title: "EICR Certificates",
    desc: "Home electrical safety checks with clear findings and practical next steps.",
    href: "/services/eicr-certificates",
    icon: Search,
  },
  {
    title: "Consumer Unit Replacement",
    desc: "Modern RCBO/RCD protection and compliant installation for peace of mind.",
    href: "/services/consumer-unit-replacement",
    icon: ShieldCheck,
  },
];

const EmergencyElectricianPage = () => {
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
    name: "Emergency Electrician Hertfordshire",
    serviceType: "Emergency electrician (domestic)",
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

  return (
    <Layout>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center text-primary-foreground overflow-hidden">
        <img
          src="/services_images/emergency_electrician.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rigs-dark/90 via-primary/80 to-primary/60" />
        <div className="container relative py-16 md:py-28">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">
              Emergency Domestic Electrician
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
              Emergency Electrician Hertfordshire
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Urgent electrical faults, power outages, tripping circuits and emergency call-outs across Hertfordshire and surrounding areas.
              We’ll help you make the situation safe, restore power where possible, and explain what needs fixing next.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700">
                <Link href="/contact?service=Emergency%20Electrician%20Hertfordshire">
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
                Service Overview
              </motion.h2>
              <motion.div variants={fadeUp} custom={1} className="rounded-xl overflow-hidden border border-border mb-8">
                <img
                  src="/services_images/emergency_electrician_hero.jpg"
                  alt="Emergency electrician inspecting electrical equipment"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-6">
                Emergency call-outs are about making your home safe first, then fixing the root cause properly. We’ll isolate faults,
                test circuits and equipment, and talk you through what we’ve found. If the best next step is a follow-up repair or upgrade,
                we’ll give you clear options and a straightforward quote.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-heading font-800 mb-4">
                Typical Jobs We’re Called Out For
              </motion.h3>
              <motion.div variants={fadeUp} custom={1} className="space-y-3">
                {[
                  "Circuit breakers / RCBOs that keep tripping (often sockets, kitchen circuits, or outdoor feeds).",
                  "Total or partial power loss — lights working but sockets dead, or one floor affected.",
                  "Hot, buzzing or scorched sockets and switches (loose connections and overheating).",
                  "Lighting faults after a bulb change or fitting replacement (especially older fittings).",
                  "Bathroom electrical issues (fans, lights, shower supplies) where moisture may be involved.",
                  "Outdoor power problems (garden sockets, security lights, shed feeds) after heavy rain.",
                ].map((text) => (
                  <div key={text} className="flex gap-3 rounded-lg border border-border bg-secondary p-4">
                    <Search className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} custom={2} className="text-sm text-muted-foreground mt-6 leading-relaxed">
                If you suspect your fuse board is outdated or your wiring is struggling to cope, we’ll advise on longer-term fixes such as{" "}
                <Link href="/services/consumer-unit-replacement" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  consumer unit replacement
                </Link>{" "}
                or{" "}
                <Link href="/services/house-rewiring" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  house rewiring
                </Link>
                .
              </motion.p>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="mt-10">
            <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-heading font-800 mb-6">
              What This Service Includes
            </motion.h3>
            <motion.div variants={fadeUp} custom={1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Make safe", desc: "Isolate dangerous circuits, damaged accessories or overheating connections." },
                { title: "Fault finding", desc: "Test methodically to locate the source of tripping or loss of power." },
                { title: "Restore power", desc: "Where safe, reinstate circuits and replace failed components." },
                { title: "Practical advice", desc: "Clear next steps for repairs, upgrades, or certification where required." },
              ].map((item) => (
                <Card key={item.title} className="border-2 border-border">
                  <CardContent className="p-5">
                    <p className="font-heading font-700 mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Signs You May Need an Emergency Electrician
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Repeated tripping when you use a particular appliance",
                  desc: "For example, the kettle or washing machine trips the sockets circuit. This can be an appliance fault, but it can also indicate a weakened circuit or moisture issue that needs testing.",
                },
                {
                  title: "A socket or switch feels warm, buzzes, or smells “electrical”",
                  desc: "Heat and buzzing usually mean a loose connection and overheating. Turn the circuit off at the consumer unit and call before it worsens.",
                },
                {
                  title: "Lights flicker or dim when something switches on",
                  desc: "This can point to a loose neutral, overloaded circuit, or a failing accessory. It’s especially important to investigate in older properties.",
                },
                {
                  title: "Partial power loss in the house",
                  desc: "Some sockets/lights work, some don’t. This is common with a failed breaker/RCBO or a damaged circuit and needs safe fault finding.",
                },
                {
                  title: "Shower or bathroom electrics stop working suddenly",
                  desc: "Moisture, damaged fans/lights, or failing isolators can all cause tripping. Don’t ignore anything near water.",
                },
                {
                  title: "You’ve had water ingress near electrics",
                  desc: "A leak into a ceiling light, loft junctions or an outdoor socket can quickly cause dangerous faults and repeated tripping.",
                },
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

      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="w-full">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Why Choose RIGS
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "NICEIC registered", desc: "Work completed safely, correctly and to current standards, with certification where required.", icon: ShieldCheck },
                { title: "Fully insured", desc: "Proper protection for your home and peace of mind for every call-out and repair.", icon: ShieldCheck },
                { title: "Local electrician", desc: "Based in Tring and regularly working across Hertfordshire and nearby Buckinghamshire towns.", icon: MapPin },
                { title: "Same-day quotations", desc: "Clear options and pricing after assessment — no jargon, no pressure.", icon: Clock },
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
              Service Areas
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-700 text-lg">Hertfordshire</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Fast help for domestic electrical emergencies across Hertfordshire — including Tring and the surrounding towns and villages.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Tring • Berkhamsted • Hemel Hempstead • St Albans • Harpenden • Watford • Hitchin
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-700 text-lg">Buckinghamshire</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    We regularly carry out domestic electrical work in nearby Buckinghamshire — ideal when you need a local team that can respond quickly.
                  </p>
                  <p className="text-xs text-muted-foreground">Aylesbury • Wendover • Chesham • Amersham • Princes Risborough</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-700 text-lg">Not Sure?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    If you’re just outside these areas, contact us anyway — we may still be able to help, or we can recommend the safest next step.
                  </p>
                  <Button asChild className="font-heading font-700 w-full">
                    <Link href="/contact?service=Emergency%20Electrician%20Hertfordshire">Request a Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-heading font-800 mb-4">Need Urgent Help?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For immediate advice, call us. For non-urgent issues, request a quote and we’ll respond as soon as possible.
                You can also browse our{" "}
                <Link href="/services" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  services
                </Link>{" "}
                for upgrades and preventative work.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="font-heading font-700">
                  <Link href="/contact?service=Emergency%20Electrician%20Hertfordshire">
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
                { title: "Clear, safe advice", desc: "Simple guidance on what to switch off, unplug, and avoid until we arrive." },
                { title: "Domestic-first", desc: "We focus on homes — kitchens, bathrooms, consumer units and household circuits." },
                { title: "Trusted & certified", desc: "NICEIC registered work, fully insured, and completed to current standards." },
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
    </Layout>
  );
};

export default EmergencyElectricianPage;

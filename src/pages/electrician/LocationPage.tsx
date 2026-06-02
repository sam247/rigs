import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import NotFound from "@/pages/NotFound";
import { LOCATION_PAGES } from "./locationData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const LocationPage = () => {
  const { slug } = useParams();
  const key = (slug ?? "").toLowerCase();
  const location = LOCATION_PAGES[key];

  if (!location) return <NotFound />;

  const pageTitle = `Electrician ${location.name} | RIGS Electrical`;
  const pageDescription = `Looking for a local electrician in ${location.name}, ${location.region}? NICEIC registered domestic electricians for fault finding, consumer units, rewires, lighting and EICRs.`;
  const path = `/electrician/${location.slug}`;
  const serviceParam = encodeURIComponent(`Electrician ${location.name}`);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RIGS Electrical",
    url: `https://www.rigselectrical.co.uk${path}`,
    telephone: "07989 205468",
    areaServed: [
      { "@type": "Place", name: `${location.name}, ${location.region}` },
      { "@type": "AdministrativeArea", name: location.region },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tring",
      addressRegion: "Hertfordshire",
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
      <Seo title={pageTitle} description={pageDescription} path={path} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

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
                <Link to={`/contact?service=${serviceParam}`}>
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
                <Link to="/domestic" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  domestic electrical services
                </Link>
                .
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mt-4">
                If you’re comparing options for a new consumer unit, read our guide:{" "}
                <Link to="/blog/consumer-unit-vs-fuse-box" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                  Consumer Unit vs Fuse Box
                </Link>
                .
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Fault finding & repairs", desc: "Tripping circuits, dead sockets, flickering lights and intermittent issues." },
                  { title: "Consumer unit upgrades", desc: "Modern protection and compliant installations for safer homes." },
                  { title: "Lighting & installations", desc: "LED downlights, feature lighting, outdoor/security lighting and new circuits." },
                  { title: "Testing & certification", desc: "EICR inspections and certification where required." },
                ].map((s) => (
                  <Card key={s.title} className="border-2 border-border">
                    <CardContent className="p-5">
                      <p className="font-heading font-700 mb-1">{s.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-6">
                Why Choose RIGS in {location.name}
              </motion.h2>
              <motion.div variants={fadeUp} custom={1} className="grid gap-4">
                {[
                  { title: "NICEIC registered", desc: "Safe, compliant work completed to current standards with certification where required." , icon: ShieldCheck },
                  { title: "Fully insured", desc: "Proper cover for peace of mind on every domestic job.", icon: ShieldCheck },
                  { title: "Local coverage", desc: `Based in Tring and regularly working across ${location.region} and nearby areas.`, icon: MapPin },
                  { title: "Same-day quotations", desc: "Clear options and pricing after assessment — no jargon.", icon: Clock },
                ].map((item) => (
                  <Card key={item.title} className="border-2 border-border">
                    <CardContent className="p-6 flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-800">{item.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-6xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-10 text-center">
              Areas Covered
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-700 text-lg">{location.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Domestic electrical work across {location.areasCovered.primary.join(", ")}.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-700 text-lg">Surrounding villages</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {location.areasCovered.villages.join(" • ")}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-700 text-lg">Nearby areas</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {location.areasCovered.nearby.join(" • ")}
                  </p>
                </CardContent>
              </Card>
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
                  <Link to={s.href} className="block h-full">
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
            <motion.p variants={fadeUp} custom={5} className="text-sm text-muted-foreground text-center mt-8">
              Read next:{" "}
              <Link to="/blog/consumer-unit-vs-fuse-box" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
                Consumer Unit vs Fuse Box
              </Link>
            </motion.p>
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
                  <Link to={`/contact?service=${serviceParam}`}>
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
};

export default LocationPage;

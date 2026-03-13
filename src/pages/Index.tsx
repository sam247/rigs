import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Building2, Home, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const services = [
  {
    icon: Building2,
    title: "Commercial",
    desc: "Full electrical installations, fire alarms, emergency lighting, data cabling and periodic testing for businesses.",
    link: "/commercial",
  },
  {
    icon: Home,
    title: "Domestic",
    desc: "Rewires, consumer units, EV chargers, smart home wiring, extensions and landlord certificates (EICR).",
    link: "/domestic",
  },
];

const trustBadges = ["NICEIC Approved", "Part P Registered", "Trustmark", "ECA Member", "60+ Years Experience"];

const testimonials = [
  { name: "Sarah M.", text: "Greenhills rewired our entire house. Professional, clean and on time. Couldn't ask for more.", rating: 5 },
  { name: "James T.", text: "Fantastic work on our office fit-out. The team were knowledgeable and the finish was perfect.", rating: 5 },
  { name: "Linda P.", text: "Had an EV charger installed. Quick, tidy and explained everything clearly. Highly recommend.", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-greenhills-dark opacity-90" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container relative py-24 md:py-36">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-heading font-600 mb-6">
              <Zap className="h-4 w-4" />
              Trusted Electrical Contractors
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-heading font-800 leading-[1.1] mb-6">
              Professional Electrical
              <span className="text-accent"> Services</span> You Can Trust
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
              NICEIC approved contractors with over 60 years of combined experience. 
              Commercial and domestic electrical services across London and the South East.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base">
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-600 text-base">
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-secondary border-b border-border">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm font-heading font-600 text-secondary-foreground/70">
                <ShieldCheck className="h-5 w-5 text-primary" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-primary mb-3">What We Do</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-800 mb-4">Our Electrical Services</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto">
              From full commercial installations to domestic rewires, we deliver safe, compliant 
              and high-quality electrical work every time.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
              >
                <Card className="group h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading font-700 text-xl mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                    <Link to={service.link} className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                      View Services <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">Why Choose Us</motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-800 mb-6">Quality Electrical Work, Guaranteed</motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-primary-foreground/70 mb-8 leading-relaxed">
                We take pride in every job, big or small. Our team of qualified electricians 
                deliver work that's safe, compliant and built to last.
              </motion.p>
              <motion.ul variants={fadeUp} custom={3} className="space-y-4">
                {[
                  "NICEIC approved and Part P registered",
                  "Full certification on every job",
                  "Transparent pricing with no hidden costs",
                  "Clean, professional and punctual team",
                  "Comprehensive warranty on all work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
            <motion.div variants={fadeUp} custom={2} className="bg-primary-foreground/5 rounded-2xl p-10 border border-primary-foreground/10">
              <div className="grid grid-cols-2 gap-8 text-center">
                {[
                  { num: "60+", label: "Years Experience" },
                  { num: "2000+", label: "Jobs Completed" },
                  { num: "100%", label: "Part P Compliant" },
                  { num: "5★", label: "Customer Rating" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl md:text-4xl font-heading font-800 text-accent mb-1">{stat.num}</div>
                    <div className="text-sm text-primary-foreground/60 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-primary mb-3">Testimonials</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-800 mb-4">What Our Customers Say</motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
                    <p className="font-heading font-700 text-sm">{t.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-800 mb-4">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-xl mx-auto mb-8">
              Get in touch today for a free, no-obligation quote. We're here to help with all your electrical needs.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Button asChild size="lg" className="font-heading font-700 text-base">
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

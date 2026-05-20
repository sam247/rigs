import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  ZapOff,
  Plug,
  CarFront,
  Cpu,
  FileCheck,
  Lightbulb,
  ShieldCheck,
  Search,
  Flame,
  Bell,
  Sun,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { icon: ZapOff, title: "Full & Partial Rewires", desc: "Complete house rewires and partial rewires for older properties — bringing your home's electrics up to current 18th Edition standards." },
  { icon: Home, title: "Consumer Unit Upgrades", desc: "Replace outdated fuse boxes with modern dual-RCD consumer units. Essential for home safety and insurance compliance." },
  { icon: Lightbulb, title: "Lighting Installations", desc: "Indoor lighting design — LED downlights, pendants, dimmers, smart lighting and full lighting refits for any room." },
  { icon: Sun, title: "Outdoor & Security Lighting", desc: "Garden lighting, PIR-controlled security floodlights and pathway lighting for safety, style and peace of mind." },
  { icon: Bell, title: "Alarm & Smoke Systems", desc: "Mains-wired smoke alarms, home alarm systems and emergency lighting installation, testing and maintenance." },
  { icon: Flame, title: "Electric Showers & Heaters", desc: "Supply, installation and replacement of electric showers, storage heaters and central heating wiring systems." },
  { icon: Search, title: "Fault Finding", desc: "Diagnosing tripping circuits, faulty wiring and intermittent issues quickly and methodically — minimal disruption." },
  { icon: Plug, title: "Sockets & Extensions", desc: "Additional sockets, USB outlets and electrical work for kitchen extensions, loft conversions and bathroom upgrades." },
  { icon: CarFront, title: "EV Charger Installation", desc: "Home electric vehicle charging point installation. All major charger brands supported, dedicated circuits as standard." },
  { icon: Cpu, title: "Smart Home Wiring", desc: "Future-proof your home with smart lighting, automated systems and structured wiring for modern living." },
  { icon: FileCheck, title: "Landlord Certificates (EICR)", desc: "Electrical Installation Condition Reports for rental properties. A legal requirement for all landlords — fast turnaround." },
  { icon: ShieldCheck, title: "Periodic Testing", desc: "Routine electrical testing for owner-occupied homes to confirm everything is safe, compliant and properly certified." },
];

const Domestic = () => (
  <Layout>
    <Seo
      title="Domestic Electrical Services in Tring | RIGS Electrical"
      description="Rewires, consumer units, EV chargers, lighting, fault finding and EICR certificates from your local Tring domestic electricians."
      path="/domestic"
    />
    <section className="bg-primary text-primary-foreground py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">Our Services</motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
            Domestic Electrical Services in Tring
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed">
            Safe, certified electrical work for your home. From simple repairs to full rewires —
            RIGS Electrical is the local Tring electrician you can rely on.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={i}>
              <Card className="h-full border-2 border-border hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-700 text-lg mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                    Get a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary text-center">
      <div className="container">
        <h2 className="text-3xl font-heading font-800 mb-4">Need a Home Electrician in Tring?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Get in touch for friendly, professional advice and a free quote — same-day callbacks.</p>
        <Button asChild size="lg" className="font-heading font-700">
          <Link to="/contact">Request a Callback <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Domestic;

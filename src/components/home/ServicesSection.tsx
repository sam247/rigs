"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plug, Lightbulb, ShieldCheck, Zap, Search, Bath, ArrowRight, ZapOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const services = [
  {
    icon: ZapOff,
    title: "Emergency Electrician",
    desc: "Urgent faults, power outages and tripping circuits — fast domestic call-outs across Hertfordshire.",
    href: "/services/emergency-electrician",
  },
  {
    icon: Plug,
    title: "Rewires & Consumer Units",
    desc: "Full or partial rewires, consumer unit upgrades and additional sockets — all to current 18th Edition standards.",
    href: "/services/house-rewiring",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Installations",
    desc: "Indoor, outdoor and security lighting, LED downlights and complete installation design for any room or property.",
    href: "/services/outdoor-lighting",
  },
  {
    icon: Zap,
    title: "Electric Showers & Heaters",
    desc: "Supply, install and replace electric showers, storage heaters and central heating wiring systems safely and reliably.",
    href: "/services/electric-shower-installation",
  },
  {
    icon: ShieldCheck,
    title: "Smoke & Alarm Systems",
    desc: "Mains-wired smoke alarms, emergency lighting and home alarm systems for complete peace of mind.",
    href: "/services",
  },
  {
    icon: Search,
    title: "Fault Finding & Repairs",
    desc: "Tracing and fixing faulty wiring, tripping circuits and emergency electrical issues — fast and methodical.",
    href: "/services/electrical-fault-finding",
  },
  {
    icon: Bath,
    title: "Kitchen & Bathroom Electrics",
    desc: "Extractor fans, heated towel rails, cooker circuits, shaver sockets and underfloor heating for kitchens and bathrooms.",
    href: "/services/kitchen-electrics",
  },
];

const ServicesSection = () => (
  <section className="py-12 md:py-28">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-8 md:mb-16"
      >
        <motion.p variants={fadeUp} custom={0} className="text-xs md:text-sm font-heading font-600 uppercase tracking-wider text-primary mb-2 md:mb-3">Our Services</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="text-2xl md:text-4xl font-heading font-800 mb-3 md:mb-4">Trusted Domestic Electrical Work</motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          Whatever your home needs — from a quick repair to a full rewire — RIGS Electrical delivers
          high-quality, fully certified work across Tring and Hertfordshire.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={i}
          >
            <Link href={service.href} className="block h-full">
              <Card className="group h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-5 md:p-7">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-700 text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="text-center mt-8 md:mt-10"
      >
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
          See all services <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;

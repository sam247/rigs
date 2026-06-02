"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const WhyChooseUs = () => (
  <section className="py-12 md:py-28 bg-primary text-primary-foreground">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center"
      >
        <div>
          <motion.p variants={fadeUp} custom={0} className="text-xs md:text-sm font-heading font-600 uppercase tracking-wider text-primary-foreground/70 mb-2 md:mb-3">Why Choose Us</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-2xl md:text-4xl font-heading font-800 mb-4 md:mb-6">Local Electricians You Can Trust</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-sm md:text-base text-primary-foreground/70 mb-6 md:mb-8 leading-relaxed">
            RIGS Electrical is a Tring-based, family-run team. We take pride in clean, careful, fully
            certified work — whether it's a single light fitting or a complete rewire.
          </motion.p>
          <motion.ul variants={fadeUp} custom={3} className="space-y-3 md:space-y-4">
            {[
              "NICEIC registered and C&G qualified",
              "Full certification on every job",
              "Transparent pricing — no hidden costs",
              "Tidy, punctual and respectful of your home",
              "Fully insured for your peace of mind",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 md:gap-3">
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground/80 mt-0.5 shrink-0" />
                <span className="text-sm md:text-base text-primary-foreground/90">{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
        <motion.div variants={fadeUp} custom={2} className="bg-primary-foreground/5 rounded-2xl p-6 md:p-10 border border-primary-foreground/10">
          <div className="grid grid-cols-2 gap-6 md:gap-8 text-center">
            {[
              { num: "30+", label: "Years Experience" },
              { num: "1000+", label: "Jobs Completed" },
              { num: "100%", label: "Fully Certified" },
              { num: "5★", label: "Customer Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-4xl font-heading font-800 text-primary-foreground mb-1">{stat.num}</div>
                <div className="text-xs md:text-sm text-primary-foreground/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;

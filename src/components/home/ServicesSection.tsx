import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Home, ArrowRight } from "lucide-react";
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
    icon: Building2,
    title: "I Need a Commercial Electrician",
    desc: "Office fit-outs, fire alarms, emergency lighting, data cabling, periodic testing and full commercial installations.",
    link: "/commercial",
  },
  {
    icon: Home,
    title: "I Need a Domestic Electrician",
    desc: "Rewires, consumer units, EV chargers, smart home wiring, extensions, new builds and landlord certificates (EICR).",
    link: "/domestic",
  },
];

const ServicesSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-primary mb-3">How Can We Help?</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-800 mb-4">What Type of Electrician Do You Need?</motion.h2>
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
);

export default ServicesSection;

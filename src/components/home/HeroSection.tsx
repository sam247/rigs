import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const HeroSection = () => (
  <section className="relative min-h-[80vh] flex items-center text-primary-foreground overflow-hidden">
    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-r from-greenhills-dark/90 via-primary/80 to-primary/60" />
    <div className="container relative py-24 md:py-36">
      <motion.div initial="hidden" animate="visible" className="max-w-2xl">
        <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground px-4 py-2 rounded-full text-sm font-heading font-600 mb-6">
          <Zap className="h-4 w-4" />
          NICEIC Approved Electrical Contractors
        </motion.div>
        <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-heading font-800 leading-[1.1] mb-6">
          Need an Electrician
          <span className="text-primary-foreground/90"> for Your Home or Business?</span>
        </motion.h1>
        <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
          Whether it's a full rewire, EV charger, office fit-out or emergency repair — our qualified team
          delivers safe, certified electrical work you can rely on.
        </motion.p>
        <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700 text-base">
            <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-heading font-600 text-base">
              <Link to="/about">Why Choose Us</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

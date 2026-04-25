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
  <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center text-primary-foreground overflow-hidden">
    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-r from-rigs-dark/90 via-primary/80 to-primary/60" />
    <div className="container relative py-16 md:py-36">
      <motion.div initial="hidden" animate="visible" className="max-w-2xl">
        <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-heading font-600 mb-4 md:mb-6">
          <Zap className="h-3.5 w-3.5 md:h-4 md:w-4" />
          NICEIC Registered • C&G Qualified
        </motion.div>
        <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-6xl font-heading font-800 leading-[1.1] mb-4 md:mb-6">
          Tring's Trusted
          <span className="text-primary-foreground/90"> Local Electrician.</span>
        </motion.h1>
        <motion.p variants={fadeUp} custom={2} className="text-base md:text-xl text-primary-foreground/80 mb-6 md:mb-8 max-w-lg leading-relaxed">
          From rewires and consumer units to lighting, EV chargers and fault finding —
          RIGS Electrical delivers safe, certified domestic work across Tring and Hertfordshire.
        </motion.p>
        <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700 text-base w-full sm:w-auto">
            <Link to="/contact">Request a Callback <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-heading font-600 text-base w-full sm:w-auto">
            <Link to="/about">Why Choose Us</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

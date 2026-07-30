"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const CTASection = () => (
  <section className="py-12 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-secondary rounded-3xl p-6 md:p-10 lg:p-14 border border-border"
      >
        {/* Left: copy + CTAs */}
        <div>
          <motion.p variants={fadeUp} custom={0} className="text-xs md:text-sm font-heading font-600 uppercase tracking-wider text-primary mb-2 md:mb-3">
            Get in touch
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-2xl md:text-4xl font-heading font-800 mb-3 md:mb-4 text-foreground">
            Need a Local Domestic Electrician? Let's Talk.
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-sm md:text-base text-muted-foreground max-w-xl mb-6 md:mb-8">
            Get in touch today for a free, no-obligation quote. We'll call you back the same day —
            tidy, friendly and fully certified work for your home. Looking specifically for{" "}
            <Link href="/electrician/tring" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
              an electrician in Tring
            </Link>
            ? Start on our dedicated local page.
          </motion.p>

          <motion.ul variants={fadeUp} custom={3} className="space-y-3 mb-6 md:mb-8 text-sm md:text-base">
            <li className="flex items-center gap-3 text-foreground">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="tel:+447989205468" className="hover:text-primary transition-colors">07989 205468</a>
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <a href="mailto:rigselectrical@icloud.com" className="hover:text-primary transition-colors break-all">rigselectrical@icloud.com</a>
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>
                Based in Tring ·{" "}
                <Link href="/locations" className="hover:text-primary transition-colors">
                  Areas we cover
                </Link>
              </span>
            </li>
          </motion.ul>

          <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild size="lg" className="font-heading font-700 text-base w-full sm:w-auto">
              <Link href="/contact">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-heading font-600 text-base w-full sm:w-auto">
              <a href="tel:+447989205468"><Phone className="mr-2 h-5 w-5" /> Call now</a>
            </Button>
          </motion.div>
        </div>

        {/* Right: static map of Tring */}
        <motion.div variants={fadeUp} custom={2} className="relative rounded-2xl overflow-hidden border border-border shadow-lg aspect-[4/3] lg:aspect-auto lg:h-[420px] bg-muted">
          <iframe
            title="Map of Tring, Hertfordshire"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.7300%2C51.7700%2C-0.6100%2C51.8200&amp;layer=mapnik&amp;marker=51.7956%2C-0.6700"
            className="w-full h-full border-0"
            loading="lazy"
          />
          <a
            href="https://www.openstreetmap.org/?mlat=51.7956&mlon=-0.6700#map=13/51.7956/-0.6700"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 bg-background/90 backdrop-blur px-3 py-1.5 rounded-md text-xs font-heading font-600 text-foreground hover:bg-background transition-colors shadow"
          >
            View larger map
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

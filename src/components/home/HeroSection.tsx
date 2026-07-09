"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmit, trackFormSuccess } from "@/lib/gtag";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const HeroSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleQuickQuote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("_gotcha")) return;
    fd.set("_source", "Hero Quick Quote");
    trackFormSubmit({ formName: "hero_quick_quote", formLocation: "homepage_hero" });
    setSubmitting(true);
    try {
      const res = await fetch("https://formbold.com/s/9BaZ2", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) throw new Error("Request failed");
      trackFormSuccess({ formName: "hero_quick_quote", formLocation: "homepage_hero" });
      toast({ title: "Quote requested!", description: "We'll be in touch shortly." });
      form.reset();
    } catch {
      toast({
        title: "Couldn't send",
        description: "Please try again or call 07989 205468.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center text-primary-foreground overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-rigs-dark/90 via-primary/80 to-primary/60" />
      <div className="container relative py-16 md:py-28">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl lg:col-span-3">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-heading font-600 mb-4 md:mb-6">
              <Zap className="h-3.5 w-3.5 md:h-4 md:w-4" />
              NICEIC Registered • C&G Qualified
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-6xl font-heading font-800 leading-[1.1] mb-4 md:mb-6">
              Professional Local Tring
              <span className="text-primary-foreground/90"> Electrician.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-base md:text-xl text-primary-foreground/80 mb-6 md:mb-8 max-w-lg leading-relaxed">
              Professional, reliable, friendly electrician available 24/7 for all domestic projects
              in Tring, Hertfordshire and Buckinghamshire.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-700 text-base w-full sm:w-auto">
                <Link href="/contact">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-heading font-600 text-base w-full sm:w-auto">
                <Link href="/about">Why Choose Us</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Quote micro form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleQuickQuote}
              className="bg-background/95 backdrop-blur rounded-xl p-5 md:p-6 shadow-2xl text-foreground space-y-3"
            >
              <div>
                <h2 className="font-heading font-800 text-xl">Quick Quote</h2>
                <p className="text-xs text-muted-foreground">Same-day response, no obligation.</p>
              </div>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <Input name="name" placeholder="Full name" required />
              <Input name="email" type="email" placeholder="Email" required />
              <Input name="phone" placeholder="Phone" />
              <Input name="service" placeholder="Service needed (e.g. rewire)" />
              <Button type="submit" disabled={submitting} className="w-full font-heading font-700">
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Sending…" : "Get a Quote"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

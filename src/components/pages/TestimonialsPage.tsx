"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ReviewCarousel from "@/components/ReviewCarousel";
import { REVIEW_FILTER_LABELS, REVIEWS, type ReviewType } from "@/content/reviews";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const TestimonialsPage = () => {
  const [filter, setFilter] = useState<"all" | ReviewType>("all");
  const filtered = filter === "all" ? REVIEWS : REVIEWS.filter((r) => r.type === filter);

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">Testimonials</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">What Our Customers Say</motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80">
              Don't just take our word for it — verified reviews from homeowners across Tring,
              Hertfordshire, Buckinghamshire and Bedfordshire. See all reviews on{" "}
              <a
                href="https://www.checkatrade.com/trades/rigselectrical"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-accent"
              >
                Checkatrade
              </a>{" "}
              or{" "}
              <a
                href="https://share.google/XUn0fl3yeiuCGd4Nr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-accent"
              >
                Google
              </a>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
            {(Object.keys(REVIEW_FILTER_LABELS) as Array<"all" | ReviewType>).map((f) => (
              <Button key={f} variant={filter === f ? "default" : "outline"} onClick={() => setFilter(f)} className="font-heading font-600">
                {REVIEW_FILTER_LABELS[f]}
              </Button>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <ReviewCarousel reviews={filtered} />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;

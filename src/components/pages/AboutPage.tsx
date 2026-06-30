"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Clock, ArrowRight, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ReviewCarousel from "@/components/ReviewCarousel";
import outdoorLighting from "@/assets/gallery-outdoor-lighting.jpg";
import { REVIEWS } from "@/content/reviews";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { icon: ShieldCheck, title: "Safety First", desc: "Every job is completed to the highest safety standards, fully certified and compliant with BS 7671." },
  { icon: Users, title: "Customer Focused", desc: "We treat your home with respect, communicate clearly and tidy up properly when we're done." },
  { icon: Award, title: "Quality Workmanship", desc: "Years of hands-on domestic electrical experience — from a single socket to a full rewire." },
  { icon: Clock, title: "Reliable & Punctual", desc: "We turn up when we say we will, work efficiently and stick to our quotes." },
];

const accreditations = ["NICEIC Registered", "C&G Qualified", "18th Edition BS 7671", "Fully Insured", "Part P Compliant"];

const AboutPage = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">About Us</motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
            Tring's Local Domestic Electrician
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed">
            RIGS Electrical is a Tring-based, family-run electrical contractor specialising
            in domestic work. We provide professional, reliable and fully certified electrical
            services to homeowners across Tring and the surrounding villages, covering
            Hertfordshire, Buckinghamshire and Bedfordshire.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-800 mb-6">Our Story</motion.h2>
            <motion.div variants={fadeUp} custom={1} className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                RIGS Electrical was founded with a simple goal: deliver the highest standard of
                domestic electrical work to homeowners in Tring and the wider area —
                with no fuss, no surprises and no shortcuts.
              </p>
              <p>
                Our qualified electricians bring years of hands-on experience to every
                project. Whether it's a simple lighting tweak or a full rewire, we approach every
                job with the same care, planning and respect for your home.
              </p>
              <p>
                We're NICEIC registered and C&G qualified, so you can be confident that every job
                meets the latest 18th Edition BS 7671 standards and is fully certified.
              </p>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="rounded-2xl overflow-hidden border border-border shadow-sm bg-card">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={outdoorLighting}
                  alt="Recent outdoor lighting installation completed by RIGS Electrical"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-accent mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <h2 className="text-2xl font-heading font-800 mb-3">Real Domestic Work, Properly Finished</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  We’ve chosen a real image from our gallery rather than a stock photo because trust comes from showing the sort of tidy, practical
                  work homeowners actually hire us for.
                </p>
                <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-heading font-700 text-primary hover:text-primary/80 transition-colors">
                  View more recent work <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-800 mb-4">Why Homeowners Trust RIGS</motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed">
                Credentials matter, but so does how you work in someone’s home. That’s why we pair qualifications with tidy workmanship, clear
                communication and repeat business from local homeowners.
              </motion.p>
            </motion.div>

            <motion.h3 variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl font-heading font-800 mb-5">
              Accreditations
            </motion.h3>
            <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
              {accreditations.map((a) => (
                <div key={a} className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{a}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-6">
              <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-700 uppercase tracking-wider text-primary mb-3">
                Recent Reviews
              </motion.p>
              <motion.h3 variants={fadeUp} custom={1} className="text-2xl md:text-3xl font-heading font-800 mb-3">
                What Customers Say About Working With Us
              </motion.h3>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
                A few verified comments from homeowners who mention the things that matter most: reliability, tidiness, clear advice and high-quality
                workmanship.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
              <ReviewCarousel reviews={REVIEWS.slice(0, 4)} />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4} className="flex flex-wrap gap-4 mt-6 text-sm">
              <a
                href="https://www.checkatrade.com/trades/rigselectrical"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-700 text-primary hover:text-primary/80 transition-colors"
              >
                View Checkatrade reviews
              </a>
              <a
                href="https://share.google/XUn0fl3yeiuCGd4Nr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-700 text-primary hover:text-primary/80 transition-colors"
              >
                View Google reviews
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-800 mb-4">Our Values</motion.h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-700 text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;

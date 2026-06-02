"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import outsideLighting from "@/assets/gallery-outside-lighting.jpg";
import domesticLighting from "@/assets/gallery-domestic-lighting.jpg";
import ledLighting from "@/assets/gallery-led-lighting.jpg";
import socketWiring from "@/assets/gallery-socket-wiring.jpg";
import outdoorLighting from "@/assets/gallery-outdoor-lighting.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const projects = [
  {
    id: 1,
    image: outdoorLighting,
    title: "Outdoor Entrance Lighting",
    desc: "Wall-mounted LED uplighters fitted either side of a front door for a warm, welcoming entrance.",
  },
  {
    id: 2,
    image: ledLighting,
    title: "Feature LED Strip Lighting",
    desc: "Concealed warm-white LED strip highlighting a brick feature wall in a new build extension.",
  },
  {
    id: 3,
    image: domesticLighting,
    title: "Bespoke Wardrobe Lighting",
    desc: "Internal wardrobe lighting and feature pendant fitted as part of a full bedroom refit.",
  },
  {
    id: 4,
    image: outsideLighting,
    title: "External Wall Light Fixture",
    desc: "Stainless-steel downlight installed to the side of a property, fully weather-sealed.",
  },
  {
    id: 5,
    image: socketWiring,
    title: "Socket & Plug Rewiring",
    desc: "First-fix socket wiring during a full kitchen refurbishment in Tring.",
  },
];

const GalleryPage = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">Our Work</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">Project Gallery</motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80">
              A selection of recent domestic electrical work completed across Tring and the surrounding villages.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div key={project.id} initial="hidden" animate="visible" variants={fadeUp} custom={i}>
                <div className="group relative rounded-xl overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-300 bg-card h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-700 text-base mb-1.5">{project.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;

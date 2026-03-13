import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

type ProjectCategory = "all" | "commercial" | "domestic";

const projects = [
  { id: 1, title: "Office Fit-Out — Canary Wharf", category: "commercial" as const, desc: "Complete electrical installation for a 5,000 sq ft office space." },
  { id: 2, title: "Full House Rewire — Richmond", category: "domestic" as const, desc: "Complete rewire of a 4-bed Victorian property." },
  { id: 3, title: "Retail Unit — Shoreditch", category: "commercial" as const, desc: "Lighting design and installation for a high-end retail space." },
  { id: 4, title: "EV Charger Installation", category: "domestic" as const, desc: "Tesla Wall Connector installation with dedicated circuit." },
  { id: 5, title: "Fire Alarm System — Warehouse", category: "commercial" as const, desc: "Addressable fire alarm system for 10,000 sq ft warehouse." },
  { id: 6, title: "Kitchen Extension — Putney", category: "domestic" as const, desc: "Full electrical install for open-plan kitchen extension." },
  { id: 7, title: "Emergency Lighting — Hotel", category: "commercial" as const, desc: "Emergency lighting upgrade across 50 rooms." },
  { id: 8, title: "Smart Home — Chelsea", category: "domestic" as const, desc: "Lutron smart lighting and automated blinds system." },
];

const Gallery = () => {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">Our Work</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">Project Gallery</motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80">
              Browse our recent commercial and domestic electrical projects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex items-center justify-center gap-3 mb-12">
            {[
              { value: "all" as const, label: "All Projects" },
              { value: "commercial" as const, label: "Commercial", icon: Building2 },
              { value: "domestic" as const, label: "Domestic", icon: Home },
            ].map((f) => (
              <Button
                key={f.value}
                variant={filter === f.value ? "default" : "outline"}
                onClick={() => setFilter(f.value)}
                className="font-heading font-600"
              >
                {f.icon && <f.icon className="h-4 w-4 mr-2" />}
                {f.label}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={i}
                layout
              >
                <div className="group relative rounded-xl overflow-hidden border-2 border-border hover:border-primary/20 transition-all duration-300 bg-card">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    {project.category === "commercial" ? (
                      <Building2 className="h-12 w-12 text-muted-foreground/30" />
                    ) : (
                      <Home className="h-12 w-12 text-muted-foreground/30" />
                    )}
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs font-heading font-600 uppercase tracking-wider text-primary mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-700 text-sm mb-1">{project.title}</h3>
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

export default Gallery;

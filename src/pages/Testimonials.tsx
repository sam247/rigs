import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

type FilterType = "all" | "rewire" | "lighting" | "ev" | "fault" | "other";

const reviews = [
  { name: "Sarah Mitchell", text: "RIGS rewired our entire Victorian property in Tring. The team were professional, clean and incredibly thorough. They explained every step and the certification was provided immediately. Couldn't recommend them more highly.", rating: 5, type: "rewire" as const, service: "Full Rewire" },
  { name: "James Thompson", text: "Replaced our old fuse board with a modern consumer unit. Quick, tidy and fully certified. Top-notch service from start to finish.", rating: 5, type: "other" as const, service: "Consumer Unit" },
  { name: "Linda Patel", text: "Had a 7kW EV charger installed at home. Quick, tidy and they handled all the paperwork. Really impressed with the whole process.", rating: 5, type: "ev" as const, service: "EV Charger" },
  { name: "David Chen", text: "Diagnosed a tripping RCD in under an hour after another sparky had given up. Friendly, knowledgeable and really fairly priced.", rating: 5, type: "fault" as const, service: "Fault Finding" },
  { name: "Emma Watson", text: "Full kitchen lighting refit — LED downlights, dimmers and under-cupboard strips. Beautiful finish, no mess and bang on quote.", rating: 5, type: "lighting" as const, service: "Lighting" },
  { name: "Mark Richards", text: "PIR security floodlights front and back. Job done in a morning, neat cabling and a proper test certificate. Brilliant.", rating: 5, type: "lighting" as const, service: "Outdoor Lighting" },
  { name: "Catherine Ellis", text: "Smart lighting installation with dimmers and scene controls throughout the house. They took the time to understand exactly what we wanted and delivered beyond expectations.", rating: 5, type: "lighting" as const, service: "Smart Lighting" },
  { name: "Robert King", text: "Regular EICR testing for our rental portfolio. Always reliable, reports are clear and any remedials are done quickly and fairly priced. A landlord's dream electrician.", rating: 5, type: "other" as const, service: "EICR" },
];

const filterLabels: Record<FilterType, string> = {
  all: "All Reviews",
  rewire: "Rewires",
  lighting: "Lighting",
  ev: "EV Chargers",
  fault: "Fault Finding",
  other: "Other",
};

const Testimonials = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const filtered = filter === "all" ? reviews : reviews.filter((r) => r.type === filter);

  return (
    <Layout>
      <Seo
        title="Customer Reviews | RIGS Electrical Tring"
        description="Read 5-star reviews from RIGS Electrical customers across Tring and Hertfordshire — rewires, EV chargers, lighting and fault finding."
        path="/testimonials"
      />
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">Testimonials</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">What Our Customers Say</motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80">
              Don't just take our word for it — read what homeowners across Tring and Hertfordshire have to say about our work.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
            {(Object.keys(filterLabels) as FilterType[]).map((f) => (
              <Button key={f} variant={filter === f ? "default" : "outline"} onClick={() => setFilter(f)} className="font-heading font-600">
                {filterLabels[f]}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filtered.map((r, i) => (
              <motion.div key={r.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`h-4 w-4 ${j < r.rating ? "fill-accent text-accent" : "text-border"}`} />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">"{r.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading font-700 text-sm">{r.name}</p>
                        <p className="text-xs text-muted-foreground">{r.service}</p>
                      </div>
                      <span className="text-xs font-heading font-600 uppercase tracking-wider text-primary/60">{r.type}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;

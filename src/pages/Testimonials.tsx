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

type FilterType = "all" | "lighting" | "fault" | "installations" | "sockets";

const reviews = [
  {
    name: "Verified Customer, WD3",
    text: "Rob has undertaken electrical work (fault finding, maintenance, new installation inside and outside the house) for me for a number of years. His work is of a very high standard and his quotations are clear and easy to understand. He's respectful of my home, clears up and leaves the working environment clean and tidy and is completely trustworthy.",
    rating: 5,
    type: "fault" as const,
    service: "Electrician — Fault Finding & Installation",
  },
  {
    name: "Verified Customer, HP6",
    text: "Just as well I called Rob at RIGS. Was fortunate to benefit from a cancellation so attended within a day. Arrived promptly as promised. Both jobs required a level of skill above mine and some parts. All work carried out quickly and with good advice to avoid future failures. Overall? Simply excellent service.",
    rating: 5,
    type: "lighting" as const,
    service: "LED Lighting Repair",
  },
  {
    name: "Verified Customer, HP21",
    text: "High quality work. Neat and tidy. Thank you Rob.",
    rating: 5,
    type: "lighting" as const,
    service: "Under-Cupboard LED Lighting",
  },
  {
    name: "Verified Customer, HP23",
    text: "Rob has done a number of jobs for us over the last three years, including electrics for a bathroom and an en-suite, also running external cabling and wiring a garden building with power and lighting, and external lighting round the house. He is very professional and meticulous, and very resourceful in providing solutions and ideas. He works well with other trades, and leaves the place exceptionally clean and tidy at the end of the day.",
    rating: 5,
    type: "installations" as const,
    service: "Various Electrical Installations",
  },
  {
    name: "Verified Customer, HP4",
    text: "I have used Rob for several electrical problems both small and large. Rob is professional, knowledgeable, polite, goes the extra mile and doesn't leave a mess! I have always been very happy with his service and would recommend him.",
    rating: 5,
    type: "fault" as const,
    service: "Electrician",
  },
  {
    name: "Verified Customer, WD3",
    text: "Rob is excellent, he's very quick, extremely tidy and went the extra mile when we discovered we had some problems in the fuse box. We really enjoy having him in the house and I highly recommend him.",
    rating: 5,
    type: "sockets" as const,
    service: "Electric Sockets",
  },
];

const filterLabels: Record<FilterType, string> = {
  all: "All Reviews",
  lighting: "Lighting",
  fault: "Fault Finding",
  installations: "Installations",
  sockets: "Sockets",
};

const Testimonials = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const filtered = filter === "all" ? reviews : reviews.filter((r) => r.type === filter);

  return (
    <Layout>
      <Seo
        title="Customer Reviews | RIGS Electrical Tring"
        description="Read 5-star reviews from RIGS Electrical customers across Tring and Hertfordshire — rewires, kitchen & bathroom electrics, lighting and fault finding."
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

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const posts = [
  {
    title: "Consumer Unit vs Fuse Box: What’s the Difference?",
    description:
      "Understand the key differences between a consumer unit and an old fuse box, why it matters for safety and compliance, and when to consider an upgrade.",
    href: "/blog/consumer-unit-vs-fuse-box",
    dateLabel: "June 2026",
  },
];

const Blog = () => (
  <Layout>
    <Seo
      title="Blog | RIGS Electrical"
      description="Practical, homeowner-focused electrical advice from RIGS Electrical — safety, upgrades and common domestic faults across Tring and Hertfordshire."
      path="/blog"
    />
    <section className="bg-primary text-primary-foreground py-20 md:py-28">
      <div className="container">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">
            Advice & Guides
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">
            Blog
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed">
            Straightforward, domestic-first electrical guidance — written to help homeowners understand common issues and make safer decisions.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((p, i) => (
            <motion.div key={p.href} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={i}>
              <Link to={p.href} className="block h-full">
                <Card className="group h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{p.dateLabel}</span>
                    </div>
                    <h2 className="font-heading font-800 text-xl mb-3">{p.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-heading font-600 text-primary group-hover:text-primary/80 transition-colors">
                      Read article <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;


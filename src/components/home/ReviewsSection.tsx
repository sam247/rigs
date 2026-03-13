import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const googleReviews = [
  { name: "Sarah M.", text: "Greenhills rewired our entire house. Professional, clean and on time. Couldn't ask for more.", rating: 5 },
  { name: "James T.", text: "Fantastic work on our office fit-out. The team were knowledgeable and the finish was perfect.", rating: 5 },
  { name: "Linda P.", text: "Had an EV charger installed. Quick, tidy and explained everything clearly. Highly recommend.", rating: 5 },
];

const trustpilotReviews = [
  { name: "Mark D.", text: "Used Greenhills for our landlord EICR certificate. Fast, professional and great value. Will use again.", rating: 5 },
  { name: "Emma W.", text: "They fitted a new consumer unit and smoke alarms. Very neat work, fully certified. Excellent service.", rating: 5 },
  { name: "Paul R.", text: "Commercial fire alarm installation done on time and on budget. Highly competent team throughout.", rating: 5 },
];

const ReviewsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-primary mb-3">Reviews</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-800 mb-4">Trusted by Homeowners & Businesses</motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it. See what our customers say on Google and Trustpilot.
        </motion.p>
      </motion.div>

      {/* Google My Business */}
      <div className="mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={0}
          className="flex items-center justify-between mb-6 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-700 text-lg">Google Reviews</h3>
              <div className="flex items-center gap-1">
                <span className="text-sm font-heading font-600 text-foreground">5.0</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-1">(48 reviews)</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-xs font-heading gap-1" asChild>
            <a href="https://g.page/r/greenhills-electric/review" target="_blank" rel="noopener noreferrer">
              Leave a Review <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {googleReviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm italic">"{review.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-heading font-700 text-primary">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-600 text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">Google Review</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trustpilot */}
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={0}
          className="flex items-center justify-between mb-6 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[hsl(156,100%,35%)]/10 flex items-center justify-center">
              <svg className="h-5 w-5 text-[hsl(156,100%,35%)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-700 text-lg">Trustpilot</h3>
              <div className="flex items-center gap-1">
                <span className="text-sm font-heading font-600 text-foreground">4.9</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-1">(34 reviews)</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-xs font-heading gap-1" asChild>
            <a href="https://www.trustpilot.com/review/greenhillselectric.co.uk" target="_blank" rel="noopener noreferrer">
              View on Trustpilot <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustpilotReviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm italic">"{review.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[hsl(156,100%,35%)]/10 flex items-center justify-center text-xs font-heading font-700 text-[hsl(156,100%,35%)]">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-600 text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">Trustpilot Review</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ReviewsSection;

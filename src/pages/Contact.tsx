import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: "07989 205468", href: "tel:+447989205468" },
  { icon: Mail, label: "Email", value: "rigselectrical@icloud.com", href: "mailto:rigselectrical@icloud.com" },
  { icon: Instagram, label: "Instagram", value: "@rigselectrical", href: "https://www.instagram.com/rigselectrical" },
  { icon: MapPin, label: "Location", value: "Tring, Hertfordshire & surrounding areas" },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 8am–6pm, Sat: 9am–1pm" },
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("_gotcha")) return; // honeypot
    setSubmitting(true);
    try {
      const res = await fetch("https://formbold.com/s/9BaZ2", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) throw new Error("Request failed");
      toast({ title: "Callback requested!", description: "We'll be in touch as soon as possible." });
      form.reset();
    } catch {
      toast({
        title: "Couldn't send message",
        description: "Please try again or call 07989 205468.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Seo
        title="Contact RIGS Electrical | Request a Callback"
        description="Get in touch with RIGS Electrical in Tring. Call 07989 205468 or request a same-day callback for a free, no-obligation quote."
        path="/contact"
      />
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-heading font-600 uppercase tracking-wider text-accent mb-3">Contact Us</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-800 mb-6">Request a Callback</motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80">
              Tell us about your project and we'll call you back the same day with friendly,
              honest advice and a no-obligation quote.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3">
              <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-heading font-800 mb-6">Send Us a Message</motion.h2>
              <motion.form variants={fadeUp} custom={1} onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-heading font-600">Full Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-heading font-600">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@email.com" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-heading font-600">Phone</Label>
                    <Input id="phone" name="phone" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="font-heading font-600">Service Required</Label>
                    <Input id="service" name="service" placeholder="e.g. Rewire, Kitchen Electrics" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-heading font-600">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project…" rows={5} required />
                </div>
                <Button type="submit" size="lg" disabled={submitting} className="font-heading font-700 w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  {submitting ? "Sending…" : "Request Callback"}
                </Button>
              </motion.form>
            </motion.div>

            {/* Contact info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 space-y-6">
              <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-heading font-800 mb-2">Contact Details</motion.h2>
              {contactInfo.map((c, i) => (
                <motion.div key={c.label} variants={fadeUp} custom={i + 1}>
                  <Card>
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <c.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-700 text-sm">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">{c.value}</a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{c.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

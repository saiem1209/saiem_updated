import { motion } from "framer-motion";
import { Section } from "./Section";
import { Layers, Search, Rocket } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full Stack Web Development",
    text: "End-to-end web apps with React, Node.js, and MongoDB. From idea to deployment.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    text: "Optimizing web applications for lightning-fast load times.",
  },
  {
    icon: Search,
    title: "SEO & Digital Growth",
    text: "I don't just build websites; I make them rank. Implementing smart SEO strategies and technical optimizations",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="How I can help you ship."
      description="Pick a service or hire me for the full build — I treat your product like my own."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative rounded-2xl border border-border p-6 bg-card hover:border-accent/50 transition-colors"
          >
            <div className="size-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 inline-flex items-center justify-center mb-5 text-accent">
              <s.icon className="size-6" />
            </div>
            <h3 className="font-display font-semibold text-lg">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

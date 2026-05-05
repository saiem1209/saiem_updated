import { motion } from "framer-motion";
import { Section } from "./Section";
import { Rocket, Code2, Lightbulb } from "lucide-react";

const traits = [
  { icon: Code2, title: "Engineer", text: "Clean, scalable code with thoughtful architecture." },
  {
    icon: Lightbulb,
    title: "Problem solver",
    text: "Break complex problems into shippable pieces.",
  },
  { icon: Rocket, title: "SEO expert", text: "Building products with user empathy and speed." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Developer with a builder's mindset."
      description="I'm a Full Stack Developer focused on the JavaScript ecosystem — Node.js on the backend, React on the front. My background in SEO and business development allows me to turn complex ideas into data-driven digital solutions that deliver measurable growth."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {traits.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:shadow-soft transition-shadow"
          >
            <div className="size-10 rounded-xl bg-accent/15 text-accent inline-flex items-center justify-center mb-4">
              <t.icon className="size-5" />
            </div>
            <h3 className="font-display font-semibold text-lg">{t.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

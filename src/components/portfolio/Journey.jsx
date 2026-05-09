import { motion } from "framer-motion";
import { Section } from "./Section";

const events = [
  {
    year: "2022",
    title: "Started coding",
    text: "Began the journey with HTML, CSS, and JavaScript fundamentals.",
  },
  {
    year: "2023",
    title: "Frontend with React",
    text: "Built first React apps; learned component design and state management.",
  },
  {
    year: "2024",
    title: "Full Stack with Node.js",
    text: "Mastered Express, MongoDB, REST APIs, and authentication.",
  },
  {
    year: "2025",
    title: "Bridging Code & Content",
    text: "Combined technical expertise with SEO strategy to launch products and drive business growth.",
  },
  {
    year: "2026",
    title: "Project Lead",
    text: "Driving product development by leading teams, and optimizing workflows",
  },
];

export function Journey() {
  return (
    <Section id="journey" eyebrow="Journey" title="The path so far.">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
        <div className="space-y-10">
          {events.map((e, i) => (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div
                className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
              >
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                  {e.year}
                </div>
                <h3 className="mt-1 font-display font-semibold text-xl">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md md:inline-block">
                  {e.text}
                </p>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-4 md:left-1/2 top-1.5 size-3 rounded-full bg-accent ring-4 ring-background md:-translate-x-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

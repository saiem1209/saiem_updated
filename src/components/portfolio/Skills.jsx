import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind"] },
  { label: "Backend", items: ["Node.js", "Express.js"] },
  { label: "Database", items: ["MongoDB", "Mongoose"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "SEMrush", "Ahrefs"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The toolbox I ship with.">
      <div className="grid md:grid-cols-2 gap-5">
        {groups.map((g, gi) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.06 }}
            className="rounded-2xl border border-border p-6 bg-card/50"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-lg">{g.label}</h3>
              <span className="text-xs text-muted-foreground">{g.items.length}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

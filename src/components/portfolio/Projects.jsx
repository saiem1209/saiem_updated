import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Hero.io",
    desc: "Innovative apps store designed to makelife simpler, and more exciting.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://comfy-kulfi-ae030a.netlify.app/",
    repo: "https://github.com/saiem1209/apps-galary.git",
    accent: "from-emerald-500/30 to-teal-500/10",
  },
  {
    name: "Pet Paw",
    desc: "Multi vendor pet care & accessories website.",
    tech: ["Express", "MongoDB", "JWT"],
    live: "https://vocal-toffee-216f5c.netlify.app/",
    repo: "https://github.com/saiem1209/warm-paws-ass10.git",
    accent: "from-sky-500/30 to-indigo-500/10",
  },
  {
    name: "English Janala",
    desc: "A platform to learn English in esy and fun way",
    tech: ["React", "Node.js"],
    live: "https://english-janala-by-saiem.netlify.app/",
    repo: "https://github.com/saiem1209/english-janala.git",
    accent: "from-fuchsia-500/30 to-pink-500/10",
  },
  {
    name: "CS Ticket",
    desc: "Customer service management website",
    tech: ["Next.js", "MongoDB"],
    live: "https://magical-trifle-56d27b.netlify.app/",
    repo: "https://github.com/saiem1209/cs-customer-support.git",
    accent: "from-amber-500/30 to-orange-500/10",
  },
  {
    name: "NovaSun",
    desc: "Website for solar service provider & retailer",
    tech: ["Socket.io", "React"],
    live: "https://unique-trifle-364672.netlify.app/",
    repo: "#",
    accent: "from-violet-500/30 to-purple-500/10",
  },
  {
    name: "SEO master",
    desc: "Portfollio website for SEO expert",
    tech: ["React", "OpenWeather"],
    live: "https://beautiful-pavlova-f387ea.netlify.app/",
    repo: "#",
    accent: "from-cyan-500/30 to-blue-500/10",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Recent work I'm proud of."
      description="A selection of full-stack projects — from APIs to polished UIs."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:shadow-soft transition-all hover:-translate-y-1"
          >
            <div className={`h-32 bg-gradient-to-br ${p.accent} relative overflow-hidden`}>
              <div className="absolute inset-0 flex items-end p-5">
                <div className="font-display font-bold text-2xl text-foreground/80">{p.name}</div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 text-sm">
                <a
                  href={p.live}
                  className="inline-flex items-center gap-1.5 text-accent hover:underline font-medium"
                >
                  Live <ExternalLink className="size-3.5" />
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground font-medium"
                >
                  Code <Github className="size-3.5" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

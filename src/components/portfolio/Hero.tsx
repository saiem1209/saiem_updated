import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import portrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/3 -left-32 size-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground mb-6"
          >
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            Available for freelance & startup roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">Saiem Hossain</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            Full Stack Developer & SEO specialist. I build fast, scalable web applications and help
            businesses grow with smart digital strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium shadow-soft hover:shadow-glow transition-all"
            >
              View Projects
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              <Sparkles className="size-4 text-accent" /> Hire me
            </a>

            <div className="flex items-center gap-1 ml-2">
              <a
                aria-label="GitHub"
                href="https://github.com/saiem1209"
                target="_blank"
                rel="noreferrer"
                className="size-10 inline-flex items-center justify-center rounded-full hover:bg-secondary transition"
              >
                <Github className="size-4" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/mohammad-saiem-hossain-bb9438187?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="size-10 inline-flex items-center justify-center rounded-full hover:bg-secondary transition"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                aria-label="Email"
                href="mailto:hello@saiem.dev"
                className="size-10 inline-flex items-center justify-center rounded-full hover:bg-secondary transition"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { k: "3+", v: "Years coding" },
              { k: "20+", v: "Projects shipped" },
              { k: "4", v: "SEO Project Managed" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-display font-bold">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative justify-self-center md:justify-self-end"
        >
          <div className="absolute -inset-6 bg-accent/20 blur-3xl rounded-full" />
          <div className="relative glass rounded-3xl p-2 shadow-soft">
            <img
              src={portrait}
              width={896}
              height={1024}
              alt="Saiem Hossain portrait"
              className="rounded-2xl w-64 sm:w-72 md:w-80 h-auto object-cover"
            />
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-card">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Currently
              </div>
              <div className="text-sm font-semibold">Project Lead Top Electrician Pty.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

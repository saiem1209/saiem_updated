import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          {eyebrow && (
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-base md:text-lg">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

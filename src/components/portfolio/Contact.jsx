import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! I'll be in touch soon.");
      setForm({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="Have a project in mind, or just want to say hi? Drop a message — I respond within 24 hours."
    >
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <a
            href="mailto:saiem21@gamil.com"
            className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-secondary transition group"
          >
            <div className="size-10 rounded-lg bg-accent/15 text-accent inline-flex items-center justify-center">
              <Mail className="size-4" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm font-medium">saiem21@gamil.com</div>
            </div>
          </a>
          <a
            href="https://github.com/saiem1209"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-secondary transition"
          >
            <div className="size-10 rounded-lg bg-accent/15 text-accent inline-flex items-center justify-center">
              <Github className="size-4" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">GitHub</div>
              <div className="text-sm font-medium">github.com/saiem</div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-saiem-hossain-bb9438187?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-secondary transition"
          >
            <div className="size-10 rounded-lg bg-accent/15 text-accent inline-flex items-center justify-center">
              <Linkedin className="size-4" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">LinkedIn</div>
              <div className="text-sm font-medium">linkedin.com/in/saiem</div>
            </div>
          </a>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 md:p-8 space-y-4 shadow-soft"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="input"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email">
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                type="email"
                className="input"
                placeholder="you@example.com"
              />
            </Field>
          </div>
          <Field label="Message">
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="input resize-none"
              placeholder="Tell me about your project..."
            />
          </Field>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:shadow-glow transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send message"} <Send className="size-4" />
          </button>
        </motion.form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
          color: var(--foreground);
        }
        .input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow); }
        .input::placeholder { color: var(--muted-foreground); }
      `}</style>
    </Section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}

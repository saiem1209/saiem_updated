import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300",
          scrolled && "px-3 sm:px-4",
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all",
            scrolled ? "glass shadow-soft" : "",
          )}
        >
          <a href="#home" className="font-display font-bold text-lg tracking-tight">
            saiem<span className="text-gradient">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="size-9 inline-flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Hire me
            </a>
            <button
              className="md:hidden size-9 inline-flex items-center justify-center rounded-full border border-border"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-soft animate-fade-in">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block py-1 text-sm font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

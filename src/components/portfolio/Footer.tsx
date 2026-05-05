export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold">saiem<span className="text-gradient">.</span></div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Saiem Hossain. All rights reserved.</div>
      </div>
    </footer>
  );
}

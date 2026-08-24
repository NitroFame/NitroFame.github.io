import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", index: "00" },
  { id: "about", label: "About", index: "01" },
  { id: "projects", label: "Projects", index: "02" },
  { id: "skills", label: "Skills", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
];

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
          >
            <span className="text-primary">[</span>
            <span>OSAMA_REDA</span>
            <span className="text-primary">]</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`group relative px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="mr-1 text-primary/50">{item.index}</span>
                {item.label}
                <span
                  className={`absolute bottom-0 left-4 h-px bg-primary transition-all duration-300 ${
                    activeSection === item.id ? "w-[calc(100%-2rem)]" : "w-0 group-hover:w-[calc(100%-2rem)]"
                  }`}
                />
              </button>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-30 transform bg-background transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex h-full flex-col justify-center px-6">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex items-baseline gap-4 border-b border-border/40 py-5 text-left transition-transform"
              style={{
                transitionDelay: `${i * 50}ms`,
                transform: open ? "translateX(0)" : "translateX(20px)",
                opacity: open ? 1 : 0,
                transition: "all 0.3s ease-out",
              }}
            >
              <span className="font-mono text-xs text-primary/50">{item.index}</span>
              <span className="text-2xl font-semibold tracking-tight">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="text-primary">[</span>
            OSAMA_REDA
            <span className="text-primary">]</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">MECHATRONICS ENGINEER</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/NitroFame"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/osama-ahmed-77692634a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:ossamaahmed2008@gmail.com"
              className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-border/20 pt-6 text-center font-mono text-xs text-muted-foreground/60">
          © 2026 OSAMA REDA · ALL SYSTEMS OPERATIONAL · BUILT WITH PRECISION
        </div>
      </div>
    </footer>
  );
}

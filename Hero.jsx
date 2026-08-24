import React from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden grid-blueprint"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        {/* Coordinate marker */}
        <div className="mb-8 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="h-px w-8 bg-primary/40" />
          <span>[ 2.9935° N, 101.7874° E ] — MALAYSIA</span>
        </div>

        <div className="max-w-4xl">
          <p className="mb-4 font-mono text-sm text-primary">[ IDENTITY // OSAMA_REDA ]</p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Mechatronics
            <br />
            <span className="text-primary text-glow">Engineer</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Engineering student at the University of Nottingham Malaysia, specializing in
            robotics, automation, and embedded systems. Building precise, reliable systems
            that bridge mechanical design and intelligent control.
          </p>

          {/* Status line */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              B.ENG EXPECTED MAY 2028
            </span>
            <span className="hidden sm:inline">·</span>
            <span>UNIVERSITY OF NOTTINGHAM MALAYSIA</span>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Get in Touch
            </button>
          </div>

          {/* Socials */}
          <div className="mt-12 flex items-center gap-4">
            <a
              href="https://github.com/NitroFame"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/osama-ahmed-77692634a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:ossamaahmed2008@gmail.com"
              className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:ossamaahmed2008@gmail.com?subject=Portfolio Contact from ${email}`;
  };

  return (
    <section id="contact" className="relative border-t border-border/40 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-3 font-mono text-xs text-primary">[ 04 // CONTACT ]</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* CTA */}
          <div>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Let's build
              <br />
              <span className="text-primary text-glow">something.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Open to internship opportunities, collaboration on engineering projects, and
              technical conversations. Reach out — I respond promptly.
            </p>

            {/* Contact links */}
            <div className="mt-10 space-y-3">
              <a
                href="mailto:ossamaahmed2008@gmail.com"
                className="group flex items-center gap-4 border border-border/40 bg-card/30 p-4 transition-colors hover:border-primary/40"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="font-mono text-xs text-muted-foreground">EMAIL</p>
                  <p className="text-sm font-medium">ossamaahmed2008@gmail.com</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </a>

              <a
                href="tel:+201039711049"
                className="group flex items-center gap-4 border border-border/40 bg-card/30 p-4 transition-colors hover:border-primary/40"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="font-mono text-xs text-muted-foreground">PHONE (EG)</p>
                  <p className="text-sm font-medium">+20 1039 711 049</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </a>

              <a
                href="tel:+60178034659"
                className="group flex items-center gap-4 border border-border/40 bg-card/30 p-4 transition-colors hover:border-primary/40"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="font-mono text-xs text-muted-foreground">PHONE (MY)</p>
                  <p className="text-sm font-medium">+60 17 803 4659</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Terminal-style email form + socials */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              // Quick message
            </p>
            <form onSubmit={handleSubmit} className="border border-border/40 bg-card/30">
              <div className="border-b border-border/40 px-4 py-3 font-mono text-xs text-muted-foreground">
                <span className="text-primary">~/</span> initiate_contact.sh
              </div>
              <div className="p-4">
                <label className="mb-2 block font-mono text-xs text-muted-foreground">
                  <span className="text-primary">$</span> enter your email:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  className="w-full border border-border bg-background/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="mt-3 w-full bg-primary px-4 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                >
                  Send Message →
                </button>
              </div>
            </form>

            {/* Social links */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href="https://github.com/NitroFame"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border border-border/40 bg-card/30 p-4 transition-colors hover:border-primary/40"
              >
                <Github className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground">GITHUB</p>
                  <p className="text-sm font-medium">/NitroFame</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/osama-ahmed-77692634a"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border border-border/40 bg-card/30 p-4 transition-colors hover:border-primary/40"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground">LINKEDIN</p>
                  <p className="text-sm font-medium">/osama-ahmed</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

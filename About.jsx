import React from "react";
import { GraduationCap, Wrench, Users, MapPin } from "lucide-react";

const ACTIVITIES = [
  {
    icon: Users,
    title: "Head of Events — Robotics Society",
    period: "Sep 2025 — Present",
    desc: "Led planning and execution of technical workshops, competitions, and industrial visits. Coordinated logistics, schedules, and team communication for large-scale events.",
  },
  {
    icon: Wrench,
    title: "PCB Design Workshop",
    period: "Robotics Society",
    desc: "Learned and taught PCB design fundamentals using KiCad — schematic design, PCB layout, and circuit integration. Conducted workshops on PCB advantages and implementation.",
  },
  {
    icon: MapPin,
    title: "Penang Industrial Visit",
    period: "Robotics Society",
    desc: "Organized visits to National Instruments, SkyeChip, Inari Amertron, Intel, and Micron Technology — exposure to semiconductor manufacturing and embedded systems.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-border/40 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs text-primary">[ 01 // ABOUT ]</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Profile
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-muted-foreground">
            // EGYPTIAN STUDENT STUDYING IN MALAYSIA
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Bio */}
          <div className="lg:col-span-2">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I'm a Mechatronics, Robotics, and Automation Engineering student at the
                University of Nottingham Malaysia, expected to graduate in May 2028. My work
                spans the full stack of engineering — from mechanical design and pneumatic
                systems to embedded programming and computer vision.
              </p>
              <p>
                I've built multifunctional robot cars with Bluetooth and ultrasonic
                navigation, designed PCBs from scratch, and developed computer vision
                applications with OpenCV. As Head of Events for the Robotics Society, I
                lead technical workshops and industrial visits that connect theory to
                real-world semiconductor manufacturing.
              </p>
              <p>
                I'm driven by the challenge of building precise, reliable systems — whether
                that's a pneumatic transport mechanism operating without electronics, or an
                alarm clock application with multiple modes and time zone support.
              </p>
            </div>

            {/* Education */}
            <div className="mt-12 border border-border/40 bg-card/40 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-primary/5">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">University of Nottingham Malaysia</h3>
                  <p className="font-mono text-xs text-muted-foreground">BACHELOR OF ENGINEERING</p>
                </div>
              </div>
              <div className="mt-4 grid gap-2 font-mono text-xs text-muted-foreground sm:grid-cols-2">
                <div>
                  <span className="text-primary/50">MAJOR:</span> Mechatronics, Robotics & Automation
                </div>
                <div>
                  <span className="text-primary/50">GRADUATION:</span> May 2028
                </div>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              // Activities
            </p>
            {ACTIVITIES.map((act, i) => (
              <div
                key={i}
                className="group border border-border/40 bg-card/30 p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex items-start gap-3">
                  <act.icon className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="text-sm font-semibold leading-snug">{act.title}</h4>
                    <p className="mt-1 font-mono text-xs text-primary/70">{act.period}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{act.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

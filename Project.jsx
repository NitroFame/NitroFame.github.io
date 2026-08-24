import React from "react";
import { Cpu, Cog, Car, Eye, Clock, Wind, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    icon: Clock,
    name: "Sparks — Alarm Clock System",
    category: "Software / UI",
    desc: "A fully functional alarm clock application built from scratch with multiple UI modes, alarm scheduling, snooze functionality, alarm management, and time zone support. Designed an interactive interface enabling users to add, remove, and customize alarms efficiently.",
    stack: ["UI/UX", "Time Management", "Scheduling", "Multi-Mode"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4c8a9b8?w=800&q=80",
  },
  {
    icon: Wind,
    name: "Mechanical Design Project",
    category: "Mechanical / Pneumatics",
    desc: "Designed and built a pneumatic mechanical system to transport a foam block onto a moving car without the use of electrical components. Applied mechanical design principles and pneumatic actuation to achieve precise, reliable motion control.",
    stack: ["Pneumatics", "Mechanical Design", "Actuation", "Motion Control"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    icon: Car,
    name: "Robot Car Project",
    category: "Robotics / Embedded",
    desc: "A multifunctional robot car integrating Bluetooth, ultrasonic, line-following, radio transmitter/receiver, and orientation sensors for autonomous and remote-controlled operation. Implemented sensor-based navigation and obstacle detection for improved movement accuracy.",
    stack: ["Bluetooth", "Ultrasonic", "Line Following", "RF Communication", "Obstacle Detection"],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
  },
  {
    icon: Eye,
    name: "OpenCV Object Detection",
    category: "Computer Vision",
    desc: "A computer vision application using OpenCV to detect and count specific objects in images and video streams. Applied image processing and object detection techniques to analyze visual data with real-time detection capabilities.",
    stack: ["OpenCV", "Image Processing", "Object Detection", "Real-Time"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-border/40 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs text-primary">[ 02 // PROJECTS ]</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Project Matrix
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-muted-foreground">
            // 04 PROJECTS — UNIVERSITY OF NOTTINGHAM
          </p>
        </div>

        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <article
              key={i}
              className="group relative overflow-hidden border border-border/40 bg-card/30 transition-colors hover:border-primary/40"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border/40">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                {/* Scanner line */}
                <div className="absolute inset-x-0 top-0 h-px bg-primary/0 transition-all duration-500 group-hover:bg-primary/60 group-hover:top-full" />
                {/* Category badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 border border-border/60 bg-background/80 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm">
                  <project.icon className="h-3 w-3 text-primary" />
                  {project.category}
                </div>
                {/* Index */}
                <div className="absolute right-4 top-4 font-mono text-xs text-muted-foreground/60">
                  [ {String(i + 1).padStart(2, "0")} ]
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-0" />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.desc}
                </p>

                {/* Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="border border-border/60 px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

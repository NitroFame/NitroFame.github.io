import React from "react";

const SKILL_GROUPS = [
  {
    label: "Programming",
    items: ["Python", "C/C++", "OpenCV", "Image Processing", "Object Detection", "Data Analysis"],
  },
  {
    label: "Hardware & Embedded",
    items: ["Arduino", "ESP32", "Raspberry Pi", "Sensor Integration", "I2C", "SPI", "Bluetooth", "RF Communication"],
  },
  {
    label: "Design & CAD",
    items: ["AutoCAD", "SolidWorks", "KiCad", "Tinkercad", "LTSpice", "PCB Design", "Circuit Design"],
  },
  {
    label: "Manufacturing",
    items: ["3D Printing", "Milling", "Lathe", "Drill Press", "Pneumatics"],
  },
  {
    label: "Tools",
    items: ["Git/GitHub", "Microsoft Office", "Excel"],
  },
];

const LANGUAGES = [
  { lang: "English", level: "Fluent", percent: 100 },
  { lang: "Arabic", level: "Fluent", percent: 100 },
  { lang: "Malay", level: "Beginner", percent: 30 },
  { lang: "French", level: "Beginner", percent: 25 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-border/40 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs text-primary">[ 03 // SKILLS ]</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Technical Stack
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-muted-foreground">
            // CAPABILITIES INDEX
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Skills */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {SKILL_GROUPS.map((group, i) => (
                <div key={i} className="border border-border/40 bg-card/30 p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="font-mono text-xs text-primary/50">[ {String(i + 1).padStart(2, "0")} ]</span>
                    <h3 className="font-mono text-sm font-semibold uppercase tracking-wider">
                      {group.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, j) => (
                      <span
                        key={j}
                        className="border border-border/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              // Languages
            </p>
            <div className="space-y-5">
              {LANGUAGES.map((lang, i) => (
                <div key={i}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-sm font-medium">{lang.lang}</span>
                    <span className="font-mono text-xs text-muted-foreground">{lang.level}</span>
                  </div>
                  <div className="h-1 w-full bg-secondary">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                // Certifications & Training
              </p>
              <div className="space-y-2">
                {["SPARKS (IEEE Electrical Society)", "Robotics Society (UoN)", "Penang Industrial Visit", "PCB Workshop"].map((cert, i) => (
                  <div key={i} className="flex items-center gap-2 border border-border/40 px-3 py-2 text-xs text-muted-foreground">
                    <span className="text-primary">▹</span>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

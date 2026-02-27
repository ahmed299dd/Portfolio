"use client";

import Section from "./Section";

const stats = [
  { label: "Projects", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Tools Mastered", value: "12+" },
];

export default function About() {
  return (
    <Section id="about">
      <div className="flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            About Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Passionate about building
            <br />
            <span className="text-muted-foreground">what matters.</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Bio */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "I'm a Full Stack Developer Student with a deep passion for creating impactful software. My journey spans from crafting modern web applications with React and Next.js to building Python automation tools and custom trading indicators."
              }
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I specialize in data pipelines that transform raw information into
              actionable insights — from web scraping to structured JSON
              processing to beautifully formatted PDF reports. Every project is
              an opportunity to learn something new and push boundaries.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-hover flex items-center gap-6 rounded-xl border border-border bg-card p-6"
              >
                <span className="text-3xl font-bold text-accent">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

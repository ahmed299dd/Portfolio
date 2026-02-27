"use client";

import Section from "./Section";
import Tools from "./Tools";

const steps = [
  {
    phase: "Design",
    title: "Plan & Design",
    description:
      "Research requirements, sketch wireframes, and define the architecture before writing any code.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    phase: "Develop",
    title: "Build & Iterate",
    description:
      "Write clean, modular code with TypeScript. Build features incrementally with continuous testing.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    phase: "Test",
    title: "Review & Test",
    description:
      "Thorough quality assurance with performance audits, accessibility checks, and cross-browser testing.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    phase: "Deploy",
    title: "Ship & Monitor",
    description:
      "Deploy to production with CI/CD pipelines. Monitor performance and iterate based on real-world usage.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
];

export default function TimelineSection() {
  return (
    <Section id="timeline">
      <div className="flex flex-col gap-24">
        {/* Timeline */}
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium tracking-widest text-accent uppercase">
              Workflow
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How I build things
            </h2>
          </div>

          {/* Horizontal timeline - desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connector line */}
              <div
                className="absolute top-5 left-0 right-0 h-px bg-border"
                aria-hidden="true"
              />

              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, i) => (
                  <div key={step.phase} className="relative flex flex-col gap-6">
                    {/* Node */}
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background text-accent">
                      {step.icon}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-medium tracking-widest text-accent uppercase">
                        Phase {i + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical timeline - mobile */}
          <div className="lg:hidden">
            <div className="relative flex flex-col gap-8">
              {/* Vertical line */}
              <div
                className="absolute top-0 bottom-0 left-5 w-px bg-border"
                aria-hidden="true"
              />

              {steps.map((step, i) => (
                <div key={step.phase} className="relative flex gap-6 pl-0">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background text-accent">
                    {step.icon}
                  </div>
                  <div className="flex flex-col gap-2 pb-4">
                    <span className="text-xs font-medium tracking-widest text-accent uppercase">
                      Phase {i + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <Tools />
      </div>
    </Section>
  );
}

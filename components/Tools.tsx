"use client";

import Section from "./Section";

const tools = [
  {
    name: "VS Code",
    description: "Primary code editor with custom extensions and keybindings.",
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaboration for every project.",
  },
  {
    name: "Docker",
    description: "Containerized development and deployment environments.",
  },
  {
    name: "Figma",
    description: "UI/UX design and prototyping before writing code.",
  },
  {
    name: "Postman",
    description: "API testing and documentation during development.",
  },
  {
    name: "Vercel",
    description: "Seamless deployment and hosting for web projects.",
  },
];

export default function Tools() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-widest text-accent uppercase">
          Toolkit
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Tools I use daily
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="card-hover flex flex-col gap-2 rounded-xl border border-border bg-card p-5"
          >
            <h3 className="text-sm font-semibold text-card-foreground">
              {tool.name}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

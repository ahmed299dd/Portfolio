"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import Filters from "./Filters";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const featured = projects.filter((p) => p.featured);
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects">
      <div className="flex flex-col gap-16">
        {/* Featured Projects */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium tracking-widest text-accent uppercase">
              Featured Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Selected projects
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {featured.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={true}
              />
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              All Projects
            </h3>
            <Filters active={filter} onChange={setFilter} />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center gap-2 py-16 text-center">
              <p className="text-lg font-medium text-muted-foreground">
                No projects found
              </p>
              <p className="text-sm text-muted-foreground">
                Try selecting a different filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

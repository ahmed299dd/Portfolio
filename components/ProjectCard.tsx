import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`card-hover flex flex-col overflow-hidden rounded-xl border border-border bg-card ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      {/* Image placeholder */}
      <div
        className={`relative overflow-hidden bg-muted ${
          featured ? "lg:w-2/5" : ""
        }`}
      >
        <div
          className={`flex items-center justify-center ${
            featured ? "h-64 lg:h-full" : "h-48"
          }`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-1 flex-col gap-4 p-6 ${featured ? "lg:p-8" : ""}`}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent capitalize">
              {project.category}
            </span>
          </div>
          <h3
            className={`font-bold tracking-tight text-card-foreground ${
              featured ? "text-xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Features list (featured projects only) */}
        {featured && project.features.length > 0 && (
          <ul className="flex flex-col gap-1.5">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-accent"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-3 pt-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

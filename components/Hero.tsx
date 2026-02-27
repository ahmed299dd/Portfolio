const techBadges = [
  "Next.js",
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <span
              className="inline-block h-2 w-2 rounded-full bg-accent"
              aria-hidden="true"
            />
            Available for opportunities
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {"Hi, I'm "}
            <span className="gradient-text">Ahmed Amari</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Full Stack Developer Student building modern web applications,
            Python automation tools, and trading indicator systems. I turn
            complex problems into elegant, scalable solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right column — animated gradient card */}
        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="gradient-border rounded-2xl p-8">
            <div className="relative rounded-xl bg-muted/50 p-8">
              {/* Code-like decoration */}
              <div className="flex flex-col gap-3 font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-accent">{"const"}</span>{" "}
                  <span className="text-foreground">developer</span>{" "}
                  <span className="text-muted-foreground">{"= {"}</span>
                </div>
                <div className="pl-6 text-muted-foreground">
                  <span className="text-accent-secondary">name</span>
                  {': "'}
                  <span className="text-foreground">Ahmed Amari</span>
                  {'",'}
                </div>
                <div className="pl-6 text-muted-foreground">
                  <span className="text-accent-secondary">role</span>
                  {': "'}
                  <span className="text-foreground">Full Stack Developer</span>
                  {'",'}
                </div>
                <div className="pl-6 text-muted-foreground">
                  <span className="text-accent-secondary">skills</span>
                  {": ["}
                </div>
                <div className="pl-12 text-foreground">
                  {'"Web Apps", "Python", "Trading"'}
                </div>
                <div className="pl-6 text-muted-foreground">{"],"}</div>
                <div className="pl-6 text-muted-foreground">
                  <span className="text-accent-secondary">passion</span>
                  {': "'}
                  <span className="text-foreground">Building cool things</span>
                  {'"'}
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="animate-float absolute -top-4 -right-4 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
            {techBadges[0]}
          </div>
          <div className="animate-float-delayed absolute -bottom-4 -left-4 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
            {techBadges[1]}
          </div>
          <div className="animate-float-slow absolute top-1/2 -right-8 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
            {techBadges[2]}
          </div>
        </div>
      </div>
    </section>
  );
}

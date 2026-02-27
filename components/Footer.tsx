"use client";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Ahmed Amari. Built with Next.js."}
        </p>
        <button
          onClick={scrollToTop}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          aria-label="Scroll to top"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      </div>
    </footer>
  );
}

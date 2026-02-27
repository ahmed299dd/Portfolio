"use client";

import { useState } from "react";
import Section from "./Section";

const EMAIL = "ahmed.amari@example.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <Section id="contact">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Let's work together"}
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-muted-foreground">
            {
              "Have a project in mind or want to collaborate? I'm always open to discussing new opportunities."
            }
          </p>
        </div>

        {/* Email CTA */}
        <div className="flex flex-col items-center gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-medium text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send me an email
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Copy email address to clipboard"
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
              aria-hidden="true"
            >
              {copied ? (
                <polyline points="20 6 9 17 4 12" />
              ) : (
                <>
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </>
              )}
            </svg>
            {copied ? "Copied!" : `${EMAIL}`}
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 pt-4">
          <a
            href="https://github.com/ahmedamari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            aria-label="GitHub profile"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/ahmedamari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            aria-label="LinkedIn profile"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}

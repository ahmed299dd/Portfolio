import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ahmed Amari | Full Stack Developer",
    template: "%s | Ahmed Amari",
  },
  description:
    "Full Stack Developer Student specializing in web applications, Python automation, trading indicators, and data pipelines. Building modern, scalable solutions with Next.js, TypeScript, and Python.",
  keywords: [
    "Ahmed Amari",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "React",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ahmed Amari" }],
  creator: "Ahmed Amari",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ahmed Amari | Full Stack Developer",
    description:
      "Full Stack Developer Student building modern web applications, Python automation tools, and trading indicator systems.",
    siteName: "Ahmed Amari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Amari | Full Stack Developer",
    description:
      "Full Stack Developer Student building modern web applications, Python automation tools, and trading indicator systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "portfolio-site",
    title: "Developer Portfolio",
    description:
      "A modern, responsive portfolio built with Next.js and TypeScript featuring dark mode, smooth animations, and optimized performance.",
    category: "web",
    featured: true,
    image: "/images/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "CSS Modules", "SEO"],
    features: [
      "Server-side rendering",
      "Dark mode support",
      "Intersection Observer animations",
      "Lighthouse 90+ score",
    ],
    demoUrl: "#",
    sourceUrl: "https://github.com/ahmedamari",
  },
  {
    id: "trading-dashboard",
    title: "Trading Indicator Suite",
    description:
      "Custom trading indicators and real-time dashboard for analyzing market trends with Python-powered backtesting engine.",
    category: "trading",
    featured: true,
    image: "/images/projects/trading.jpg",
    tags: ["Python", "Pandas", "Plotly", "WebSocket"],
    features: [
      "Real-time data streaming",
      "Custom indicator algorithms",
      "Backtesting engine",
      "Interactive charts",
    ],
    demoUrl: "#",
    sourceUrl: "https://github.com/ahmedamari",
  },
  {
    id: "data-pipeline",
    title: "Data Pipeline Automation",
    description:
      "End-to-end data pipeline that scrapes, transforms, and exports structured data from JSON to formatted PDF reports.",
    category: "python",
    featured: true,
    image: "/images/projects/pipeline.jpg",
    tags: ["Python", "Scrapy", "JSON", "ReportLab"],
    features: [
      "Automated web scraping",
      "Data transformation",
      "PDF report generation",
      "Scheduled execution",
    ],
    demoUrl: "#",
    sourceUrl: "https://github.com/ahmedamari",
  },
  {
    id: "task-manager",
    title: "Task Management App",
    description:
      "Full-stack task management application with real-time updates, drag-and-drop, and team collaboration features.",
    category: "web",
    featured: false,
    image: "/images/projects/tasks.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    features: [
      "Drag-and-drop interface",
      "Real-time collaboration",
      "User authentication",
      "RESTful API",
    ],
    demoUrl: "#",
    sourceUrl: "https://github.com/ahmedamari",
  },
  {
    id: "crypto-tracker",
    title: "Crypto Price Tracker",
    description:
      "Real-time cryptocurrency price tracker with alerts, portfolio management, and technical analysis tools.",
    category: "trading",
    featured: false,
    image: "/images/projects/crypto.jpg",
    tags: ["Python", "FastAPI", "React", "CoinGecko API"],
    features: [
      "Live price feeds",
      "Custom alerts",
      "Portfolio tracking",
      "Technical indicators",
    ],
    demoUrl: "#",
    sourceUrl: "https://github.com/ahmedamari",
  },
  {
    id: "web-scraper",
    title: "Intelligent Web Scraper",
    description:
      "AI-enhanced web scraper that adapts to page structure changes and exports clean, structured datasets.",
    category: "python",
    featured: false,
    image: "/images/projects/scraper.jpg",
    tags: ["Python", "BeautifulSoup", "Selenium", "MongoDB"],
    features: [
      "Adaptive parsing",
      "Rate limiting",
      "Data validation",
      "Export to multiple formats",
    ],
    demoUrl: "#",
    sourceUrl: "https://github.com/ahmedamari",
  },
];

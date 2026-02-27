import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML / CSS", level: 95 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 75 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 65 },
      { name: "Supabase", level: 70 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 },
      { name: "Linux / CLI", level: 80 },
    ],
  },
];

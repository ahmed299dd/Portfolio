export interface Project {
  id: string;
  title: string;
  description: string;
  category: "web" | "python" | "trading";
  featured: boolean;
  image: string;
  tags: string[];
  features: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

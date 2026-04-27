export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin";
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  aiUsage: string;
  techStack: string[];
  githubUrl: string;
  mediaType: "video" | "image";
  mediaSrc?: string;
}

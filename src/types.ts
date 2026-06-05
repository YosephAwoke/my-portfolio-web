export interface CaseStudy {
  overview: string;
  features: string[];
  tools: string[];
  role: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "full-stack" | "ai" | "ui-ux" | "aiot";
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: CaseStudy;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  tags: string[];
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  duration: string;
  gpa: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

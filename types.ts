
export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Language' | 'Web' | 'Mobile' | 'Database' | 'Tool';
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description?: string;
}

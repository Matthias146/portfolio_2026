export interface Project {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
  featured: boolean;
}

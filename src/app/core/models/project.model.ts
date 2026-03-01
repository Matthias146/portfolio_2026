export type ProjectTag = 'angular' | 'api' | 'auth' | 'fullstack' | 'ui';

export interface ProjectSection {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
  featured: boolean;
  tags: ProjectTag[];
}

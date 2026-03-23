export type ProjectTag =
  | 'angular'
  | 'api'
  | 'auth'
  | 'fullstack'
  | 'ui'
  | 'firebase'
  | 'signals'
  | 'realtime'
  | 'testing'
  | 'performance';

export type ProjectStatus = 'wip' | 'live';

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
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  tags: ProjectTag[];
  sections?: ProjectSection[];
  coverImage?: string;
  screenshots?: string[];
  ogImage?: string;
  status: ProjectStatus;
}

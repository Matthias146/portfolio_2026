import { Project } from '../../../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'kanban',
    title: 'Kanban Board',
    summary: 'Task-Management App mit Fokus auf Struktur, UI-State und sauberem Datenfluss.',
    stack: ['Angular', 'Signals', 'TypeScript', 'SCSS', 'CDK'],
    highlights: ['Drag & Drop', 'Spalten & Tasks', 'Persistenz (LocalStorage)'],
    repoUrl: 'https://github.com/<dein-user>/kanban-angular',
    liveUrl: 'https://<dein-live-link>/kanban',
    featured: true,
  },
  {
    slug: 'api-explorer',
    title: 'API Explorer',
    summary: 'API Viewer mit Suche, Filter, Detailseiten und sauberen Loading/Error States.',
    stack: ['Angular', 'HTTP', 'Signals', 'TypeScript', 'SCSS'],
    highlights: ['Search & Filter', 'Loading/Error/Empty States', 'Detail View'],
    repoUrl: 'https://github.com/<dein-user>/api-explorer-angular',
    liveUrl: 'https://<dein-live-link>/api-explorer',
    featured: true,
  },
  {
    slug: 'auth-dashboard',
    title: 'Auth & Dashboard',
    summary: 'Login/Register Flow mit Guards und einer strukturierten AppShell.',
    stack: ['Angular', 'Routing', 'Guards', 'TypeScript', 'SCSS'],
    highlights: ['Auth Flow', 'Route Guards', 'Modulare Feature-Struktur'],
    repoUrl: 'https://github.com/<dein-user>/auth-dashboard-angular',
    featured: true,
  },
];

import { Project } from '../../../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'kanban',
    title: 'Kanban Board',
    summary:
      'Moderne Kanban-App mit Angular 21, Firebase Auth, Firestore Realtime-Updates und produktorientiertem Dark UI.',
    stack: [
      'Angular 21',
      'Signals',
      'TypeScript',
      'SCSS',
      'Angular CDK',
      'Firebase Auth',
      'Cloud Firestore',
      'Vitest',
    ],
    highlights: [
      'Firebase Auth + Gastzugang',
      'Realtime Board Updates',
      'Drag & Drop mit Angular CDK',
      'User-basierte Firestore Rules',
      'Create / Edit / Delete Tasks',
      'Toast Feedback + Loading States',
    ],
    repoUrl: 'https://github.com/Matthias146/kanban_board',
    liveUrl: 'https://kanban.matthias-hammelehle.dev/',
    featured: true,
    tags: ['angular', 'firebase', 'signals', 'realtime', 'ui'],
    sections: [
      {
        title: 'Ziel',
        body: 'Eine portfolio-taugliche Task-Management-App bauen, die modernes Angular, saubere Architektur, Realtime-Datenfluss und eine produktnahe UI miteinander verbindet.',
      },
      {
        title: 'Technische Entscheidungen',
        body: 'Angular Signals für reaktiven UI-State, feature-orientierte Struktur, getrennte Query-/Command-/Seed-Services für Firestore, Firebase Authentication für registrierte und anonyme Nutzer sowie Realtime-Listener statt manueller Reload-Logik.',
      },
      {
        title: 'Learnings',
        body: 'Ich habe gelernt, wie man Firestore-Realtime-Updates sauber in einen Angular-State-Flow integriert, User-Daten über Security Rules absichert, asynchrone UI-Zustände konsequent behandelt und ein Projekt technisch wie optisch von einer Demo zu einer echten Produkt-App weiterentwickelt.',
      },
    ],
    coverImage: '',
    screenshots: [],
    ogImage: '',
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
    tags: ['angular', 'api'],
    sections: [
      {
        title: 'Status',
        body: 'Das Projekt befindet sich noch in der Entwicklung und wird bald zur verfügung stehen.',
      },
      {
        title: 'Technische Entscheidungen',
        body: 'Signals für UI-State, feature-orientierte Struktur, wiederverwendbare UI-Komponenten, klare Router-Struktur.',
      },
      {
        title: 'Learnings',
        body: 'State-Flow sauber halten, UI-States konsequent abbilden (loading/error/empty) und Layout als AppShell denken.',
      },
    ],
    coverImage: '',
    screenshots: [],
    ogImage: '',
  },
  {
    slug: 'auth-dashboard',
    title: 'Auth & Dashboard',
    summary: 'Login/Register Flow mit Guards und einer strukturierten AppShell.',
    stack: ['Angular', 'Routing', 'Guards', 'TypeScript', 'SCSS'],
    highlights: ['Auth Flow', 'Route Guards', 'Modulare Feature-Struktur'],
    liveUrl: 'https://<dein-live-link>/api-explorer',
    repoUrl: 'https://github.com/<dein-user>/auth-dashboard-angular',
    featured: true,
    tags: ['angular', 'auth'],
    sections: [
      {
        title: 'Status',
        body: 'Das Projekt befindet sich noch in der Entwicklung und wird bald zur verfügung stehen.',
      },
      {
        title: 'Technische Entscheidungen',
        body: 'Signals für UI-State, feature-orientierte Struktur, wiederverwendbare UI-Komponenten, klare Router-Struktur.',
      },
      {
        title: 'Learnings',
        body: 'State-Flow sauber halten, UI-States konsequent abbilden (loading/error/empty) und Layout als AppShell denken.',
      },
    ],
    coverImage: '',
    screenshots: [],
    ogImage: '',
  },
];

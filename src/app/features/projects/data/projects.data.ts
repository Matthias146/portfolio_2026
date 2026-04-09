import { Project } from '../../../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'kanban',
    title: 'Kanban Board',
    summary:
      'Kanban-App mit Angular 21 und Firebase: Auth, Realtime-Updates in Firestore und ein produktnahes Dark UI.',
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
    status: 'live',
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
    slug: 'github-explorer',
    title: 'GitHub Explorer',
    summary:
      'GitHub Profil-Dashboard mit Signals-first Architektur, Signal Forms, selbst gerendertem SVG Contribution Graph und B2B-orientierten UI-Patterns.',
    stack: ['Angular', 'HTTP', 'Signals', 'TypeScript', 'SCSS'],
    highlights: [
      'Signals-first State (kein NgRx)',
      'Signal Forms Filter mit Search & Min-Stars',
      'Sortierbare Tabellen-Ansicht',
      'SVG Contribution Graph',
      'HTTP Interceptor für Rate Limit',
      'Typed Error Handling (404/403/429)',
      'Recent Searches via localStorage',
      'Skeleton Loader & Empty States',
    ],
    repoUrl: 'https://github.com/Matthias146/github-dashboard',
    liveUrl: 'https://gh-dashboard.matthias-hammelehle.dev',
    status: 'live',
    featured: true,
    tags: ['angular', 'api', 'signals', 'b2b'],
    sections: [
      {
        title: 'Projektidee',
        body: 'Ein GitHub Profil-Dashboard als Portfolio-Projekt mit Fokus auf moderne Angular 21 Patterns — bewusst ohne NgRx, stattdessen konsequent mit Signals, computed() und rxResource().',
      },
      {
        title: 'Technische Entscheidungen',
        body: 'Signals-first Architektur mit GithubStateService als Single Source of Truth. rxResource() für reaktives Datenfetching statt manuellem subscribe(). Signal Forms (experimental) für den Repo-Filter mit Debounce. HTTP Interceptor für das Live Rate-Limit aus den Response Headers. Zentraler ErrorHandlerService mit typisierten Fehlerzuständen (ApiErrorType).',
      },
      {
        title: 'Learnings',
        body: 'rxResource() und Signal Forms sind noch experimental — API-Änderungen zwischen Versionen erfordern aktives Verfolgen des Angular Changelogs. Safe resource value access bei Fehlerzuständen ist kritisch. Host Component Pattern für Komponenten-Tests mit required inputs.',
      },
    ],
    coverImage: '',
    screenshots: [],
    ogImage: '',
  },
  {
    slug: 'smart-readme-builder',
    title: 'Smart Readme Builder',
    summary:
      'Ein interaktiver Editor zur Erstellung strukturierter Markdown-Readmes inkl. automatischem GitHub-Scanner und Cloud-Speicher.',
    stack: ['Angular', 'Signals', 'Supabase', 'Tailwind CSS', 'Spartan-NG', 'GitHub API'],
    highlights: [
      'Smart GitHub Scanner',
      'Echtzeit Cloud-Sync',
      'Deklaratives State Management',
      'Clean Architecture',
    ],
    liveUrl: 'https://repo-master.matthias-hammelehle.dev/',
    repoUrl: 'https://github.com/Matthias146/repo-master',
    status: 'live',
    featured: true,
    tags: ['angular', 'supabase', 'tooling', 'api'],
    sections: [
      {
        title: 'Projektidee',
        body: 'Die Kernfunktionen, ein visueller Editor, die Anbindung an die GitHub-API zur Analyse von Repository-Strukturen und der Cloud-Sync für eigene Markdown-Bausteine via Supabase  sind implementiert.',
      },
      {
        title: 'Technische Entscheidungen',
        body: 'Konsequente Nutzung von Angular Signals für reaktives State-Management ohne RxJS-Overhead. Spartan-NG und Tailwind CSS bilden die Basis für ein modernes, barrierefreies UI-Design. Für das Backend-as-a-Service (Authentifizierung & Datenbank) kommt Supabase zum Einsatz. Besonderer Wert wurde auf funktionale Programmierung (Vermeidung von Array-Mutationen) und eine strikte "Separation of Concerns" zwischen Komponenten und Services gelegt.',
      },
      {
        title: 'Learnings',
        body: 'Umgang mit komplexen API-Antworten, wie der rekursiven GitHub Tree-API zur Generierung von Markdown-Ordnerstrukturen. Saubere Trennung von UI-Logik und zentralem Daten-Zustand, um Race-Conditions bei der Synchronisation zwischen lokalem State und der Cloud-Datenbank zu vermeiden.',
      },
    ],
    coverImage: '',
    screenshots: [],
    ogImage: '',
  },
];

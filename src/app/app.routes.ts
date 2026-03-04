import { Routes } from '@angular/router';
import { Projects } from './features/projects/pages/projects/projects';
import { Home } from './features/home/pages/home/home';
import { ProjectDetails } from './features/projects/pages/project-details/project-details';
import { Imprint } from './features/legal/pages/imprint/imprint';
import { Privacy } from './features/legal/pages/privacy/privacy';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home',
    data: { description: 'Angular Portfolio von Matthias Hammelehle.' },
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Projects',
    data: { description: 'Ausgewählte Angular Projekte mit Case Studies.' },
  },
  {
    path: 'projects/:slug',
    component: ProjectDetails,
    title: 'Project',
    data: { description: 'Projekt-Detailseite.' },
  },
  { path: 'imprint', component: Imprint, title: 'Impressum', data: { description: 'Impressum.' } },
  {
    path: 'privacy',
    component: Privacy,
    title: 'Datenschutz',
    data: { description: 'Datenschutzerklärung.' },
  },
  { path: '**', redirectTo: '' },
];

import { Routes } from '@angular/router';
import { Projects } from './features/projects/pages/projects/projects';
import { Home } from './features/home/pages/home/home';
import { ProjectDetails } from './features/projects/pages/project-details/project-details';
import { Imprint } from './features/legal/pages/imprint/imprint';
import { Privacy } from './features/legal/pages/privacy/privacy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'projects/:slug', component: ProjectDetails },
  { path: 'imprint', component: Imprint },
  { path: 'privacy', component: Privacy },
  { path: '**', redirectTo: '' },
];

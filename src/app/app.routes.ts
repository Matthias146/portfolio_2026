import { Routes } from '@angular/router';
import { Projects } from './features/projects/pages/projects/projects';
import { Home } from './features/home/pages/home/home';
import { ProjectDetails } from './features/projects/pages/project-details/project-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'projects/:slug', component: ProjectDetails },
  { path: '**', redirectTo: '' },
];

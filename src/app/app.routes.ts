import { Routes } from '@angular/router';
import { Projects } from './features/projects/pages/projects/projects';
import { Home } from './features/home/pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: '**', redirectTo: '' },
];

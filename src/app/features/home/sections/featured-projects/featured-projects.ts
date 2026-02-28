import { Component, computed } from '@angular/core';
import { PROJECTS } from '../../../projects/data/projects.data';
import { Section } from '../../../../shared/ui/section/section';
import { ProjectCard } from '../../../projects/components/project-card/project-card';

@Component({
  selector: 'app-featured-projects',
  imports: [Section, ProjectCard],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {
  featured = computed(() => PROJECTS.filter((p) => p.featured).slice(0, 3));
}

import { Component, computed, signal } from '@angular/core';
import { Project, ProjectTag } from '../../../../core/models/project.model';
import { PROJECTS } from '../../data/projects.data';
import { Section } from '../../../../shared/ui/section/section';
import { Badge } from '../../../../shared/ui/badge/badge';
import { ProjectCard } from '../../components/project-card/project-card';
import { Input } from '../../../../shared/ui/input/input';
type Filter = 'all' | ProjectTag;

@Component({
  selector: 'app-projects',
  imports: [Section, Badge, ProjectCard, Input],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  query = signal('');
  filter = signal<Filter>('all');

  filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'angular', label: 'Angular' },
    { key: 'ui', label: 'UI' },
    { key: 'api', label: 'API' },
    { key: 'auth', label: 'Auth' },
    { key: 'fullstack', label: 'Fullstack' },
  ];

  projects = computed<Project[]>(() => {
    const q = this.query().trim().toLowerCase();
    const f = this.filter();

    return PROJECTS.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));

      const tags = p.tags ?? [];
      const matchesFilter = f === 'all' ? true : tags.includes(f);

      return matchesQuery && matchesFilter;
    });
  });

  setFilter(f: Filter) {
    this.filter.set(f);
  }

  setQuery(q: string) {
    this.query.set(q);
  }
}

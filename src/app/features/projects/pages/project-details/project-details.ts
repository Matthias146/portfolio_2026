import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../../../core/models/project.model';
import { PROJECTS } from '../../data/projects.data';
import { toSignal } from '@angular/core/rxjs-interop';
import { Button } from '../../../../shared/ui/button/button';
import { Badge } from '../../../../shared/ui/badge/badge';
import { Section } from '../../../../shared/ui/section/section';
import { Card } from '../../../../shared/ui/card/card';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-project-details',
  imports: [RouterLink, Button, Badge, Section, Card, Icon],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  private route = inject(ActivatedRoute);

  slug = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  project = computed<Project | null>(() => {
    const s = this.slug().get('slug');
    if (!s) return null;
    return PROJECTS.find((p) => p.slug === s) ?? null;
  });

  shots = computed(() => {
    const p = this.project();
    if (!p?.screenshots) return [];
    return p.screenshots.map((s) => s.trim()).filter(Boolean);
  });
}

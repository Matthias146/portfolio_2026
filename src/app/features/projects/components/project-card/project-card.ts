import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models/project.model';
import { Card } from '../../../../shared/ui/card/card';
import { Badge } from '../../../../shared/ui/badge/badge';
import { Button } from '../../../../shared/ui/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [Card, Badge, Button, RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  project = input.required<Project>();
}

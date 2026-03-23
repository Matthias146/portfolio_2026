import { Component, computed, input } from '@angular/core';
import { Section } from '../../../../shared/ui/section/section';
import { Card } from '../../../../shared/ui/card/card';
import { Badge } from '../../../../shared/ui/badge/badge';
export interface HighlightItem {
  title: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
}

@Component({
  selector: 'app-highlights',
  imports: [Section, Card, Badge],
  templateUrl: './highlights.html',
  styleUrl: './highlights.scss',
})
export class Highlights {
  title = input<string>('Kurzprofil');
  subtitle = input<string>(
    'Drei Dinge, die meine Angular-Arbeit gut beschreiben: moderner Aufbau, saubere Umsetzung und eine ruhige UI.',
  );

  items = input<HighlightItem[]>([
    {
      title: 'Angular · Standalone & Signals',
      subtitle: 'Modernes Angular, ohne unnötigen Ballast.',
      bullets: [
        'Standalone Components',
        'Signals für State & UI-Logik',
        'Feature-Slices statt „alles überall“',
      ],
      tags: ['Angular', 'Signals', 'TypeScript'],
    },
    {
      title: 'Code · Klar & nachvollziehbar',
      subtitle: 'Lesbar, teamtauglich und ohne Magie.',
      bullets: ['Kleine Commits & PRs', 'Lint/Format + CI Checks', 'Saubere Struktur & README'],
      tags: ['Git', 'CI', 'Clean Code'],
    },
    {
      title: 'UI · Ruhig & konsistent',
      subtitle: 'Responsive, sauber abgestimmt, ohne unnötige Effekte.',
      bullets: [
        'SCSS Tokens (CSS Variables)',
        'Wiederverwendbare UI-Components',
        'Saubere UI-States (loading/empty/error)',
      ],
      tags: ['SCSS', 'UI', 'Responsive'],
    },
  ]);

  displayItems = computed(() => this.items().slice(0, 3));
}

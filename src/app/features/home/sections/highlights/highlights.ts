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
    'Drei Dinge, die meine Angular-Arbeit ausmachen: Architektur, moderner State und saubere UI-Umsetzung.',
  );

  items = input<HighlightItem[]>([
    {
      title: 'Angular · Standalone & Signals',
      subtitle: 'Modern Angular-first: klare Strukturen, stabile Datenflüsse.',
      bullets: [
        'Standalone Components',
        'Signals / computed / effects',
        'Routing & Feature-Slices',
      ],
      tags: ['Angular', 'Signals', 'TypeScript'],
    },
    {
      title: 'Code Quality · Clean & Maintainable',
      subtitle: 'Lesbar, nachvollziehbar, teamtauglich.',
      bullets: ['Small commits & PRs', 'Conventional Commits', 'Lint/Format + CI Checks'],
      tags: ['Git', 'CI', 'Clean Code'],
    },
    {
      title: 'UI · SCSS & Responsive',
      subtitle: 'Produkt-Feeling statt Demo-Feeling.',
      bullets: ['Design Tokens (CSS Vars)', 'Reusable UI Components', 'Responsive Layout & States'],
      tags: ['SCSS', 'UI', 'Responsive'],
    },
  ]);

  displayItems = computed(() => this.items().slice(0, 3));
}

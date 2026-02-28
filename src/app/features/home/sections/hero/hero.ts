import { Component, computed, input } from '@angular/core';
import { Badge } from '../../../../shared/ui/badge/badge';
import { Button } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-hero',
  imports: [Badge, Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  name = input<string>('Matthias Hammelehle');
  headline = input<string>('Ich entwickle moderne, strukturierte Webanwendungen mit Angular.');
  subline = input<string>(
    'Fokus auf Signals, Standalone-Architektur, sauberen State-Flow und UI, die wie ein Produkt wirkt.',
  );

  primaryCtaLabel = input<string>('Projekte ansehen');
  primaryCtaLink = input<string>('/projects');

  secondaryCtaLabel = input<string>('GitHub öffnen');
  secondaryCtaHref = input<string>('https://github.com/');

  pills = input<string[]>(['Angular', 'Signals', 'TypeScript', 'SCSS']);

  displayPills = computed(() => this.pills().slice(0, 4));
}

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

  headline = input<string>(
    'Ich baue Angular-Frontends, die sauber strukturiert und gut wartbar sind.',
  );
  subline = input<string>(
    'Mir sind klare Architektur, verständlicher Code und eine UI wichtig, die sich einfach gut anfühlt.',
  );

  avatarUrl = input<string>('/assets/images/profile/avatar.png');
  initials = input<string>('MH');

  role = input<string>('Junior Frontend Developer · Angular');

  primaryCtaLabel = input<string>('Projekte ansehen');
  primaryCtaLink = input<string>('/projects');

  secondaryCtaLabel = input<string>('GitHub');
  secondaryCtaHref = input<string>('https://github.com/');

  pills = input<string[]>(['Angular', 'Signals', 'TypeScript', 'SCSS']);

  displayPills = computed(() => this.pills().slice(0, 4));

  currentFocus = input<string>(
    'Gerade baue ich: Portfolio 2026, Case Studies und ein kleines UI-System.',
  );
}

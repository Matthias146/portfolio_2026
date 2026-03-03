import { Component } from '@angular/core';
import { Section } from '../../../../shared/ui/section/section';
import { Card } from '../../../../shared/ui/card/card';
import { Icon } from '../../../../shared/ui/icon/icon';
import { Badge } from '../../../../shared/ui/badge/badge';

interface SkillCard {
  icon: 'angular' | 'ts' | 'ui' | 'git';
  title: string;
  subtitle: string;
  pills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [Section, Card, Icon, Badge],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  cards: SkillCard[] = [
    {
      icon: 'angular',
      title: 'Angular',
      subtitle: 'Standalone · Signals · Routing · Forms',
      pills: ['Signals', 'Standalone', 'Routing', 'Forms'],
    },
    {
      icon: 'ts',
      title: 'TypeScript',
      subtitle: 'Typed APIs · Clean Code · Reusable Components',
      pills: ['Types', 'Refactor', 'Architecture', 'DX'],
    },
    {
      icon: 'ui',
      title: 'UI / Styling',
      subtitle: 'SCSS Tokens · Responsive Layout · Component UI',
      pills: ['SCSS', 'Tokens', 'Responsive', 'A11y'],
    },
    {
      icon: 'git',
      title: 'Tooling / Workflow',
      subtitle: 'GitHub · CI · Lint/Format · PR Workflow',
      pills: ['Git', 'GitHub', 'CI', 'Conventional Commits'],
    },
  ];

  also: string[] = ['RxJS basics', 'REST APIs', 'Testing basics', 'Performance', 'SEO basics'];
}

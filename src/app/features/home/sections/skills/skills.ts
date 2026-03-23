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
      subtitle: 'Signals, Routing und ein klarer, wartbarer Aufbau.',
      pills: ['Signals', 'Standalone', 'Routing', 'Forms'],
    },
    {
      icon: 'ts',
      title: 'TypeScript',
      subtitle: 'Typen, Interfaces und Code, den man gut lesen kann.',
      pills: ['Types', 'Refactor', 'Architecture', 'DX'],
    },
    {
      icon: 'ui',
      title: 'UI / Styling',
      subtitle: 'SCSS Tokens, Layout und responsive Details.',
      pills: ['SCSS', 'Tokens', 'Responsive', 'A11y'],
    },
    {
      icon: 'git',
      title: 'Tooling / Workflow',
      subtitle: 'GitHub, CI und ein sauberer Review-Flow.',
      pills: ['Git', 'GitHub', 'CI', 'Conventional Commits'],
    },
  ];

  also: string[] = ['RxJS Basics', 'REST APIs', 'Testing Basics', 'Performance', 'SEO Basics'];
}

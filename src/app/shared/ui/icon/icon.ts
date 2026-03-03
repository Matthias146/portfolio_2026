import { Component, input } from '@angular/core';
export type IconName = 'github' | 'external' | 'angular' | 'ts' | 'ui' | 'git';

@Component({
  selector: 'ui-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  name = input.required<IconName>();
  size = input<number>(16);
}

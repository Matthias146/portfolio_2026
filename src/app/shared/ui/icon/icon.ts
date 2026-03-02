import { Component, computed, input } from '@angular/core';
export type IconName = 'github' | 'external';

const ICONS: Record<IconName, string> = {
  github: `
    <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.4c.57.1.78-.25.78-.55v-2.1c-3.17.7-3.83-1.35-3.83-1.35-.52-1.3-1.27-1.65-1.27-1.65-1.04-.7.08-.7.08-.7 1.15.08 1.76 1.17 1.76 1.17 1.02 1.72 2.67 1.22 3.32.93.1-.73.4-1.22.72-1.5-2.53-.28-5.2-1.25-5.2-5.6 0-1.24.46-2.25 1.2-3.05-.12-.28-.52-1.45.12-3.02 0 0 .98-.3 3.2 1.16a11.1 11.1 0 0 1 5.82 0c2.22-1.46 3.2-1.16 3.2-1.16.64 1.57.24 2.74.12 3.02.74.8 1.2 1.8 1.2 3.05 0 4.36-2.68 5.3-5.23 5.58.41.35.78 1.04.78 2.1v3.1c0 .3.2.66.79.55A11.5 11.5 0 0 0 12 .5Z"></path>
  `,
  external: `
    <path d="M14 3h7v7"></path>
    <path d="M10 14L21 3"></path>
    <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"></path>
  `,
};

@Component({
  selector: 'ui-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  name = input.required<IconName>();
  size = input<number>(16);

  svg = computed(() => ICONS[this.name()]);
  viewBox = computed(() => (this.name() === 'github' ? '0 0 24 24' : '0 0 24 24'));
}

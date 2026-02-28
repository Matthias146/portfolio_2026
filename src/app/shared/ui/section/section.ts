import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-section',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.scss',
})
export class Section {
  title = input<string | undefined>(undefined);
  subtitle = input<string | undefined>(undefined);
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  title = input<string | undefined>(undefined);
  subtitle = input<string | undefined>(undefined);
  hoverable = input<boolean>(false);
}

import { Component, input } from '@angular/core';
export type BadgeVariant = 'neutral' | 'accent' | 'soft';
@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  variant = input<BadgeVariant>('neutral');
}

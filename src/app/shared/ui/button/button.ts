import { Component, computed, input } from '@angular/core';
export type ButtonVariant = 'primary' | 'ghost';
export type ButtonTarget = '_blank' | '_self';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  variant = input<ButtonVariant>('primary');
  href = input<string | undefined>(undefined);
  target = input<ButtonTarget>('_self');
  rel = input<string | undefined>(undefined);
  disabled = input<boolean>(false);

  computedRel = computed<string | null>(() => {
    if (!this.href()) return null;
    if (this.rel()) return this.rel()!;
    return this.target() === '_blank' ? 'noreferrer noopener' : null;
  });
}

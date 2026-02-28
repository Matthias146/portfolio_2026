import { Component, computed, input } from '@angular/core';
export type ButtonVariant = 'primary' | 'ghost';
export type ButtonTarget = '_blank' | '_self';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');

  href = input<string | undefined>(undefined);
  target = input<ButtonTarget>('_self');
  rel = input<string | undefined>(undefined);

  fullWidth = input<boolean>(false);
  disabled = input<boolean>(false);
  loading = input<boolean>(false);

  isDisabled = computed(() => this.disabled() || this.loading());

  computedRel = computed<string | null>(() => {
    if (!this.href()) return null;
    if (this.rel()) return this.rel()!;
    return this.target() === '_blank' ? 'noreferrer noopener' : null;
  });
}

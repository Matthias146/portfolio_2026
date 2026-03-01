import { Component, input, output } from '@angular/core';

@Component({
  selector: 'ui-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  value = input<string>('');
  placeholder = input<string>('Search…');
  ariaLabel = input<string>('Search input');

  valueChange = output<string>();

  onInput(event: Event) {
    const next = (event.target as HTMLInputElement | null)?.value ?? '';
    this.valueChange.emit(next);
  }
}

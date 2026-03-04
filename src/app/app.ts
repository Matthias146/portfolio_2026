import { Component, inject } from '@angular/core';
import { AppShell } from './core/layout/app-shell/app-shell';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  imports: [AppShell],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private seo = inject(SeoService);
  constructor() {
    this.seo.init();
  }
}

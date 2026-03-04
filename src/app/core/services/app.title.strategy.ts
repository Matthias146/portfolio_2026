import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  constructor() {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot) {
    const routeTitle = this.buildTitle(snapshot);
    const base = 'Matthias Hammelehle · Angular Portfolio';
    this.title.setTitle(routeTitle ? `${routeTitle} · ${base}` : base);
  }
}

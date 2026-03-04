import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private meta = inject(Meta);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  init() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let r = this.route.firstChild;
      while (r?.firstChild) r = r.firstChild;

      const description =
        r?.snapshot.data?.['description'] ?? 'Angular Portfolio von Matthias Hammelehle.';
      this.meta.updateTag({ name: 'description', content: description });
    });
  }
}

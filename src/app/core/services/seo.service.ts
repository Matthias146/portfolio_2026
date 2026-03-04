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
  private siteUrl = 'https://matthias-hammelehle.dev';

  init() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let r = this.route.firstChild;
      while (r?.firstChild) r = r.firstChild;

      const data = r?.snapshot.data ?? {};

      const title = data['ogTitle'] ?? 'Matthias Hammelehle · Angular Portfolio';
      const description =
        data['ogDescription'] ?? data['description'] ?? 'Modernes Angular Portfolio.';
      const imagePath = data['ogImage'] ?? '/assets/og/og.png';

      const url = this.siteUrl + this.router.url;
      const image = imagePath.startsWith('http') ? imagePath : this.siteUrl + imagePath;

      this.meta.updateTag({ name: 'description', content: description });

      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({
        property: 'og:site_name',
        content: 'Matthias Hammelehle · Angular Portfolio',
      });
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ property: 'og:url', content: url });
      this.meta.updateTag({ property: 'og:image', content: image });

      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.meta.updateTag({ name: 'twitter:title', content: title });
      this.meta.updateTag({ name: 'twitter:description', content: description });
      this.meta.updateTag({ name: 'twitter:image', content: image });
    });
  }
}

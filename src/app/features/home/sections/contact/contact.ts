import { Component } from '@angular/core';
import { Section } from '../../../../shared/ui/section/section';
import { Card } from '../../../../shared/ui/card/card';
import { Button } from '../../../../shared/ui/button/button';
import { Icon } from '../../../../shared/ui/icon/icon';
import { Badge } from '../../../../shared/ui/badge/badge';

@Component({
  selector: 'app-contact',
  imports: [Section, Card, Button, Icon, Badge],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  email = 'mahammelehle@outlook.de';
  github = 'https://github.com/matthias146';
  linkedin = 'https://www.linkedin.com/in/matthias-hammelehle-5137a6269';
}

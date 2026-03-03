import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Highlights } from '../../sections/highlights/highlights';
import { FeaturedProjects } from '../../sections/featured-projects/featured-projects';
import { Skills } from '../../sections/skills/skills';

@Component({
  selector: 'app-home',
  imports: [Hero, Highlights, FeaturedProjects, Skills],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

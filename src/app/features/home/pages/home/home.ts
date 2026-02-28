import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Highlights } from '../../sections/highlights/highlights';
import { FeaturedProjects } from '../../sections/featured-projects/featured-projects';

@Component({
  selector: 'app-home',
  imports: [Hero, Highlights, FeaturedProjects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

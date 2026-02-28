import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Highlights } from '../../sections/highlights/highlights';

@Component({
  selector: 'app-home',
  imports: [Hero, Highlights],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

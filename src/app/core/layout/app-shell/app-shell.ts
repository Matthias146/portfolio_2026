import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-app-shell',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
})
export class AppShell {}

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Editor } from './pages/editor/editor';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Editor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Family Photo Frame Creator';
  currentYear = new Date().getFullYear();
}

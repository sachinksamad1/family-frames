import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.html',
  styleUrl: './result.scss'
})
export class Result {
  @Input() generatedImage: string | null = null;

  downloadImage() {
    if (!this.generatedImage) return;
    const link = document.createElement('a');
    link.href = this.generatedImage;
    link.download = 'family-photo.png';
    link.click();
  }
}

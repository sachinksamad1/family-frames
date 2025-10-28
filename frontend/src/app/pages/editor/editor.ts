import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AiService } from '../../services/ai';
import { Upload } from "../../components/upload/upload";
import { Result } from "../../components/result/result";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor',
  imports: [CommonModule, FormsModule, Upload, Result],
  templateUrl: './editor.html',
  styleUrl: './editor.scss'
})
export class Editor {
   selectedFiles: File[] = [];
  generatedImage: string | null = null;
  selectedStyle: string = 'modern';
  loading = false;

  styles = ['modern', 'classic', 'minimal', 'vintage'];

  constructor(private aiService: AiService) {}

  onPhotosSelected(files: File[]) {
    this.selectedFiles = files;
  }

  generateFamilyPhoto() {
    if (this.selectedFiles.length === 0) return alert('Please upload at least one photo.');

    const formData = new FormData();
    this.selectedFiles.forEach(file => formData.append('photos', file));
    formData.append('style', this.selectedStyle);

    this.loading = true;
    this.aiService.generateFamilyPhoto(formData).subscribe({
      next: (res) => {
        this.generatedImage = res.image;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        alert('Failed to generate image.');
        this.loading = false;
      }
    });
  }
}

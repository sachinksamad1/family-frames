import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-upload',
  imports: [],
  templateUrl: './upload.html',
  styleUrl: './upload.scss'
})
export class Upload {
    @Output() photosSelected = new EventEmitter<File[]>();
  previews: string[] = [];

  onFileChange(event: any) {
    const files = Array.from(event.target.files) as File[];
    this.photosSelected.emit(files);
    this.previews = [];
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: any) => this.previews.push(e.target.result);
      reader.readAsDataURL(file);
    });
  }
}

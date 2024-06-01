import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngTesseractOCR';
  imageUrl!: string;
  selectedImage= '';

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Assuming you're working with a FileReader
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
        this.imageUrl = this.selectedImage; // Update the image property
      };
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      reader.readAsDataURL(file);
    }
  }


  getOcrText(e: any) {
    console.log(e);
  }
}

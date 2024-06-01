import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcrScannerDrawComponent } from './ocr-scanner-draw/ocr-scanner-draw.component';

const COMPONENTS = [
  OcrScannerDrawComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class TesseractOcrModule { }

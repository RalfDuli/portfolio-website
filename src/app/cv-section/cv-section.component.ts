import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.css']
})
export class CvSectionComponent {

  constructor(private sanitizer: DomSanitizer) { }

  imgUrl = '/../assets/My_CV.jpg';
}

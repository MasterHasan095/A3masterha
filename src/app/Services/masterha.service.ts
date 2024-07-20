import { LowerCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterhaService {

  masterhaCelebration(imageId: string): void {

    const imageElement = document.getElementById(imageId);
  
    if (imageElement) {
      imageElement.setAttribute('src', 'images/fireworks.gif');
      imageElement.style.borderRadius = '100px'; // Correctly setting the border-radius style
    }
  }
  

  masterhaShowMedal(imageId: string): void {
    const imageElement = document.getElementById(imageId);
    
    if (imageElement) {
      imageElement.setAttribute('src', `images/${imageId.toLowerCase()}.svg`);
    }
  }
  

  constructor() { }
}

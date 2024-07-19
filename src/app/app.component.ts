import { Component } from '@angular/core';
import { A3Classmasterha } from './classmasterha';
import { MasterhaService } from './Services/masterha.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Changed styleUrl to styleUrls
})
export class AppComponent {
  title = 'A3masterha';
  profileHasanMaster: A3Classmasterha;

  constructor(private masterhaService: MasterhaService) {
    this.profileHasanMaster = new A3Classmasterha("Hasan Master", 991698598, "masterha@sheridancollege.ca", "masterha");
  }

  showMedal(imageID: string): void {
    this.masterhaService.masterhaShowMedal(imageID);
  }
}

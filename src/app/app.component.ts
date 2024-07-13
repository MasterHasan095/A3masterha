import { Component } from '@angular/core';
import { A3Classmasterha } from './classmasterha';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A3masterha';
  profileHasanMaster: A3Classmasterha;
  
  constructor(){
    this.profileHasanMaster = new A3Classmasterha("Hasan Master", 991698598, "masterha@sheridancollege.ca", "masterha");
  }
}

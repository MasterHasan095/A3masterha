import { Component, Input } from '@angular/core';
import { A3Classmasterha } from '../classmasterha';
import { MasterhaService } from '../Services/masterha.service';
@Component({
  selector: 'app-header-masterha',
  templateUrl: './header-masterha.component.html',
  styleUrl: './header-masterha.component.css'
})
export class HeaderMasterhaComponent {

  @Input() HFmasterha?: A3Classmasterha ;
  constructor(private masterhaService: MasterhaService) {
    
  }

  showMedal(imageID: string): void {
    this.masterhaService.masterhaShowMedal(imageID);
  }
}

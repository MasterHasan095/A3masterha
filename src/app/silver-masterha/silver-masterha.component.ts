import { Component } from '@angular/core';
import { MasterhaService } from '../Services/masterha.service';
@Component({
  selector: 'app-silver-masterha',
  templateUrl: './silver-masterha.component.html',
  styleUrl: './silver-masterha.component.css'
})
export class SilverMasterhaComponent {
  medal: string = "SILVER";
  constructor(private masterhaService: MasterhaService){}
  masterhaCelebration(imageId: string): void {
    this.masterhaService.masterhaCelebration(imageId);
  }

  masterhaShowMedal(imageId: string): void {
    this.masterhaService.masterhaShowMedal(imageId);
  }
}

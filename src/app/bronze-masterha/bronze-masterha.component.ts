import { Component } from '@angular/core';
import { MasterhaService } from '../Services/masterha.service';
@Component({
  selector: 'app-bronze-masterha',
  templateUrl: './bronze-masterha.component.html',
  styleUrl: './bronze-masterha.component.css'
})
export class BronzeMasterhaComponent {
  masterhaMedal: string = "BRONZE";
  constructor(private masterhaService: MasterhaService){}
  masterhaCelebration(imageId: string): void {
    this.masterhaService.masterhaCelebration(imageId);
  }

  masterhaShowMedal(imageId: string): void {
    this.masterhaService.masterhaShowMedal(imageId);
  }
}

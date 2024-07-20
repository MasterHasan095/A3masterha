import { Component } from '@angular/core';
import { MasterhaService } from '../Services/masterha.service';

@Component({
  selector: 'app-gold-masterha',
  templateUrl: './gold-masterha.component.html',
  styleUrl: './gold-masterha.component.css'
})
export class GoldMasterhaComponent {
  medal: string = "GOLD";

  constructor(private masterhaService: MasterhaService){}
  masterhaCelebration(imageId: string): void {
    this.masterhaService.masterhaCelebration(imageId);
  }

  masterhaShowMedal(imageId: string): void {
    this.masterhaService.masterhaShowMedal(imageId);
  }

}

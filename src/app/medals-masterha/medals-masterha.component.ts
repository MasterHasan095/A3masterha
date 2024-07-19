import { Component } from '@angular/core';
import { MasterhaService } from '../Services/masterha.service';
@Component({
  selector: 'app-medals-masterha',
  templateUrl: './medals-masterha.component.html',
  styleUrl: './medals-masterha.component.css',
})
export class MedalsMasterhaComponent {

  medals = [
    { src: '/images/gold.svg' },
    { src: '/images/silver.svg' },
    { src: '/images/bronze.svg' }
  ];

}

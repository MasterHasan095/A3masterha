import { Component, Input } from '@angular/core';
import { A3Classmasterha } from '../classmasterha';
@Component({
  selector: 'app-footer-masterha',
  templateUrl: './footer-masterha.component.html',
  styleUrl: './footer-masterha.component.css'
})
export class FooterMasterhaComponent {
  @Input() HFmasterha?: A3Classmasterha ;

}

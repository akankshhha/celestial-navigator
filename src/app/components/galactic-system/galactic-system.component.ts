import { Component } from '@angular/core';
import { CelestialBodyComponent } from '../celestial-body/celestial-body.component';

@Component({
  selector: 'app-galactic-system',
  standalone: true,
  imports: [CelestialBodyComponent],
  templateUrl: './galactic-system.component.html',
  styleUrl: './galactic-system.component.css'
})
export class GalacticSystemComponent {

}

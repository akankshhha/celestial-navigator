import { Component } from '@angular/core';
import { GalacticSystemComponent } from './components/containers/galactic-system/galactic-system.component';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalacticSystemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'celestial-navigator';
}

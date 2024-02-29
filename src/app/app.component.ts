import { Component } from '@angular/core';
import { GalacticSystemComponent } from './components/galactic-system/galactic-system.component';
import { RouterOutlet } from '@angular/router';

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

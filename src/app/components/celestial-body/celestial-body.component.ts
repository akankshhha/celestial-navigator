import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celestial-body',
  standalone: true,
  imports: [],
  templateUrl: './celestial-body.component.html',
  styleUrl: './celestial-body.component.css'
})
export class CelestialBodyComponent implements OnInit{
  @Input() celestialBody: any;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  openAlmanac(planetURL: any) {
    const planetId: any = planetURL.split('/').slice(-2, -1)[0]
    this._router.navigate(['/planet', planetId])
  }
}

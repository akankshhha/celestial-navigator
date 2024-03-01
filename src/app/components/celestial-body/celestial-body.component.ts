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

  openAlmanac(celestialBodyName: string) {
    this._router.navigate(['/planet', celestialBodyName ])
  }
}

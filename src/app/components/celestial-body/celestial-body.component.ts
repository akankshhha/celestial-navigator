import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-celestial-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './celestial-body.component.html',
  styleUrl: './celestial-body.component.css'
})
export class CelestialBodyComponent implements OnInit{
  @Input() celestialBody: any;
  isLongText: boolean = false;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    
    const words = this.celestialBody.name.trim().split(/[ ,]+/)
    console.log(words)
    if(words.length === 1 && this.celestialBody.name.length > 9) {
      this.isLongText = true
    } else if(words.length === 2 && this.celestialBody.name.length > 10) {
     
      this.celestialBody.name =  words.join('<br>')
    }

  }

  openAlmanac(planetURL: any) {
    const planetId: any = planetURL.split('/').slice(-2, -1)[0]
    this._router.navigate(['/planet', planetId])
  }
}

import { Component, OnInit } from '@angular/core';
import { CelestialBodyComponent } from '../celestial-body/celestial-body.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-galactic-system',
  standalone: true,
  imports: [CelestialBodyComponent, CommonModule],
  templateUrl: './galactic-system.component.html',
  styleUrl: './galactic-system.component.css'
})
export class GalacticSystemComponent implements OnInit{
public planetData: any = [];
public currentPage = 1;
private apiUrl: string =  "https://swapi.dev/api/planets/?format=json"
public pageData: any;

constructor (private http: HttpClient) {}

ngOnInit(): void {
  this.getPlanets()

}
getPlanets() {
 
  this.http.get(this.apiUrl).subscribe((res: any) => {
    this.pageData = res
    this.planetData = res.results
  })
}

nextPage() {
  this.apiUrl = this.pageData.next
  if(this.apiUrl === null) {
    return
  } 
  this.getPlanets()

}

previousPage() {
  this.apiUrl = this.pageData.previous
  if(this.apiUrl === null) {
    return
  } 
  this.getPlanets()
}
}

import { Component, OnInit } from '@angular/core';
import { CelestialBodyComponent } from '../celestial-body/celestial-body.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { GalacticService } from '../../services/galactic.service';
import { GlobalSearchComponent } from '../common/global-search/global-search.component';

@Component({
  selector: 'app-galactic-system',
  standalone: true,
  imports: [CelestialBodyComponent, GlobalSearchComponent, CommonModule],
  templateUrl: './galactic-system.component.html',
  styleUrl: './galactic-system.component.css'
})
export class GalacticSystemComponent implements OnInit{
public planetData: any = [];
public currentPage = 1;
private apiUrl: string =  "https://swapi.dev/api/planets/?format=json"
public pageData: any;

constructor (
  private http: HttpClient,
  private _galacticService: GalacticService
      ) {}

ngOnInit(): void {
  this.getPlanets()

}
getPlanets() {
  this._galacticService.getPlanets().subscribe((res: any) => {
    this.pageData = res
    this.planetData = res.results
  })
  console.log(this.planetData)
}

nextPage() {
  this.apiUrl = this.pageData.next
  console.log("next")
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

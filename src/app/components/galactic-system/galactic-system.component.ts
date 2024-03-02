import { Component, OnInit } from '@angular/core';
import { CelestialBodyComponent } from '../celestial-body/celestial-body.component';
import { CommonModule } from '@angular/common';
import { GalacticService } from '../../services/galactic.service';
import { GlobalSearchComponent } from '../common/global-search/global-search.component';
import { firstValueFrom, lastValueFrom } from 'rxjs';

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
public text: string = "Search for planet.."

constructor (
  private _galacticService: GalacticService
      ) {}

ngOnInit(): void {
  this.getPlanets()

}

async getPlanets() {
  try {
     const res: any = await firstValueFrom(this._galacticService.getPlanets(this.apiUrl)) 
     this.pageData = res;
     this.planetData = res?.results;
  } catch (error) {
     console.error('Error fetching planets:', error);
  }
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

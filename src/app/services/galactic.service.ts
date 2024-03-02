import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalacticService {
  public planetUrl: string = "https://swapi.dev/api/planets";
  public residentDetails = "https://swapi.dev/api/people";
  constructor(private http: HttpClient) { }

   getPlanets(url: any) {
    return this.http.get(url)
   }

   getPlanetDetails(planetId: any) {
    return this.http.get(this.planetUrl + `/${planetId}`)
   }

}

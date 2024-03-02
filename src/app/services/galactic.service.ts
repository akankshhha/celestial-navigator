import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalacticService {
  constructor(private http: HttpClient) { }

  //fetch planet details based on URL provided
   getPlanets(url: any) { 
    return this.http.get(url)
   }

   //pagination
   navigatePage(url: any) {
    return this.http.get(url)
   }

   //fetching planet detials based on activated route params.
   getPlanetDetails(planetId: any) {
    const url = "https://swapi.dev/api/planets"
    return this.http.get(url + `/${planetId}`)
   }
   
   getVehicles() {
    return this.http.get("https://swapi.dev/api/vehicles")
   }

   getStarships() {
    return this.http.get("https://swapi.dev/api/starships")
   }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { GalacticService } from '../../services/galactic.service';
import { ResidentProfileComponent } from '../resident-profile/resident-profile.component';
import { CommonModule } from '@angular/common';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-planetology',
  standalone: true,
  imports: [ResidentProfileComponent, CommonModule],
  templateUrl: './planetology.component.html',
  styleUrl: './planetology.component.css'
})
export class PlanetologyComponent implements OnInit {
  planetId: any;
  planetData: any;
  residentDetails: any = [];
  residentUrls: any;
  miniHeading: string = ""
  constructor(
    private _ar: ActivatedRoute,
    private _gs: GalacticService,
    private http: HttpClient) { }

  async ngOnInit() {
    this._ar.params.subscribe((params) => {
      if (params['id']) {
        this.planetId = params['id']
      }
    })

    await this.fetchPlanetData()
    await this.fetchResidents()
    this.miniHeading = this.residentDetails.length === 0 ? "No resident information available for this planet!" : "Resident information "
  }

  async fetchPlanetData() {
   const res: any = await firstValueFrom(this._gs.getPlanetDetails(this.planetId))
   this.planetData = res
   this.residentUrls = res.residents
  }

  async fetchResidents() {

    try {
        const requests = this.residentUrls?.map(async (residentUrl: string) =>
            await firstValueFrom(this.http.get<any>(residentUrl))
        );
        if (requests) {
            const responses = await Promise.all(requests);
            this.residentDetails = responses;
        }
    } catch (error) {
        console.error('Error fetching residents:', error);
    }
}
 

}

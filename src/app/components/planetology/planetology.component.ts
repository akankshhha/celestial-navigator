import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { GalacticService } from '../../services/galactic.service';
import { ResidentProfileComponent } from '../resident-profile/resident-profile.component';
import { CommonModule } from '@angular/common';

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
  residents: any;

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _gs: GalacticService,
    private http: HttpClient) { }

  async ngOnInit() {
    this._ar.params.subscribe((params) => {
      if (params['id']) {
        this.planetId = params['id']
      }
    })
    await this.fetchPlanetData()
  }

  async fetchPlanetData() {
    this._gs.getPlanetDetails(this.planetId)
      .subscribe((data: any) => {
        this.planetData = data
        
      })
  }

}

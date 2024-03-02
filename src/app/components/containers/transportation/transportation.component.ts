import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../common/table/table.component';
import { GalacticService } from '../../../services/galactic.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-transportation',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './transportation.component.html',
  styleUrl: './transportation.component.css'
})
export class TransportationComponent implements OnInit{
  constructor(
    private _gc: GalacticService
  ) {}
  starshipColumns: string[] = ['Name', 'Model', 'Manufacturer', 'Length', 'Crew', 'Consumables'];
  starshipData: any[] = [];

  vehicleColumns: string[] = ['Name', 'Model', 'Manufacturer', 'Length', 'Crew', 'Consumables'];
  vehicleData: any[] = [];

  ngOnInit(): void {
    this.getStarshipData()
    this.getVehicles()
  }

   async getStarshipData() {
    const starships:any = await lastValueFrom(this._gc.getStarships());
    this.starshipData = starships
  }

  async getVehicles() {
    const vehicles:any =  await lastValueFrom(this._gc.getVehicles());
    this.vehicleData = vehicles

  }

}

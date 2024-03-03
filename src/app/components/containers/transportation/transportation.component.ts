import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../common/table/table.component';
import { GalacticService } from '../../../services/galactic.service';
import { GoBackComponent } from '../../common/go-back/go-back.component';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-transportation',
  standalone: true,
  imports: [TableComponent, GoBackComponent],
  templateUrl: './transportation.component.html',
  styleUrl: './transportation.component.css'
})
export class TransportationComponent implements OnInit{
  constructor(
    private _gc: GalacticService
  ) {}
  starshipColumns: string[] = ['Name', 'Model', 'Manufacturer', 'Length', 'Crew', 'Consumables'];
  starshipData: any[] = [];
  starshipsCount: any;

  vehicleColumns: string[] = ['Name', 'Model', 'Manufacturer', 'Length', 'Crew', 'Consumables'];
  vehicleData: any[] = [];
  vehiclesCount: any;

  async ngOnInit(): Promise<void> {
    await this.getStarshipData()
    await this.getVehicles()
  }

   async getStarshipData() {
    const starships:any = await lastValueFrom(this._gc.getStarships());
    this.starshipData = starships
    this.starshipsCount = starships.count
  }

  async getVehicles() {
    const vehicles:any =  await lastValueFrom(this._gc.getVehicles());
    this.vehicleData = vehicles
    this.vehiclesCount = vehicles.count

  }

}

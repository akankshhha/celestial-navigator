import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalacticService } from '../../../services/galactic.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  constructor(private _gs: GalacticService)  {}
  @Input() columns: any
  @Input() data: any
  
  ngOnInit(): void {
    
  }
  async getNextResponse() {
    try {
       const res: any = await firstValueFrom(this._gs.navigatePage(this.data.url)) 
       this.data = res;
    } catch (error) {
       console.error('Error fetching planets:', error);
    }
   }
  
  nextPage() {
    this.data.url = this.data.next
    if(this.data.url === null) {
      return
    } 
    this.getNextResponse()
  }

  previousPage() {
    this.data.url = this.data.previous
    if(this.data.url === null) {
      return
    } 
    this.getNextResponse()
  }
}

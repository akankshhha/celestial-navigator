import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-global-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './global-search.component.html',
  styleUrl: './global-search.component.css'
})
export class GlobalSearchComponent implements OnInit{
  @Input() listOfObjects: any
  public filterObj: any = []
  public searchQuery: string = ''

  ngOnInit(): void {
    this.filterObj = this.listOfObjects
    console.log( this.filterObj)

  }

  filterPlanets(): void {
    this.filterObj = this.listOfObjects.filter((item: any) =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      
    );
    console.log( this.filterObj)

  }
}

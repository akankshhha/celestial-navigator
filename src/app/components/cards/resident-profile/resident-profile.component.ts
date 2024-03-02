import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resident-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resident-profile.component.html',
  styleUrl: './resident-profile.component.css'
})
export class ResidentProfileComponent implements OnInit {

@Input() residentDetails: any;
  isLongText: boolean = false;

ngOnInit(): void {
  if( this.residentDetails.name.length > 10) {
    this.isLongText = true
  } 
}
}

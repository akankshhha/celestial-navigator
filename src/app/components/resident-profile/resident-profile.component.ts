import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resident-profile',
  standalone: true,
  imports: [],
  templateUrl: './resident-profile.component.html',
  styleUrl: './resident-profile.component.css'
})
export class ResidentProfileComponent implements OnInit {

@Input() residentDetails: any;

ngOnInit(): void {
}
}

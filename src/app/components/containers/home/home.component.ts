import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    Aos.init()
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}

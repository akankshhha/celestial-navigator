import { Routes, RouterModule } from '@angular/router';
import { GalacticSystemComponent } from './components/galactic-system/galactic-system.component';
import { PlanetologyComponent } from './components/planetology/planetology.component';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { StarshipsVehiclesComponent } from './components/starships-vehicles/starships-vehicles.component';

export const routes: Routes = [
    { path: '', redirectTo: '/navigate', pathMatch: 'full' },
    { path: 'navigate', component: HomeComponent },
    { path: 'galactic-system', component: GalacticSystemComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'starships-vehicles', component: StarshipsVehiclesComponent },
    { path: 'planet/:id', component: PlanetologyComponent },
    { path: '**', redirectTo: '/galactic-system' } 
];

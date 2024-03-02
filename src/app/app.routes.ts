import { Routes, RouterModule } from '@angular/router';
import { GalacticSystemComponent } from './components/galactic-system/galactic-system.component';
import { PlanetologyComponent } from './components/planetology/planetology.component';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { TransportationComponent } from './components/transportation/transportation.component';
export const routes: Routes = [
    { path: '', redirectTo: '/navigate', pathMatch: 'full' },
    { path: 'navigate', component: HomeComponent },
    { path: 'galactic-system', component: GalacticSystemComponent },
    { path: 'transportation', component: TransportationComponent },
    { path: 'planet/:id', component: PlanetologyComponent },
    { path: '**', redirectTo: '/galactic-system' } 
];

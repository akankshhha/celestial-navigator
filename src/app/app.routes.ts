import { Routes, RouterModule } from '@angular/router';
import { GalacticSystemComponent } from './components/containers/galactic-system/galactic-system.component';
import { PlanetologyComponent } from './components/containers/planetology/planetology.component';
import { HomeComponent } from './components/containers/home/home.component';
import { TransportationComponent } from './components/containers/transportation/transportation.component';

export const routes: Routes = [
    { path: '', redirectTo: '/navigate', pathMatch: 'full' },
    { path: 'navigate', component: HomeComponent },
    { path: 'galactic-system', component: GalacticSystemComponent },
    { path: 'transportation-system', component: TransportationComponent },
    { path: 'planet/:id', component: PlanetologyComponent },
    { path: '**', redirectTo: '/galactic-system' } 
];

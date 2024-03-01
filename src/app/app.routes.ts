import { Routes, RouterModule } from '@angular/router';
import { GalacticSystemComponent } from './components/galactic-system/galactic-system.component';
import { PlanetologyComponent } from './planetology/planetology.component';

export const routes: Routes = [
    { path: '', redirectTo: '/galactic-system', pathMatch: 'full' },
    { path: 'galactic-system', component: GalacticSystemComponent },
    { path: 'planet/:name', component: PlanetologyComponent },
    { path: '**', redirectTo: '/galactic-system' } 
];

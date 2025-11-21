import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', loadComponent: () => import('./components/card-component/card-component').then(m => m.CardComponent) },
  { path: 'companies', loadComponent: () => import('./components/listing-component/listing-component').then(m => m.ListingComponent) },
];
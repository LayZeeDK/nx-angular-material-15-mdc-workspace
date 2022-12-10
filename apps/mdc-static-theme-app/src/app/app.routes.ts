import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'card',
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.component'),
  },
];

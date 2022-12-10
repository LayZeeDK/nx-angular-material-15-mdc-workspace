import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'card',
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.routes'),
  },
];

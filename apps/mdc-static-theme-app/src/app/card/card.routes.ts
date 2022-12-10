import { Route } from '@angular/router';
import { CardComponent } from './card.component';

const routes: Route[] = [
  {
    path: '',
    component: CardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'basic',
      },
      {
        path: 'basic',
        title: 'Basic cards',
        loadComponent: () => import('./basic-cards.component'),
      },
      {
        path: 'actions',
        title: 'Card with actions alignment option',
        loadComponent: () =>
          import('./card-with-actions-alignment-option.component'),
      },
      {
        path: 'sections',
        title: 'Card with multiple sections',
        loadComponent: () => import('./card-with-multiple-sections.component'),
      },
      {
        path: 'footer',
        title: 'Card with footer',
        loadComponent: () => import('./card-with-footer.component'),
      },
      {
        path: 'media-size',
        title: 'Card with media size',
        loadComponent: () => import('./card-with-media-size.component'),
      },
      {
        path: 'sub-title',
        title: 'Card with sub-title',
        loadComponent: () => import('./card-with-sub-title.component'),
      },
    ],
  },
];

export default routes;

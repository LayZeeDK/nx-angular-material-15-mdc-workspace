import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'mdc-static-theme-app',
  template: `
    <h1>MDC static theme app</h1>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      display: block;
    `,
  ],
})
export class AppComponent {}

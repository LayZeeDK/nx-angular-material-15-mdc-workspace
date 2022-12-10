import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  // The root component can skip this rule
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mdc-static-theme-app',
  template: `
    <h1>MDC static theme app</h1>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: block;
        margin: 1rem;
      }
    `,
  ],
})
export class AppComponent {}

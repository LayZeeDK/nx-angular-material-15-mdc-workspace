import { Component } from '@angular/core';
import { ShellComponent } from './shell.component';

@Component({
  standalone: true,
  // The root component can skip this rule
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mdc-static-theme-app',
  template: ` <app-shell></app-shell> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  imports: [ShellComponent],
})
export class AppComponent {}

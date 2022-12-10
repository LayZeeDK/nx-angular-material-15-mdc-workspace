import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'card-basic-cards',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <link href="/components-card.css" rel="stylesheet" />

    <mat-card>
      <mat-card-content>Simple card</mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCardsComponent {}

export default BasicCardsComponent;

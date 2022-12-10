import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'card-basic-cards',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-content>Simple card</mat-card-content>
    </mat-card>
  `,
  styleUrls: ['../../styles/components/components-card.scss'],
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

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'card-card-with-actions-alignment-option',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `
    <link href="/components-card.css" rel="stylesheet" />
    <link href="/components-button.css" rel="stylesheet" />

    <h3>Card with actions alignment option</h3>

    <mat-card>
      <mat-card-header>
        <mat-card-title>Actions Buttons</mat-card-title>
        <mat-card-subtitle>Start</mat-card-subtitle>
      </mat-card-header>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>
    <br />
    <mat-card>
      <mat-card-header>
        <mat-card-title>Actions Buttons</mat-card-title>
        <mat-card-subtitle>End</mat-card-subtitle>
      </mat-card-header>
      <mat-card-actions align="end">
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
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
export class CardWithActionsAlignmentOptionComponent {}

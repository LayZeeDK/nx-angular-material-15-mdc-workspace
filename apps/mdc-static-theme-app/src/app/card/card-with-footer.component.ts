import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'card-card-with-footer',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
  ],
  template: `
    <link href="/components-card.css" rel="stylesheet" />
    <link href="/components-button.css" rel="stylesheet" />
    <link href="/components-divider.css" rel="stylesheet" />
    <link href="/components-progress-bar.css" rel="stylesheet" />

    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        <mat-card-title>Shiba Inu</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>This card has divider and indeterminate progress as footer</p>
        <p>{{ longText }}</p>
        <mat-divider></mat-divider>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
      <mat-card-footer>
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
      </mat-card-footer>
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
export class CardWithFooterComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}

export default CardWithFooterComponent;

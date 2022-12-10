import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'card-card-with-media-size',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <link href="/components-card.css" rel="stylesheet" />

    <!-- Cards with media area -->
    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title-group>
          <mat-card-title>Shiba Inu</mat-card-title>
          <mat-card-subtitle>Small</mat-card-subtitle>
          <img
            mat-card-sm-image
            src="https://material.angular.io/assets/img/examples/shiba2.jpg"
          />
        </mat-card-title-group>
      </mat-card-header>
      <mat-card-content>
        {{ longText }}
      </mat-card-content>
    </mat-card>

    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title-group>
          <mat-card-title>Shiba Inu</mat-card-title>
          <mat-card-subtitle>Medium</mat-card-subtitle>
          <img
            mat-card-md-image
            src="https://material.angular.io/assets/img/examples/shiba2.jpg"
          />
        </mat-card-title-group>
      </mat-card-header>
      <mat-card-content>
        {{ longText }}
      </mat-card-content>
    </mat-card>

    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title-group>
          <mat-card-title>Shiba Inu</mat-card-title>
          <mat-card-subtitle>Large</mat-card-subtitle>
          <img
            mat-card-lg-image
            src="https://material.angular.io/assets/img/examples/shiba2.jpg"
          />
        </mat-card-title-group>
      </mat-card-header>
      <mat-card-content>
        {{ longText }}
      </mat-card-content>
    </mat-card>

    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title-group>
          <mat-card-title>Shiba Inu</mat-card-title>
          <mat-card-subtitle>Extra large</mat-card-subtitle>
          <img
            mat-card-xl-image
            src="https://material.angular.io/assets/img/examples/shiba2.jpg"
          />
        </mat-card-title-group>
      </mat-card-header>
      <mat-card-content>
        {{ longText }}
      </mat-card-content>
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
export class CardWithMediaSizeComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}

export default CardWithMediaSizeComponent;

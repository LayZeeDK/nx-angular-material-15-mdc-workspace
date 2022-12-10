import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BasicCardsComponent } from './basic-cards.component';
import { CardWithActionsAlignmentOptionComponent } from './card-with-actions-alignment-option.component';
import { CardWithFooterComponent } from './card-with-footer.component';
import { CardWithMultipleSectionsComponent } from './card-with-multiple-sections.component';

@Component({
  selector: 'card-card',
  standalone: true,
  imports: [
    BasicCardsComponent,
    CardWithActionsAlignmentOptionComponent,
    CardWithMultipleSectionsComponent,
    CardWithFooterComponent,
  ],
  template: `
    <h2>Card</h2>

    <card-basic-cards></card-basic-cards>
    <card-card-with-actions-alignment-option></card-card-with-actions-alignment-option>
    <card-card-with-multiple-sections></card-card-with-multiple-sections>
    <card-card-with-footer></card-card-with-footer>
  `,
  styles: [
    `
      card-card {
        display: block;
      }

      .example-card {
        max-width: 400px;
      }

      .example-header-image {
        background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
        background-size: cover;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export default class CardComponent {}

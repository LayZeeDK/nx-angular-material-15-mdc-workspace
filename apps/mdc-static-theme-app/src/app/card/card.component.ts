import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicCardsComponent } from './basic-cards.component';
import { CardWithActionsAlignmentOptionComponent } from './card-with-actions-alignment-option.component';
import { CardWithMultipleSectionsComponent } from './card-with-multiple-sections.component';

@Component({
  selector: 'card-card',
  standalone: true,
  imports: [
    BasicCardsComponent,
    CardWithActionsAlignmentOptionComponent,
    CardWithMultipleSectionsComponent,
  ],
  template: `
    <h2>Card</h2>

    <card-basic-cards></card-basic-cards>
    <card-card-with-actions-alignment-option></card-card-with-actions-alignment-option>
    <card-card-with-multiple-sections></card-card-with-multiple-sections>
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
export default class CardComponent {}

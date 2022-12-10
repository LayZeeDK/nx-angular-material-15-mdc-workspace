import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicCardsComponent } from './basic-cards.component';
import { CardWithActionsAlignmentOptionComponent } from './card-with-actions-alignment-option.component';

@Component({
  selector: 'card-card',
  standalone: true,
  imports: [BasicCardsComponent, CardWithActionsAlignmentOptionComponent],
  template: `
    <h2>Card</h2>

    <card-basic-cards></card-basic-cards>
    <card-card-with-actions-alignment-option></card-card-with-actions-alignment-option>
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

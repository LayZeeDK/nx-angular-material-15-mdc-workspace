import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicCardsComponent } from './basic-cards.component';

@Component({
  selector: 'card-card',
  standalone: true,
  imports: [BasicCardsComponent],
  template: ` <card-basic-cards></card-basic-cards> `,
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

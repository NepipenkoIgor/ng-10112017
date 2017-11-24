import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'course-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FullCardComponent {
  public product: Product;
}

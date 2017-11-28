import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  public product: Product;

  @Input()
  public position: number;

  @Input()
  public isOdd: boolean;

}

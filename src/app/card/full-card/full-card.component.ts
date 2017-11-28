import { Component } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ModalService } from '../../common/components/modal/modal.service';

@Component({
  selector: 'course-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.scss']
})
export class FullCardComponent {
  public product: Product;

  public constructor(
    private _cartService: CartService,
    private _modalService: ModalService,
  ) {}

  public buy(cartItem: CartItem): void {
    this._cartService.updateCart = cartItem;
    this._modalService.close();
  }
}

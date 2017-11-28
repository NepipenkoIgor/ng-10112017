import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'course-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent  {

  public products: Product[];

  public constructor(
    private _cartService: CartService
  ) { }

  public remove(cartItem: CartItem): void {
    this._cartService.updateCart = cartItem;
  }

}

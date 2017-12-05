import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { CartService } from '../cart.service';
import { RemoveFromCart } from '../../common/actions/cart.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'course-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  public products$: Observable<Product[]> = this._store.select('cartProducts');

  public constructor(
    private _store: Store<StoreStates>
  ) { }

  public remove(product: Product): void {
    this._store.dispatch(new RemoveFromCart(product));
    // this._cartService.updateCart = cartItem;
  }

}

import { Component } from '@angular/core';
// import { CartService } from '../../cart/cart.service';
import { ModalService } from '../../../common/components/modal/modal.service';
import { Store } from '@ngrx/store';
import { AddToCart } from '../../../common/actions/cart.actions';

@Component({
  selector: 'course-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.scss']
})
export class FullCardComponent {
  public product: Product;

  public constructor(
    private _store: Store<StoreStates>,
    private _modalService: ModalService,
  ) {}

  public buy(product: Product): void {
    this._store.dispatch(new AddToCart(product));
    this._modalService.close();
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
// import { CartService } from './cart.service';
import { ModalService } from '../common/components/modal/modal.service';
import { CartListComponent } from './cart-list/cart-list.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'course-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: Product[];
  private _init: boolean = true;

  public constructor(
    private _store: Store<StoreStates>,
    private _modalService: ModalService
  ) { }

  public ngOnInit(): void {
    this._store.select('cartProducts').subscribe((products: Product[]) => {
      this.products = products;
      if (!this._init && !this.products.length) {
        this._modalService.close();
      }
      if (this._init) {
        this._init = false;
      }
    });
  }

  @HostListener('click')
  public openCart(): void {
    if (!this.products || !this.products.length) {
      return;
    }
    this._modalService.open({
      component: CartListComponent,
      context: {
      }
    });
  }

}

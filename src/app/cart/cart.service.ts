import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { scan } from 'rxjs/operators';
import 'rxjs/add/operator/scan';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
  // TODO types ?;
  // tslint:disable-next-line
  private _cartSequence$$: Subject<CartItem> = new Subject();

  public set updateCart(cartItem: CartItem) {
    this._cartSequence$$.next(cartItem);
  }

  public get cartSequence$(): Observable<Product[]> {
    // TODO pipe + scan;
    return this._cartSequence$$
    // tslint:disable-next-line
      .scan<CartItem, Product[]>((acc: Product[], cartItem: CartItem) => {
        switch (cartItem.action) {
          case 'add':
            acc.push(cartItem.product);
            break;
          case 'remove':
            const index: number =
              acc.findIndex((product: Product) => cartItem.product._id === product._id);
            acc.splice(index, 1);
            break;
        }
        return acc;
      }, []);
  }

}

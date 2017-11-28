import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
// import { scan } from 'rxjs/operators';
import 'rxjs/add/operator/scan';

@Injectable()
export class CartService {
  // TODO types ?;
  // tslint:disable-next-line
  private _cartSequence$$: BehaviorSubject<CartItem | any> = new BehaviorSubject([]);

  public set updateCart(cartItem: CartItem) {
    this._cartSequence$$.next(cartItem);
  }

  public get cartSequence$(): Observable<Product[]> {
    // TODO pipe + scan;
    return this._cartSequence$$
    // tslint:disable-next-line
      .scan<CartItem | any, Product[]>((acc: Product[], cartItem: CartItem) => {
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

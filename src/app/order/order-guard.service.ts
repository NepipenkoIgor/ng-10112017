import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Store } from '@ngrx/store';

@Injectable()
export class OrderGuardService implements CanActivate {

  public constructor(
    private _store: Store<StoreStates>,
    private _router: Router,
  ) { }

  public canActivate(): Observable<boolean> {
    return this._store.select('cartProducts')
      .take(1)
      .switchMap((products: Product[]) => {
        if (products.length) {
          return Observable.of(true);
        }
        this._router.navigate(['']);
        return Observable.of(false);
      });
  }


}

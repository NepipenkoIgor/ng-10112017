import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { GET_PRODUCTS_PENDING, GetProductsSuccess } from '../actions/products.actions';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsEffects {

  @Effect()
  public updateProducts$: Observable<Action> = this._actions$
    .ofType(GET_PRODUCTS_PENDING)
    .pipe(
      switchMap(() => this._http.get<Product[]>(`/products`)),
      map((products: Product[]) => new GetProductsSuccess(products)),
      catchError((err: Error, caught: Observable<Action>) => {
        // tslint:disable-next-line
        console.log(err);
        return caught;
      })
    );

  public constructor(
    private _actions$: Actions,
    private _http: HttpClient
  ) {

  }
}
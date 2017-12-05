import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductResolveService implements Resolve<Product | null> {

  public constructor(
    private _http: HttpClient,
    private _router: Router,
  ) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
    return this._http.get<Product>(`/products/${route.params.id}`)
      .catch(() => {
        this._router.navigate(['products']);
        return Observable.of(null);
      });
  }


}

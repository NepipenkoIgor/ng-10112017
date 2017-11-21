import {
  Inject,
  Injectable,
  // Injector
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import {
  HttpClient,
  // HttpResponse
} from '@angular/common/http';
import { BASE_URL_TOKEN } from '../../config';

@Injectable()
export class ProductsService {

  public constructor(
    private _http: HttpClient,
    @Inject(BASE_URL_TOKEN) private _baseUrl: string[]
  ) {
    // this._http = this.injector.get(HttpClient);
    // this._baseUrl = this.injector.get('BASE_URL');
    // console.log(this._baseUrl)
  }

  public get products$(): Observable<Product[]> {

    return this._http.get(`${this._baseUrl[0]}/products`)
      // TODO types ?
      // tslint:disable-next-line
      .map((res: any) => res.data);
  }

}

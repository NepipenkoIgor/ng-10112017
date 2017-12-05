import { Inject, Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler, HttpHeaders,
  HttpInterceptor,
  HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { BASE_URL_TOKEN } from '../../config';

function isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
  if (event instanceof HttpResponse) {
    return true;
  }
  return false;
}


@Injectable()
export class InterceptorService implements HttpInterceptor {

  public constructor(
    @Inject(BASE_URL_TOKEN) private _baseUrl: string[]
  ) { }
  // tslint:disable-next-line
  public intercept<T extends { data: any }>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    const headers: HttpHeaders = req.headers.append('Content-Type', 'application/json');
    const jsonReq: HttpRequest<T> = req.clone({
      url: `${this._baseUrl[0]}${req.url}`,
      headers
    });
    return next.handle(jsonReq)
      .filter<HttpEvent<T>, HttpResponse<T>>(isHttpResponse)
      .map((res: HttpResponse<T>) => {
        return res.clone({ body: res.body && res.body.data });
      })
      .catch((err: HttpErrorResponse) => {
        return Observable.throw(err);
      });
  }

}

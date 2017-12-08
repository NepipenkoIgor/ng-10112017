import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable()
export class CustomPreloadService implements PreloadingStrategy {
// tslint:disable-next-line
  public preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return Observable.of(route)
      .pipe(
        delay(5000),
        mergeMap((_: Route) => fn())
      );
  }

}

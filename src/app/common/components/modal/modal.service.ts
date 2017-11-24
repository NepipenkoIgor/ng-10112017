import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModalService {
  // tslint:disable-next-line
  private _modalSequence$$: Subject<{ component: any, context: any } | null> = new Subject();
  // tslint:disable-next-line
  public open(item: { component: any, context: any }): void {
    this._modalSequence$$.next(item);
  }

  public close(): void {
    this._modalSequence$$.next(null);
  }
  // tslint:disable-next-line
  public get modalSequence$(): Observable<{ component: any, context: any } | null> {
    return this._modalSequence$$.asObservable();
  }

}


import { Component, OnDestroy, OnInit } from '@angular/core';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// import { products$ } from './data/custom';
// import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
// import { Observer } from 'rxjs/Observer';
// import { GetProductsPanding } from './common/actions/products.actions';
// import { Store } from '@ngrx/store';
// import { ModalService } from './common/components/modal/modal.service';
// import { FullCardComponent } from './products/card/full-card/full-card.component';
// import { Subject } from 'rxjs/Subject';
// import { Subscription } from 'rxjs/Subscription';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { ReplaySubject } from 'rxjs/ReplaySubject';

// import 'rxjs/add/observable/interval';
// import 'rxjs/add/observable/fromEvent';
// import { Store } from '@ngrx/store';
// import { GetProductsPanding } from './common/actions/products.actions';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/subscribeOn';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/from';
// import { ConnectableObservable } from 'rxjs/Rx';
// import { AsyncSubject } from 'rxjs/AsyncSubject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { ReplaySubject } from 'rxjs/ReplaySubject';
//
// import { async } from 'rxjs/scheduler/async';
// import { queue } from 'rxjs/scheduler/queue';
// import { asap } from 'rxjs/scheduler/asap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // public safeLogo: SafeUrl;
  public desc: string = 'Angular';
  public placeholder: string = 'Search term';
  public text: string;
  public products$: Observable<Product[]>;
  public loadImg: string = 'assets/images/gears.gif';
  public logo: string =
    // tslint:disable-next-line
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==';

  // private _productsSubcription: Subscription;


  public constructor(
    // private _santizer: DomSanitizer
    // private _modalService: ModalService,
    // private _store: Store<StoreStates>,
  ) { }

  public ngOnInit(): void {
    // this._store.dispatch(new GetProductsPanding());
    // this.safeLogo = this._santizer.bypassSecurityTrustUrl(this._logo);
    // this._productsSubcription = products$.subscribe((products: Product[]) => {
    //   console.log(products)
    //   this.products = products;
    // });
    // this._store.dispatch(new GetProductsPanding());
    // this.products$ = this._store.select('products');

    // this._productsService.products$.subscribe((res: Product[]) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log('our err', err);
    // }, () => {
    //   console.log('complete');
    // });

    // let a$: Observable<number> = Observable.interval(1000);
    // let b$: Observable<MouseEvent> = Observable.fromEvent(window, 'click');

    // let globalCount: number = 0;
    // const c$$: ReplaySubject<number> = new ReplaySubject(Number.POSITIVE_INFINITY);
    //
    // const subscription: Subscription = c$$
    //   .subscribe((count: number) => {
    //     // tslint:disable-next-line
    //     console.log('first', count);
    //   });
    //
    //
    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 5000);
    //
    // setTimeout(() => {
    //
    //   c$$
    //     .subscribe((count: number) => {
    //       // tslint:disable-next-line
    //       console.log('second', count);
    //     });
    // }, 7000);
    //
    // setInterval(() => {
    //   c$$.next(globalCount++);
    // }, 1000);

    // const publisher$: ConnectableObservable<number> = Observable.create((observer: Observer<number>) => {
    //   let count: number = 0;
    //   const interval: any = setInterval(() => {
    //     // if (count === 3) {
    //     //   clearInterval(interval);
    //     //   return observer.error('some err');
    //     // }
    //     // if (count > 5) {
    //     //   clearInterval(interval);
    //     //   return observer.complete();
    //     // }
    //     observer.next(count++);
    //   }, 1000);
    //
    // })
    //   .publish()

    // publisher$.connect();

    // publisher$.subscribe((value: number) => {
    //   console.log('first', value)
    // }, (err: any) => {
    //   console.log(err)
    // }, () => {
    //   console.log('complete')
    // })
    //
    // setTimeout(() => {
    //   publisher$.subscribe((value: number) => {
    //     console.log('second', value)
    //   }, (err: any) => {
    //     console.log(err)
    //   }, () => {
    //     console.log('complete')
    //   })
    // }, 5000)
    //
    // const s$$: ReplaySubject<number> = new ReplaySubject(Number.POSITIVE_INFINITY);
    // s$$.subscribe((value: number) => {
    //   console.log('first', value);
    // })
    // s$$.next(1);
    // s$$.next(10);
    // s$$.next(66);
    //
    // setTimeout(()=>{
    //  // s$$.complete();
    //   s$$.subscribe((value: number) => {
    //     console.log('second', value);
    //   })
    // },5000)

    // const arr: number[] = [];
    // for (let i: number = 0; i < 1000; i++) {
    //   arr.push(i);
    // }
    // console.time('test')
    // Observable.from(arr)
    //   .subscribeOn(async)
    //   .map((x: number) => x ** 2)
    //   .filter((x: number) => x % 2 === 0)
    //   .subscribeOn(asap)
    //   .subscribe(null, null, () => {
    //     console.timeEnd('test')
    //   });

  }

  public ngOnDestroy(): void {
    // this._productsSubcription.unsubscribe();
  }

  public logoDesc(): void {
    alert(this.desc);
  }

  // public openFullCard(product: Product): void {
  //   this._modalService.open({
  //     component: FullCardComponent,
  //     context: {
  //       product
  //     }
  //   });
  // }

  // public chooseFirst(product: Product): void {
  //   // tslint:disable-next-line
  //   console.log(product);
  // }

}

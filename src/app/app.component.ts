import { Component, OnDestroy, OnInit } from '@angular/core';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// import { products$ } from './data/custom';
// import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
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

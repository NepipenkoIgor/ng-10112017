import { Component, OnDestroy, OnInit } from '@angular/core';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// import { products$ } from './data/custom';
// import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ProductsService } from './common/services/products.service';

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
    private _productsService: ProductsService
  ) { }

  public ngOnInit(): void {
    // this.safeLogo = this._santizer.bypassSecurityTrustUrl(this._logo);
    // this._productsSubcription = products$.subscribe((products: Product[]) => {
    //   console.log(products)
    //   this.products = products;
    // });
    this.products$ = this._productsService.products$;
  }

  public ngOnDestroy(): void {
    // this._productsSubcription.unsubscribe();
  }

  public logoDesc(): void {
    alert(this.desc);
  }

  public chooseFirst(product: Product): void {
    // console.log(product);
  }

}

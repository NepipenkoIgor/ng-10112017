import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModalService } from '../common/components/modal/modal.service';
import { Store } from '@ngrx/store';
import { FullCardComponent } from './card/full-card/full-card.component';
import { GetProductsPanding } from '../common/actions/products.actions';

@Component({
  selector: 'course-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  public text: string;
  public products$: Observable<Product[]>;
  public loadImg: string = 'assets/images/gears.gif';


  public constructor(
    private _modalService: ModalService,
    private _store: Store<StoreStates>,
  ) { }

  public ngOnInit(): void {
    this._store.dispatch(new GetProductsPanding());
    this.products$ = this._store.select('products');
  }

  public ngOnDestroy(): void {
    this._modalService.close();
    // this._productsSubcription.unsubscribe();
  }

  public openFullCard(product: Product): void {
    this._modalService.open({
      component: FullCardComponent,
      context: {
        product
      }
    });
  }

}

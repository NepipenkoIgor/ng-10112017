import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './products/card/card.component';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { UrlSantizePipe } from './common/pipes/url-santize.pipe';
import { ProductsFilterPipe } from './common/pipes/products-filter.pipe';
import { InitDirective } from './common/directives/init.directive';
// import { ProductsService } from './common/services/products.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN, routes } from './config';
import { ModalComponent } from './common/components/modal/modal.component';
import { FullCardComponent } from './products/card/full-card/full-card.component';
import { ModalService } from './common/components/modal/modal.service';
import { CartComponent } from './cart/cart.component';
// import { CartService } from './cart/cart.service';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { InterceptorService } from './common/services/interceptor.service';
import { rootReducer } from './common/reducers/root.reducer';
import { ProductsEffects } from './common/effects/products.effects';
import { OrderComponent } from './order/order.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrderGuardService } from './order/order-guard.service';
import { ProductComponent } from './products/product/product.component';
import { ProductResolveService } from './products/product/product-resolve.service';

// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    TooltipDirective,
    UrlSantizePipe,
    ProductsFilterPipe,
    InitDirective,
    ModalComponent,
    FullCardComponent,
    CartComponent,
    CartListComponent,
    OrderComponent,
    InfoComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([
      ProductsEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  entryComponents: [FullCardComponent, CartListComponent],
  providers: [
    // key /                    value
    // { provide: ProductsService, useClass: ProductsService }
    // ProductsService,
    ModalService,
    OrderGuardService,
    ProductResolveService,
    //  CartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: BASE_URL_TOKEN,
      useValue: BASE_URL,
      multi: true
    },
    {
      provide: 'BASE_URL',
      useValue: 'http://localhost:8091',
      multi: true
    },
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}

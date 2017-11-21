import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { UrlSantizePipe } from './common/pipes/url-santize.pipe';
import { ProductsFilterPipe } from './common/pipes/products-filter.pipe';
import { InitDirective } from './common/directives/init.directive';
import { ProductsService } from './common/services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN } from './config';
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
    InitDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    // key /                    value
    // { provide: ProductsService, useClass: ProductsService }
    ProductsService,
    { provide: BASE_URL_TOKEN, useValue: BASE_URL, multi: true },
    { provide: 'BASE_URL', useValue: 'http://localhost:8091', multi: true },
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

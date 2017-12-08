import { environment } from '../environments/environment';
import { InjectionToken } from '@angular/core';
import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductResolveService } from './products/product/product-resolve.service';

export const BASE_URL: string = environment.baseUrl;
export const BASE_URL_TOKEN: InjectionToken<string> = new InjectionToken(BASE_URL);

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: ':id/:name',
        component: ProductComponent,
        resolve: {
          product: ProductResolveService
        },
        data: {
          title: 'Info about product'
        }
      },
      {
        path: '**',
        redirectTo: '/info'
      }
    ]
  },
  {
    path: 'order',
    loadChildren: 'app/order/order.module#OrderModule'
  },
  {
    path: 'info',
    loadChildren: 'app/info/info.module#InfoModule'
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];
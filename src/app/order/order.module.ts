import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderGuardService } from './order-guard.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameValidatorDirective } from './name-validator.directive';
import { AsyncEqualValidatorDirective } from './async-equal-validator.directive';
import { SwitcherComponent } from './switcher/switcher.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderComponent,
       // canActivate: [OrderGuardService]
      }
    ])
  ],
  declarations: [OrderComponent, NameValidatorDirective, AsyncEqualValidatorDirective, SwitcherComponent],
  providers: [OrderGuardService]
})
export class OrderModule {}

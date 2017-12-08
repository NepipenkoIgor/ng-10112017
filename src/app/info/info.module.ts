import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InfoComponent
      },
    ])
  ],
  declarations: [InfoComponent]
})
export class InfoModule { }

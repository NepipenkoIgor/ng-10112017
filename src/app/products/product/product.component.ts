import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ActivatedRoute,
  Data,
} from '@angular/router';

@Component({
  selector: 'course-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  public constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   console.log(params)
    // })
    this._activatedRoute.data.subscribe((data: Data) => {
      // tslint:disable-next-line
      console.log(data);
    });
  }

}

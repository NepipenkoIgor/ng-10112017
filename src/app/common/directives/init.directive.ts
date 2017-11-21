import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[courseInit]'
})
export class InitDirective implements OnInit {
  @Input()
  public product: Product;

  @Input()
  // public set first(isFirst: boolean) {
  //   if (!isFirst) {
  //     return;
  //   }
  //   this.chooseFirst.emit(this.product);
  // }
  public first: boolean;

  @Output()
  public chooseFirst: EventEmitter<Product> = new EventEmitter();

  public ngOnInit(): void {
    this.first
      ? this.chooseFirst.emit(this.product)
      : null;
  }

}

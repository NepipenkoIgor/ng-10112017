import { by, element, ElementFinder } from 'protractor';

export class CartWidget {
  public cart: ElementFinder;
  public counter: ElementFinder;

  public constructor() {
    this.cart = element(by.css('course-cart'));
    this.counter = element(by.css('course-cart .counter'));
  }

  public openCart(): void {
    this.cart.click();
  }
}
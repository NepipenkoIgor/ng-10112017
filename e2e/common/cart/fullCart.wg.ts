import { by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class FullCartWidget {
  public cards: ElementArrayFinder;
  public openedCart: ElementFinder;

  public constructor() {
    this.cards = element.all(by.css('course-cart-list mat-card'));
    this.openedCart = element(by.css('course-cart-list'));
  }

  public removeFromCart(index: number): void {
    this.cards.get(index)
    element(by.css('.remove'))
      .click();
  }
}
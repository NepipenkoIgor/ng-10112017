import { by, element, ElementFinder } from 'protractor';

export class FullCardWidget {
  public title: ElementFinder;
  public price: ElementFinder;
  public image: ElementFinder;
  public buyButton: ElementFinder;
  public infoButton: ElementFinder;

  public constructor() {
    this.title = element(by.css('course-full-card mat-card-title'));
    this.price = element(by.css('course-full-card  mat-card-subtitle'));
    this.image = element(by.css('course-full-card img'));
    this.buyButton = element(by.css('course-full-card .buy_button'));
    this.infoButton = element(by.css('course-full-card .info_button'));
  }

  public buy(): void {
    this.buyButton
      .click();
  }
}
import { by, element, ElementFinder } from 'protractor';

export class SearchWidget {
  public searchInput: ElementFinder;

  public constructor() {
    this.searchInput = element(by.css('course-search input'));
  }

  public search(text: string): void {
    this.searchInput.sendKeys(text);
  }
}
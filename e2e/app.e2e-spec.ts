import { ProductsWidget } from './products/products.wg';
import { SearchWidget } from './common/search/search.wg';
import { browser } from 'protractor';
import * as fs from 'fs';
import { FullCardWidget } from './products/fullCard.wg';
import { CartWidget } from './common/cart/cart.wg';
import { FullCartWidget } from './common/cart/fullCart.wg';

function screen(name: string): void {
  browser.takeScreenshot()
    .then((png: string) => {
      const stream: fs.WriteStream = fs.createWriteStream(`./${name}.png`);
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
}

describe('angular-course App', () => {

  const productsWidget: ProductsWidget = new ProductsWidget();
  const searchWidget: SearchWidget = new SearchWidget();
  const fullCardWidget: FullCardWidget = new FullCardWidget();
  const cartWidget: CartWidget = new CartWidget();
  const fullCartWidget: FullCartWidget = new FullCartWidget();
  beforeEach(() => {
    browser.get('/');
  });

  it('should search by term', () => {
    searchWidget.search('DRAGasdasdasdadsasda');
    screen('img');
    expect(productsWidget.cards.count())
      .toEqual(0);
    searchWidget.searchInput.clear();
    searchWidget.search('DRAGBOT');
    expect(productsWidget.cards.count())
      .toEqual(1);
    searchWidget.searchInput.clear();
    screen('img1');

  });

  it('should display fullCard', () => {
    productsWidget.openFullCard(3);
    expect(fullCardWidget.title.getText())
      .toEqual('DRAGBOT');
    expect(fullCardWidget.price.getText())
      .toEqual('1440.52');
    screen('img2');
  });
  it('should add and remove items from cart', () => {
    [1, 3, 7].forEach((index: number) => {
      productsWidget.openFullCard(index);
      fullCardWidget.buy();
    });
    cartWidget.openCart();
    [0, 1, 2].forEach((index: number) => {
      screen(`img${index}remove`);
      fullCartWidget.removeFromCart(0);
    });
    screen('img3');
  })

  it('should add and remove items from cart', () => {
    cartWidget.openCart();
    expect(fullCartWidget.openedCart)
      .toBeDefined(false);
    screen('img4');
  });
});

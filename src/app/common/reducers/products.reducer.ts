import { GET_PRODUCTS_SUCCESS } from '../actions/products.actions';

export function productsReducer(products: Product[] = [], action: IAction<Product[]>): Product[] {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS: {
      return [...products, ...(action.payload as Product[])];
    }
    default: {
      return products;
    }
  }
}
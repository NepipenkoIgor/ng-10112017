import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart.actions';

export function cartReducer(products: Product[] = [], action: IAction<Product>): Product[] {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...products, (action.payload as Product)];
    }
    case REMOVE_FROM_CART: {
      const index: number =
        products.findIndex((product: Product) => (action.payload as Product)._id === product._id);
      products.splice(index, 1);
      return [...products];
    }

    default: {
      return products;
    }
  }
}

import { ActionReducerMap } from '@ngrx/store';
import { productsReducer } from './products.reducer';
import { cartReducer } from './cart.reducer';

export const rootReducer: ActionReducerMap<StoreStates> = {
  products: productsReducer,
  cartProducts: cartReducer,
};
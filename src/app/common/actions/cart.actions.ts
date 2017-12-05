export const ADD_TO_CART: string = 'ADD_TO_CART';
export const REMOVE_FROM_CART: string = 'REMOVE_FROM_CART';


export class AddToCart implements IAction<Product> {
  public readonly type: string = ADD_TO_CART;

  public constructor(public payload: Product) {}
}

// tslint:disable-next-line
export class RemoveFromCart implements IAction<Product> {
  public readonly type: string = REMOVE_FROM_CART;

  public constructor(public payload: Product) {}
}
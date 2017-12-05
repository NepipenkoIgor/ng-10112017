interface IAction<T> {
  type: string;
  payload?: T;
}

type StoreStates = {
  products: Product[];
  cartProducts: Product[];
}
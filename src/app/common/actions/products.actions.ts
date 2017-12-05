export const GET_PRODUCTS_PENDING: string = 'GET_PRODUCTS_PENDING';
export const GET_PRODUCTS_SUCCESS: string = 'GET_PRODUCTS_SUCCESS';


export class GetProductsPanding implements IAction<void> {
  public readonly type: string = GET_PRODUCTS_PENDING;
  public constructor() {}
}

// tslint:disable-next-line
export class GetProductsSuccess implements IAction<Product[]> {
  public readonly type: string = GET_PRODUCTS_SUCCESS;
  public constructor(public payload: Product[]) {}
}
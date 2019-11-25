import {IPizza} from "./pizzas";

export const CART_ADD = 'CART_ADD';

export interface IAction {
    type: string,
    payload: any
}

export interface ICartItem {
    pizzaId: number,
    count: number
}

export type ICart = ICartItem[];

export function cartReducer(cart: ICart = [], action: IAction) {
    console.log(action);
    switch (action.type) {
        case CART_ADD:
            return [action.payload];
        default:
            return cart;
    }
}

export function addToCart(pizza: IPizza) {
    return {
        type: CART_ADD,
        payload: pizza.id
    }
}
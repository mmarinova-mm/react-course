import {IPizza} from "./pizzas";

export const CART_ADD = 'CART_ADD';
export const CART_REMOVE = 'CART_REMOVE>';

export interface IAction {
    type: string,
    payload: any
}

export interface ICartItem {
    itemId: number,
    count: number
}

export type ICart = ICartItem[];

export function addToCart(pizza: IPizza) {
    return {
        type: CART_ADD,
        payload: pizza.id
    }
}

export function removeFromCart(pizza: IPizza) {
    return {
        type: CART_REMOVE,
        payload: pizza.id
    }
}

export function cartReducer(cartItems: ICart = [], action: IAction) {
    switch (action.type) {
        case CART_ADD:
            if (cartItems.find(item => item.itemId === action.payload)) {
                return cartItems.map(item => item.itemId === action.payload ? {...item, count: item.count + 1} : item);
            } else {
                return [...cartItems, {itemId: action.payload, count: 1}]
            }
        case CART_REMOVE:
            const updatedItems = cartItems.map(item => item.itemId === action.payload ? (item.count === 1 ? null : {...item, count: item.count - 1}) : item);
            return updatedItems.filter(item => item !== null)
        default:
            return cartItems;
    }
}

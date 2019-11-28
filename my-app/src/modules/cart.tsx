import {IPizza} from "./pizzas";
import {createReducer} from "redux-create-reducer";

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
    console.log(pizza);
    return {
        type: CART_REMOVE,
        payload: pizza.id
    }
}

export const cartReducer = createReducer<ICartItem[], IAction>([], {
    [CART_ADD]: (cartItems: ICart, action: IAction) => {
        if (cartItems.find(item => item.itemId === action.payload)) {
            return cartItems.map(item => item.itemId === action.payload ? {...item, count: item.count + 1} : item);
        } else {
            return [...cartItems, {itemId: action.payload, count: 1}]
        }
    },
    [CART_REMOVE]: (cartItems: ICart, action: IAction) => {
        const updatedItems = cartItems.map(item => item.itemId === action.payload ? {
            ...item,
            count: item.count - 1
        } : item);
        return updatedItems.filter(item => item.count !== 0)
    }
});

import {IPizza} from "./pizzas";

interface ICartItem {
    pizzaId: string,
    count: number,
};

type ICart = ICartItem[];
const CART_ADD = 'cart/add';

export default function cartReducer(state: ICart = [], action: any) {

    switch (action.type) {
        case CART_ADD:
            if (state.find((item) => item.pizzaId === action.payload)) {
                return state.map((item) => item.pizzaId === action.payload ? {...item, count: item.count + 1} : item);
            } else {
                return [...state, {pizzaId: action.payload, count: 1}];
            }
            break;
        default:
            return state;
    }
}

export function addToCart(pizza: IPizza) {
    return {
        type: CART_ADD,
        payload: pizza.id
    }
}

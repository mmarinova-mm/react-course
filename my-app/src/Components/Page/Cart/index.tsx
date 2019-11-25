import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ICartItem, removeFromCart} from "../../../modules/cart";
import {IPizza} from "../../../modules/pizzas";

export default function Cart() {
    const items = useSelector(getCart);
    const dispatch = useDispatch();

    return <div>
        <h2>Cart ({items.length})</h2>
        <ul>
            {
                items.map((item: any) => <li>
                    {item.pizza.title} - qty {item.count} - price ${item.pizza.price * item.count}
                    <button onClick={() => dispatch(removeFromCart(item.pizza))}>Remove</button>
                </li>)
            }
        </ul>
    </div>
}

function getCart(store: any): any[] {
    return store.cart.map((item: ICartItem) => ({
        count: item.count,
        pizza: store.pizzas.find((pizza: IPizza) => pizza.id === item.itemId)
    }))
}
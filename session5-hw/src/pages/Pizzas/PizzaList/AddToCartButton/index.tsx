import {IPizza} from "../../../../modules/pizzas";
import {useDispatch} from "react-redux";
import React from "react";
import {addToCart} from "../../../../modules/cart";

export function AddToCartButton({item}: { item: IPizza }) {
    const dispatch = useDispatch();

    return <button className={"btn btn-primary"}
                   onClick={() => dispatch(addToCart(item)) }>
        Add To Cart
    </button>
}
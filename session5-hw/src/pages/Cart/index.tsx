import React from 'react';
import {useSelector} from "react-redux";
import {IPizza} from "../../modules/pizzas";

export function Cart() {
  const items = useSelector(getCart);

  return (<div>
        <h2>Cart</h2>
        <ul>
            {items && items.map((item: any) => <li>
                Item: {item.pizza.name}
                Count: {item.count}
            </li>)}
        </ul>
      </div>
      // <React.Fragment>

      // </React.Fragment>
  );
}

function getCart(state: any) {
  return state.cart.map((cartItem: any) => {
      const pizza = state.pizzas.find((item: IPizza) => item.id === cartItem.pizzaId);
      cartItem.pizza = pizza;
      return cartItem;
  });
}

export default function Page() {
  return (
      <Cart/>
  );
}

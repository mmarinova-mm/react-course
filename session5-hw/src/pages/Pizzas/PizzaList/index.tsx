import React from "react";
import {useSelector} from "react-redux";
import {VoteButton} from "./VoteButton";
import {AddToCartButton} from "./AddToCartButton";

export default function PizzaList() {
    const data = useSelector((state: any) => state.pizzas);

    return <ul>
        {
            data && data.map((item: any) => <li className={""} key={item.id}>
                    <VoteButton item={item} />
                    {item.name} (${item.price})
                    <AddToCartButton item={item}/>
                </li>
            )
        }
    </ul>;
}

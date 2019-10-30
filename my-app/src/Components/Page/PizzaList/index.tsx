import React from "react";
import Pizza from "./Pizza";
import IPizza from "./interfaces/IPizza";

interface IPizzaListProps {
    pizzas: Array<IPizza>,
    upvote: Function,
}

export default function PizzaList({pizzas, upvote}: IPizzaListProps) {
    return (
        <div>
            <h3>Posts</h3>
            {
                pizzas.length === 0 ?
                    <span>No posts available</span> :
                    <div>
                        {pizzas.map(pizza => (
                            <Pizza pizza={pizza}>
                                <button onClick={() => upvote(pizza)}>Upvote</button>
                            </Pizza>
                        ))}
                    </div>
            }
        </div>
    );
}
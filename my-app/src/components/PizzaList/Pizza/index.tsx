import React from "react";
import {IPizza} from "../../../modules/pizzas";

interface IPizzaProps {
    children: React.ReactNode,
    pizza: IPizza,
}

const Pizza = React.memo(({children, pizza}: IPizzaProps) => {
    return (
        <div className="card" key={pizza.id}>
            <h3>{pizza.title}</h3>
            <span>{pizza.votesCount}</span>
            {children}
        </div>
    );
});

export default Pizza;
import React from "react";
import {IPizza} from "../../../modules/pizzas";
import globalStyles from '../../../assets/global-styles/bootstrap.module.css';

interface IPizzaProps {
    children: React.ReactNode,
    pizza: IPizza,
}

const Pizza = React.memo(({children, pizza}: IPizzaProps) => {
    return (
        <div className={globalStyles.card} key={pizza.id}>
            <div className={globalStyles['card-body']}>
                <h3 className={globalStyles['card-title']}>{pizza.title}</h3>
                <p className={globalStyles['card-text']}>Votes: {pizza.votesCount}</p>
            </div>
            {children}
        </div>
    );
});

export default Pizza;
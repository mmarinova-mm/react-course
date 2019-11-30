import React from "react";
import Pizza from "./Pizza";
import {IPizza} from "../../modules/pizzas";
import {addToCart} from "../../modules/cart";
import {useDispatch} from "react-redux";
import globalStyles from '../../assets/global-styles/bootstrap.module.css';
import cx from 'classnames';

interface IPizzaListProps {
    pizzas: Array<IPizza>,
    upvote: Function,
}

export default function PizzaList({pizzas = [], upvote}: IPizzaListProps) {
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Pizzas</h3>
            {
                pizzas.length === 0 ?
                    <span>No pizzas available</span> :
                    <div>
                        {pizzas.map(pizza => (
                            <Pizza pizza={pizza}>
                                <button className={cx(globalStyles.btn, globalStyles['btn-secondary'])}
                                        onClick={() => upvote(pizza)}>Upvote
                                </button>
                                <button className={cx(globalStyles.btn, globalStyles['btn-primary'])}
                                        onClick={() => dispatch(addToCart(pizza))}>Add
                                </button>
                            </Pizza>
                        ))}
                    </div>
            }
        </div>
    );
}
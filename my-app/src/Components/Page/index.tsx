import React, {useState} from 'react';
import PizzaList from "./PizzaList";
import { useSelector, useDispatch } from 'react-redux';
import Cart from "./Cart";
import {decrementPizzaVotes, incrementPizzaVotes, IPizza, sortPizzas} from "../../modules/pizzas";

export default function Page() {
    const dispatch = useDispatch();
    const [votes, setVotes] = useState<number[]>([]);
    const pizzas = useSelector((state: any) => {
        return state.pizzas;
    });

    const upvote = (pizza: IPizza) => {
        if (votes.includes(pizza.id)) {
            setVotes(votes.filter(vote => vote !== pizza.id));
            dispatch(decrementPizzaVotes(pizza.id));
        } else {
            dispatch(incrementPizzaVotes(pizza.id));
            setVotes([...votes, pizza.id]);
        }
        dispatch(sortPizzas());
    };

    return <main>
        <PizzaList pizzas={pizzas} upvote={upvote}/>
        <Cart></Cart>
    </main>;
}
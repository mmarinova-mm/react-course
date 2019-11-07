import React, {useState} from 'react';
import IPizza from "./PizzaList/interfaces/IPizza";
import PizzaList from "./PizzaList";
import { useSelector, useDispatch } from 'react-redux';
import {decrementPizzaVotes, incrementPizzaVotes, sortPizzas} from "./actions";

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

    return <main><PizzaList pizzas={pizzas} upvote={upvote}/></main>;
}
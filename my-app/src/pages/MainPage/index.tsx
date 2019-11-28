import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {decrementPizzaVotes, incrementPizzaVotes, IPizza, sortPizzas} from "../../modules/pizzas";
import PizzaList from '../../components/PizzaList';
import Cart from '../../components/Cart';
import CheckoutForm from "../../components/CheckoutForm";

export default function MainPage() {
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
        <Cart/>
        <CheckoutForm/>
    </main>;
}
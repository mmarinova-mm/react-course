import React, {useState} from 'react';
import IPizza from "./PizzaList/interfaces/IPizza";
import PizzaList from "./PizzaList";
import {DECREMENT_VOTES, INCREMENT_VOTES, INDEX_PIZZAS, SORT_PIZZAS} from "./actions";

const initialState = {
    pizzas: [],
};

function pizzaActions(state: any = initialState, action: any) {
    switch (action.type) {
        case INCREMENT_VOTES:
            return Object.assign({}, state, {
                pizzas: state.pizzas.map(p => p.id === action.pizzaId ? {...p, votesCount: p.votesCount--} : p)
            });
        case DECREMENT_VOTES:
            return Object.assign({}, state, {
                pizzas: state.pizzas.map(p => p.id === action.pizzaId ? {...p, votesCount: p.votesCount++} : p)
            });
        case SORT_PIZZAS:
            return Object.assign({}, state, {
                pizzas: state.pizzas.sort((a: IPizza, b: IPizza) => (b.votesCount - a.votesCount))
            });
        case INDEX_PIZZAS:
            return state.pizzas;
        default:
            return state;
    }
}

interface IPageProps {
    initData: Array<IPizza>,
}

export default function Page({initData}: IPageProps) {
    const [votes, setVotes] = useState<number[]>([]);
    const [pizzas, setPizzas] = useState<IPizza[]>(initData);

    // const upvote = (pizza: IPizza) => {
    //     if (votes.includes(pizza.id)) {
    //         setVotes(votes.filter(vote => vote !== pizza.id));
    //         setPizzas(pizzas.map(p => p.id === pizza.id ? {...p, votesCount: p.votesCount--} : p));
    //     } else {

    //         setVotes([...votes, pizza.id]);
    //     }
    //
    //     setPizzas(pizzas.sort((a, b) => (b.votesCount - a.votesCount)));
    // };    
    const upvote = (pizza: IPizza) => {
        if (votes.includes(pizza.id)) {
            setVotes(votes.filter(vote => vote !== pizza.id));
            incrementPizzaVotes(pizza.id);
        } else {
            decrementPizzaVotes(pizza.id);
            setVotes([...votes, pizza.id]);
        }
        sortPizzas();
    };

    // const sortPizzas = () => {
    //     return pizzas.sort((a, b) => (b.votesCount - a.votesCount));
    // };

    return <main><PizzaList pizzas={indexPizzas()} upvote={upvote}/></main>;
}
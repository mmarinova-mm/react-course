import React, {useState} from 'react';
import IPizza from "./PizzaList/interfaces/IPizza";
import PizzaList from "./PizzaList";

interface IPageProps {
    initData: Array<IPizza>,
}

export default function Page({initData}: IPageProps) {
    const [votes, setVotes] = useState<number[]>([]);
    const [pizzas, setPosts] = useState<IPizza[]>(initData);

    const upvote = (pizza: IPizza) => {
        if (votes.includes(pizza.id)) {
            setVotes(votes.filter(vote => vote !== pizza.id));
            setPosts(pizzas.map(p => p.id === pizza.id ? {...p, votesCount: p.votesCount--} : p));
        } else {
            setPosts(pizzas.map(p => p.id === pizza.id ? {...p, votesCount: p.votesCount++} : p));
            setVotes([...votes, pizza.id]);
        }

        setPosts(pizzas.sort((a, b) => (b.votesCount - a.votesCount)));
    };

    const sortPizzas = () => {
        return pizzas.sort((a, b) => (b.votesCount - a.votesCount));
    };

    return <main><PizzaList pizzas={sortPizzas()} upvote={upvote}/></main>;
}
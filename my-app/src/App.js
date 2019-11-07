import React from 'react';
import './App.css';
import Page from './Components/Page';
import pizzas from './data';
import {DECREMENT_VOTES, INCREMENT_VOTES, INDEX_PIZZAS, SORT_PIZZAS, sortPizzas} from "./Components/Page/actions";
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    pizzas: [],
};

function pizzaActions(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case INCREMENT_VOTES:
            Object.assign({}, state,{
                pizzas: state.pizzas.map(p => p.id === action.id ? {...p, votesCount: p.votesCount++} : p)
            });
            return state;
        case DECREMENT_VOTES:
            Object.assign({}, state, {
                pizzas: state.pizzas.map(p => p.id === action.id ? {...p, votesCount: p.votesCount--} : p)
            });
            return  state;
        case SORT_PIZZAS:
            Object.assign({}, state, {
                pizzas: state.pizzas.sort((a, b) => (b.votesCount - a.votesCount))
            });
            return state;
        default:
            return state;
    }
}

const store = createStore(pizzaActions, {pizzas: pizzas});

export default function App() {
    store.dispatch(sortPizzas());
    return (
        <Provider store={store}>
            <Page/>
        </Provider>
    );
}
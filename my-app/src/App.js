import React from 'react';
import './App.css';
import Page from './Components/Page';
import pizzas from './data';
import {DECREMENT_VOTES, INCREMENT_VOTES, SORT_PIZZAS, sortPizzas} from "./Components/Page/actions";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {
    pizzas: [],
};

function pizzaActions(pizzas = initialState, action) {
    switch (action.type) {
        case INCREMENT_VOTES:
            return pizzas.map(p => p.id === action.id ? {...p, votesCount: p.votesCount + 1} : p);
        case DECREMENT_VOTES:
            return pizzas.map(p => p.id === action.id ? {...p, votesCount: p.votesCount - 1} : p);
        case SORT_PIZZAS:
            return pizzas.sort((a, b) => (b.votesCount - a.votesCount));
        default:
            return pizzas;
    }
}

function cartActions(state = initialState, action) {
    return state;
}

const store = createStore(combineReducers({pizzas: pizzaActions, cart: cartActions}), {pizzas: pizzas}, composeWithDevTools());

export default function App() {
    store.dispatch(sortPizzas());
    return (
        <Provider store={store}>
            <Page/>
        </Provider>
    );
}
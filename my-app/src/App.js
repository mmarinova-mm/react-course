import React from 'react';
import './App.css';
import Page from './Components/Page';
import pizzas from './data';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {pizzaReducer, sortPizzas} from "./modules/pizzas";
import {cartReducer} from "./modules/cart";

const store = createStore(combineReducers({pizzas: pizzaReducer, cart: cartReducer}), {pizzas: pizzas}, composeWithDevTools());

export default function App() {
    store.dispatch(sortPizzas());
    return (
        <Provider store={store}>
            <Page/>
        </Provider>
    );
}
import React from 'react';
import './App.css';
import pizzas from './data';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {pizzaReducer, sortPizzas} from "./modules/pizzas";
import {cartReducer} from "./modules/cart";
import MainPage from "./pages/MainPage";
import {save, load} from "redux-localstorage-simple"
import {BrowserRouter} from "react-router-dom";

const createStoreWithMiddleware = compose(applyMiddleware(save()))(createStore);
const store = createStoreWithMiddleware(combineReducers({
    pizzas: pizzaReducer,
    cart: cartReducer
}), load({pizzas: pizzas}), composeWithDevTools());

export default function App() {
    store.dispatch(sortPizzas());
    return (
        <div>
            <Provider store={store}>
                <MainPage/>
            </Provider>
        </div>
    );
}
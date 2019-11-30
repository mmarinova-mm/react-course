import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrementPizzaVotes, incrementPizzaVotes, IPizza, sortPizzas} from "../../modules/pizzas";
import PizzaList from '../../components/PizzaList';
import Cart from '../../components/Cart';
import CheckoutForm from "../../components/CheckoutForm";
import {Route, Switch} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';
import globalStyles from '../../assets/global-styles/bootstrap.module.css';
import cx from 'classnames';

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

    return <BrowserRouter>
        <header>
            <nav className={cx(globalStyles.navbar, globalStyles['navbar-expand-sm'], globalStyles['navbar-light'], globalStyles['bg-light'])}>
                <ul className={cx(globalStyles['navbar-nav'])}>
                    <li className={cx(globalStyles['nav-item'], globalStyles['nav-link'])}><Link to="/">Pizzas</Link></li>
                    <li className={cx(globalStyles['nav-item'], globalStyles['nav-link'])}><Link to="/cart">Cart</Link></li>
                    <li className={cx(globalStyles['nav-item'], globalStyles['nav-link'])}><Link to="/checkout">Checkout</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <div className={globalStyles.container}>
                <Switch>
                    <Route exact path="/">
                        <PizzaList pizzas={pizzas} upvote={upvote}/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/checkout">
                        <CheckoutForm/>
                    </Route>
                </Switch>
            </div>
        </main>
    </BrowserRouter>;
}
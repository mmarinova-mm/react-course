import {IAction} from "./cart";
import {createReducer} from "redux-create-reducer";

export const INCREMENT_VOTES = 'PIZZA_INCREMENT_VOTES';
export const DECREMENT_VOTES = 'PIZZA_DECREMENT_VOTES';
export const SORT_PIZZAS = 'PIZZA_SORT';

export function decrementPizzaVotes(pizzaId: number): IAction {
    return {type: DECREMENT_VOTES, payload: pizzaId};
}

export function sortPizzas() {
    return {type: SORT_PIZZAS};
}

export function incrementPizzaVotes(pizzaId: number): IAction {
    return {type: INCREMENT_VOTES, payload: pizzaId};
}

export interface IPizza {
    id: number;
    title: string;
    tagline: string;
    votesCount: number;
}

export const pizzaReducer = createReducer<IPizza[], IAction>([], {
    [INCREMENT_VOTES]: (pizzas: IPizza[] = [], action: IAction) => {
        return pizzas.map(p => p.id === action.payload ? {...p, votesCount: p.votesCount + 1} : p);
    },
    [DECREMENT_VOTES]: (pizzas: IPizza[] = [], action: IAction) => {
        return pizzas.map(p => p.id === action.payload ? {...p, votesCount: p.votesCount - 1} : p);
    },
    [SORT_PIZZAS]: (pizzas: IPizza[] = [], action: IAction) => {
        return pizzas.sort((a, b) => (b.votesCount - a.votesCount));
    }
});
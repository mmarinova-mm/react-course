export const INCREMENT_VOTES = 'PIZZA_INCREMENT_VOTES';
export const DECREMENT_VOTES = 'PIZZA_DECREMENT_VOTES';
export const SORT_PIZZAS = 'PIZZA_SORT';

export function decrementPizzaVotes(pizzaId: number) {
    return {type: DECREMENT_VOTES, id: pizzaId};
}
export function sortPizzas() {
    return {type: SORT_PIZZAS};
}
export function incrementPizzaVotes(pizzaId: number) {
    return {type: INCREMENT_VOTES, id: pizzaId};
}

export interface IPizza {
    id: number;
    title: string;
    tagline: string;
    votesCount: number;
}

export function pizzaReducer(pizzas: IPizza[] = [], action: any) {
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
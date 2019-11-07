export const INCREMENT_VOTES = 'INCREMENT_VOTES';
export const DECREMENT_VOTES = 'DECREMENT_VOTES';
export const SORT_PIZZAS = 'SORT_PIZZAS';
export const INDEX_PIZZAS = 'INDEX_PIZZASS';

export function decrementPizzaVotes(pizzaId: number) {
    return {type: DECREMENT_VOTES, id: pizzaId};
}
export function sortPizzas() {
    return {type: SORT_PIZZAS};
}
export function incrementPizzaVotes(pizzaId: number) {
    return {type: INCREMENT_VOTES, id: pizzaId};
}
export interface IPizza {
    id: string;
    name: string;
    price: number;
    likes: number;
    viewerLiked: boolean;
}

interface IAction {
    type: string,
    payload: any
}

const PIZZA_FETCH = 'pizzas/fetch';
const PIZZA_UPVOTE = 'pizzas/upvote';
const PIZZA_DOWNVOTE = 'pizzas/downvote';

export default function pizzasReducer(state = [], action: IAction) {
    switch (action.type) {
        case PIZZA_FETCH:
            return action.payload;
        case PIZZA_UPVOTE:
            return state.map((pizza: IPizza) => pizza.id === action.payload.id ? {
                ...pizza,
                likes: pizza.likes + 1,
                viewerLiked: true
            } : pizza)
      case PIZZA_DOWNVOTE:
            return state.map((pizza: IPizza) => pizza.id === action.payload.id ? {
                ...pizza,
                likes: pizza.likes -1,
                viewerLiked: false
            } : pizza);
        default:
            return state;
    }
    return state;
}

export function fetchPizzas(pizzas: IPizza[]) {
    return {
        type: PIZZA_FETCH,
        payload: pizzas
    }
}

export function upvote(pizza: IPizza) {
    return {
        type: PIZZA_UPVOTE,
        payload: pizza
    }
}

export function downvote(pizza: IPizza) {
    return {
        type: PIZZA_DOWNVOTE,
        payload: pizza
    }
}
import React from 'react';
import PizzaList from "./PizzaList";
import api from "../../utils/api";
import {useDispatch} from "react-redux";
import {fetchPizzas, IPizza} from "../../modules/pizzas";


export default function Page() {
    const dispatch = useDispatch();
    // const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        api.listPizzas().then((pizzas: unknown) => {
            dispatch(fetchPizzas(pizzas as IPizza[]));
        });
    }, []);

    return <div><PizzaList/></div>;
}
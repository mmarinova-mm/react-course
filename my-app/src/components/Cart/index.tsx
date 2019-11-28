import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ICartItem, removeFromCart} from "../../modules/cart";
import {IPizza} from "../../modules/pizzas";
import Modal from "react-modal";

export default function Cart() {
    const items = useSelector(getCart);
    const dispatch = useDispatch();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <h2>Are you sure you want to remove the item?</h2>
            <div>
                <button onClick={() => {dispatch(removeFromCart(currentItem.pizza)); closeModal();}}>Yes</button>
                <button onClick={() => closeModal()}>No</button>
            </div>
        </Modal>
        <h2>Cart ({items.length})</h2>
        <ul>
            {
                items.map((item: any) => <li>
                    {item.pizza.title} - qty {item.count} - price ${item.pizza.price * item.count}
                    <button onClick={() => {setCurrentItem(item); openModal();}}>Remove</button>
                </li>)
            }
        </ul>
    </div>
}

function getCart(store: any): any[] {
    return store.cart.map((item: ICartItem) => ({
        count: item.count,
        pizza: store.pizzas.find((pizza: IPizza) => pizza.id === item.itemId)
    }))
}
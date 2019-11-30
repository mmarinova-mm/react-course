import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ICartItem, removeFromCart} from "../../modules/cart";
import {IPizza} from "../../modules/pizzas";
import Modal from "react-modal";
import globalStyles from '../../assets/global-styles/bootstrap.module.css';
import cx from 'classnames';

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
            <div className={globalStyles['modal-header']}>
                <h2>Confirmation</h2>
            </div>
            <div className={globalStyles['modal-body']}>
                Are you sure you want to remove the item?
            </div>
            <div className={globalStyles['modal-footer']}>
                <button className={cx(globalStyles.btn, globalStyles['btn-danger'])} onClick={() => {
                    dispatch(removeFromCart(currentItem.pizza));
                    closeModal();
                }}>Yes
                </button>
                <button className={cx(globalStyles.btn, globalStyles['btn-secondary'])}
                        onClick={() => closeModal()}>No
                </button>
            </div>
        </Modal>
        <h2>Cart ({items.length})</h2>
        <ul className={globalStyles['list-group']}>
            {
                items.map((item: any) => <li
                    className={cx(globalStyles['list-group-item'], globalStyles['d-flex'], globalStyles['justify-content-between'], globalStyles['align-items-center'])}>
                    {item.pizza.title} - qty {item.count} - price ${item.pizza.price * item.count}
                    <button className={cx(globalStyles.btn, globalStyles['btn-danger'])} onClick={() => {
                        setCurrentItem(item);
                        openModal();
                    }}>Remove
                    </button>
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
import React, { memo } from 'react';

import styles from "../styles/cartItem.module.scss"
import {useDispatch} from "react-redux";
import { addPiza, increment ,decrement,deleteCartItem } from "../redux/pizzaSlicer";
export const CartItem = memo((props) => {
    const dispatch = useDispatch();
    const toAddPizza = () => {
        dispatch(addPiza({...props,showMessage:false}));
        dispatch(increment())
    }
    const toDecrementPizza = () => {
        dispatch(decrement([props.id,{name:props.name,type:props.type,size:props.size,img:props.img,price:props.price,amount:props.amount}]))

    }
    const deleteItem = () => {
        dispatch(deleteCartItem(props))
    }
    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItem__pizza}>
                <img style={{width:"105px"}} alt={props.name} src={`/pizzasimg/jpg/${props.img}.jpeg`}/>
                <div className={styles.cartItem__descr}>
                    <div className={styles.cartItem__title}>{props.name}</div>
                    <div className={styles.cartItem__text}>{props.type}, {props.size}</div>
                </div>
            </div>
            <div className={styles.cartItem__buttons}>
                <div onClick={toDecrementPizza} className={styles.cartItem__minus}>
                    <img alt="minus" src="/pizzasimg/svg/minus.svg"/>
                </div>
                <div className={styles.cartItem__count}>{props.amount}</div>
                <div onClick={toAddPizza} className={styles.cartItem__plus}>
                <img alt="plus" src="/pizzasimg/svg/plus.svg"/>
                </div>
            </div>
            <p className={styles.cartItem__price}>{props.price * props.amount} ₽ </p>
            <div onClick={deleteItem} className={styles.cartItem__delete}>
                <img alt="delete" src="/pizzasimg/svg/delete.svg"/>
            </div>
        </div>
    )
})
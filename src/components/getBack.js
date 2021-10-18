import React from 'react';
import { Link } from 'react-router-dom';

import styles from "../styles/getBack.module.scss";
export const GetBack = () => {
    return (
        <div className={styles.getCenter}>
            <h2 className={styles.title}>
                Корзина пустая 😕
            </h2>
            <p className={styles.text}>
            Вероятней всего, вы не заказывали ещё пиццу.
            Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <div className={styles.img}>
                <img alt="empty" src="/pizzasimg/svg/empty.svg"/>
            </div>
            <div className={styles.btn}>
                <Link to="/">
                    Вернуться назад
                </Link>
            </div>
        </div>
    )
}
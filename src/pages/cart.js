import Header from "../components/header";
import Layout from "../components/layout";
import styles from "../styles/cart.module.scss";
import {useDispatch, useSelector} from "react-redux"
import { CartItem } from "../components/cartItem";
import { GetBack } from "../components/getBack";
import { deleteCart } from "../redux/pizzaSlicer";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
export const Cart = () => {
    const state = useSelector(state=>state.pizza);
    const dispatch = useDispatch();
    const  array = ()=>{
        const pizzas = [] 
        for (let obj in state.pizzas) {
            const pizza = state.pizzas[obj];
            pizza.forEach(item=>{
                pizzas.push(
                <CartItem key={`${obj} + ${item.type} + ${item.size}`} id={obj} {...item}
                />
                )
            })
        }
        return pizzas;
    }
    const deleteTrash = () => {
        dispatch(deleteCart())
    }
    return (
       <Layout>
            <Helmet>
                <title>Корзина</title>
            </Helmet>
           <Header hideButton={false}/>
          
           <div className={styles.cartContainer}>
                <div className={styles.container}>
                {array().length === 0 ? <GetBack/>  :
                        <>
                            <div className={styles.cart}>
                                    <div className={styles.cart__title}>
                                        <img alt="shoppingCart" src="/pizzasimg/svg/shoppingCart.svg"/>
                                        <h2 className={styles.cart__titleText}>Корзина</h2>
                                    </div>
                                    <div onClick={deleteTrash} className={styles.cart__trash}>
                                        <img alt="trash"src="/pizzasimg/svg/trash.svg"  />
                                        <p className={styles.cart__trashText}>Очистить корзину</p>
                                    </div>
                            </div>
                            <div className={styles.cart__items}>
                            {array().map(item=>item)}
                            </div>
                            <div className={styles.info}>
                                <div className={styles.amountPizzas}>Всего пицц:
                                    <p>{state.totalCount} шт.</p>
                                </div>
                                <div className={styles.totalPrice}>
                                    Сумма заказа:<p>{state.totalPrice} ₽</p>
                                </div>
                            </div>
                            <div className={styles.order}>
                                    <Link to="/">
                                        <div className={styles.order__back}>
                                                
                                                <div className={styles.order__img}>
                                                    <img alt="arrow" src="/pizzasimg/svg/arrow.svg" />
                                                </div>
                                                <p className={styles.order__backText}>
                                                Вернуться назад
                                                </p>
                                                
                                        </div>
                                    </Link>
                                <div className={styles.order__pay}>
                                    <a href="*">
                                    Оплатить сейчас
                                    </a>
                                </div>
                            </div>
                        </>
                }
                </div>
           </div>
           
       </Layout>
    )
}
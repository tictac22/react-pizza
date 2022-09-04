import { Helmet } from "react-helmet"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { GetBack } from "../components/getBack"
import { CartTotal } from "../components/pages/carTotal"
import { CartWrapper } from "../components/pages/cartWrapper"
import { deleteCart } from "../redux/pizzaSlicer"
import styles from "../styles/cart.module.scss"
export const Cart = () => {
	const state = useSelector((state) => state.pizza.totalCount)
	const dispatch = useDispatch()
	const deleteTrash = () => {
		dispatch(deleteCart())
	}
	return (
		<>
			<Helmet>
				<title>Корзина</title>
			</Helmet>
			<div className={styles.cartContainer}>
				<div className={styles.container}>
					{state === 0 ? (
						<GetBack />
					) : (
						<>
							<div className={styles.cart}>
								<div className={styles.cart__title}>
									<img alt="shoppingCart" src="/pizzasimg/svg/shoppingCart.svg" />
									<h2 className={styles.cart__titleText}>Корзина</h2>
								</div>
								<div onClick={deleteTrash} className={styles.cart__trash}>
									<img alt="trash" src="/pizzasimg/svg/trash.svg" />
									<p className={styles.cart__trashText}>Очистить корзину</p>
								</div>
							</div>
							<CartWrapper />
							<CartTotal />
							<div className={styles.order}>
								<Link to="/">
									<div className={styles.order__back}>
										<div className={styles.order__img}>
											<img alt="arrow" src="/pizzasimg/svg/arrow.svg" />
										</div>
										<p className={styles.order__backText}>Вернуться назад</p>
									</div>
								</Link>
								<div className={styles.order__pay}>
									<a href="*">Оплатить сейчас</a>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	)
}

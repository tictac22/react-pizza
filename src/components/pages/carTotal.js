import { useSelector } from "react-redux"
import styles from "../../styles/cart.module.scss"
export const CartTotal = () => {
	const state = useSelector((state) => state.pizza)
	return (
		<div className={styles.info}>
			<div className={styles.amountPizzas}>
				Всего пицц:
				<p>{state.totalCount} шт.</p>
			</div>
			<div className={styles.totalPrice}>
				Сумма заказа:<p>{state.totalPrice} ₽</p>
			</div>
		</div>
	)
}

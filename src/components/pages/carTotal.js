import { useSelector } from "react-redux"
import styles from "../../styles/cart.module.scss"
export const CartTotal = () => {
	const state = useSelector((state) => state.pizza)
	return (
		<div className={styles.info}>
			<div className={styles.amountPizzas}>
				Total pizzas:
				<p>{state.totalCount}</p>
			</div>
			<div className={styles.totalPrice}>
				Order price:<p>{state.totalPrice.toFixed(2)} $</p>
			</div>
		</div>
	)
}

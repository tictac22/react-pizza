import { useSelector } from "react-redux"
import styles from "../../styles/cart.module.scss"
import { CartItem } from "../cartItem"
export const CartWrapper = () => {
	const state = useSelector((state) => state.pizza.pizzas)

	const pizzas = []
	for (let obj in state) {
		const pizza = state[obj]
		pizza.forEach((item) => {
			pizzas.push(<CartItem key={`${obj} + ${item.type} + ${item.size}`} id={obj} {...item} />)
		})
	}

	return <div className={styles.cart__items}>{pizzas.map((item) => item)}</div>
}

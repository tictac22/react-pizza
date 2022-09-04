import { useSelector } from "react-redux"
import styles from "../../styles/piza.module.scss"

export const Amount = ({ id }) => {
	const amount = useSelector((state) => state.pizza.pizzas)
	const reducedAmount = () => {
		if (!amount[id]) return 0
		return amount[id]?.reduce((prev, current) => {
			if (!prev.amount) {
				return prev + current.amount
			} else {
				return prev.amount + current.amount
			}
		}, 0)
	}
	return <div className={styles.btn__count}>{reducedAmount()}</div>
}

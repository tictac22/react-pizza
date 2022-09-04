import { UseData } from "../../hooks/useData"
import styles from "../../styles/index.module.scss"

import Message from "../message"
import { Piza } from "../pizzaItem/index"
export const HomeWrapper = () => {
	const { data, isError, isLoading } = UseData()

	return (
		<section className={styles.menu}>
			<div className="container">
				{isLoading ? (
					"Loading data..."
				) : isError ? (
					"Server side error, please try again"
				) : (
					<>
						<h2 className={styles.title}>All pizzas</h2>
						<Message />
						<div className={styles.grid}>
							{data &&
								data.map((item) => {
									return (
										<Piza
											id={item._id}
											key={item.name}
											name={item.name}
											price={item.price}
											img={item.imgUrl}
										/>
									)
								})}
						</div>
					</>
				)}
			</div>
		</section>
	)
}

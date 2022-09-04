import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addPiza, increment, showMessage } from "../../redux/pizzaSlicer"

import styles from "../../styles/piza.module.scss"

import { Amount } from "./amount"
export const Piza = ({ name, price, img, id }) => {
	const dispatch = useDispatch()
	const pizzaTypes = ["thin", "traditional"]
	const pizzaSizes = ["26 см.", "30 см.", "40 см."]

	const [avaibleTypes, setAvaibleTypes] = useState(pizzaTypes[null])
	const [avaibleSizes, setAvaibleSizes] = useState(pizzaSizes[null])

	const addPicaToCart = () => {
		if (avaibleTypes === undefined || avaibleSizes === undefined) {
			dispatch(showMessage(true))
			return
		}
		const pizza = {
			img,
			id,
			name,
			type: pizzaTypes[avaibleTypes],
			size: pizzaSizes[avaibleSizes],
			price,
			showMessage: false,
		}
		console.log(pizza)
		dispatch(addPiza({ ...pizza }))
		dispatch(increment())
	}
	return (
		<div className={styles.pizza}>
			<div className={styles.pizza__column}>
				<div style={{ width: "260px", height: "260px" }} className={styles.pizza__img}>
					<picture>
						<source srcSet={`/pizzasimg/avif/${img}.avif`} alt={name} type="image/avif" />
						<source srcSet={`/pizzasimg/webp/${img}.webp`} alt={name} type="image/webp" />
						<img style={{ maxWidth: "100%" }} src={`/pizzasimg/jpg/${img}.jpeg`} alt={name} />
					</picture>
				</div>
				<h3 className={styles.pizza__title}>{name}</h3>
				<div className={styles.pizza__options}>
					<div className={styles.pizza__type}>
						{pizzaTypes.map((item, index) => {
							return (
								<div
									key={item}
									onClick={() => {
										setAvaibleTypes(index)
									}}
									className={`${styles.type__item__wrapper}`}
								>
									<p
										className={`${styles.pizza__type__item} ${
											index === avaibleTypes ? styles.pizza__type__item__active : ""
										}`}
									>
										{item}
									</p>
								</div>
							)
						})}
					</div>
					<div className={styles.pizza__size}>
						{pizzaSizes.map((item, index) => {
							return (
								<div
									key={item}
									onClick={() => {
										setAvaibleSizes(index)
									}}
									className={styles.size__item__wrapper}
								>
									<div
										className={`${styles.pizza__size__item} ${
											index === avaibleSizes ? styles.pizza__size__item__active : ""
										}`}
									>
										{item}
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<div className={styles.price}>
					<div className={styles.price__money}>
						<p className={styles.text}>
							from {price} {"\u20BD"}{" "}
						</p>
					</div>
					<div onClick={addPicaToCart} className={`${styles["btn"]} btn`}>
						<div className={styles.plus}>
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
									fill="white"
								/>
							</svg>
						</div>
						<p className={styles.btn__text}>Add</p>
						<Amount id={id} />
					</div>
				</div>
			</div>
		</div>
	)
}

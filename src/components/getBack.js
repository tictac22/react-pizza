import React from "react"
import { Link } from "react-router-dom"

import styles from "../styles/getBack.module.scss"
export const GetBack = () => {
	return (
		<div className={styles.getCenter}>
			<h2 className={styles.title}>Cart is empty 😕</h2>
			<p className={styles.text}>You probably haven't ordered pizza yet. To order pizza, go to the main page.</p>
			<div className={styles.img}>
				<img alt="empty" src="/pizzasimg/svg/empty.svg" />
			</div>
			<div className={styles.btn}>
				<Link to="/">Go back</Link>
			</div>
		</div>
	)
}
    

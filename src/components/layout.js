import React from "react"
import { useLocation } from "react-router"
import styles from "../styles/layout.module.scss"
import Header from "./header"
export default ({ children }) => {
	const router = useLocation()
	const hideButton = router.pathname === "/" ? true : false
	return (
		<div className={styles.padding}>
			<div className={styles.wrapper}>
				<Header hideButton={hideButton} />

				{children}
			</div>
		</div>
	)
}

import React from "react"

import { Link } from "react-router-dom"
import styles from "../../styles/header.module.scss"

import { TotalBtn } from "./total"
const Header = ({ hideButton }) => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__body}>
					<Link to="/">
						<div className={`${styles.header__logo} ${styles["logo-header"]}`}>
							<div className={`${styles["logo-header__logo"]}`}>
								<img alt="logo" src="/logo.png" />
							</div>
							<h1 className={styles["logo-header__title"]}>REACT PIZZA</h1>
							<p className={styles["logo-header__text"]}>самая вкусная пицца во вселенной</p>
						</div>
					</Link>
					{hideButton && <TotalBtn />}
				</div>
			</div>
		</header>
	)
}

export default Header

import React, { memo, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { sortBy } from "../../redux/sortSlicer.js"
import styles from "../../styles/filter.module.scss"
import { Categories } from "./categories"
const Filter = () => {
	const [isActive, setIsActive] = useState(false)
	const setClass = () => (isActive ? setIsActive(false) : setIsActive(true))
	const [category, setCategory] = useState("по популярности")
	const dispatch = useDispatch()

	useEffect(() => {
		window.addEventListener("click", (event) => {
			if (!event.target.closest("#filter")) {
				setIsActive(false)
			}
		})
	}, [])

	const changeCategory = (e) => {
		const filterText = e.target.innerText
		setCategory(filterText)

		const filterData = e.target.getAttribute("data-filteritem")
		const filterHow = e.target.getAttribute("data-filterhow") || "desc"

		const sort = { _sort: filterData, _order: filterHow }
		dispatch(sortBy(sort))
	}

	return (
		<div className={styles.filter}>
			<div className="container">
				<div className={styles.filter__body}>
					<div className={styles.filter__options}>
						<Categories names={["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"]} />
					</div>
					<div
						onClick={setClass}
						id="filter"
						className={`${styles.filter__sort} ${isActive ? `${styles["filter__sort--active"]}` : ""} `}
					>
						<div className={styles.filter__sortBy}>
							<div className={styles.filter__arrow}></div>
							<p className={styles.filter__text}>Сортировка по:</p>
						</div>
						<div className={styles.filter__categories}>
							<p className={styles.filter__category}>{category}</p>
							<ul onClick={changeCategory} className={styles.filter__choose}>
								<li data-filteritem="popularity" className={styles["filter__choose__item"]}>
									по популярности
								</li>
								<li data-filteritem="price" className={styles["filter__choose__item"]}>
									по цене
								</li>
								<li
									data-filteritem="name"
									data-filterhow="asc"
									className={styles["filter__choose__item"]}
								>
									по алфавиту
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default memo(Filter)

//All", "Meats", "Vegetarian", "Grill", "Hot"]}

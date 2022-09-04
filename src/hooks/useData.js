import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const UseData = () => {
	const [isLoading, setLoading] = useState(false)
	const [isError, setError] = useState(false)
	const [serverData, setData] = useState([])
	const { _sort, _order } = useSelector((state) => state.sort.sortBy)
	const { category } = useSelector((state) => state.sort)
	useEffect(() => {
		const request = async () => {
			try {
				setLoading(true)

				const res = await fetch(
					`/data?_sort=${_sort}&_order=${_order}${category === "Все" ? "" : `&category=${category}`}`
				)
				const sortedData = await res.json()
				setLoading(false)
				setData(sortedData)
			} catch (e) {
				setLoading(false)
				console.log(e.message)
				setError(true)
			}
		}
		request()
	}, [_sort, category, _order])

	return {
		isLoading,
		data: serverData,
		isError,
	}
}

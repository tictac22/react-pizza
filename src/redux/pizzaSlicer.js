import { createSlice } from "@reduxjs/toolkit"
import isEqual from "lodash.isequal"
import remove from "lodash.remove"

const { pizzas, totalCount, totalPrice } = getStateFromLocalStorage()
const initialState = {
	totalPrice,
	totalCount,
	pizzas,
	showMessage: false,
}

const counterSlice = createSlice({
	name: "pizza",
	initialState,
	reducers: {
		increment: (state) => {
			state.totalPrice = countState(state.pizzas)
			state.totalCount++
		},
		decrement: (state, { payload }) => {
			state.totalCount--
			state.pizzas[payload[0]].find((item) => {
				if (isEqual(payload[1], item)) {
					item.amount--
					if (item.amount <= 0) {
						remove(state.pizzas[payload[0]], (deletedItem) => deletedItem === item)
					}
				}
			})
			let prices = []
			for (let pizza in state.pizzas) {
				prices.push(
					state.pizzas[pizza].reduce((prev, current) => {
						if (!prev.price) {
							return prev + current.price * current.amount
						}
						return prev.price * prev.amount + current.price * current.amount
					}, 0)
				)
			}
			state.totalPrice = prices.reduce((prev, current) => prev + current, 0)
		},
		addPiza: (state, { payload }) => {
			const { id, name, type, size, img, price, showMessage } = payload
			if (!state.pizzas[id]) {
				state.pizzas[id] = []
			}
			const check = state.pizzas[id].every((item) => {
				const obj1 = {
					name,
					type,
					size,
					img,
					price,
				}
				const currentObj = {
					name: item.name,
					type: item.type,
					size: item.size,
					img: item.img,
					price: item.price,
				}
				if (isEqual(obj1, currentObj)) {
					item.amount++
					return false
				}
				return true
			})
			if (check) {
				state.pizzas[id].push({
					name,
					type,
					size,
					img,
					price,
					amount: 1,
				})
			}
			window.localStorage.setItem("pizzaSlicer", JSON.stringify(state.pizzas))
			state.showMessage = showMessage
		},
		deleteCartItem: (state, { payload }) => {
			remove(
				state.pizzas[payload.id],
				(item) => item.name === payload.name && item.size === payload.size && item.type === payload.type
			)
			state.totalPrice -= payload.amount * payload.price
			state.totalCount -= payload.amount
			window.localStorage.setItem("pizzaSlicer", JSON.stringify(state.pizzas))
		},
		deleteCart: (state) => {
			state.pizzas = {}
			state.totalPrice = 0
			state.totalCount = 0
			window.localStorage.setItem("pizzaSlicer", JSON.stringify({}))
		},
		showMessage: (state, { payload }) => {
			state.showMessage = payload
		},
	},
})
export const { increment, addPiza, showMessage, decrement, deleteCartItem, deleteCart } = counterSlice.actions
export default counterSlice.reducer

function countState(pizzas) {
	let prices = []
	for (let pizza in pizzas) {
		prices.push(
			pizzas[pizza].reduce((prev, current) => {
				if (!prev.price) {
					return prev + current.price * current.amount
				}
				return prev.price * prev.amount + current.price * current.amount
			}, 0)
		)
	}
	return prices.reduce((prev, current) => prev + current, 0)
}

function getStateFromLocalStorage() {
	const pizzas = JSON.parse(window.localStorage.getItem("pizzaSlicer")) || null
	if (pizzas === null) {
		return {
			pizzas: [],
			totalCount: 0,
			totalPrice: 0,
		}
	}
	const totalPrice = countState(pizzas)
	const totalCount = Object.values(pizzas).reduce((prev, current) => {
		return (
			prev +
			current.reduce((previtem, currentItem) => {
				return previtem + currentItem.amount
			}, 0)
		)
	}, 0)
	return {
		pizzas,
		totalCount,
		totalPrice,
	}
}

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	sortBy: {
		_sort: "popularity",
		_order: "desc",
	},
	category: "All",
}
const sortSlicer = createSlice({
	name: "sort",
	initialState,
	reducers: {
		sortBy: (state, { payload }) => {
			state.sortBy = payload
		},
		category: (state, { payload }) => {
			state.category = payload
		},
	},
})
export const { sortBy, category } = sortSlicer.actions
export default sortSlicer.reducer

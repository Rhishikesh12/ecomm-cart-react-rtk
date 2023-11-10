/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart", // Provide a string name here
	initialState: [],
	reducers: {
		add(state, action) {
			state.push(action.payload);
		},
		remove(state, action) {
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer; // Corrected typo from 'reducers' to 'reducer'

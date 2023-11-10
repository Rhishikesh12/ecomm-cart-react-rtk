import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./cartSlice";

export const store = configureStore({
	reducer: {
		cart: createReducer,
	},
});

import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice"
import productSlice from './productSlice';
import cartSlice from "./CartSlice"
export const store = configureStore({
    reducer: {
        categories: CategorySlice,
        products: productSlice,
        carts: cartSlice
    },
})
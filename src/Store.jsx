import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/cartSlice.jsx'; // Adjust the path as per your project structure

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;

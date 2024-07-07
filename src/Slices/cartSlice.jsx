import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem(state, action) {
            // Check if the item already exists in the cart
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If the item exists, increase the quantity
                existingItem.quantity += 1;
            } else {
                // If the item does not exist, add it to the cart with quantity 1
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        updateQuantity(state, action) {
            const { id, delta } = action.payload;
            const itemToUpdate = state.items.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.quantity = Math.max(itemToUpdate.quantity + delta, 1);
            }
        },
        removeItem(state, action) {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
        }
    }
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

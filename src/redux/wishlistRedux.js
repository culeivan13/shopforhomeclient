import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wish",
    initialState: {
        products: [],
        quantity: 0,
    },
    reducers: {
        addWish: (state, action) => {
            if (state.products.some(product => product._id === action.payload._id)) {
                console.log("exists");
            } else {
                state.quantity += 1;
                state.products.push(action.payload);
            }
        },
        removeWish: (state, action) => {
            state.products.forEach((product, index) => {
                if (product._id === action.payload.id) {
                    state.products.splice(index, 1);
                    state.quantity -= 1;
                }
            });
        },
        resetWish: (state) => {
            state.products = [];
            state.quantity = 0;
        }
    }
});

export const { addWish, removeWish, resetWish } = wishlistSlice.actions;
export default wishlistSlice.reducer;
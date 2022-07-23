import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.quantity * action.payload.price;
        },
        updateExistingProduct: (state, action) => {
            state.products.forEach(product => {
                if (product._id === action.payload.id) {
                    state.total -= product.quantity * product.price;
                    product.quantity += action.payload.quantity;
                    state.total += product.quantity * product.price;
                }
            });
        },
        resetCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    }
});

export const { addProduct, updateExistingProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
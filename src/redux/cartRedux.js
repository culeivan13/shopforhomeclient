import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        discountApplied: false,
        discount: 0,
        discountPercentage: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.quantity * action.payload.price;
            if (state.discountApplied) {
                state.discount = ((state.total * state.discountPercentage) / 100);
            }
        },
        updateExistingProduct: (state, action) => {
            state.products.forEach((product, index) => {
                if (product._id === action.payload.id) {
                    state.total -= product.quantity * product.price;
                    product.quantity += action.payload.quantity;
                    if (product.quantity < 1) {
                        state.products.splice(index, 1);
                        state.quantity -= 1;
                    } else {
                        state.total += product.quantity * product.price;
                    }
                    state.discount = ((state.total * state.discountPercentage) / 100);
                }
            });
        },
        resetCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
            state.discountApplied = false;
            state.discount = 0;
            state.discountPercentage = 0;
        },
        applyDiscount: (state, action) => {
            if (!state.discountApplied) {
                state.discountPercentage = action.payload.discount;
                state.discount = ((state.total * state.discountPercentage) / 100);
            }
            state.discountApplied = true;
        },
    }
});

export const { addProduct, updateExistingProduct, resetCart, applyDiscount } = cartSlice.actions;
export default cartSlice.reducer;
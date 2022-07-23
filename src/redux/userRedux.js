import { createSlice } from "@reduxjs/toolkit";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: user ? user : null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            localStorage.removeItem('user');
            state.currentUser = null;
            state.isFetching = false;
            state.error = false;
        }
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
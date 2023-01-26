import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: { value: null },
    reducers: {
        authReducer: (state, action) => {
            localStorage.setItem('profile', JSON.stringify(action.payload))
            state.value = action.payload;
        },
        logoutReducer: (state, action) => {
            localStorage.removeItem('profile');
            state.value = null;
        }
    }
})

export const { authReducer, logoutReducer } = authSlice.actions;

export default authSlice.reducer
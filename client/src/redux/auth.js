import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const authSlice = createSlice({
    name: 'auth',
    initialState: { value: initialState },
    reducers: {
        authReducer: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { authReducer } = authSlice.actions;

export default authSlice.reducer
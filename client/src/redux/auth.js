import { createSlice } from "@reduxjs/toolkit";
        
export const authSlice = createSlice({
    name: 'auth',
    initialState: { value: JSON.parse(localStorage.getItem('profile')) },
    reducers: {
        authReducer: (state, action) => {
            localStorage.clear();
            localStorage.setItem('profile', JSON.stringify(action.payload))
            state.value = action.payload;
        },
        logoutReducer: (state, action) => {
            localStorage.clear();
            state.value = null;
        }
    }
})

export const { authReducer, logoutReducer } = authSlice.actions;

export default authSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const postSlice = createSlice({
    name: 'post',
    initialState: { value: initialState },
    reducers: {
        Posts: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { Posts } = postSlice.actions;

export default postSlice.reducer;
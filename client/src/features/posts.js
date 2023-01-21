import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const postSlice = createSlice({
    name: 'post',
    initialState: { value: initialState },
    reducers: {
        setPosts: (state, action) => {
            state.value = action.payload
        },
        updatePost: (state, action) => {
            state.value = state.value.filter((post) => post._id === action.payload._id ? action.payload : post);
        },
        deletePost: (state, action) => {
            state.value = state.value.filter((post) => post._id !== action.payload)
        }
    }
})

export const { setPosts, updatePost, deletePost } = postSlice.actions;

export default postSlice.reducer;
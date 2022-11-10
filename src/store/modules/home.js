import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'home',
    initialState: {

    },
    reducer: {
        jjj: 123
    }
})

export const { jjj } = homeSlice.actions
export default homeSlice.reducer

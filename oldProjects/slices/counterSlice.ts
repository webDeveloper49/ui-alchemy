import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{count:0,step:5},
    reducers:{
        inc:(state)=>{
            state.count=state.count+state.step},
        dec:(state)=>{
            state.count=state.count-state.step},
        reset:(state)=>{
            state.count=0
        }
    }
})
export const {inc,dec,reset}=counterSlice.actions;
export default counterSlice.reducer;
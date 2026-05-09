import { createSlice } from "@reduxjs/toolkit";
export const cricketScoreSlice=createSlice({
    name:"cricketScore",
    initialState:{
        array:[0,1,2,3,4,6],
        addonwics:["wicket","CB"],
        addonscores:["wide","NB"],
        score:0,
        wicket:0,
        display:""
    },
    reducers:{
        updateScore:(state,action)=>{
            console.log("updateScore of store called");
            console.log(action.payload);
            state.score=state.score+action.payload
            state.display=state.display+action.payload+","
        },
        updateWickets:(state,action)=>{ 
            state.wicket++
            state.display=state.display+action.payload+", "
        },
        updateAddon:(state,action)=>{
            state.score++;
            state.display=state.display+action.payload+", "//payload index
        }
    }
})
export const {updateScore,updateWickets,updateAddon}=cricketScoreSlice.actions;
export default cricketScoreSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
const bgcolorSlice=createSlice({
    name :"mycolor",
    initialStale:{
    bgcolor:"yellow",
    },

    reducers:{
        colorChange:(state)=>{
            state.bgclr="green";
        }
    }
})
export const {colorChange}= bgcolorSlice.actions;
export default bgcolorSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
const bgcolorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"pink"
    },
    reducers:{
        colorChange:(state, action)=>{
            // console.log(action);
            // console .log(action.payLaod);
            state.bgcolor=action.payload;
        }
    }
})
export const {colorChange}=bgcolorSlice.actions;    
export default bgcolorSlice.reducer;      
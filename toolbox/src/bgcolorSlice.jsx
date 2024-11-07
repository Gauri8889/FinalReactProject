import { createSlice } from "@reduxjs/toolkit";
const bgcolorSlice=createSlice(
    {
        name:"myclr",
        initialState:{
            bgclr:"green",
        },
        reducers:{
            colorChange:(state)=>{
                state.bgclr="red";
            }
        }

    }
)
export const {colorChange}=bgcolorSlice.actions;
export default bgcolorSlice.reducer;
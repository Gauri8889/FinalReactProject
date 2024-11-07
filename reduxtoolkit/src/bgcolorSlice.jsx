import { createSlice } from "@reduxjs/toolkit";


const bgcolorSlice=createSlice(
    {
        name:"mycolor",
        initialState:{
            bgcolor:"pink"
        },
        reducers:{
            coloChange:(state, action)=>{
                //console.log(action)
                //console.log(action.payload)

                state.bgcolor=action.payload;
            }
        }
    }
)
export const {coloChange}=bgcolorSlice.actions;
export default bgcolorSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./bgcolorSlice"
const Store=configureStore(
    {
        reducer:
        {
          myclr:colorReducer
        }
    }
)

export default Store;
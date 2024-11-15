import { configureStore } from "@reduxjs/toolkit"
import myReducer from "./ColorSlice"
import myReducer1 from "./counterSlice"
const Store=configureStore({
    reducer:{
        //your reduse
mycolor:myReducer,
mycounter:myReducer1

    }
})
export default Store;
import { configureStore } from "@reduxjs/toolkit";
import changeReducer from "/.bgcolorSlice";

const store= configureStore({
    
 reducer: {
    mycolor:changeReducer
 }

})
export default store;
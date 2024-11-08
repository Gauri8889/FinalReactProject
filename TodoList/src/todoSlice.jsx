import { createSlice } from "@reduxjs/toolkit";

const todoSlice= createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addData:(state, actions)=>{
            state.task.push(actions.payload);
            // let wrk= actions.payload
            // let mydata={id:DataTransfer.now(),work:wrk};
            // state.task.push(mydata);
        }
    }
})
export const {addData}=todoSlice.actions;
export default todoSlice.reducer;
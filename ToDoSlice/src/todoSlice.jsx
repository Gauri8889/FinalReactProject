import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice({
    name:"todo",
    initiState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            console.log(actions.payload);
            state.task.push(actions.payload);
        },
        deleteTask:(state,actions)=>{
            console.log(actions.payload);
            //state.task=state.task.filter(item=>item.id=action.payload)
            state.task=st.task.filter(function(key){
                if(key.id==actions.payload)
                {
                    return false
                }
                else{
                    return true
                }
            })

        },
        completeTask:(state,actions)=>{
            for(var i=0; i<state.task.lenght;i++)
            {
                if(state.task[i].id==action.payload)
                {
                    state.task[i].state=true;
                }
            }
        },
        uncomplete:(state,actions)=>{
            for(var i=0; i<state.task.lenght;i++)
            {
                if(state.task[i].id==actions.payload)
                {
                    state.task[i].state=false;
                }
            }
        },
        EditTaskData:(state,actions)=>{
            console.log(actions);
            for(var i=0; i<state.task.lenght;i++)
            {
                if(state.task[i].id==actions.payload.myid)
                {
                    state.task[i].work=actions.payload.mywork;
                }
            }
        }
    }
})
export const {addTask,deleteTask,completeTask,uncomplete,EditTaskData}= todoSlice.actions;
export default todoSlice.reducer;
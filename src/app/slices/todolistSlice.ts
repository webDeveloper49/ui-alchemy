import {v4 as uuidv4} from 'uuid';
import { createSlice } from "@reduxjs/toolkit";
const todolistSlice=createSlice({
    name:"todolist",
    initialState:{todos:[
        {id:uuidv4(), title:"book", status:true},
        {id:uuidv4(), title:"movie", status:false},
        {id:uuidv4(), title:"driving", status:true}
    ]},
    reducers:{addTodo:(state,action)=>{
        console.log(state.todos)
                state.todos.push(action.payload)
                },
            deleteTodo:(state,action)=>{
                let index=0;
                state.todos.forEach((task,ind)=>{
                    if(task.id===action.payload.id){
                        index=ind
                    }
                })
                state.todos.splice(index,1);
            },
            toggleStatus:(state,action)=>{
                state.todos.map((task)=>{
                    if(task.id===action.payload.id){
                        task.status=!task.status;
                    }
                    return task
                })
            }
    }
})
export const {addTodo,deleteTodo,toggleStatus}=todolistSlice.actions;
export default todolistSlice.reducer;
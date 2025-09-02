import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./status";

export const fetchTasks = createAsyncThunk('task/fetchTasks', async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data.slice(0, 10);
});


const taskSlice = createSlice({
    name:'task',
    initialState: {
        status: IDLE,
        tasks: [],
    },
    //imer
    reducers:{
        addTaks: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state,action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTask: (state,action) =>{
            const task = state.tasks.find(task => task.id === action.payload);
            if(task){
                task.completed = !task.completed;
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending,(state,action) =>{
                console.log("pending",action)
                state.status = LOADING;
            })
            .addCase(fetchTasks.fulfilled, (state,action) =>{
                console.log("fulfilled",action)
                state.tasks = action.payload;
                state.status = SUCCEEDED;
            })
            .addCase(fetchTasks.rejected, (state,action) =>{
                console.log("rejected",action)
                state.status = FAILED;
            })
    }
});

export const {addTaks,removeTask,toggleTask} = taskSlice.actions;
const { reducer: tasksReducer } = taskSlice;
export default tasksReducer;
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../../state/stasks.slice";

const store = configureStore({
    reducer:{
        tasks:tasksReducer,
    }
});

export default store;
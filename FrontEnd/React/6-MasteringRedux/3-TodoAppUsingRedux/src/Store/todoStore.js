import {configureStore} from "@reduxjs/toolkit"
import todoSlice from "../Slice/todoSlice"

export const todoStore = configureStore({
    devTools:false,
    reducer:{
        todos: todoSlice
    }
})

console.log(todoStore)
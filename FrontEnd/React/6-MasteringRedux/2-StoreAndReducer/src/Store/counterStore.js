import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../Slices/counterSlice"

export const store = configureStore({
    reducer:{
        counter: counterSlice
    }
})

console.log(store.getState());
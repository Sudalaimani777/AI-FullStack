import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../Slice/customerSlice";

export const customerStore = configureStore({
    //The reducer is the function that will be called when an action is dispatched. It will receive the current state and the action as arguments, and it should return the new state.
    reducer: {
        customer: customerReducer
    }
});
console.log(customerStore);
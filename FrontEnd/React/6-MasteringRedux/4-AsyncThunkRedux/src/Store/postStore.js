import { configureStore } from "@reduxjs/toolkit"
import postReducer from "../Slice/postSlice";

export const postStore = configureStore({
    reducer: {
        posts: postReducer
    }
})
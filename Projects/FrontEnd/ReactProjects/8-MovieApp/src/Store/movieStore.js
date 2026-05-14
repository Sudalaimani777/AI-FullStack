import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "../Slices/movieSlice";

export const movieStore = configureStore({
    reducer: {
        movies: movieReducer
    }
})
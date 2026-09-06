import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    movies: [],
    searchedMovie: ""
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setSearchedMovies: (state, action) => {
            state.searchedMovie = action.payload
        }
    }
})

export const { setMovies, setSearchedMovies } = movieSlice.actions;

export default movieSlice.reducer;
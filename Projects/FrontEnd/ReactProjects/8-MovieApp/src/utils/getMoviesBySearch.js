export const getMoviesBySearch = (moviesArr, searchedValue) => {
    const filterdMovies = searchedValue?.length > 0 ? (moviesArr?.length > 0 && moviesArr.filter(movie => movie.original_title.toLowerCase().includes(searchedValue.toLowerCase()))) : moviesArr;
    return filterdMovies;
}
import { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar"
import { getMovies } from "../../api/movies";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { Grid, Box } from "@mui/material";
import { getMoviesBySearch } from "../../utils/getMoviesBySearch";

const Home = () => {

    const dispatch = useDispatch();
    const { movies, searchedMovie } = useSelector(state => state.movies);
    console.log(movies)

    const filterdMovies = getMoviesBySearch(movies, searchedMovie);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <>
            <header>
                <Navbar />
            </header>
            {/*Movie Cards Wrapper */}
            <main>
                <Box sx={{ flexGrow: 1, marginTop: 2 }}>
                    <Grid container spacing={2}>
                        {
                            filterdMovies?.length > 0 ? (
                                filterdMovies.map(movies => <MovieCard key={movies.id} movies={movies} />)
                            ) :
                                (
                                    <p>No movies found.</p>
                                )
                        }
                    </Grid>
                </Box>
            </main>
        </>
    )
}

export default Home
import { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar"
import { getMovies } from "../../api/movies";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { Grid, Box } from "@mui/material";

const Home = () => {

    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.movies);
    console.log(movies)

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
                            movies?.length > 0 ? (
                                movies.map(movies => <MovieCard key={movies.id} movies={movies} />)
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
import { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar"
import {getMovies} from "../../api/movies";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const Home = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);
    console.log(movies)

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <>
            <header>
                <Navbar />
            </header>
        </>
    )
}

export default Home
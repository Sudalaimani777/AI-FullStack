import { useEffect, useState } from "react";
import { options } from "../Utils/Options";


const useFetch = (apiPath, queryTerm) => {

    const [movieData, setMovieData] = useState([]);
    const MOVIE_URL = `https://api.themoviedb.org/3/${apiPath}`

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(MOVIE_URL, options);
                const data = await response.json();
                // console.log(data);
                setMovieData(data.results ? data.results : null);
            } catch (err) {
                console.log("Error in Fetch data", err);
            }
        }
        fetchMovies();
    }, [MOVIE_URL]);

    return {
        movieData
    }


}

export default useFetch;
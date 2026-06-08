import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { options } from "../Utils/Options";



const MovieDetails = () => {

  const params = useParams();
  const { id } = params

  const [movieDetails, setMovieDetails] = useState({});
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}`

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(MOVIE_URL, options);
        const data = await response.json();
        setMovieDetails(data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchMovie();
  }, [MOVIE_URL])

  console.log(movieDetails);

  return (
    <>
      <section>
        
      </section>
    </>
  )
}

export default MovieDetails
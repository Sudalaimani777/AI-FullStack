import MovieCard from "../Components/MovieCard";
import useFetch from "../Hooks/useFetch"

const MovieList = ({ apiPath }) => {
  // console.log(apiPath)
  const { movieData } = useFetch(apiPath)
  // console.log(movieData);

  return (
    <>
      <main>
        <section className="max-w-6xl mx-auto py-6">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              movieData?.map(movie => (
                <MovieCard
                  key={movie.id}
                  movieData={movie}
                />
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default MovieList
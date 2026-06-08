import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { options } from "../Utils/Options";



const MovieDetails = () => {

  const params = useParams();
  const { id } = params

  const [movieDetails, setMovieDetails] = useState({});
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}`

  const posterUrl = movieDetails?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
    : "https://placehold.co/600x900/111827/f9fafb?text=No+Poster";

  const backdropUrl = movieDetails?.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`
    : "https://placehold.co/1280x720/0f172a/e2e8f0?text=No+Backdrop";

  const releaseYear = movieDetails?.release_date
    ? new Date(movieDetails.release_date).getFullYear()
    : "TBA";

  const rating = movieDetails?.vote_average
    ? movieDetails.vote_average.toFixed(1)
    : "N/A";

  const runtime = movieDetails?.runtime
    ? `${movieDetails.runtime} min`
    : "TBA";

  const language = movieDetails?.original_language
    ? movieDetails.original_language.toUpperCase()
    : "NA";

  const genres = Array.isArray(movieDetails?.genres) ? movieDetails.genres : [];
  const productionCompanies = Array.isArray(movieDetails?.production_companies)
    ? movieDetails.production_companies
    : [];

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

  if (!movieDetails?.id) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="h-6 w-36 animate-pulse rounded-full bg-white/10" />
            <div className="mt-6 h-10 w-4/5 animate-pulse rounded-2xl bg-white/10" />
            <div className="mt-4 h-4 w-full animate-pulse rounded-full bg-white/10" />
            <div className="mt-3 h-4 w-11/12 animate-pulse rounded-full bg-white/10" />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="h-24 animate-pulse rounded-2xl bg-white/10" />
              <div className="h-24 animate-pulse rounded-2xl bg-white/10" />
              <div className="h-24 animate-pulse rounded-2xl bg-white/10" />
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={backdropUrl}
            alt={movieDetails.title}
            className="h-full w-full object-cover opacity-20 blur-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
            <aside className="lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
                <img
                  src={posterUrl}
                  alt={movieDetails.title}
                  className="aspect-[2/3] w-full object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Year</div>
                  <div className="mt-2 text-lg font-semibold text-white">{releaseYear}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Rating</div>
                  <div className="mt-2 text-lg font-semibold text-white">{rating}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Runtime</div>
                  <div className="mt-2 text-lg font-semibold text-white">{runtime}</div>
                </div>
              </div>
            </aside>

            <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl backdrop-blur sm:p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-amber-300">
                  {movieDetails.status}
                </span>
                <span>{language}</span>
                {movieDetails.adult && (
                  <span className="rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-1 text-rose-300">
                    18+
                  </span>
                )}
              </div>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-300">
                    Movie Details
                  </p>
                  <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {movieDetails.title}
                  </h1>
                  {movieDetails.tagline && (
                    <p className="mt-3 max-w-3xl text-base italic text-slate-300 sm:text-lg">
                      {movieDetails.tagline}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200">
                    {movieDetails.original_title}
                  </span>
                  <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200">
                    {movieDetails.origin_country?.[0] || "NA"}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-slate-400">Popularity</div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {Math.round(movieDetails.popularity)}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-slate-400">Vote Count</div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {movieDetails.vote_count}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-slate-400">Budget</div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {movieDetails.budget?.toLocaleString() || "N/A"}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-slate-400">Revenue</div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {movieDetails.revenue?.toLocaleString() || "N/A"}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)]">
                <div>
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">Overview</h2>
                  <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
                    {movieDetails.overview || "Overview is not available for this movie yet."}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-slate-400">Homepage</div>
                    {movieDetails.homepage ? (
                      <a
                        href={movieDetails.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 block break-all text-sm font-medium text-sky-300 hover:text-sky-200"
                      >
                        Visit official site
                      </a>
                    ) : (
                      <div className="mt-2 text-sm text-slate-200">Not available</div>
                    )}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-slate-400">Production</div>
                    <div className="mt-2 space-y-2">
                      {productionCompanies.length > 0 ? (
                        productionCompanies.slice(0, 4).map((company) => (
                          <div key={company.id} className="text-sm text-slate-200">
                            {company.name}
                          </div>
                        ))
                      ) : (
                        <div className="text-sm text-slate-200">No production data</div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-slate-400">Languages</div>
                    <div className="mt-2 text-sm text-slate-200">
                      {(movieDetails.spoken_languages || []).length > 0
                        ? movieDetails.spoken_languages.map((item) => item.english_name || item.name).join(", ")
                        : "No language data"}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MovieDetails
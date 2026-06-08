import {useNavigate} from "react-router-dom"
const MovieCard = ({ movieData }) => {
    const {
        id,
        title,
        poster_path,
        overview,
        release_date,
        vote_average,
        original_language,
        adult,
        popularity,
    } = movieData;


    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/movie/${id}`)
    }

    const posterUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : "https://placehold.co/600x900/1f2937/f9fafb?text=No+Poster";

    const releaseYear = release_date ? new Date(release_date).getFullYear() : "TBA";
    const rating = vote_average ? vote_average.toFixed(1) : "N/A";
    const language = original_language ? original_language.toUpperCase() : "NA";

    return (
        <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
                <img
                    src={posterUrl}
                    alt={title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                    <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {language}
                    </span>
                    <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                        Rating {rating}
                    </span>
                </div>

                {adult && (
                    <div className="absolute bottom-3 left-3">
                        <span className="rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">
                            18+
                        </span>
                    </div>
                )}
            </div>

            <div className="flex min-h-70 flex-col p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                    <h2 className="line-clamp-2 text-xl font-semibold tracking-tight text-slate-900">
                        {title}
                    </h2>
                    <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {releaseYear}
                    </span>
                </div>

                <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">
                        Popularity {Math.round(popularity)}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                        {adult ? "Adults Only" : "General"}
                    </span>
                </div>

                <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                    {overview || "Overview is not available for this movie yet."}
                </p>

                <div className="mt-auto pt-5">
                    <button 
                        className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 cursor-pointer"
                        onClick={handleNavigate}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </article>
    );
};

export default MovieCard;

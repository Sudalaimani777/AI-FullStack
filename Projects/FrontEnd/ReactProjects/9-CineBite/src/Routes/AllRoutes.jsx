import { MovieDetails, MovieList, PageNotFound, Search } from "../Pages";
import { Routes, Route } from "react-router-dom";



const AllRoutes = () => {

    const allPages = [
        { path: "/", element: <MovieList apiPath="movie/now_playing" /> },
        { path: "movie/:id", element: <MovieDetails /> },
        { path: "movie/popular", element: <MovieList apiPath="movie/popular" /> },
        { path: "movie/top", element: <MovieList apiPath="movie/top_rated" /> },
        { path: "movie/upcoming", element: <MovieList apiPath="movie/upcoming" /> },
        { path: "search", element: <Search /> },
        { path: "*", element: <PageNotFound /> },
    ]

    return (
        <>
            <Routes>
                {
                    allPages.map(pages => (
                        <Route
                            path={pages.path}
                            element={pages.element}
                            key={pages.path}
                        />
                    ))
                }
            </Routes>
        </>
    )
}

export default AllRoutes
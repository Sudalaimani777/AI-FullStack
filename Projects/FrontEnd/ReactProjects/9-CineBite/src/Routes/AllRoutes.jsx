import { MovieDetails, MovieList, PageNotFound, Search } from "../Pages";
import {Routes, Route} from "react-router-dom";



const AllRoutes = () => {

    const allPages = [
        {path:"/", element:<MovieList/>},
        {path:"movie/:id", element:<MovieDetails/>},
        {path:"movie/popular", element:<MovieList/>},
        {path:"movie/top", element:<MovieList/>},
        {path:"movie/upcoming", element:<MovieList/>},
        {path:"search", element:<Search/>},
        {path:"*", element:<PageNotFound/>},
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
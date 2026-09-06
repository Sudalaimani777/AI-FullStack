import axios from "axios";
import { setMovies } from "../Slices/movieSlice";

export const getMovies = () => async dispatch => {
    const url =
        "https://jsonfakery.com/movies/paginated";
    try {
        const {data} = await axios.get(url);
        dispatch(setMovies(data.data))
    } catch (err) {
        return err
    }
};

//The acrion creator and the thunk function are used to fetch the movies from the API and dispatch the setMovies action to update the state in the Redux store. The getMovies function is called in the Home component using useEffect to fetch the movies when the component mounts.
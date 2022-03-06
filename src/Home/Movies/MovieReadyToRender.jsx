import {useSelector} from "react-redux";
import MovieShow from "./MovieShow";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {GetImdbMovieData} from "../../Redux/MovieSlice";
import Choice from "../../Chose/Choice";
import {MoviePreloaded} from "./MoviePreloaded";



const MovieReadyToRender = () => {


    const status = useSelector(state => state.MovieSlice.status)
    const AsyncResultSearch = useSelector(state => state.SearchSlice.AsyncResultSearch)

    const dispatch = useDispatch()
    // console.log(status)
    // console.log(MovieIds)
    let Rendering ;

    if (status === 'pending')
    {
        Rendering = <MoviePreloaded/>
    }
    else if (status === 'success')
    {
        Rendering = <MovieShow/>
    }
    else if (status === 'reject')
    {
        Rendering = <h1>Not Found !!</h1>
    }

    useEffect(()=>{

        status === 'idle' && dispatch(GetImdbMovieData(AsyncResultSearch))

    } , [dispatch , status , AsyncResultSearch])


    return (
        <>
            <Choice/>
            {Rendering}
        </>
    );
};

export default MovieReadyToRender;
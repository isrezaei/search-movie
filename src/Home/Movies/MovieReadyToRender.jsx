import {useSelector} from "react-redux";
import MovieShow from "./MovieShow";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {GetImdbMovieData} from "../../Redux/MovieSlice";
import TextSearchValue from "../../TextSearchValue/TextSearchValue";
import {Preloaded} from "../../PreLoaded/Preloaded";



const MovieReadyToRender = () => {


    const status = useSelector(state => state.MovieSlice.status)

    const dispatch = useDispatch()
    // console.log(status)
    // console.log(MovieIds)
    let Rendering ;

    if (status === 'pending')
    {
        Rendering = <Preloaded/>
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

        status === 'idle' && dispatch(GetImdbMovieData())

    } , [dispatch , status ])


    return (
        <>
            {Rendering}
        </>
    );
};

export default MovieReadyToRender;
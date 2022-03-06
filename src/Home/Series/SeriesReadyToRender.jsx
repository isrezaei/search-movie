import {useDispatch, useSelector} from "react-redux";
import SeriesShow from "./SeriesShow";
import {useEffect} from "react";
import {GetImdbSeriesData} from "../../Redux/SeriesSlice";
import Choice from "../../Chose/Choice";
import {MoviePreloaded} from "../Movies/MoviePreloaded";


const SeriesReadyToRender = () => {

    const status = useSelector(state => state.SeriesSlice.status)
    const AsyncResultSearch = useSelector(state => state.SearchSlice.AsyncResultSearch)
    const dispatch = useDispatch()
    // console.log(status)
    // console.log(MovieIds)
    let Rendering ;

    if (status === 'pending')
    {
        Rendering =  <MoviePreloaded/>
    }
    else if (status === 'success')
    {
        Rendering = <SeriesShow/>
    }
    else if (status === 'reject')
    {
        Rendering = <h1>Not Found !!</h1>
    }

    useEffect(()=>{

        status === 'idle' && dispatch(GetImdbSeriesData(AsyncResultSearch))

    } , [dispatch , status])


    return (
        <>
            <Choice/>
            {Rendering}
        </>
    );
};


export default SeriesReadyToRender;
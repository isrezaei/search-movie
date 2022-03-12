import {useDispatch, useSelector} from "react-redux";
import SeriesShow from "./SeriesShow";
import {useEffect} from "react";
import {GetImdbSeriesData} from "../../Redux/SeriesSlice";
import TextSearchValue from "../../TextSearchValue/TextSearchValue";
import {Preloaded} from "../../PreLoaded/Preloaded";


const SeriesReadyToRender = () => {

    const status = useSelector(state => state.SeriesSlice.status)
    const dispatch = useDispatch()
    // console.log(status)
    // console.log(MovieIds)
    let Rendering ;

    if (status === 'pending')
    {
        Rendering =  <Preloaded/>
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

        status === 'idle' && dispatch(GetImdbSeriesData())

    } , [dispatch , status])


    return (
        <>
            <TextSearchValue/>
            {Rendering}
        </>
    );
};


export default SeriesReadyToRender;
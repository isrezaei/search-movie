import {useDispatch, useSelector} from "react-redux";
import SeriesShow from "./SeriesShow";
import {useEffect} from "react";
import {GetImdbSeriesData} from "../../Redux/SeriesSlice";
import Choice from "../../Chose/Choice";


const SeriesReadyToRender = () => {

    const status = useSelector(state => state.SeriesSlice.status)

    const dispatch = useDispatch()
    // console.log(status)
    // console.log(MovieIds)
    let Rendering ;

    if (status === 'pending')
    {
        Rendering =  <h1>Loading ...</h1>
    }
    else if (status === 'success')
    {
        Rendering = <SeriesShow/>
    }

    useEffect(()=>{

        status === 'idle' && dispatch(GetImdbSeriesData())

    } , [dispatch , status])


    return (
        <>
            <Choice/>
            {Rendering}
        </>
    );
};


export default SeriesReadyToRender;
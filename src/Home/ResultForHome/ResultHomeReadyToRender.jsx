import {useSelector} from "react-redux";
import ResultHomeShow from "./ResultHomeShow";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {GetImdbMovieData} from "../../Redux/ResultFirstRenderSlice";
import {Preloaded} from "../../PreLoaded/Preloaded";
import TopSectionMovieSeries from "../../TopSections/TopSectionMovieSeries";
import TopSectionHome from "../../TopSections/TopSectionHome";
import {HomeStyle} from "../ResultStyled/ResultStyled";



const ResultHomeReadyToRender = () => {


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
        Rendering = <ResultHomeShow/>
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
            <TopSectionHome/>
            {Rendering}
        </>
    );
};

export default ResultHomeReadyToRender;
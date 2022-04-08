import {useSelector} from "react-redux";
import ResultHomeShow from "./ResultHomeShow";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {GetImdbMovieData} from "../../Redux/ResultFirstRenderSlice";
import {Preloaded} from "../../PreLoaded/Preloaded";
import {UpperSlider , UnderSlider} from "../../Upper&UnderHomeSlider/UpperUnderHomeSlider";
import TopSectionHome from "../../TopSections/TopSectionHomeSlider/SliderHome";
import PreloadedMobile from "../../PreLoaded/PreloadedMobile";

const ResultHomeReadyToRender = () => {


    const status = useSelector(state => state.ResultFirstRenderSlice.status)

    const dispatch = useDispatch()
    // console.log(status)
    // console.log(MovieIds)
    let Rendering ;

    if (status === 'pending')
    {
        Rendering = <>
            <Preloaded/>
            <PreloadedMobile/>
        </>
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
            <UpperSlider/>
            <TopSectionHome/>
            <UnderSlider/>
            {Rendering}
        </>
    );
};

export default ResultHomeReadyToRender;
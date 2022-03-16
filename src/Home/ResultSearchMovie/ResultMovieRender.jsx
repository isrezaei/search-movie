import {useSelector} from "react-redux";
import ResultMovieShow from "./ResultMovieShow";
import {Preloaded} from "../../PreLoaded/Preloaded";
import TopSectionMovieSeries from "../../TopSections/TopSectionMovieSeries/TopSectionMovieSeries";
import PleaseSearchSomething from "../PleaseSearchSomething/PleaseSearchSomething";


const ResultMovieRender = () => {

    const Status = useSelector(state => state.ResultSearchSlice.status)

    let Render ;

    if (Status ==='idle')
    {
        Render = <PleaseSearchSomething/>
    }
    else if (Status === 'pending')
    {
        Render = <Preloaded/>
    }
    else if (Status === 'success')
    {
        Render = <ResultMovieShow/>
    }
    else if (Status === 'reject')
    {
        Render = <h1>Error</h1>
    }



    return (

        <>
            {Status === 'success' && <TopSectionMovieSeries/>}
            {Render}
        </>

    );
};

export default ResultMovieRender;
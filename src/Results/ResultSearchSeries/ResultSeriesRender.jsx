import {useSelector} from "react-redux";
import {Preloaded} from "../../PreLoaded/Preloaded";
import ResultSeriesShow from "./ResultSeriesShow";
import TopSectionMovieSeries from "../../TopSections/TopSectionMovieSeries/TopSectionMovieSeries";
import PleaseSearchSomething from "../PleaseSearchSomething/PleaseSearchSomething";
import ResultNotFound from "../ResultNotFound/ResultNotFound";

const ResultSeriesRender = () => {

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
        Render = <ResultSeriesShow/>
    }
    else if (Status === 'reject')
    {
        Render = <ResultNotFound/>
    }



    return (

        <>
            {Status === 'success' && <TopSectionMovieSeries/>}
            {Render}
        </>

    );
};

export default ResultSeriesRender;
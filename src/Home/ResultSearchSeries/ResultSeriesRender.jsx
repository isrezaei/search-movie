import {useSelector} from "react-redux";
import {Preloaded} from "../../PreLoaded/Preloaded";
import ResultSeriesShow from "./ResultSeriesShow";

const ResultSeriesRender = () => {

    const Status = useSelector(state => state.ResultSearchSlice.status)

    let Render ;

    if (Status ==='idle')
    {
        Render = <h1>Please search movie or series</h1>
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
        Render = <h1>Error</h1>
    }



    return (

        <>
            {Render}
        </>

    );
};

export default ResultSeriesRender;
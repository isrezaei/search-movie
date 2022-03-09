import {useSelector} from "react-redux";
import {selectResultSearchIds , selectAllResultSearch} from "../../Redux/ResultSearchSlice";
import ResultSearchMovieShow from "./ResultSearchMovieShow";
import {Preloaded} from "../../PreLoaded/Preloaded";

const ResultSearchReadyToRender = () => {



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
        Render = <ResultSearchMovieShow/>
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

export default ResultSearchReadyToRender;
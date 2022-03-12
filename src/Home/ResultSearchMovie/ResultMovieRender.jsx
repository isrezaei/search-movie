import {useSelector} from "react-redux";
import ResultMovieShow from "./ResultMovieShow";
import {Preloaded} from "../../PreLoaded/Preloaded";
import TextSearchValue from "../../TextSearchValue/TextSearchValue";


const ResultMovieRender = () => {

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
        Render = <ResultMovieShow/>
    }
    else if (Status === 'reject')
    {
        Render = <h1>Error</h1>
    }



    return (

        <>
            {Status === 'success' && <TextSearchValue/>}
            {Render}
        </>

    );
};

export default ResultMovieRender;
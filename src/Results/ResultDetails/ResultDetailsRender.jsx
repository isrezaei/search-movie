import {useDispatch, useSelector} from "react-redux";
import ResultDetailsShow from "./ResultDetailsShow";
import {useEffect} from "react";
import {CleanDetails, fetchDetails} from "../../Redux/DetailsSlice";
import {useParams} from "react-router-dom";
import PreLoadedDetails from "../../PreLoaded/PreLoadedDetails";
import NotFound404 from "../../NotFound/NotFound404";

const ResultDetailsRender = () => {

    const DetailsData = useSelector(state => state.DetailsSlice.details)
    const Status = useSelector(state => state.DetailsSlice.status)

    const {imdbID} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchDetails(imdbID))
        //Clean Up Details Object
        return ()=> dispatch(CleanDetails())
    } , [dispatch , imdbID])


    let Render ;

        if (Status === 'pending')
        {
            Render = <PreLoadedDetails/>
        }
        else if (Status === 'success')
        {
            Render = <ResultDetailsShow DetailsData={DetailsData} />
        }
        else if (Status === 'reject')
        {
            Render = <NotFound404/>
        }

    return (
        <div>
            {Render}
        </div>
    );
};

export default ResultDetailsRender;
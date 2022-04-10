import {useDispatch, useSelector} from "react-redux";
import ResultDetailsShow from "./ResultDetailsShow";
import {useLayoutEffect} from "react";
import {CleanDetails, fetchDetails} from "../../Redux/DetailsSlice";
import {useParams} from "react-router-dom";

const ResultDetailsRender = () => {

    const DetailsData = useSelector(state => state.DetailsSlice.details)
    const Status = useSelector(state => state.DetailsSlice.status)

    let Render ;


    const {imdbID} = useParams()
    const dispatch = useDispatch()




    useLayoutEffect(()=>{
        dispatch(fetchDetails(imdbID))
        //Clean Up Details Object
        return ()=> dispatch(CleanDetails())
    } , [dispatch])





    if (Status === 'pending')
    {
        Render = <h1>Loading ...</h1>
    }
    else if (Status === 'success')
    {
        Render = <ResultDetailsShow DetailsData={DetailsData} />
    }
    else if (Status === 'reject')
    {
        Render = <h1>Errors</h1>
    }

    console.log(Status)

    return (
        <div>
            {Render}
        </div>
    );
};

export default ResultDetailsRender;
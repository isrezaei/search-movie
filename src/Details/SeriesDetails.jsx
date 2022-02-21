import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GetImdbSeriesDetails} from "../Redux/SeriesSlice";
import {CleanSeriesDetails} from "../Redux/SeriesSlice";

const SeriesDetails = () => {

    const {imdbID} = useParams()

    const SeriesDetails = useSelector(state => state.SeriesSlice.details)
    const dispatch = useDispatch()

    const ShowDetails = Object.keys(SeriesDetails).length !== 0


    console.log(SeriesDetails)


    const {Actors , Awards , Country , Director , Genre , Language , Plot , Poster , Rated , Ratings , Released , Runtime , Title , Type , Writer , Year , imdbRating , imdbVotes} = SeriesDetails


    useEffect(()=>{


        dispatch(GetImdbSeriesDetails(imdbID))

        //Clean Up Series Details Object
        return ()=> dispatch(CleanSeriesDetails())

    } , [dispatch])

    return (
        <div>
            <img src={Poster} alt={Title}/>
            <h1>{Title}</h1>
            <h3>{Plot}</h3>
            <h4>{Actors}</h4>
            <h4>{Director}</h4>
            <h4>{Writer}</h4>
        </div>
    );
};

export default SeriesDetails;
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetails , CleanDetails} from "../Redux/DetailsSlice";
import {useLayoutEffect} from "react";

const Details = () => {

    const {imdbID} = useParams()
    const Details = useSelector(state => state.DetailsSlice.details)
    const dispatch = useDispatch()




    console.log(Details)


    const {Actors , Awards , Country , Director , Genre , Language , Plot , Poster , Rated , Ratings , Released , Runtime , Title , Type , Writer , Year , imdbRating , imdbVotes} = Details


    useLayoutEffect(()=>{

        dispatch(fetchDetails(imdbID))

        //Clean Up Details Object
        return ()=> dispatch(CleanDetails())

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

export default Details;
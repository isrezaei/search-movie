import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GetImdbMovieDetails} from "../Redux/MovieSlice";
import {CleanMovieDetails} from "../Redux/MovieSlice";
import {useLayoutEffect} from "react";

const Details = () => {

    const {imdbID} = useParams()
    const MovieDetails = useSelector(state => state.MovieSlice.details)
    const dispatch = useDispatch()

    const ShowDetails = Object.keys(MovieDetails).length !== 0


    console.log(MovieDetails)


    const {Actors , Awards , Country , Director , Genre , Language , Plot , Poster , Rated , Ratings , Released , Runtime , Title , Type , Writer , Year , imdbRating , imdbVotes} = MovieDetails


    useLayoutEffect(()=>{

        dispatch(GetImdbMovieDetails(imdbID))

        //Clean Up MovieDetails Object
        return ()=> dispatch(CleanMovieDetails())

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
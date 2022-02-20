import {useSelector} from "react-redux";
import {selectMovieIds} from "../Redux/ImdbSlice";
import MovieCard from "./MovieCard";
import './MovieCard.scss'

const MovieShow = () => {

    const MovieIds = useSelector(selectMovieIds)
    const MovieShow = MovieIds.map(ids => <MovieCard key={ids} ids={ids}/>)




    return (
        <>
            <h1>Movie</h1>

            <div className='home'>
                {MovieShow}
            </div>
        </>
    );
};

export default MovieShow;
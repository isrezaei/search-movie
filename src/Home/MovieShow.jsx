import {useSelector} from "react-redux";
import {selectMovieIds} from "../Redux/ImdbSlice";
import MovieCard from "./MovieCard";
import './MovieCard.scss'

const MovieShow = () => {

    const MovieIds = useSelector(selectMovieIds)
    const MovieShow = MovieIds.map(ids => <MovieCard key={ids} ids={ids}/>)




    return (


            <div>

                <div className='select_type'>
                    <section>Movie</section>
                    <section>Series</section>
                </div>

                <div className='show_movie'>{MovieShow}</div>

            </div>

    );
};

export default MovieShow;
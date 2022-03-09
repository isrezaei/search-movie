import {useSelector} from "react-redux";
import {selectMovieIds} from "../../Redux/MovieSlice";
import MovieCard from "./MovieCard";
import '../NativeStyle/NativeStyle.scss'



const MovieShow = () => {
    const MovieIds = useSelector(selectMovieIds)

    const MovieShow = MovieIds.map(ids => <MovieCard key={ids} ids={ids}/>)

    return (

            <div className='show_movie'>
                {MovieShow}
            </div>

    );
};

export default MovieShow;
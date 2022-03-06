import {useSelector} from "react-redux";
import {selectMovieIds} from "../../Redux/MovieSlice";
import MovieCard from "./MovieCard";
import '../NativeStyle/NativeStyle.scss'
import Skeleton ,{SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


const MovieShow = () => {

    const MovieIds = useSelector(selectMovieIds)
    const status = useSelector(state => state.MovieSlice.status)

    console.log(status)




    const MovieShow = MovieIds.map(ids => <MovieCard key={ids} ids={ids}/>)




    return (
        <div className='show_movie'>

            {MovieShow}

        </div>
    );
};

export default MovieShow;
import {useSelector} from "react-redux";
import {selectMovieIds} from "../../Redux/MovieSlice";
import MovieCard from "./MovieCard";
import {GridDisplay} from "../ResultStyled/ResultStyled";



const MovieShow = () => {
    const MovieIds = useSelector(selectMovieIds)

    const MovieShow = MovieIds.map(ids => <MovieCard key={ids} ids={ids}/>)

    return (

            <GridDisplay>
                {MovieShow}
            </GridDisplay>

    );
};

export default MovieShow;
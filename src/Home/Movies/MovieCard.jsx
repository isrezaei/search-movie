import {useSelector} from "react-redux";
import {selectMovieByIds} from "../../Redux/MovieSlice";
import {Link} from "react-router-dom";

const MovieCard = ({ids}) => {

    const MovieData = useSelector(state => selectMovieByIds(state , ids))

    const {Poster , Title , Type , Year , imdbID} = MovieData


    return (
        <Link to={`/MovieDetails/${imdbID}`} style={{textDecoration : 'none'}}>
            <div className='cards'>
                <img className='image' src={Poster} alt={Title}/>
                <div className='year'>{Year}</div>
                <div className='title'>{Title}</div>
            </div>
        </Link>

    );
};

export default MovieCard;
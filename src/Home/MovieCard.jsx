import {useSelector} from "react-redux";
import {selectMovieByIds} from "../Redux/ImdbSlice";
import {Link} from "react-router-dom";

const MovieCard = ({ids}) => {

    const MovieData = useSelector(state => selectMovieByIds(state , ids))

    const {Poster , Title , Type , Year , imdbID} = MovieData


    return (
        <Link to={`details/${imdbID}`}>
            <div className='cards'>
                <img className='image' src={Poster} alt={Title}/>
                <div className='title'>{Title}</div>
                <div className='year'>{Year}</div>
            </div>
        </Link>

    );
};

export default MovieCard;
import {useSelector} from "react-redux";
import {selectMovieByIds} from "../../Redux/MovieSlice";
import {Link} from "react-router-dom";
import NoImageAvailable from '../../NoImageAvailable.svg'
import {Animated} from "react-animated-css";

const MovieCard = ({ids}) => {

    const MovieData = useSelector(state => selectMovieByIds(state , ids))

    const {Poster , Title , Type , Year , imdbID} = MovieData


    return (
        <Link to={`/Details/${imdbID}`} style={{textDecoration : 'none'}}>
            <Animated animationIn='bounceIn'>
            <div className='cards'>
                <img className='image' src={Poster === 'N/A' ? NoImageAvailable : Poster} alt={Title}/>
                <div className='year'>{Year}</div>
                <div className='title'>{Title}</div>
            </div>
            </Animated>
        </Link>

    );
};

export default MovieCard;
import {Link} from "react-router-dom";
import {Animated} from "react-animated-css";
import NoImageAvailable from "../../NoImageAvailable.svg";

const ResultSearchMovieCard = ({MovieData}) => {
    const {Poster , Title , Type , Year , imdbID} = MovieData


    console.log(MovieData)

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

export default ResultSearchMovieCard;
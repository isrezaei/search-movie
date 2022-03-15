import {Link} from "react-router-dom";
import {Animated} from "react-animated-css";
import NoImageAvailable from "../../NoImageAvailable.svg";
import {CardImage, CardParent, CardTitle, CardYear} from "../MainStyled/MainStyled";

const ResultMovieCard = ({MovieData}) => {

    const {Poster , Title , Year , imdbID} = MovieData

    return (

        <Link to={`/Details/${imdbID}`} style={{textDecoration : 'none'}}>
            <Animated animationIn='bounceIn'>
                <CardParent>
                    <CardImage src={Poster === 'N/A' ? NoImageAvailable : Poster} alt={Title}/>
                    <CardYear>{Year}</CardYear>
                    <CardTitle>{Title}</CardTitle>
                </CardParent>
            </Animated>
        </Link>


    );
};

export default ResultMovieCard;
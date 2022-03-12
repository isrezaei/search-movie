import {useSelector} from "react-redux";
import {selectMovieByIds} from "../../Redux/ResultFirstRenderSlice";
import {Link} from "react-router-dom";
import NoImageAvailable from '../../NoImageAvailable.svg'
import {Animated} from "react-animated-css";
import {CardParent, CardImage, CardYear, CardTitle, CardType} from "../ResultStyled/ResultStyled";


const ResultHomeCard = ({ids}) => {

    const MovieData = useSelector(state => selectMovieByIds(state , ids))

    const {Poster , Title , Type , Year , imdbID} = MovieData


    return (
        <Link to={`/Details/${imdbID}`} style={{textDecoration : 'none'}}>
            <Animated animationIn='bounceIn'>

            <CardParent>
                <CardType>{Type}</CardType>
                <CardImage src={Poster === 'N/A' ? NoImageAvailable : Poster} alt={Title}/>
                <CardYear>{Year}</CardYear>
                <CardTitle>{Title}</CardTitle>
            </CardParent>

            </Animated>
        </Link>

    );
};

export default ResultHomeCard;
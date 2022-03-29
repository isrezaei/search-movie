import {useSelector , useDispatch} from "react-redux";
import {selectMovieByIds} from "../../Redux/ResultFirstRenderSlice";
import {Link} from "react-router-dom";
import NoImageAvailable from '../../NoImageAvailable.svg'
import {Animated} from "react-animated-css";
import {RiHeart3Fill , RiHeart3Line} from 'react-icons/ri'
import {AddFavorite , RemoveFavorite} from "../../Redux/FavoriteSlice";
import 'react-toastify/dist/ReactToastify.css';
import {
    CardParent,
    CardImage,
    CardYear,
    CardTitle,
    CardType,
    Card_Title_Favorites,
    CardFavorites
} from "../ResultComponentsStyled/ResultComponentsStyle";
import {useState} from "react";
import {toast} from "react-toastify";


const ResultHomeCard = ({ids}) => {

    const MovieData = useSelector(state => selectMovieByIds(state , ids))
    const dispatch = useDispatch()
    const [isFavorite , SetFavorite] = useState(false)
    const {Poster , Title , Type , Year , imdbID} = MovieData


    const AddF = () =>
    {
        dispatch(AddFavorite({imdbID , Type , Year , Title , Poster}))
        SetFavorite(true)
        AddNotify()
    }

    const DeleteF = () =>
    {
        dispatch(RemoveFavorite({imdbID , Type , Year , Title , Poster}))
        SetFavorite(false)
        RemoveNotify()
    }

    const AddNotify = () => toast.success(`" ${Title} "  Added to your favorites list`, {
        position: "top-center",
        autoClose: 3000,
    });

    const RemoveNotify = () => toast.error(`" ${Title} "  Removed to your favorites list`, {
        position: "top-center",
        autoClose: 3000,
    });
    return (

            <Animated animationIn='bounceIn'>
            <CardParent>
                <Link to={`/Details/${imdbID}`}>
                <CardType>{Type}</CardType>
                    <CardImage src={Poster === 'N/A' ? NoImageAvailable : Poster} alt={Title}/>
                <CardYear>{Year}</CardYear>
                </Link>
                <Card_Title_Favorites>
                    <CardTitle>{Title}</CardTitle>
                    <CardFavorites isFavorite={isFavorite}>
                        {isFavorite ? <RiHeart3Fill onClick={DeleteF}/> : <RiHeart3Line onClick={AddF}/>}
                    </CardFavorites>
                </Card_Title_Favorites>
            </CardParent>
            </Animated>


    );
};

export default ResultHomeCard;
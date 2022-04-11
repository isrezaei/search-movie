import {useSelector , useDispatch} from "react-redux";
import {selectMovieByIds} from "../../Redux/ResultFirstRenderSlice";
import {Link} from "react-router-dom";
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
    CardTitleFavorites,
    CardFavorites
} from "../ResultStyled/ResultStyle";
import {toast} from "react-toastify";
import {selectFavoriteById} from "../../Redux/FavoriteSlice";


const ResultHomeCard = ({ids}) => {



    const MovieData = useSelector(state => selectMovieByIds(state , ids))
    const MovieFavorite = useSelector(state => selectFavoriteById(state , ids))
    const dispatch = useDispatch()

    const {Poster , Title , Type , Year , imdbID} = MovieData

    const isFavorite = MovieFavorite && MovieFavorite.favorite


    const AddNotify = () => toast.success(`" ${Title} " Added to your favorites list`, {
        position: "top-center",
        autoClose: 1000,
    });

    const RemoveNotify = () => toast.error(`" ${Title} " Removed to your favorites list`, {
        position: "top-center",
        autoClose: 1000,
    });


    const AddFavoriteOnList = () =>
    {
        dispatch(AddFavorite({imdbID , Type , Year , Title , Poster , favorite : true }))
        AddNotify()
    }

    const DeleteFavoriteOnList = () =>
    {
        dispatch(RemoveFavorite({imdbID , Type , Year , Title , Poster , favorite : false}))
        RemoveNotify()
    }



    return (

            <Animated animationIn='bounceIn'>
            <CardParent>
                <Link to={`/details/${imdbID}`}>
                <CardType>{Type}</CardType>
                    <CardImage src={Poster === 'N/A' ? 'https://user-images.githubusercontent.com/77073972/162730581-cb29a828-6101-4fa0-bd2e-c57c7d7ed811.svg' : Poster} alt={Title}/>
                <CardYear>{Year}</CardYear>
                </Link>
                <CardTitleFavorites>
                    <CardTitle>{Title}</CardTitle>
                    <CardFavorites isFavorite={isFavorite}>
                        {isFavorite ? <RiHeart3Fill onClick={DeleteFavoriteOnList}/> : <RiHeart3Line onClick={AddFavoriteOnList}/>}
                    </CardFavorites>
                </CardTitleFavorites>
            </CardParent>
            </Animated>


    );
};

export default ResultHomeCard;
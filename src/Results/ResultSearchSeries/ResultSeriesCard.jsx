import {Link} from "react-router-dom";
import {Animated} from "react-animated-css";
import {
    CardFavorites,
    CardImage,
    CardParent,
    CardTitle,
    CardTitleFavorites,
    CardYear
} from "../ResultStyled/ResultStyle";
import {toast} from "react-toastify";
import {AddFavorite, RemoveFavorite, selectFavoriteById} from "../../Redux/FavoriteSlice";
import {useDispatch, useSelector} from "react-redux";
import {RiHeart3Fill, RiHeart3Line} from "react-icons/ri";

const ResultSeriesCard = ({SeriesData}) => {


    const {Poster , Title, Year ,Type , imdbID} = SeriesData

    const MovieFavorite = useSelector(state => selectFavoriteById(state , imdbID))

    const dispatch = useDispatch()

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
        dispatch(AddFavorite({imdbID , Type , Year , Title , Poster , favorite : true ,}))
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

export default ResultSeriesCard;
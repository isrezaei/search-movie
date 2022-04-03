import {useSelector} from "react-redux";
import {selectFavoriteById} from "../../Redux/FavoriteSlice";
import {FavoriteInfo, FavoriteSection, FavoriteImage} from "../ResultComponentsStyled/ResultComponentsStyle";
import {RiDeleteBin2Fill} from 'react-icons/ri'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {RemoveFavorite} from "../../Redux/FavoriteSlice";
import {toast} from "react-toastify";

const ResultFavoriteShow = ({ids}) => {


    const FavoriteItems = useSelector(state => selectFavoriteById(state , ids))


    const {imdbID, Type, Year, Title, Poster} = FavoriteItems

    const dispatch = useDispatch()

    const RemoveNotify = () => toast.error(`" ${Title} " Removed to your favorites list`, {
        position: "top-center",
        autoClose: 3000,
    });

    const DeleteFavorite = () => {
        dispatch(RemoveFavorite({imdbID}))
        RemoveNotify()
    }

    return (
        <FavoriteSection>

            <FavoriteImage src={Poster} />

            <FavoriteInfo>
                <div className='FavoriteTitle'><p>{Title}</p></div>
                <div className='FavoriteName'><p>{Year}</p></div>
                <div className='FavoriteType'><p>{Type}</p></div>
                <div className='FavoriteDetails'> <Link to={`/details/${imdbID}`}><p>Details</p></Link></div>
                <div className='FavoriteRemove'><RiDeleteBin2Fill onClick={DeleteFavorite}/></div>
            </FavoriteInfo>

        </FavoriteSection>
    );
};

export default ResultFavoriteShow;
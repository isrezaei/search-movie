import {useSelector} from "react-redux";
import {selectFavoriteById} from "../../Redux/FavoriteSlice";
import {FavoriteInfo, FavoriteSection, FavoriteImage} from "../ResultComponentsStyled/ResultComponentsStyle";
import {RiDeleteBin2Fill} from 'react-icons/ri'

const ResultFavoriteShow = ({ids}) => {


    const FavoriteItems = useSelector(state => selectFavoriteById(state , ids))

    const {imdbID, Type, Year, Title, Poster, favorite} = FavoriteItems

    return (
        <FavoriteSection>

            <FavoriteImage src={Poster} />

            <FavoriteInfo>
                <div className='FavoriteTitle'><p>{Title}</p></div>
                <div className='FavoriteName'><p>{Year}</p></div>
                <div className='FavoriteType'><p>{Type}</p></div>
                <div className='FavoriteDetails'><p>Details</p></div>
                <div className='FavoriteRemove'><RiDeleteBin2Fill/></div>
            </FavoriteInfo>

        </FavoriteSection>
    );
};

export default ResultFavoriteShow;
import {useSelector} from "react-redux";
import {selectFavoriteById} from "../../Redux/FavoriteSlice";
import {FavoriteInfo, FavoriteSection, FavoriteImage} from "../ResultComponentsStyled/ResultComponentsStyle";
import {MdOutlineDeleteOutline} from 'react-icons/md'
import {useDispatch} from "react-redux";
import {RemoveFavorite} from "../../Redux/FavoriteSlice";
import {toast} from "react-toastify";

const ResultFavoriteShow = ({ids}) => {

    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)
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

    let FavoriteDarkBg = [
        isDarkMood ?"315deg, #a40606 0%, #d98324 74%" : '315deg, #eec0c6 0%, #7ee8fa 74%',
        isDarkMood ?"315deg, #0cbaba 0%, #380036 74%" : '315deg, #fad0c4 0%, #f1a7f1 74%',
        isDarkMood ?"315deg, #7f5a83 0%, #0d324d 74%" : '315deg, #f9d29d 0%, #ffd8cb 74%',
        isDarkMood ?"315deg, #63d471 0%, #233329 74%" : '315deg, #ffcfdf 0%, #b0f3f1 74%',
        isDarkMood ?"315deg, #3f0d12 0%, #a71d31 74%" : '315deg, #bbf0f3 0%, #f6d285 74%',
        isDarkMood ?"315deg, #ffa69e 0%, #5d4954 74%" : '315deg, #deebdd 0%, #bbdbbe 74%',
        isDarkMood ?"316deg, #310e68 0%, #5f0f40 74%" : '315deg, #fde7f9 0%, #aacaef 74%',
        isDarkMood ?"147deg, #e0455f 0%, #44000b 74%" : '315deg, #fdf86d 0%, #bddcf1 74%'
    ]
    let RandomIndexBg = FavoriteDarkBg[Math.floor(Math.random() * FavoriteDarkBg.length)]


    return (
        <FavoriteSection FavoriteRandomBg = {RandomIndexBg}>

            <FavoriteImage src={Poster} />

            <FavoriteInfo>

                <div className='FavoriteParent'>

                    <div className='TitleAdnYear'>
                        <p>{Title}</p>
                        <p>{Year}</p>
                    </div>

                    <div className='FavoriteTypeAndDelete'>
                        <div className='FavoriteType'>{Type}</div>
                        <div className='FavoriteRemove'><MdOutlineDeleteOutline onClick={DeleteFavorite}/></div>
                    </div>
                </div>

            </FavoriteInfo>

        </FavoriteSection>
    );
};

export default ResultFavoriteShow;
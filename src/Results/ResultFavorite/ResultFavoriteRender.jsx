import {useSelector} from "react-redux";
import {selectFavoriteId} from "../../Redux/FavoriteSlice";
import ResultFavoriteShow from "./ResultFavoriteShow";

const ResultFavoriteRender = () => {

    const FavoriteIds = useSelector(selectFavoriteId)

    const RenderFavorite = FavoriteIds.map(ids => <ResultFavoriteShow key={ids} ids={ids}/>)

    const FavoriteLenght = FavoriteIds.length

    return (
        <div>
            {FavoriteLenght ? RenderFavorite : <h1>your Favorite list is empty</h1>}
        </div>
    );
};

export default ResultFavoriteRender;
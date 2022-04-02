import {useSelector} from "react-redux";
import {selectFavoriteId} from "../../Redux/FavoriteSlice";
import ResultFavoriteShow from "./ResultFavoriteShow";
import {FavoriteParent} from "../ResultComponentsStyled/ResultComponentsStyle";


const ResultFavoriteRender = () => {

    const FavoriteIds = useSelector(selectFavoriteId)

    const RenderFavorite = FavoriteIds.map(ids => <ResultFavoriteShow key={ids} ids={ids}/>)

    const FavoriteLength = FavoriteIds.length

    return (
        <FavoriteParent>
            {FavoriteLength ? RenderFavorite : <h1>your Favorite list is empty</h1>}
        </FavoriteParent>
    );
};

export default ResultFavoriteRender;
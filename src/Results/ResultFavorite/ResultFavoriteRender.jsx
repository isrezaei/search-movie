import {useSelector} from "react-redux";
import {selectFavoriteId} from "../../Redux/FavoriteSlice";
import ResultFavoriteShow from "./ResultFavoriteShow";
import {FavoriteParent} from "../ResultComponentsStyled/ResultComponentsStyle";
import {Animated} from "react-animated-css";
import {MdOutlinePlaylistAdd} from "react-icons/md";
import {FavoriteList , FavoriteIcon} from "../ResultComponentsStyled/ResultComponentsStyle";


const ResultFavoriteRender = () => {

    const FavoriteIds = useSelector(selectFavoriteId)

    const RenderFavorite = FavoriteIds.map(ids => <ResultFavoriteShow key={ids} ids={ids}/>)

    const FavoriteLength = FavoriteIds.length

    return (
        <FavoriteParent>
            {FavoriteLength ?
                RenderFavorite :
                    <FavoriteList>
                        <Animated animationIn="tada">
                            <FavoriteIcon><MdOutlinePlaylistAdd/></FavoriteIcon>
                        </Animated>
                        <p>Your favorite list is empty <strong> Add something </strong></p>
                    </FavoriteList>
            }
        </FavoriteParent>
    );
};

export default ResultFavoriteRender;
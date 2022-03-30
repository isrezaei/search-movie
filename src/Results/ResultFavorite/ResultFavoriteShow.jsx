import {useSelector} from "react-redux";
import {selectFavoriteById} from "../../Redux/FavoriteSlice";

const ResultFavoriteShow = ({ids}) => {


    const FavoriteItems = useSelector(state => selectFavoriteById(state , ids))

    const {imdbID, Type, Year, Title, Poster, favorite} = FavoriteItems

    return (
        <div style={{width : '80%' , display : 'flex' ,flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center'}}>

            <img src={Poster} style={{width : '25%'}}/>
            <h1>{Title}</h1>
            <h3>{Year}</h3>
            <h4>{Type}</h4>

        </div>
    );
};

export default ResultFavoriteShow;
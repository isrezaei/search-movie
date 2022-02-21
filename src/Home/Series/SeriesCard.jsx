import {useSelector} from "react-redux";
import {selectSeriesByIds} from "../../Redux/SeriesSlice";
import {Link} from "react-router-dom";

const SeriesCard = ({ids}) => {

    const SeriesData = useSelector(state => selectSeriesByIds(state , ids))


    const {Poster , Title , Type , Year , imdbID} = SeriesData


    return (
        <Link to={`/series/SeriesDetails/${imdbID}`} style={{textDecoration : 'none'}}>
            <div className='cards'>
                <img className='image' src={Poster} alt={Title}/>
                <div className='year'>{Year}</div>
                <div className='title'>{Title}</div>
            </div>
        </Link>

    );
};

export default SeriesCard;
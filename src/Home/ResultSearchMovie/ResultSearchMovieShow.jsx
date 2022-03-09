import {useSelector} from "react-redux";
import {selectAllResultSearch} from "../../Redux/ResultSearchSlice";
import ResultSearchMovieCard from "./ResultSearchMovieCard";


const ResultSearchMovieShow = () => {

    const FilterMovie = useSelector(selectAllResultSearch).filter(value => value.Type === 'movie')
    const ResultSearchMovie = FilterMovie.map(MovieData => <ResultSearchMovieCard key={MovieData.imdbID} MovieData={MovieData}/>)

    return (
        <div className='show_movie'>
            {ResultSearchMovie}
        </div>
    )
};

export default ResultSearchMovieShow;
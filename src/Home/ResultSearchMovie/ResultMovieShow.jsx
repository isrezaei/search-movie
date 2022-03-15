import {useSelector} from "react-redux";
import {selectAllResultSearch} from "../../Redux/ResultSearchSlice";
import ResultMovieCard from "./ResultMovieCard";
import {GridDisplay} from "../MainStyled/MainStyled";


const ResultMovieShow = () => {

    const FilterMovie = useSelector(selectAllResultSearch).filter(value => value.Type === 'movie')
    const ResultSearchMovie = FilterMovie.map(MovieData => <ResultMovieCard key={MovieData.imdbID} MovieData={MovieData}/>)

    return (
        <GridDisplay>
            {ResultSearchMovie}
        </GridDisplay>
    )
};

export default ResultMovieShow;
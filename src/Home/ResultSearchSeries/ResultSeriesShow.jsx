import {useSelector} from "react-redux";
import {selectAllResultSearch} from "../../Redux/ResultSearchSlice";
import ResultSeriesCard from "./ResultSeriesCard";

const ResultSeriesShow = () => {

    const FilterSeries = useSelector(selectAllResultSearch).filter(value => value.Type === 'series')
    const ResultSearchSeries = FilterSeries.map(SeriesData => <ResultSeriesCard key={SeriesData.imdbID} SeriesData={SeriesData}/>)


    return (
        <div className='show_movie'>
            {ResultSearchSeries}
        </div>
    );
};

export default ResultSeriesShow;
import {useSelector} from "react-redux";
import {selectAllResultSearch} from "../../Redux/ResultSearchSlice";
import ResultSeriesCard from "./ResultSeriesCard";
import {GridDisplay} from "../ResultStyled/ResultStyle";

const ResultSeriesShow = () => {

    const FilterSeries = useSelector(selectAllResultSearch).filter(value => value.Type === 'series')
    const ResultSearchSeries = FilterSeries.map(SeriesData => <ResultSeriesCard key={SeriesData.imdbID} SeriesData={SeriesData}/>)


    return (
        <GridDisplay>
            {ResultSearchSeries}
        </GridDisplay>
    );
};

export default ResultSeriesShow;
import {useSelector} from "react-redux";
import {selectSeriesIds} from "../../Redux/SeriesSlice";
import SeriesCard from "./SeriesCard";

const SeriesShow = () => {

    const SeriesIds = useSelector(selectSeriesIds)
    const SeriesShow = SeriesIds.map(ids => <SeriesCard key={ids} ids={ids}/>)

    return (
        <div className='show_movie'>{SeriesShow}</div>
    );
};

export default SeriesShow;